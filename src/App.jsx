import React, { useMemo, useState } from "react";
import { Atom, BookOpen, Brain, CheckCircle2, ChevronDown, ChevronUp, ClipboardList, Download, Layers, Menu, X } from "lucide-react";

const chapters = [
  {
    id: "cft",
    code: "CO1",
    nav: "CO1, CFT",
    title: "Crystal Field Theory",
    color: "cyan",
    intro: "Crystal Field Theory explains the structure, colour, magnetic behaviour, and stability of transition metal complexes. These notes start from basics and move toward exam level answers.",
    quick: [
      "CFT treats metal ligand bonding as electrostatic attraction.",
      "Ligands repel metal d electrons and split the five d orbitals.",
      "Octahedral splitting gives lower t2g and higher eg orbitals.",
      "Tetrahedral splitting gives lower e and higher t2 orbitals.",
      "Weak field ligands give high spin. Strong field ligands give low spin."
    ],
    formulae: [
      "Delta t = 4 by 9 Delta o",
      "CFSE octahedral = t2g electrons times minus 0.4 Delta o plus eg electrons times plus 0.6 Delta o",
      "Magnetic moment = square root of n times n plus 2 BM",
      "Energy absorbed = h nu = h c by lambda"
    ],
    lessons: [
      {
        title: "1. Coordination complex basics",
        definition: "A coordination complex is a compound where a central metal ion is surrounded by ligands.",
        concept: "Ligands donate lone pairs to the metal ion. In CFT, ligands are treated as negative point charges or neutral dipoles. The metal ligand attraction holds the complex together, while ligand electron pairs repel the d electrons of the metal ion.",
        keyPoints: ["Central metal ion is usually a transition metal ion like Fe2 plus, Co3 plus, Ni2 plus, or Cu2 plus.", "Ligands are electron pair donors like Cl minus, H2O, NH3, CN minus, and CO.", "Coordination number means donor atoms directly attached to the metal.", "Common shapes are octahedral, tetrahedral, and square planar."],
        solved: { question: "Identify metal ion, ligand, and coordination number in [Co(NH3)6]3 plus.", steps: ["Metal ion is Co3 plus.", "Ligand is NH3.", "There are six NH3 ligands, so coordination number is 6."], answer: "Metal ion Co3 plus, ligand NH3, coordination number 6." },
        mistake: "Do not count atoms outside the coordination sphere while finding coordination number. Count only donor atoms directly attached to the metal."
      },
      {
        title: "2. Why d orbitals split",
        definition: "d orbital splitting means separation of five equal energy d orbitals into two different energy groups inside a ligand field.",
        concept: "In a free metal ion, all five d orbitals have the same energy. This is called degeneracy. When ligands approach, their electron pairs repel the d electrons. Orbitals pointing toward ligands face more repulsion and gain more energy. Orbitals lying between ligands face less repulsion and remain lower in energy.",
        keyPoints: ["Free metal ion has five degenerate d orbitals.", "Ligands remove degeneracy by unequal repulsion.", "More repulsion means higher energy.", "Less repulsion means lower energy.", "The energy gap is called crystal field splitting energy."],
        solved: { question: "Why does dx2 minus y2 become high energy in octahedral complexes.", steps: ["In octahedral complexes, ligands approach along x, y, and z axes.", "dx2 minus y2 points along x and y axes.", "So it points directly toward ligands and suffers strong repulsion."], answer: "dx2 minus y2 becomes high energy because it faces direct ligand repulsion." },
        mistake: "Do not write that all d orbitals remain equal after ligand approach. Splitting is the main idea of CFT."
      },
      {
        title: "3. Octahedral splitting",
        definition: "Octahedral splitting occurs when six ligands approach the metal ion along x, y, and z axes.",
        concept: "The dx2 minus y2 and dz2 orbitals point directly toward ligands, so they become higher in energy and form the eg set. The dxy, dxz, and dyz orbitals lie between axes, so they become lower in energy and form the t2g set.",
        keyPoints: ["Lower set is t2g, containing dxy, dxz, and dyz.", "Higher set is eg, containing dx2 minus y2 and dz2.", "Energy gap is Delta o.", "Each t2g electron contributes minus 0.4 Delta o.", "Each eg electron contributes plus 0.6 Delta o."],
        solved: { question: "Find CFSE for octahedral d6 low spin, t2g6 eg0.", steps: ["Number of t2g electrons is 6.", "Number of eg electrons is 0.", "CFSE = 6 times minus 0.4 Delta o plus 0 times plus 0.6 Delta o.", "CFSE = minus 2.4 Delta o."], answer: "CFSE = minus 2.4 Delta o." },
        mistake: "Do not interchange t2g and eg in octahedral splitting. t2g is lower, eg is higher."
      },
      {
        title: "4. Tetrahedral splitting",
        definition: "Tetrahedral splitting occurs when four ligands approach the metal ion between the axes.",
        concept: "In a tetrahedral field, no ligand points directly toward any d orbital. Therefore splitting is smaller than octahedral splitting. The e set is lower and the t2 set is higher. Tetrahedral complexes are usually high spin because Delta t is small.",
        keyPoints: ["Lower set is e, containing dx2 minus y2 and dz2.", "Higher set is t2, containing dxy, dxz, and dyz.", "Delta t is nearly 4 by 9 Delta o.", "Tetrahedral complexes are mostly high spin."],
        solved: { question: "If Delta o is 18000 cm inverse, find Delta t.", steps: ["Use Delta t = 4 by 9 Delta o.", "Delta t = 4 by 9 times 18000.", "Delta t = 8000 cm inverse."], answer: "Delta t is 8000 cm inverse." },
        mistake: "Do not use octahedral order for tetrahedral complexes. In tetrahedral splitting, e is lower and t2 is higher."
      },
      {
        title: "5. High spin and low spin",
        definition: "High spin means maximum unpaired electrons. Low spin means more electron pairing in lower orbitals.",
        concept: "The choice depends on the comparison between splitting energy and pairing energy. If Delta is small, electrons avoid pairing and occupy higher orbitals, giving high spin. If Delta is large, electrons pair in lower orbitals, giving low spin.",
        keyPoints: ["Weak field ligand gives small Delta and high spin.", "Strong field ligand gives large Delta and low spin.", "High spin has more unpaired electrons.", "Low spin has fewer unpaired electrons.", "More unpaired electrons means more paramagnetic character."],
        solved: { question: "Why is [CoF6]3 minus high spin and [Co(CN)6]3 minus low spin.", steps: ["F minus is weak field ligand, so it gives small Delta.", "Small Delta favours high spin.", "CN minus is strong field ligand, so it gives large Delta.", "Large Delta favours low spin."], answer: "[CoF6]3 minus is high spin. [Co(CN)6]3 minus is low spin." },
        mistake: "Do not decide spin only from metal ion. Ligand strength also matters."
      }
    ]
  },
  {
    id: "spectroscopy",
    code: "CO2",
    nav: "CO2, Spectroscopy",
    title: "Spectroscopy",
    color: "orange",
    intro: "Spectroscopy studies how molecules interact with electromagnetic radiation. It gives information about bonds, functional groups, bond length, and molecular structure.",
    quick: ["IR spectroscopy deals with vibrational transitions.", "Microwave spectroscopy deals with rotational transitions.", "IR active vibration needs change in dipole moment.", "Pure rotational spectrum needs permanent dipole moment.", "Line spacing in rigid rotor spectrum is 2B."],
    formulae: ["Vibrational wavenumber = 1 by 2 pi c times square root of k by mu", "Reduced mass = m1 m2 by m1 plus m2", "Linear molecule modes = 3N minus 5", "Non linear molecule modes = 3N minus 6", "Moment of inertia = mu r square", "Rotational line spacing = 2B"],
    lessons: [
      { title: "1. Basic idea of spectroscopy", definition: "Spectroscopy is the study of interaction between radiation and matter.", concept: "Molecules absorb only those radiations whose energy exactly matches the gap between two allowed energy levels. Different types of radiation produce different transitions.", keyPoints: ["UV visible gives electronic transitions.", "IR gives vibrational transitions.", "Microwave gives rotational transitions.", "A spectrum records absorbed or emitted radiation."], solved: { question: "Which spectroscopy identifies bond vibration.", steps: ["Bond vibration needs vibrational transition.", "Vibrational transitions occur in IR region."], answer: "IR spectroscopy identifies bond vibration." }, mistake: "Do not write microwave for vibration. Microwave is mainly for rotation." },
      { title: "2. Vibrational IR spectroscopy", definition: "Vibrational spectroscopy studies change in vibrational energy of molecules due to IR absorption.", concept: "Atoms in a molecule vibrate about mean positions. A chemical bond behaves like a spring. If IR radiation has the required energy and the vibration changes dipole moment, absorption occurs.", keyPoints: ["Common IR range is 4000 to 400 cm inverse.", "Fingerprint region is 1500 to 400 cm inverse.", "Stronger bond gives higher frequency.", "Heavier atoms give lower frequency.", "IR active vibration must change dipole moment."], solved: { question: "Why is C H stretching frequency greater than C Cl stretching frequency.", steps: ["Hydrogen is lighter than chlorine.", "C H has smaller reduced mass than C Cl.", "Smaller reduced mass gives higher frequency."], answer: "C H stretching frequency is greater because reduced mass is smaller." }, mistake: "Do not say every vibration is IR active. Dipole moment must change." },
      { title: "3. Types of molecular vibrations", definition: "Molecular vibrations are changes in bond length or bond angle.", concept: "Stretching changes bond length. Bending changes bond angle. Stretching generally needs more energy than bending. Bending has types such as scissoring, rocking, wagging, and twisting.", keyPoints: ["Symmetric stretching means bonds move together.", "Asymmetric stretching means one bond lengthens while another shortens.", "Scissoring and rocking are in plane bending.", "Wagging and twisting are out of plane bending."], solved: { question: "Why is symmetric stretch of CO2 IR inactive.", steps: ["CO2 is linear and symmetric.", "During symmetric stretch, dipole moment remains zero.", "No change in dipole moment means IR inactive."], answer: "CO2 symmetric stretch is IR inactive because dipole moment does not change." }, mistake: "Do not confuse symmetric stretch with asymmetric stretch. Asymmetric stretch of CO2 is IR active." },
      { title: "4. Number of vibrational modes", definition: "Vibrational modes are independent ways in which a molecule can vibrate.", concept: "A molecule with N atoms has 3N total degrees of freedom. For linear molecules, 3N minus 5 are vibrational. For non linear molecules, 3N minus 6 are vibrational.", keyPoints: ["Linear molecule modes are 3N minus 5.", "Non linear molecule modes are 3N minus 6.", "CO2 is linear.", "H2O is non linear."], solved: { question: "Find vibrational modes of CO2 and H2O.", steps: ["CO2 has N = 3 and is linear. Modes = 3 times 3 minus 5 = 4.", "H2O has N = 3 and is non linear. Modes = 3 times 3 minus 6 = 3."], answer: "CO2 has 4 modes. H2O has 3 modes." }, mistake: "Do not use 3N minus 6 for linear molecules. Use 3N minus 5." }
    ]
  },
  {
    id: "stereochemistry",
    code: "CO5",
    nav: "CO5, Stereochemistry",
    title: "Stereochemistry",
    color: "green",
    intro: "Stereochemistry studies the three dimensional arrangement of atoms in molecules. It explains chirality, optical activity, enantiomers, diastereomers, R and S, and projection formulae.",
    quick: ["Stereoisomers have same connectivity but different spatial arrangement.", "Chiral molecules are not superimposable on mirror image.", "Enantiomers are non superimposable mirror images.", "Diastereomers are stereoisomers that are not mirror images.", "Racemic mixture is optically inactive due to equal opposite rotations."],
    formulae: ["Maximum stereoisomers = 2 power n", "Specific rotation = observed rotation by path length times concentration", "Enantiomeric excess = absolute difference by total times 100"],
    lessons: [
      { title: "1. Stereochemistry and stereoisomers", definition: "Stereoisomers have the same molecular formula and same bonding sequence but different arrangement in space.", concept: "The three dimensional arrangement of atoms changes the property of molecules. This is important in biological systems because enzymes and receptors are chiral.", keyPoints: ["Constitutional isomers differ in connectivity.", "Stereoisomers differ in spatial arrangement.", "Stereochemistry is important in medicines.", "Different stereoisomers can have different biological effects."], solved: { question: "What is the difference between constitutional isomers and stereoisomers.", steps: ["Constitutional isomers have different connectivity.", "Stereoisomers have same connectivity but different spatial arrangement."], answer: "Connectivity differs in constitutional isomers. Spatial arrangement differs in stereoisomers." }, mistake: "Do not call all isomers stereoisomers. Connectivity must be same for stereoisomers." },
      { title: "2. Chirality", definition: "A molecule is chiral if it is not superimposable on its mirror image.", concept: "The most common reason for chirality is a carbon atom attached to four different groups. This carbon is called chiral carbon or asymmetric carbon.", keyPoints: ["One chiral carbon usually makes a molecule chiral.", "A chiral molecule has no plane of symmetry.", "An achiral molecule is superimposable on its mirror image.", "Meso compounds are achiral despite having chiral centres."], solved: { question: "Is a carbon attached to H, Cl, CH3, and C2H5 chiral.", steps: ["Check the four attached groups.", "H, Cl, CH3, and C2H5 are all different.", "Carbon with four different groups is chiral."], answer: "Yes, it is a chiral carbon." }, mistake: "Do not count a carbon as chiral if two attached groups are the same." },
      { title: "3. Optical activity", definition: "Optical activity is the ability of a chiral compound to rotate plane polarized light.", concept: "If a compound rotates light clockwise, it is dextrorotatory and marked plus. If it rotates light anticlockwise, it is laevorotatory and marked minus. Enantiomers rotate light by equal magnitude in opposite directions.", keyPoints: ["Plus means clockwise rotation.", "Minus means anticlockwise rotation.", "Enantiomers have equal and opposite rotation.", "Racemic mixture has equal enantiomers and no net rotation."], solved: { question: "One enantiomer rotates light by plus 20 degrees. What is the rotation of the other.", steps: ["Enantiomers rotate light equally in opposite directions.", "Opposite of plus 20 is minus 20."], answer: "The other enantiomer rotates light by minus 20 degrees." }, mistake: "Do not confuse R and S with plus and minus. R does not always mean plus. S does not always mean minus." },
      { title: "4. R and S configuration", definition: "R and S configuration shows the absolute arrangement around a chiral centre.", concept: "Use Cahn Ingold Prelog rules. Give priorities according to atomic number. Keep the lowest priority group away. Trace 1 to 2 to 3. Clockwise gives R and anticlockwise gives S.", keyPoints: ["Higher atomic number gets higher priority.", "If first atoms are same, compare next atoms.", "Lowest priority group must point away.", "Clockwise gives R.", "Anticlockwise gives S."], solved: { question: "Find priority order for Cl, OH, CH3, and H.", steps: ["Compare atoms directly attached to chiral carbon.", "Atomic numbers are Cl 17, O 8, C 6, H 1.", "Higher atomic number gets higher priority."], answer: "Priority order is Cl greater than OH greater than CH3 greater than H." }, mistake: "Do not assign R or S before placing the lowest priority group away from the viewer." }
    ]
  }
];

