import { useEffect, useState } from "react";
import { ArrowRight, GraduationCap, Stethoscope } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  buildRankUpHandoff,
  examForPath,
  isOnboardingOpen,
  NDA_RESOURCES_PATH,
  PRIMARY_CTA_LABEL,
  RANKUP_PATHS,
  type DiagnosticExam,
  type RankUpIntent,
} from "@/lib/acquisition";
import { emitAcquisitionEvent } from "@/lib/acquisition-analytics";

const exams = [
  { id: "jee", label: "JEE Main & Advanced", product: "JeeRankUp", icon: GraduationCap, accent: "text-jee" },
  { id: "neet", label: "NEET UG", product: "NeetRankUp", icon: Stethoscope, accent: "text-neet" },
] as const;
// NDARankUp is temporarily withheld from onboarding (see ONBOARDING_EXAMS).

const copy: Record<RankUpIntent, { title: string; description: string; detail: string; footnote: string }> = {
  start: {
    title: "Which exam are you preparing for?",
    description: "Choose your exam to sign up on its RankUp site and take the free diagnostic.",
    detail: "Sign up on",
    footnote: "You will continue on the selected RankUp product. No account is created on this page.",
  },
  login: {
    title: "Log in to your RankUp account",
    description: "Each exam has its own RankUp site. Choose the one you signed up on.",
    detail: "Log in to",
    footnote: "You will log in on the selected RankUp product. Rank Sarthi does not hold your account.",
  },
};

export function DiagnosticLauncher({
  ctaLocation,
  className,
  label,
  intent = "start",
  showArrow = intent === "start",
}: {
  ctaLocation: string;
  className?: string;
  label?: string;
  /** "start" lands on the RankUp signup page, "login" on its login page. */
  intent?: RankUpIntent;
  showArrow?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const text = copy[intent];
  const path = RANKUP_PATHS[intent];

  const openChooser = () => {
    emitAcquisitionEvent("diagnostic_cta_click", {
      entry_path: window.location.pathname,
      cta: ctaLocation,
      intent,
    });
    // Exam pages skip the chooser: JEE/NEET pages hand straight off to their
    // RankUp site; NDA pages send students to NDA resources while NDARankUp
    // onboarding is withheld. General pages open the chooser.
    const pageExam = examForPath(window.location.pathname);
    if (pageExam && isOnboardingOpen(pageExam)) return handoff(pageExam);
    if (pageExam === "nda" && intent === "start") return window.location.assign(NDA_RESOURCES_PATH);
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    emitAcquisitionEvent("exam_chooser_view", {
      entry_path: window.location.pathname,
      cta: ctaLocation,
      intent,
    });
  }, [ctaLocation, intent, open]);

  function handoff(exam: DiagnosticExam) {
    const href = buildRankUpHandoff({
      exam,
      search: window.location.search,
      entryPath: window.location.pathname,
      cta: ctaLocation,
      path,
    });
    const destinationOrigin = new URL(href).origin;
    const properties = {
      exam,
      entry_path: window.location.pathname,
      cta: ctaLocation,
      intent,
      destination_origin: destinationOrigin,
    };
    emitAcquisitionEvent("exam_selected", properties);
    emitAcquisitionEvent("rankup_handoff", properties);
    window.location.assign(href);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button type="button" onClick={openChooser} className={className}>
        {label ?? (intent === "login" ? "Log in" : PRIMARY_CTA_LABEL)}
        {showArrow && <ArrowRight aria-hidden="true" />}
      </Button>
      <DialogContent className="w-[calc(100%-2rem)] max-w-xl rounded-lg border-border p-5 sm:p-7">
        <DialogHeader>
          <DialogTitle className="pr-8 text-xl text-primary sm:text-2xl">{text.title}</DialogTitle>
          <DialogDescription>{text.description}</DialogDescription>
        </DialogHeader>
        <div className="mt-2 grid gap-3">
          {exams.map((exam) => {
            const Icon = exam.icon;
            return (
              <a
                key={exam.id}
                href={buildRankUpHandoff({ exam: exam.id, entryPath: "/", cta: ctaLocation, path })}
                onClick={(event) => {
                  event.preventDefault();
                  handoff(exam.id);
                }}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "grid h-auto min-h-16 grid-cols-[auto_minmax(0,1fr)_auto] justify-start gap-4 whitespace-normal px-4 py-3 text-left hover:bg-secondary hover:text-foreground",
                )}
              >
                <Icon className={`size-5 shrink-0 ${exam.accent}`} aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block font-bold text-primary">{exam.label}</span>
                  <span className="block text-xs font-normal text-muted-foreground">
                    {text.detail} {exam.product}
                  </span>
                </span>
                <ArrowRight className="size-4 shrink-0 text-accent" aria-hidden="true" />
              </a>
            );
          })}
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground">{text.footnote}</p>
      </DialogContent>
    </Dialog>
  );
}
