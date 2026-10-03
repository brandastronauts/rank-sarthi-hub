import { useEffect, useState } from "react";
import { DiagnosticLauncher } from "./DiagnosticLauncher";
import { emitAcquisitionEvent } from "@/lib/acquisition-analytics";

export function HomepageAcquisition() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    emitAcquisitionEvent("homepage_view", { entry_path: window.location.pathname });
    const hero = document.getElementById("home");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setPastHero(!entry?.isIntersecting), { threshold: 0.08 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-2 shadow-elevated backdrop-blur-md transition-transform min-[900px]:hidden ${
        pastHero ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-md">
        <DiagnosticLauncher
          ctaLocation="mobile_sticky"
          className="min-h-11 w-full bg-accent font-bold text-accent-foreground hover:bg-red-hover"
        />
      </div>
    </div>
  );
}