const comparisons = {
  cft: [["Octahedral", "t2g lower, eg higher", "Delta o", "High or low spin"], ["Tetrahedral", "e lower, t2 higher", "Delta t", "Usually high spin"], ["Weak field", "Small splitting", "High spin", "More unpaired electrons"], ["Strong field", "Large splitting", "Low spin", "Fewer unpaired electrons"]],
  spectroscopy: [["IR", "Vibrational transition", "Needs dipole change", "Functional group study"], ["Microwave", "Rotational transition", "Needs permanent dipole", "Bond length study"], ["Linear", "3N minus 5", "CO2", "4 modes when N is 3"], ["Non linear", "3N minus 6", "H2O", "3 modes when N is 3"]],
  stereochemistry: [["Enantiomers", "Mirror images", "Not superimposable", "Opposite optical rotation"], ["Diastereomers", "Not mirror images", "Not superimposable", "Different properties"], ["Chiral", "No mirror overlap", "Optically active", "Often has chiral centre"], ["Achiral", "Mirror overlap possible", "Optically inactive", "Often has symmetry"]]
};

const quiz = [
  { q: "In octahedral splitting, which set is lower in energy", a: "t2g", options: ["t2g", "eg", "t2", "all same"] },
  { q: "Tetrahedral complexes are usually high spin because", a: "Delta t is small", options: ["Delta t is small", "pairing energy is zero", "ligands are absent", "all ligands are strong"] },
  { q: "A vibration is IR active only if it causes", a: "change in dipole moment", options: ["change in dipole moment", "change in molecular formula", "change in mass", "change in colour only"] },
  { q: "For non linear molecules, vibrational modes are", a: "3N minus 6", options: ["3N minus 5", "3N minus 6", "2N minus 5", "N minus 6"] },
  { q: "A chiral molecule is", a: "not superimposable on its mirror image", options: ["always planar", "not superimposable on its mirror image", "always ionic", "without carbon"] }
];

