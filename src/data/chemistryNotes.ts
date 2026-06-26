import { unit1Notes } from "./notes/unit1";
import { unit2Notes } from "./notes/unit2";
import { unit3Notes } from "./notes/unit3";
import { unit4Notes } from "./notes/unit4";
import { unit5Notes } from "./notes/unit5";
import { unit6Notes } from "./notes/unit6";
import { unit7Notes } from "./notes/unit7";

export interface DerivationStep {
  title: string;
  steps: string[]; // LaTeX strings, rendered by MathRenderer
}

export interface QuestionAnswer {
  question: string;
  answer: string;
  type: 'very_short' | 'short' | 'long';
  marks?: string;
}

export interface ChemistryNote {
  unitNumber: number;
  unitTitle: string;
  topicTitle: string;
  definition: string;
  explanation: string;
  formulas: string[];
  equations: string[];
  applications: string[];
  importantPoints: string[];
  importantReactions?: string[];
  commonQuestions: string[];
  shortAnswer: string;
  longAnswer: string;
  derivation?: DerivationStep[];
  diagramType?: 'ethane_conformations' | 'cyclic_ketones' | 'benzene_aromaticity' | 'diels_alder' | 'aspirin_synthesis' | 'paracetamol_synthesis' | 'cyclohexane_chair' | 'sn1_vs_sn2' | 'addition_mechanism' | 'aldol_condensation' | 'redox_alcohols' | 'stereoisomers_tartaric';
  questionsAndAnswers?: QuestionAnswer[];
}

export const chemistryNotes: ChemistryNote[] = [
  ...unit1Notes,
  ...unit2Notes,
  ...unit3Notes,
  ...unit4Notes,
  ...unit5Notes,
  ...unit6Notes,
  ...unit7Notes
];
