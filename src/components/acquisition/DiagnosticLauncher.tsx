import { useEffect, useState } from "react";
import { ArrowRight, GraduationCap, Shield, Stethoscope } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { buildRankUpHandoff, type DiagnosticExam } from "@/lib/acquisition";
import { emitAcquisitionEvent } from "@/lib/acquisition-analytics";

const exams = [
  { id: "jee", label: "JEE Main", detail: "Continue to JeeRankUp", icon: GraduationCap, accent: "text-jee" },
  { id: "neet", label: "NEET UG", detail: "Continue to NeetRankUp", icon: Stethoscope, accent: "text-neet" },
  { id: "nda", label: "NDA", detail: "Continue to NDARankUp", icon: Shield, accent: "text-nda" },
] as const;

export function DiagnosticLauncher({
  ctaLocation,
  className,
  label = "Start My Free Diagnostic",
}: {
  ctaLocation: string;
  className?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  const openChooser = () => {
    emitAcquisitionEvent("diagnostic_cta_click", {
      entry_path: window.location.pathname,
      cta: ctaLocation,
    });
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    emitAcquisitionEvent("exam_chooser_view", {
      entry_path: window.location.pathname,
      cta: ctaLocation,
    });
  }, [ctaLocation, open]);

  const handoff = (exam: DiagnosticExam) => {
    const href = buildRankUpHandoff({
      exam,
      search: window.location.search,
      entryPath: window.location.pathname,
      cta: ctaLocation,
    });
    const destinationOrigin = new URL(href).origin;
    const properties = {
      exam,
      entry_path: window.location.pathname,
      cta: ctaLocation,
      destination_origin: destinationOrigin,
    };
    emitAcquisitionEvent("exam_selected", properties);
    emitAcquisitionEvent("rankup_handoff", properties);
    window.location.assign(href);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button type="button" onClick={openChooser} className={className}>
        {label} <ArrowRight aria-hidden="true" />
      </Button>
      <DialogContent className="w-[calc(100%-2rem)] max-w-xl rounded-lg border-border p-5 sm:p-7">
        <DialogHeader>
          <DialogTitle className="pr-8 text-xl text-primary sm:text-2xl">Which exam are you preparing for?</DialogTitle>
          <DialogDescription>Choose your exam to continue to its dedicated RankUp diagnostic.</DialogDescription>
        </DialogHeader>
        <div className="mt-2 grid gap-3">
          {exams.map((exam) => {
            const Icon = exam.icon;
            return (
              <a
                key={exam.id}
                href={buildRankUpHandoff({ exam: exam.id, entryPath: "/", cta: ctaLocation })}
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
                  <span className="block text-xs font-normal text-muted-foreground">{exam.detail}</span>
                </span>
                <ArrowRight className="size-4 shrink-0 text-accent" aria-hidden="true" />
              </a>
            );
          })}
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground">
          You will continue on the selected RankUp product. No account is created on this page.
        </p>
      </DialogContent>
    </Dialog>
  );
}