const topicOptions = [
  "Crystal Field Theory",
  "Spectroscopy",
  "Stereochemistry",
  "Mixed CA3 Revision"
];

function notesForTopic(topic) {
  if (topic === "Mixed CA3 Revision") {
    return chapters.map((ch) => {
      return ch.title + "\n" + ch.intro + "\n" + ch.formulae.join("\n") + "\n" + ch.lessons.map((l) => l.title + ". " + l.definition + " " + l.concept + " " + l.keyPoints.join(" ")).join("\n");
    }).join("\n\n");
  }

  const selected = chapters.find((ch) => ch.title === topic);
  if (!selected) return "";
  return selected.title + "\n" + selected.intro + "\n" + selected.formulae.join("\n") + "\n" + selected.lessons.map((l) => l.title + ". " + l.definition + " " + l.concept + " " + l.keyPoints.join(" ")).join("\n");
}

function styleFor(color) {
  if (color === "orange") return "border-orange-400/40 bg-orange-400/10 text-orange-200";
  if (color === "green") return "border-lime-400/40 bg-lime-400/10 text-lime-200";
  return "border-cyan-400/40 bg-cyan-400/10 text-cyan-200";
}

function iconColor(color) {
  if (color === "orange") return "text-orange-300";
  if (color === "green") return "text-lime-300";
  return "text-cyan-300";
}

