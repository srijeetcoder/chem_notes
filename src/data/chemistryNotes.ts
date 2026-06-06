import { unit1Notes } from "./notes/unit1";
import { unit2Notes } from "./notes/unit2";
import { unit3Notes } from "./notes/unit3";
import { unit4Notes } from "./notes/unit4";
import { unit5Notes } from "./notes/unit5";
import { unit6Notes } from "./notes/unit6";
import { unit7Notes } from "./notes/unit7";

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
  commonQuestions: string[];
  shortAnswer: string;
  longAnswer: string;
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
