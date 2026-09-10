import { registerBlocks } from "@/lib/recipe";

/* Marketing / brand blocks (B01–B24) */
import { Hero } from "@/components/Hero";
import { InstitutionStrip } from "@/components/InstitutionStrip";
import { ProductShowcase } from "@/components/ProductShowcase";
import { EducatorReview } from "@/components/EducatorReview";
import { DiagnosticIdea } from "@/components/DiagnosticIdea";
import { ExamTracks } from "@/components/ExamTracks";
import { AspirantMoment } from "@/components/AspirantMoment";
import { Methodology } from "@/components/Methodology";
import { ProductDepth } from "@/components/ProductDepth";
import { ProductNumbers } from "@/components/ProductNumbers";
import { Situations } from "@/components/Situations";
import { EducatorThinking } from "@/components/EducatorThinking";
import { ParentBand } from "@/components/ParentBand";
import { SocialProof } from "@/components/SocialProof";
import { NdaFlagship } from "@/components/NdaFlagship";
import { AuthorityPeople } from "@/components/AuthorityPeople";
import { HowItWorks } from "@/components/blocks/HowItWorks";
import { InstituteBand } from "@/components/blocks/InstituteBand";
import { TrustSignals } from "@/components/TrustSignals";
import { NewBrandTrust } from "@/components/NewBrandTrust";
import { PricingBlock } from "@/components/blocks/PricingBlock";
import { FaqBlock } from "@/components/blocks/FaqBlock";
import { FinalCta } from "@/components/blocks/FinalCta";

/* Academic document blocks (T05 / T06) */
import { DocumentMasthead } from "@/components/blocks/DocumentMasthead";
import { FreshnessPanel } from "@/components/blocks/FreshnessPanel";
import { ChangeLogBlock } from "@/components/blocks/ChangeLogBlock";
import { JumpNavBlock } from "@/components/blocks/JumpNavBlock";
import { DataTable } from "@/components/blocks/DataTable";
import { SyllabusExplorer } from "@/components/blocks/SyllabusExplorer";
import { TrendTable } from "@/components/blocks/TrendTable";
import { PriorityMap } from "@/components/blocks/PriorityMap";
import { FormulaSheet } from "@/components/blocks/FormulaSheet";
import { CommonMistakes } from "@/components/blocks/CommonMistakes";
import { DiagnosticCtaInline } from "@/components/blocks/DiagnosticCtaInline";
import { PyqBrowser } from "@/components/blocks/PyqBrowser";
import { PyqTrendAnalysis } from "@/components/blocks/PyqTrendAnalysis";
import { ConceptSections } from "@/components/blocks/ConceptSections";
import { RelatedRail } from "@/components/blocks/RelatedRail";
import { SourcesBox } from "@/components/blocks/SourcesBox";
import { SubjectChapterMap } from "@/components/blocks/SubjectChapterMap";
import { ResourceLibrary } from "@/components/blocks/ResourceLibrary";
import { LinkCardGrid } from "@/components/blocks/LinkCardGrid";
import { ToolBlock } from "@/components/blocks/ToolBlock";


/* Platform template blocks (B38–B43) */
import { PlatformMasthead } from "@/components/platform/PlatformMasthead";
import { PlatformIntro } from "@/components/platform/PlatformIntro";
import { PaperStructure } from "@/components/platform/PaperStructure";
import { DiagnosticLenses } from "@/components/platform/DiagnosticLenses";
import { SelectionPathway } from "@/components/platform/SelectionPathway";
import { PlatformLinks } from "@/components/platform/PlatformLinks";

/**
 * Design-system block registry.
 * B-numbers are the stable contract; the components behind them are
 * implementation. A recipe slot referencing an unregistered block is
 * skipped silently, so partially-built templates never render placeholders.
 *
 * IMPORTANT: registration is an explicit call, not a module side effect.
 * Route components are code-split, so a bare `import "@/blocks"` can be
 * evaluated in a different chunk than the component that renders the recipe
 * — which produced an empty registry and a blank page in production builds.
 * Every route calls `ensureBlocksRegistered()` before rendering a recipe.
 */
let registered = false;

export function ensureBlocksRegistered() {
  if (registered) return;
  registered = true;

  registerBlocks({
    B01: Hero,
    B23: JumpNavBlock,
    B25: DataTable,
    B44: SubjectChapterMap,
    B45: FreshnessPanel,
    B46: ChangeLogBlock,
    B47: ResourceLibrary,
    B48: LinkCardGrid,
    B49: ToolBlock,

    B26: SyllabusExplorer,
    B27: TrendTable,
    B28: PriorityMap,
    B29: FormulaSheet,
    B30: CommonMistakes,
    B31: DiagnosticCtaInline,
    B32: PyqBrowser,
    B33: PyqTrendAnalysis,
    B34: DocumentMasthead,
    B35: ConceptSections,
    B36: RelatedRail,
    B37: SourcesBox,
    B02: InstitutionStrip,
    B03: ProductShowcase,
    B04: EducatorReview,
    B05: DiagnosticIdea,
    B06: ExamTracks,
    B07: AspirantMoment,
    B08: Methodology,
    B09: ProductDepth,
    B10: ProductNumbers,
    B11: Situations,
    B12: EducatorThinking,
    B13: ParentBand,
    B14: SocialProof,
    B15: NdaFlagship,
    B16: AuthorityPeople,
    B17: HowItWorks,
    B18: InstituteBand,
    B19: TrustSignals,
    B20: NewBrandTrust,
    B21: PricingBlock,
    B22: FaqBlock,
    B24: FinalCta,

    B38: PlatformMasthead,
    B39: PlatformIntro,
    B40: PaperStructure,
    B41: DiagnosticLenses,
    B42: SelectionPathway,
    B43: PlatformLinks,
  });
}

// Register eagerly too, for any consumer that only imports for side effects.
ensureBlocksRegistered();