function buildPdfLines() {
  const out = ["Chemistry Master Notes", "Detailed offline notes for CO1, CO2, and CO5", ""];
  chapters.forEach((ch) => {
    out.push(ch.code + ": " + ch.title, ch.intro, "");
    out.push("Quick Revision");
    ch.quick.forEach((x, i) => out.push(String(i + 1) + ". " + x));
    out.push("Formulae");
    ch.formulae.forEach((x, i) => out.push(String(i + 1) + ". " + x));
    ch.lessons.forEach((l) => {
      out.push("", l.title, "Definition. " + l.definition, "Concept. " + l.concept, "Key points.");
      l.keyPoints.forEach((p, i) => out.push(String(i + 1) + ". " + p));
      out.push("Solved example. " + l.solved.question);
      l.solved.steps.forEach((s, i) => out.push("Step " + String(i + 1) + ". " + s));
      out.push("Answer. " + l.solved.answer);
      out.push("Common mistake. " + l.mistake);
    });
  });
  return out;
}

function downloadPdf() {
  const make = () => {
    const doc = new window.jspdf.jsPDF({ unit: "pt", format: "a4" });
    const margin = 42;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const maxWidth = pageWidth - margin * 2;
    let y = 50;
    const add = (text, size = 10, bold = false) => {
      doc.setFont("helvetica", bold ? "bold" : "normal");
      doc.setFontSize(size);
      const lines = doc.splitTextToSize(text || " ", maxWidth);
      lines.forEach((line) => {
        if (y > pageHeight - 46) {
          doc.addPage();
          y = 50;
        }
        doc.text(line, margin, y);
        y += size + 5;
      });
    };
    buildPdfLines().forEach((line) => {
      const big = line.startsWith("CO") || line === "Chemistry Master Notes";
      const medium = line === "Quick Revision" || line === "Formulae" || line.includes(". ") === false;
      if (big) add(line, 16, true);
      else if (medium) add(line, 12, true);
      else add(line, 10, false);
    });
    doc.save("chemistry-detailed-study-notes.pdf");
  };
  if (window.jspdf) make();
  else {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
    script.onload = make;
    document.body.appendChild(script);
  }
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState({});
  const [quizAns, setQuizAns] = useState({});
  const [mode, setMode] = useState("learn");
  const lessonCount = useMemo(() => chapters.reduce((sum, ch) => sum + ch.lessons.length, 0), []);

  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_30%),radial-gradient(circle_at_90%_10%,rgba(251,146,60,0.08),transparent_26%),radial-gradient(circle_at_20%_90%,rgba(163,230,53,0.08),transparent_30%)]" />
      <Header menu={menu} setMenu={setMenu} />
      <main id="home">
        <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-md border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">MAKAUT Chemistry CA3</p>
              <h1 className="font-serif text-4xl font-black leading-tight text-white md:text-6xl">Study notes that teach, not only display.</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Use Learn mode for full explanation, Revision mode for compact notes, and Quiz mode for active recall. The PDF includes definitions, formulas, solved examples, and common mistakes.</p>
              <div className="mt-7 flex flex-wrap gap-3"><a href="#cft" className="rounded-md bg-cyan-300 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-200">Start studying</a><button onClick={downloadPdf} className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 font-semibold text-white hover:bg-white/10"><Download className="h-4 w-4" /> Download PDF</button></div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"><Stat label="Course outcomes" value="3" /><Stat label="Detailed lessons" value={String(lessonCount)} /><Stat label="Solved examples" value={String(lessonCount)} /></div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 pb-8 lg:px-8"><div className="flex flex-wrap gap-2 rounded-md border border-white/10 bg-[#10141d] p-2">{["learn", "revision", "quiz"].map((m) => <button key={m} onClick={() => setMode(m)} className={`rounded-md px-4 py-2 text-sm font-semibold capitalize ${mode === m ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:bg-white/10"}`}>{m} mode</button>)}</div></section>
        <OrbitalStudyBlock />
        {mode !== "quiz" && chapters.map((ch) => <Chapter key={ch.id} chapter={ch} open={open} setOpen={setOpen} compact={mode === "revision"} />)}
        {mode === "quiz" && (
          <>
            <AIQuiz />
            <Quiz quizAns={quizAns} setQuizAns={setQuizAns} />
          </>
        )}
      </main>
      <footer className="border-t border-white/10 px-4 py-12 text-center font-mono uppercase tracking-[0.15em]">
        <p className="text-xs text-slate-500 mb-8">Vercel ready React study website with offline PDF notes</p>
        <div className="inline-flex items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-6 py-4 shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all hover:bg-cyan-400/20">
          <p className="text-sm font-bold text-slate-200">
            MADE WITH ❤️ AND 💧 BY <a href="https://github.com/srijeetcoder" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-100 hover:underline transition-colors underline-offset-4 ml-1">srijeetcoder</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function Header({ menu, setMenu }) {
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070a0f]/90 backdrop-blur-xl"><div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8"><a href="#home" className="flex items-center gap-2 font-serif text-lg font-bold text-white"><Atom className="h-5 w-5 text-cyan-300" /> Chemistry Master Notes</a><nav className="hidden items-center gap-5 lg:flex">{chapters.map((c) => <a key={c.id} href={`#${c.id}`} className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400 hover:text-cyan-300">{c.code}</a>)}<a href="#quiz" className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400 hover:text-cyan-300">Quiz</a></nav><button onClick={downloadPdf} className="hidden items-center gap-2 rounded-md border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-cyan-200 hover:bg-cyan-400/20 lg:inline-flex"><Download className="h-4 w-4" /> PDF notes</button><button className="lg:hidden" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button></div>{menu && <div className="border-t border-white/10 px-4 py-4 lg:hidden"><div className="flex flex-col gap-3">{chapters.map((c) => <a key={c.id} href={`#${c.id}`} onClick={() => setMenu(false)} className="text-sm text-slate-300">{c.nav}</a>)}<button onClick={downloadPdf} className="inline-flex items-center justify-center gap-2 rounded-md border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200"><Download className="h-4 w-4" /> Download PDF</button></div></div>}</header>;
}

function Stat({ label, value }) { return <div className="rounded-md border border-white/10 bg-[#10141d] p-5"><p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p><p className="mt-2 font-serif text-4xl font-black text-white">{value}</p></div>; }

function OrbitalStudyBlock() {
  return <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8"><div className="rounded-md border border-white/10 bg-[#10141d] p-5 lg:p-7"><div className="mb-6 flex items-center gap-3"><Layers className="h-6 w-6 text-cyan-300" /><div><p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-400">visual core concept</p><h2 className="font-serif text-3xl font-bold text-white">d orbital splitting, fixed for study</h2></div></div><div className="grid gap-5 lg:grid-cols-3"><Diagram title="Octahedral" top="eg, dx2 minus y2, dz2" bottom="t2g, dxy, dxz, dyz" delta="Delta o" note="6 ligands along axes. t2g lower, eg higher." /><div className="rounded-md border border-white/10 bg-black/20 p-5 text-center"><p className="mb-6 font-mono text-sm font-bold text-white">Free metal ion</p><div className="mx-auto space-y-3 py-8">{[1, 2, 3, 4, 5].map((n) => <div key={n} className="mx-auto h-0.5 w-40 bg-slate-400" />)}</div><p className="font-mono text-xs text-slate-400">Five d orbitals have equal energy before ligands approach.</p></div><Diagram title="Tetrahedral" top="t2, dxy, dxz, dyz" bottom="e, dx2 minus y2, dz2" delta="Delta t" note="4 ligands between axes. e lower, t2 higher." /></div><div className="mt-5 grid gap-4 lg:grid-cols-2"><InfoBox title="Memory rule" text="Octahedral, t2g is lower and eg is higher. Tetrahedral, e is lower and t2 is higher." /><InfoBox title="Spectrochemical series" text="I minus, Br minus, SCN minus, Cl minus, F minus, OH minus, H2O, NH3, en, NO2 minus, CN minus, CO. Left side is weak field. Right side is strong field." /></div></div></section>;
}

function Diagram({ title, top, bottom, delta, note }) {
  return <div className="rounded-md border border-white/10 bg-black/20 p-5"><p className="mb-6 text-center font-mono text-sm font-bold text-white">{title}</p><div className="relative mx-auto h-52 max-w-xs"><div className="absolute left-3 top-0 h-full w-px bg-slate-700" /><span className="absolute left-0 -top-4 font-mono text-xs text-slate-400">E</span><div className="absolute left-10 top-4"><div className="h-1 w-24 rounded bg-orange-400 shadow-lg shadow-orange-400/40" /><div className="mt-3 h-1 w-24 rounded bg-orange-400 shadow-lg shadow-orange-400/40" /><p className="mt-2 font-mono text-xs text-orange-200">{top}</p></div><div className="absolute left-6 top-20 h-16 border-l border-dashed border-slate-500" /><span className="absolute left-9 top-24 font-mono text-xs text-white">{delta}</span><div className="absolute left-10 bottom-3"><div className="h-1 w-24 rounded bg-cyan-300 shadow-lg shadow-cyan-300/40" /><div className="mt-3 h-1 w-24 rounded bg-cyan-300 shadow-lg shadow-cyan-300/40" /><div className="mt-3 h-1 w-24 rounded bg-cyan-300 shadow-lg shadow-cyan-300/40" /><p className="mt-2 font-mono text-xs text-cyan-200">{bottom}</p></div></div><p className="mt-4 text-center text-sm leading-6 text-slate-400">{note}</p></div>;
}

function InfoBox({ title, text }) { return <div className="rounded-md border border-cyan-400/25 bg-cyan-400/10 p-4"><p className="font-semibold text-white">{title}</p><p className="mt-2 text-sm leading-6 text-slate-300">{text}</p></div>; }

function Chapter({ chapter, open, setOpen, compact }) {
  return <section id={chapter.id} className="mx-auto max-w-7xl scroll-mt-24 px-4 py-10 lg:px-8"><div className="mb-6 border-b border-white/10 pb-5"><span className={`inline-flex rounded-md border px-3 py-1 font-mono text-xs uppercase tracking-[0.25em] ${styleFor(chapter.color)}`}>{chapter.code}</span><h2 className="mt-4 font-serif text-4xl font-black text-white">{chapter.title}</h2><p className="mt-3 max-w-4xl text-lg leading-8 text-slate-300">{chapter.intro}</p></div><div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]"><aside className="space-y-5 lg:sticky lg:top-20 lg:self-start"><Panel icon={<Brain className="h-5 w-5" />} title="Quick revision"><ul className="space-y-2">{chapter.quick.map((q) => <li key={q} className="flex gap-2 text-sm leading-6 text-slate-300"><CheckCircle2 className={`mt-1 h-4 w-4 shrink-0 ${iconColor(chapter.color)}`} />{q}</li>)}</ul></Panel><Panel icon={<ClipboardList className="h-5 w-5" />} title="Formula box"><div className="space-y-2">{chapter.formulae.map((f) => <div key={f} className={`rounded-md border p-3 font-mono text-xs leading-6 ${styleFor(chapter.color)}`}>{f}</div>)}</div></Panel><CompareTable chapter={chapter} /></aside><div className="space-y-4">{chapter.lessons.map((lesson, index) => <Lesson key={lesson.title} chapter={chapter} lesson={lesson} index={index} open={open} setOpen={setOpen} compact={compact} />)}</div></div></section>;
}

function Panel({ icon, title, children }) { return <div className="rounded-md border border-white/10 bg-[#10141d] p-5"><div className="mb-4 flex items-center gap-2 text-white">{icon}<h3 className="font-serif text-xl font-bold">{title}</h3></div>{children}</div>; }

function CompareTable({ chapter }) { return <div className="overflow-hidden rounded-md border border-white/10 bg-[#10141d]"><div className="border-b border-white/10 p-4"><h3 className="font-serif text-xl font-bold text-white">Comparison table</h3></div><div className="overflow-x-auto"><table className="w-full text-left text-sm"><tbody>{comparisons[chapter.id].map((row, i) => <tr key={i} className="border-b border-white/10 last:border-b-0">{row.map((cell, j) => <td key={j} className={`${j === 0 ? "font-semibold text-white" : "text-slate-300"} px-4 py-3 align-top`}>{cell}</td>)}</tr>)}</tbody></table></div></div>; }

function Lesson({ chapter, lesson, index, open, setOpen, compact }) {
  const key = chapter.id + String(index);
  const isOpen = open[key] !== false;
  return <article className="overflow-hidden rounded-md border border-white/10 bg-[#10141d]"><button onClick={() => setOpen({ ...open, [key]: !isOpen })} className="flex w-full items-center justify-between gap-4 border-b border-white/10 px-5 py-4 text-left hover:bg-white/[0.04]"><h3 className="font-serif text-2xl font-bold text-white">{lesson.title}</h3>{isOpen ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}</button>{isOpen && <div className="grid gap-5 p-5 xl:grid-cols-[1.1fr_0.9fr]"><div className="space-y-4"><StudyBlock label="Definition" text={lesson.definition} color={chapter.color} /><StudyBlock label="Concept" text={lesson.concept} color={chapter.color} />{!compact && <SolvedExample solved={lesson.solved} color={chapter.color} />}{!compact && <div className="rounded-md border border-red-400/30 bg-red-400/10 p-4"><p className="font-semibold text-red-100">Common mistake</p><p className="mt-2 text-sm leading-6 text-slate-200">{lesson.mistake}</p></div>}</div><div><h4 className="mb-3 font-semibold text-white">Exam points</h4><ul className="space-y-3">{lesson.keyPoints.map((p) => <li key={p} className="flex gap-3 text-sm leading-6 text-slate-300"><CheckCircle2 className={`mt-1 h-4 w-4 shrink-0 ${iconColor(chapter.color)}`} /><span>{p}</span></li>)}</ul></div></div>}</article>;
}

function StudyBlock({ label, text, color }) { return <div className={`rounded-md border p-4 ${styleFor(color)}`}><p className="font-semibold text-white">{label}</p><p className="mt-2 text-sm leading-7 text-slate-200">{text}</p></div>; }

function SolvedExample({ solved, color }) { return <div className="rounded-md border border-white/10 bg-black/20 p-4"><p className="font-semibold text-white">Solved example</p><p className="mt-2 text-sm leading-6 text-slate-300">{solved.question}</p><ol className="mt-3 space-y-2">{solved.steps.map((s, i) => <li key={s} className="flex gap-2 text-sm leading-6 text-slate-300"><span className={`rounded px-2 py-0.5 font-mono text-xs ${styleFor(color)}`}>{i + 1}</span>{s}</li>)}</ol><p className="mt-3 rounded-md bg-white/5 p-3 text-sm font-semibold text-white">Final answer. {solved.answer}</p></div>; }

function AIQuiz() {
  const [topic, setTopic] = useState("Crystal Field Theory");
  const [difficulty, setDifficulty] = useState("medium");
  const [count, setCount] = useState(5);
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState({});
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const score = questions.reduce((total, question, index) => {
    return total + (selected[index] === question.answer ? 1 : 0);
  }, 0);

  async function generateQuiz() {
    setLoading(true);
    setError("");
    setChecked(false);
    setSelected({});

    try {
      const response = await fetch("/api/generate-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic,
          difficulty,
          count,
          notes: notesForTopic(topic)
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Quiz generation failed");
      if (!Array.isArray(data.questions)) throw new Error("Invalid quiz format returned");

      setQuestions(data.questions);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="ai-quiz" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-12 lg:px-8 border-b border-white/10">
      <div className="mb-8 flex items-center gap-3">
        <Brain className="h-7 w-7 text-cyan-300" />
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">AI Practice</p>
          <h2 className="font-serif text-4xl font-black text-white">Gemini AI Quiz Generator</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">Generate a new quiz every time from your chemistry notes. Choose topic, difficulty, and number of questions.</p>
        </div>
      </div>

      <div className="rounded-md border border-white/10 bg-[#10141d] p-5">
        <div className="grid gap-4 md:grid-cols-4">
          <label className="md:col-span-2">
            <span className="mb-2 block text-sm font-semibold text-slate-300">Topic</span>
            <select value={topic} onChange={(event) => setTopic(event.target.value)} className="w-full rounded-md border border-white/10 bg-[#070a0f] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400">
              {topicOptions.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>

          <label>
            <span className="mb-2 block text-sm font-semibold text-slate-300">Difficulty</span>
            <select value={difficulty} onChange={(event) => setDifficulty(event.target.value)} className="w-full rounded-md border border-white/10 bg-[#070a0f] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>

          <label>
            <span className="mb-2 block text-sm font-semibold text-slate-300">Questions</span>
            <select value={count} onChange={(event) => setCount(Number(event.target.value))} className="w-full rounded-md border border-white/10 bg-[#070a0f] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400">
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </label>
        </div>

        <button onClick={generateQuiz} disabled={loading} className="mt-5 inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60">
          {loading ? "Generating..." : "Generate unique AI quiz"}
        </button>

        {error && <p className="mt-4 rounded-md border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-100">{error}</p>}
      </div>

      {questions.length > 0 && (
        <div className="mt-6 space-y-5">
          {questions.map((question, index) => (
            <div key={index} className="rounded-md border border-white/10 bg-[#10141d] p-5">
              <p className="text-lg font-semibold text-white">{index + 1}. {question.question}</p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {question.options.map((option) => {
                  const isSelected = selected[index] === option;
                  const isCorrect = option === question.answer;
                  return (
                    <button key={option} onClick={() => setSelected({ ...selected, [index]: option })} className={`rounded-md border px-4 py-3 text-left text-sm transition ${checked && isCorrect ? "border-lime-400/60 bg-lime-400/10 text-lime-200" : checked && isSelected && !isCorrect ? "border-red-400/60 bg-red-400/10 text-red-200" : isSelected ? "border-cyan-400/60 bg-cyan-400/10 text-cyan-100" : "border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.07]"}`}>{option}</button>
                  );
                })}
              </div>
              {checked && <p className="mt-4 rounded-md bg-white/[0.04] p-3 text-sm leading-6 text-slate-300"><b className="text-white">Explanation.</b> {question.explanation}</p>}
            </div>
          ))}

          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => setChecked(true)} className="rounded-md bg-lime-300 px-5 py-3 font-semibold text-slate-950 hover:bg-lime-200">Check answers</button>
            <button onClick={generateQuiz} className="rounded-md border border-white/15 px-5 py-3 font-semibold text-white hover:bg-white/10">Regenerate unique quiz</button>
            {checked && <p className="text-sm font-semibold text-cyan-200">Score, {score} out of {questions.length}</p>}
          </div>
        </div>
      )}
    </section>
  );
}

function Quiz({ quizAns, setQuizAns }) { return <section id="quiz" className="mx-auto max-w-5xl scroll-mt-24 px-4 py-12 lg:px-8"><div className="mb-8 flex items-center gap-3"><BookOpen className="h-7 w-7 text-cyan-300" /><div><p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">active recall</p><h2 className="font-serif text-4xl font-black text-white">Quick Quiz</h2></div></div><div className="space-y-5">{quiz.map((item, index) => <div key={item.q} className="rounded-md border border-white/10 bg-[#10141d] p-5"><p className="text-lg font-semibold text-white">{index + 1}. {item.q}</p><div className="mt-4 grid gap-3 md:grid-cols-2">{item.options.map((option) => { const selected = quizAns[index] === option; const has = quizAns[index]; const correct = option === item.a; return <button key={option} onClick={() => setQuizAns({ ...quizAns, [index]: option })} className={`rounded-md border px-4 py-3 text-left text-sm transition ${has && correct ? "border-lime-400/60 bg-lime-400/10 text-lime-200" : selected && !correct ? "border-red-400/60 bg-red-400/10 text-red-200" : "border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.07]"}`}>{option}</button>; })}</div></div>)}</div></section>; }
