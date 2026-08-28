#!/usr/bin/env python3
"""
Rank Sarthi — homepage regression guard.

The homepage is a protected route. Any build that touches T02/T05/T06 blocks,
global CSS or the page shell must re-run this guard before "build complete".

Checks
  1. GET / returns 200 and is server-rendered (not an empty shell).
  2. Every frozen T01 section (B01..B24 slot ids) mounts and has non-zero height.
  3. Blank-white-page guard: header + footer alone is a FAIL. The main content
     column must have real height and real text.
  4. Exactly one <h1>.
  5. Footer renders after the main body in DOM order.
  6. Header ecosystem links (JEE, NEET, NDA, Institutes, Resources, Blog) and
     the official logo image are present.
  7. No horizontal overflow at 1440 / 768 / 390 px; screenshots written to
     scripts/qa/screenshots/.
  8. No console errors.

Run:  python3 scripts/qa/homepage_guard.py [base_url]
Exit: 0 = pass, 1 = fail.
"""

import asyncio
import sys
from pathlib import Path

from playwright.async_api import async_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:8080"
SHOTS = Path(__file__).parent / "screenshots"
SHOTS.mkdir(parents=True, exist_ok=True)

# Frozen T01 recipe: B01 -> B24, in order. Slot ids come from
# src/content/recipes/home.ts and are the anchor ids rendered on the page.
REQUIRED_SECTIONS = [
    "home",             # B01 Hero
    "review-circle",    # B02
    "product",          # B03
    "educator-review",  # B04
    "idea",             # B05
    "platforms",        # B06
    "moment",           # B07
    "methodology",      # B08
    "depth",            # B09
    "numbers",          # B10
    "situations",       # B11
    "educator-thinking",# B12
    "parents",          # B13
    "voices",           # B14
    "nda",              # B15
    "people",           # B16
    "how",              # B17
    "institutes",       # B18
    "trust",            # B19
    "pricing",          # B21
    "brand-trust",      # B20
    "faq",              # B22
    "cta",              # B24
]

NAV_LABELS = ["JEE", "NEET", "NDA", "Institutes", "Resources", "Blog"]

failures: list[str] = []
notes: list[str] = []


def check(condition: bool, message: str) -> None:
    if condition:
        notes.append(f"PASS  {message}")
    else:
        failures.append(f"FAIL  {message}")


async def main() -> int:
    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1440, "height": 1800})
        page = await context.new_page()

        console_errors: list[str] = []
        page.on("console", lambda m: console_errors.append(m.text) if m.type == "error" else None)

        response = await page.goto(BASE + "/", wait_until="networkidle")
        check(response is not None and response.status == 200, "GET / returns 200")

        # 1. Server-rendered content, not an empty shell.
        html = await page.content()
        check(len(html) > 20000, f"server HTML is substantial ({len(html)} chars)")

        # 2 + 3. Sections mount with real height.
        for slot in REQUIRED_SECTIONS:
            box = await page.evaluate(
                """(id) => {
                    const el = document.getElementById(id);
                    if (!el) return null;
                    const r = el.getBoundingClientRect();
                    const s = getComputedStyle(el);
                    return {
                        h: r.height,
                        text: (el.innerText || '').trim().length,
                        hidden: s.display === 'none' || s.visibility === 'hidden' || Number(s.opacity) === 0,
                    };
                }""",
                slot,
            )
            check(box is not None, f"section #{slot} exists")
            if box:
                check(box["h"] > 40, f"section #{slot} has height ({round(box['h'])}px)")
                check(box["text"] > 10, f"section #{slot} has text")
                check(not box["hidden"], f"section #{slot} is visible")

        # 3. Blank-white-page guard: main must carry the content, not just chrome.
        main_state = await page.evaluate(
            """() => {
                const main = document.querySelector('main');
                if (!main) return null;
                return {
                    h: main.getBoundingClientRect().height,
                    text: (main.innerText || '').trim().length,
                    sections: main.querySelectorAll('section').length,
                };
            }"""
        )
        check(main_state is not None, "<main> exists")
        if main_state:
            check(main_state["h"] > 3000, f"main body height is real ({round(main_state['h'])}px)")
            check(main_state["text"] > 2000, f"main body has copy ({main_state['text']} chars)")
            check(main_state["sections"] >= 15, f"main renders block sections ({main_state['sections']})")

        # 4. Exactly one H1.
        h1s = await page.eval_on_selector_all("h1", "els => els.map(e => e.innerText.trim())")
        check(len(h1s) == 1, f"exactly one H1 (found {len(h1s)}: {h1s[:3]})")

        # 5. Footer after main.
        order_ok = await page.evaluate(
            """() => {
                const main = document.querySelector('main');
                const footer = document.querySelector('footer');
                if (!main || !footer) return false;
                return !!(main.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING);
            }"""
        )
        check(bool(order_ok), "footer renders after main content")

        # 6. Header ecosystem + logo.
        header_text = await page.eval_on_selector("header", "el => el.innerText")
        for label in NAV_LABELS:
            check(label.lower() in header_text.lower(), f"header exposes '{label}'")
        logo_ok = await page.evaluate(
            """() => {
                const img = document.querySelector('header img');
                return !!img && img.naturalWidth > 0;
            }"""
        )
        check(bool(logo_ok), "official header logo image loads")

        # 7. Responsive overflow + screenshots.
        for width in (1440, 768, 390):
            await page.set_viewport_size({"width": width, "height": 1800})
            await page.wait_for_timeout(400)
            overflow = await page.evaluate(
                "() => document.documentElement.scrollWidth - document.documentElement.clientWidth"
            )
            check(overflow <= 1, f"no horizontal overflow at {width}px (delta {overflow})")
            await page.screenshot(path=str(SHOTS / f"home-{width}.png"))

        # 8. Console.
        check(not console_errors, f"no console errors ({console_errors[:2]})")

        await browser.close()

    for line in notes:
        print(line)
    for line in failures:
        print(line)
    print(f"\n{len(notes)} passed, {len(failures)} failed. Screenshots: {SHOTS}")
    return 1 if failures else 0


sys.exit(asyncio.run(main()))
