export interface CourseDetails {
  courseTitle: string;
  courseCode: string;
  courseType: string;
  courseDesignation: string;
  semester: string;
  contactHours: string;
  continuousAssessmentMarks: string;
  finalExamMarks: string;
  university: string;
  academicSession: string;
  program: string;
}

export interface SyllabusUnit {
  unitNumber: number;
  unitTitle: string;
  hours: string;
  topicList: string[];
  status: "Completed" | "In Progress" | "Pending";
  badgeLabel: string;
  progressWeight: number;
}

export const courseDetails: CourseDetails = {
  courseTitle: "Chemistry-I (Engineering Chemistry)",
  courseCode: "BS-CH101 / BS-CH201",
  courseType: "Basic Science Course",
  courseDesignation: "Theory",
  semester: "Second Semester",
  contactHours: "3L + 1T (4 Hours/Week)",
  continuousAssessmentMarks: "30 Marks",
  finalExamMarks: "70 Marks",
  university: "Maulana Abul Kalam Azad University of Technology (MAKAUT)",
  academicSession: "2025-26",
  program: "B.Tech (All Branches)"
};

export const syllabus: SyllabusUnit[] = [
  {
    unitNumber: 1,
    unitTitle: "Atomic and Molecular Structure",
    hours: "10 Lectures",
    status: "Completed",
    badgeLabel: "Completed",
    progressWeight: 1.0,
    topicList: [
      "Schrödinger equation: introduction and wave mechanical model",
      "Particle in a box: solutions and applications for simple systems",
      "Molecular orbitals of diatomic molecules (H2, N2, O2, F2, CO, NO)",
      "Energy level diagrams of diatomic molecules",
      "pi-molecular orbitals of butadiene and benzene",
      "Aromaticity and Huckel's rule",
      "Crystal Field Theory (CFT) and splitting in octahedral/tetrahedral geometries",
      "Energy level diagrams of transition metal ions",
      "Magnetic properties of transition metal complexes",
      "Band structure of solids and the role of doping on band structures"
    ]
  },
  {
    unitNumber: 2,
    unitTitle: "Spectroscopic Techniques and Applications",
    hours: "8 Lectures",
    status: "In Progress",
    badgeLabel: "In Progress",
    progressWeight: 0.5,
    topicList: [
      "Principles of spectroscopy and electromagnetic radiation",
      "Selection rules in spectroscopy",
      "Electronic spectroscopy: UV-Visible transitions and applications",
      "Fluorescence: principle and applications in medicine",
      "Vibrational (IR) spectroscopy: diatomic molecules and functional group analysis",
      "Rotational spectroscopy: rigid rotor model of diatomic molecules",
      "Nuclear Magnetic Resonance (NMR) spectroscopy: basic principles and applications",
      "Magnetic Resonance Imaging (MRI): principle and diagnostic applications",
      "Surface characterization techniques",
      "Diffraction and scattering methods"
    ]
  },
  {
    unitNumber: 3,
    unitTitle: "Intermolecular Forces and Potential Energy Surfaces",
    hours: "4 Lectures",
    status: "Pending",
    badgeLabel: "Pending",
    progressWeight: 0.0,
    topicList: [
      "Ionic, dipolar and van der Waals interactions",
      "Equations of state of real gases and critical phenomena",
      "Potential energy surfaces: introduction and representations"
    ]
  },
  {
    unitNumber: 4,
    unitTitle: "Use of Free Energy in Chemical Equilibria",
    hours: "8 Lectures",
    status: "Pending",
    badgeLabel: "Pending",
    progressWeight: 0.0,
    topicList: [
      "Thermodynamic functions: energy, entropy and free energy",
      "First and Second laws of thermodynamics: brief overview",
      "Estimations of entropy and free energies",
      "Relationship between free energy and EMF",
      "Cell potentials, Nernst equation and its applications",
      "Acid-base, oxidation-reduction, and solubility equilibria",
      "Water chemistry: hardness, purification, and treatment",
      "Corrosion: mechanism, types, and prevention methods",
      "Use of free energy considerations in metallurgy through Ellingham diagrams"
    ]
  },
  {
    unitNumber: 5,
    unitTitle: "Periodic Properties",
    hours: "4 Lectures",
    status: "Pending",
    badgeLabel: "Pending",
    progressWeight: 0.0,
    topicList: [
      "Effective nuclear charge and Slater's rules",
      "Penetration of orbitals",
      "Variations of s, p, d and f orbital energies of atoms in the periodic table",
      "Electronic configurations of atoms",
      "Periodic trends: atomic and ionic sizes",
      "Periodic trends: ionization energies, electron affinity, and electronegativity",
      "Polarizability and Fajan's rules",
      "Oxidation states and their stability",
      "Coordination numbers and geometries",
      "Hard-Soft Acids and Bases (HSAB) concept",
      "Molecular geometries (VSEPR theory)"
    ]
  },
  {
    unitNumber: 6,
    unitTitle: "Stereochemistry",
    hours: "4 Lectures",
    status: "Pending",
    badgeLabel: "Pending",
    progressWeight: 0.0,
    topicList: [
      "Representations of 3D structures: Fischer, Newman, Sawhorse, Wedge-Dash",
      "Structural isomers and stereoisomers",
      "Configurations: D/L and R/S designations",
      "Symmetry elements: plane, center, and axis of symmetry",
      "Chirality and optical activity",
      "Enantiomers and diastereomers",
      "Conformational analysis of cyclohexane (chair and boat conformations)",
      "Isomerism in transition metal coordination compounds"
    ]
  },
  {
    unitNumber: 7,
    unitTitle: "Organic Reactions and Synthesis of a Drug Molecule",
    hours: "4 Lectures",
    status: "Pending",
    badgeLabel: "Pending",
    progressWeight: 0.0,
    topicList: [
      "Introduction to fundamental organic reaction types",
      "Substitution reactions (nucleophilic SN1 and SN2, electrophilic)",
      "Addition reactions (electrophilic, nucleophilic, free radical)",
      "Elimination reactions (E1 and E2 mechanisms)",
      "Oxidation and reduction reactions in organic chemistry",
      "Cyclization and ring-opening reactions",
      "Synthesis of a commonly used drug molecule: Aspirin (acetylsalicylic acid)",
      "Synthesis of a commonly used drug molecule: Paracetamol (acetaminophen)"
    ]
  }
];
