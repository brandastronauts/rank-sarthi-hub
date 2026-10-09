import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame } from "@/components/shell/PageFrame";
import { CouponBoard } from "@/components/offers/CouponBoard";
import { listPublicCouponsFn } from "@/content/offers/coupons.functions";
import { buildHead } from "@/lib/seo";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";

const URL_PATH = "/offers";
const TITLE = "Offers & Coupon Codes for JEE, NEET and NDA | Rank Sarthi";
const DESCRIPTION =
  "Current public coupon codes for JeeRankUp, NeetRankUp and NDARankUp in one place. Filter by platform, copy a code, or apply it in one step at checkout.";

const STEPS = [
  {
    title: "Pick a code",
    text: "Filter by platform, plan type or discount and choose the code that fits.",
  },
  {
    title: "Apply it",
    text: "“Apply” opens the platform with the code saved for 7 days. You can also copy it and enter it yourself.",
  },
  {
    title: "Sign up or log in",
    text: "Signed-in students go straight to Plans. Everyone else signs up or logs in first, then the code is added at checkout.",
  },
];

export const Route = createFileRoute("/offers")({
  loader: () => listPublicCouponsFn(),
  head: () =>
    buildHead({
      url: URL_PATH,
      title: TITLE,
      description: DESCRIPTION,
      ogType: "website",
      jsonLd: [
        collectionPageSchema({ url: URL_PATH, name: "Offers & Coupons", description: DESCRIPTION }),
        breadcrumbSchema(URL_PATH),
      ],
    }),
  component: OffersPage,
});

function OffersPage() {
  const feed = Route.useLoaderData();

  return (
    <PageFrame url={URL_PATH}>
      <header className="max-w-3xl">
        <p className="eyebrow text-accent">Offers &amp; coupons</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Coupon codes for JeeRankUp, NeetRankUp and NDARankUp
        </h1>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          Every public coupon the three RankUp platforms are running, in one place. Copy a code, or
          apply it in one step and it is added for you at checkout.
        </p>
      </header>

      <ol className="mt-8 grid gap-4 md:grid-cols-3">
        {STEPS.map((step, i) => (
          <li key={step.title} className="flex gap-4 rounded-xl border border-border bg-ivory p-5">
            <span
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground"
              aria-hidden
            >
              {i + 1}
            </span>
            <div>
              <h2 className="font-semibold text-primary">{step.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <CouponBoard feed={feed} />
      </div>

      <section
        aria-labelledby="coupon-terms"
        className="mt-12 max-w-3xl border-t border-border pt-8"
      >
        <h2 id="coupon-terms" className="text-lg font-bold text-primary">
          Good to know
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>
            Coupons are issued and honoured by each RankUp platform, which sets the plans, prices,
            eligibility and checkout. The final price is the one shown at checkout.
          </li>
          <li>
            A platform can pause or end a code at any time, and codes with limited uses can run out.
          </li>
          <li>
            Only public codes are listed. Institute codes and codes issued to individual students
            are not shown here.
          </li>
          <li>
            Questions about an offer?{" "}
            <Link to="/contact" className="font-semibold text-primary underline">
              Contact us
            </Link>
            .
          </li>
        </ul>
      </section>
    </PageFrame>
  );
}
