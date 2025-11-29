export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
  sections: Section[];
  color: string;
}

export interface Section {
  id: string;
  title: string;
  content: string;
  subsections?: Subsection[];
}

export interface Subsection {
  id: string;
  title: string;
  content: string;
  keyPoints?: string[];
  clinicalPearls?: string[];
}

export interface AssessmentQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  rationale: string;
  category: string;
}

export interface CaseVignette {
  id: string;
  cbc?: {
    wbc?: number;
    hgb?: number;
    plt?: number;
  };
  morph?: string[];
  flow?: Record<string, string>;
  cyto?: string[];
  molecular?: string[];
  question: string;
  options: string[];
  correct: string;
  rationale: string;
}

export interface InteractiveTool {
  id: string;
  name: string;
  description: string;
  route: string;
  category: string;
}
