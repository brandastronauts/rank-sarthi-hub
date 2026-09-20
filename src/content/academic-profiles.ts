import type { AcademicProfile, AcademicSubject } from "./types";
import sachinPhoto from "@/assets/sachin-garg-senior-mathematics-faculty-rank-sarthi.webp.asset.json";
import gandharvaPhoto from "@/assets/gandharva-saxena-senior-physics-faculty-rank-sarthi.webp.asset.json";
import adarshPhoto from "@/assets/adarsh-kumar-senior-chemistry-faculty-rank-sarthi.webp.asset.json";
import ashwinPhoto from "@/assets/ashwin-m-senior-physics-faculty-rank-sarthi.webp.asset.json";
import ashutoshPhoto from "@/assets/ashutosh-pande-senior-mathematics-faculty-rank-sarthi.webp.asset.json";
import prabhatPhoto from "@/assets/prabhat-kumar-senior-chemistry-faculty-rank-sarthi.webp.asset.json";
import hardikPhoto from "@/assets/hardik-agrawal-physics-expert-rank-sarthi.webp.asset.json";

const partial = "PARTIALLY_VERIFIED" as const;

export const academicProfiles: AcademicProfile[] = [
  {
    id: "sachin-garg", slug: "sachin-garg", name: "Sachin Garg", title: "Senior Mathematics Faculty",
    subject: "Mathematics", role: "Senior Academic Contributor — Mathematics",
    shortProfile: "Sachin Garg is a Senior Mathematics Faculty member and academic contributor focused on building structured, progressively graded Mathematics learning resources. His contribution emphasises conceptual clarity, logical progression, analytical reasoning and systematic problem-solving, helping students move from foundational concepts toward increasingly advanced mathematical application and reasoning.",
    detailedProfile: [
      "Sachin Garg is a senior academic contributor in Mathematics whose work focuses on the development of a comprehensive, scientifically structured and progressively graded body of Mathematics content. His contribution supports Rank Sarthi’s objective of giving students a consistent and intellectually rigorous pathway towards mathematical understanding and mastery.",
      "His academic work centres on the creation, organisation, refinement and continuous improvement of Mathematics learning resources, with particular emphasis on conceptual clarity, logical progression, analytical reasoning and systematic problem-solving. The learning progression is designed to move from fundamental concepts and foundational skills to higher levels of application, reasoning and challenging problem-solving.",
      "As a senior contributor to the academic framework, Sachin brings subject depth and academic discipline to Mathematics content development, helping learners strengthen conceptual foundations, mathematical thinking, accuracy and confidence over time.",
    ],
    expertise: ["Mathematics", "Concept Development", "Analytical Reasoning", "Problem Solving", "Curriculum Structuring", "Progressively Graded Learning"],
    verificationStatus: partial, photo: sachinPhoto.url, photoFilename: "sachin-garg-senior-mathematics-faculty-rank-sarthi.webp", imageAlt: "Sachin Garg, Senior Mathematics Faculty at Rank Sarthi", initials: "SG",
    claimsRequiringEvidence: ["Exact exams taught or reviewed", "Education or qualification", "Teaching experience", "Previous institutions", "LinkedIn", "Professional email"],
  },
  {
    id: "gandharva-saxena", slug: "gandharva-saxena", name: "Gandharva Saxena", title: "Senior Physics Faculty",
    subject: "Physics", role: "Senior Academic Contributor — Physics",
    shortProfile: "Gandharva Saxena is a Senior Physics Faculty member and academic contributor focused on creating rigorous, conceptually strong and progressively structured Physics learning resources. His work emphasises conceptual understanding, analytical thinking, scientific reasoning and the systematic application of fundamental principles from foundational to advanced levels.",
    detailedProfile: [
      "Gandharva Saxena is a senior academic contributor in Physics, bringing subject expertise and a strong commitment to scientifically rigorous, conceptually clear and student-focused learning resources.",
      "His contribution includes the creation, structuring, refinement and continuous enrichment of Physics content so that students can progress through a coherent learning sequence. His academic approach emphasises conceptual understanding, analytical thinking, problem-solving ability and the application of fundamental principles.",
      "Within the broader academic framework, Gandharva contributes to strengthening the depth, consistency and scientific quality of Physics content while supporting a progression from foundational concepts to more advanced understanding.",
    ],
    expertise: ["Physics", "Conceptual Physics", "Analytical Thinking", "Problem Solving", "Scientific Reasoning", "Curriculum Development"],
    verificationStatus: partial, photo: gandharvaPhoto.url, photoFilename: "gandharva-saxena-senior-physics-faculty-rank-sarthi.webp", imageAlt: "Gandharva Saxena, Senior Physics Faculty at Rank Sarthi", initials: "GS",
    claimsRequiringEvidence: ["Education or qualification", "Teaching experience", "Previous institutions", "Exact exams taught or reviewed", "LinkedIn", "Professional email"],
  },
  {
    id: "adarsh-kumar", slug: "adarsh-kumar", name: "Adarsh Kumar", title: "Senior Chemistry Faculty",
    subject: "Chemistry", role: "Senior Chemistry Faculty",
    shortProfile: "Adarsh Kumar is a senior Chemistry educator and academic architect with extensive experience in competitive-exam education, curriculum design and structured assessment. His academic approach combines Chemistry subject expertise with systematic problem-solving, assessment design and performance-oriented learning frameworks for JEE and NEET aspirants. His broader work also spans scientific research and technology-enabled education.",
    detailedProfile: ["Adarsh Kumar’s academic contribution focuses on Chemistry education, structured assessment design, rigorous problem-solving frameworks and the development of learning systems that support progression from foundational concepts to advanced competitive-exam reasoning.", "At Rank Sarthi, his profile centres on Chemistry expertise, academic architecture, curriculum design and assessment methodology."],
    expertise: ["Chemistry", "JEE Chemistry", "NEET Chemistry", "Curriculum Design", "Assessment Design", "Academic Architecture", "Scientific Research"],
    verificationStatus: partial, photo: adarshPhoto.url, photoFilename: "adarsh-kumar-senior-chemistry-faculty-rank-sarthi.webp", imageAlt: "Adarsh Kumar, Senior Chemistry Faculty at Rank Sarthi", initials: "AK",
    claimsRequiringEvidence: ["Exact public title", "FIITJEE tenure", "Head of Department role", "PhD research status", "Air Elixir role", "Patents", "VMedico or Rank UP roles", "LinkedIn", "Professional email"],
  },
  {
    id: "vinod-kumar", slug: "vinod-kumar", name: "Vinod Kumar", title: "Senior Chemistry Faculty",
    subject: "Chemistry", role: "Senior Academic Contributor — Chemistry",
    shortProfile: "Vinod Kumar is a Senior Chemistry Faculty member with extensive experience in competitive-exam education and academic content development. His work focuses on strengthening conceptual foundations, analytical ability and problem-solving in Chemistry while developing progressively structured resources for JEE, NEET and other competitive examinations.",
    detailedProfile: ["Vinod Kumar is a senior Chemistry academic contributor focused on concept clarity, scientific accuracy, progressively graded content and competitive problem-solving.", "His work supports the learner journey from strong fundamentals to the conceptual depth, analytical ability and problem-solving required in competitive Chemistry."],
    expertise: ["Chemistry", "JEE Chemistry", "NEET Chemistry", "Academic Content Development", "Competitive Exam Preparation", "Problem Solving"],
    verificationStatus: partial, photo: null, photoFilename: null, imageAlt: null, initials: "VK",
    claimsRequiringEvidence: ["Years of experience", "Previous institutions", "Books or authorship", "Student outcomes", "LinkedIn", "Professional email"],
  },
  {
    id: "ashwin-m", slug: "ashwin-m", name: "Ashwin M.", title: "Senior Physics Faculty",
    subject: "Physics", role: "Senior Academic Contributor — Physics",
    shortProfile: "Ashwin M. is a Senior Physics Faculty member whose teaching approach centres on making complex Physics intuitive, conceptually clear and analytically rigorous. His academic contribution spans competitive-exam Physics, structured problem-solving and the development of progressively graded learning resources for JEE, NEET and other advanced science learners.",
    detailedProfile: ["Ashwin M. is a Physics educator whose academic approach emphasises conceptual understanding, intuitive explanation and structured reasoning rather than mechanical learning.", "At Rank Sarthi, his profile focuses on Physics pedagogy, conceptual clarity, competitive problem-solving and the development of scientifically accurate, progressively graded Physics learning resources."],
    expertise: ["Physics", "JEE Physics", "NEET Physics", "Conceptual Learning", "Analytical Problem Solving", "Competitive Exam Physics"],
    verificationStatus: partial, photo: ashwinPhoto.url, photoFilename: "ashwin-m-senior-physics-faculty-rank-sarthi.webp", imageAlt: "Ashwin M., Senior Physics Faculty at Rank Sarthi", initials: "AM",
    claimsRequiringEvidence: ["Final public name", "IIT Madras qualification", "Teaching since 2012", "Phyritual Edu", "Student outcomes", "LinkedIn", "Professional email"],
  },
  {
    id: "ashutosh-pande", slug: "ashutosh-pande", name: "Ashutosh Pande", title: "Senior Mathematics Faculty",
    subject: "Mathematics", role: "Senior Mathematics Faculty / Academic Consultant",
    shortProfile: "Ashutosh Pande is a Senior Mathematics Faculty member and academic consultant specialising in JEE Main and JEE Advanced Mathematics. His work focuses on concept clarity, multi-step reasoning, structured problem-solving, curriculum design and performance-oriented preparation for high-level competitive Mathematics.",
    detailedProfile: ["Ashutosh Pande is a Mathematics educator and academic consultant specialising in curriculum design and mentorship for JEE Main and JEE Advanced.", "His academic approach centres on concept clarity, systematic problem-solving, multi-step reasoning, analytical agility, speed-accuracy optimisation and exam temperament. At Rank Sarthi, his profile centres on JEE Mathematics, curriculum design, analytical reasoning and advanced problem-solving."],
    expertise: ["Mathematics", "JEE Main Mathematics", "JEE Advanced Mathematics", "Curriculum Design", "Multi-Step Reasoning", "Problem Solving", "Assessment Planning"],
    verificationStatus: partial, photo: ashutoshPhoto.url, photoFilename: "ashutosh-pande-senior-mathematics-faculty-rank-sarthi.webp", imageAlt: "Ashutosh Pande, Senior Mathematics Faculty at Rank Sarthi", initials: "AP",
    claimsRequiringEvidence: ["JEE 1998 qualification", "Degree and institution", "Student rank outcomes", "Teaching experience", "LinkedIn", "Professional email"],
  },
  {
    id: "prabhat-kumar", slug: "prabhat-kumar", name: "Prabhat Kumar", title: "Senior Chemistry Faculty",
    subject: "Chemistry", role: "Senior Chemistry Educator / Academic Contributor",
    shortProfile: "Prabhat Kumar is a Senior Chemistry Faculty member, educator and academic author with extensive experience in competitive-exam preparation and Chemistry curriculum development. His academic work focuses on conceptual clarity, scientific accuracy, graded problem-solving and structured learning resources for JEE and NEET aspirants.",
    detailedProfile: ["Prabhat Kumar is a senior Chemistry educator and curriculum contributor whose work focuses on conceptual rigour, scientific accuracy and graded competitive problem-solving.", "His academic contribution supports Chemistry learning through curriculum development and structured learning resources for JEE and NEET aspirants."],
    expertise: ["Chemistry", "JEE Chemistry", "NEET Chemistry", "Academic Publishing", "Curriculum Development", "Competitive Exam Preparation"],
    verificationStatus: partial, photo: prabhatPhoto.url, photoFilename: "prabhat-kumar-senior-chemistry-faculty-rank-sarthi.webp", imageAlt: "Prabhat Kumar, Senior Chemistry Faculty at Rank Sarthi", initials: "PK",
    claimsRequiringEvidence: ["Years of experience", "Shri Balaji Publications ownership", "Authorship or publications", "Associated ventures", "Student outcomes", "LinkedIn", "Professional email"],
  },
  {
    id: "hardik-agrawal", slug: "hardik-agrawal", name: "Hardik Agrawal", title: "Physics Expert",
    subject: "Physics", role: "Physics Expert",
    shortProfile: "Hardik Agrawal is a Physics Expert with a combined interest in competitive Physics and digital learning systems. His academic contribution focuses on connecting fundamental physical principles with structured mathematical application and multi-step problem-solving for JEE aspirants, alongside contributions to the technology and learning architecture supporting Rank Sarthi.",
    detailedProfile: ["Hardik Agrawal is a Physics Expert whose academic contribution connects abstract physical laws to structured mathematical application and multi-step problem-solving for JEE learners.", "His work also contributes to the digital learning systems and learning architecture supporting Rank Sarthi."],
    expertise: ["Physics", "JEE Physics", "Competitive Problem Solving", "Digital Learning Systems", "Educational Technology", "Platform Architecture"],
    verificationStatus: partial, photo: hardikPhoto.url, photoFilename: "hardik-agrawal-physics-expert-rank-sarthi.webp", imageAlt: "Hardik Agrawal, Physics Expert at Rank Sarthi", initials: "HA",
    claimsRequiringEvidence: ["Exact public technology title", "JEE Main result", "JEE Advanced result", "MVPP or JSTSE rank", "Technical responsibilities", "LinkedIn", "Professional email"],
  },
];

const profilesBySlug = new Map(academicProfiles.map((profile) => [profile.slug, profile]));

export function getAcademicProfile(slug: string): AcademicProfile | undefined {
  return profilesBySlug.get(slug);
}

export const reviewerPools: Record<AcademicSubject, string[]> = {
  Physics: ["gandharva-saxena", "ashwin-m", "hardik-agrawal"],
  Chemistry: ["adarsh-kumar", "vinod-kumar", "prabhat-kumar"],
  Mathematics: ["sachin-garg", "ashutosh-pande"],
};