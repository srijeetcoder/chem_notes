import React, { useMemo, useState } from "react";
import { Download, Menu, X, Atom, BookOpen, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const sections = [
  {
    id: "cft",
    nav: "CO1: CFT",
    code: "CO1",
    title: "Crystal Field Theory",
    color: "cyan",
    intro: "Crystal Field Theory explains the structure, colour, magnetic behaviour, and stability of transition metal complexes. These notes start from basics, so you can study even without prior preparation.",
    formulas: ["Δt = 4 by 9 Δo", "CFSE in octahedral = n(t2g)(minus 0.4Δo) plus n(eg)(plus 0.6Δo)", "Magnetic moment μ = square root of n(n plus 2) BM", "Energy absorbed = hν = hc by λ"],
    lessons: [
      {
        title: "1. Coordination Complex Basics",
        explain: "A coordination complex contains a central metal ion surrounded by ligands. Ligands donate lone pairs to the metal ion. CFT treats this bond as electrostatic attraction. It also considers repulsion between ligand electrons and metal d electrons.",
        points: ["Central metal ion is usually a transition metal ion like Fe2 plus, Co3 plus, Ni2 plus, or Cu2 plus.", "Ligands are ions or molecules like Cl minus, H2O, NH3, CN minus, and CO.", "Coordination number means the number of donor atoms directly attached to the metal.", "Common shapes are octahedral, tetrahedral, and square planar."],
        example: "In [Co(NH3)6]3 plus, Co3 plus is the metal ion, NH3 is the ligand, and coordination number is 6."
      },
      {
        title: "2. Why d Orbitals Split",
        explain: "In a free metal ion, all five d orbitals have equal energy. This is called degeneracy. When ligands approach, they repel the d electrons. The repulsion is not equal for all orbitals because different d orbitals point in different directions. This unequal repulsion breaks degeneracy and causes splitting.",
        points: ["Orbitals facing ligands directly get more repulsion and higher energy.", "Orbitals lying between ligands get less repulsion and lower energy.", "The energy difference between the two groups is called crystal field splitting energy.", "Octahedral splitting is written as Δo. Tetrahedral splitting is written as Δt."],
        example: "In octahedral complexes, dx2 minus y2 and dz2 point toward ligands, so they move to higher energy."
      },
      {
        title: "3. Octahedral Splitting",
        explain: "In an octahedral complex, six ligands approach along the positive and negative x, y, and z axes. The dx2 minus y2 and dz2 orbitals point along these axes, so they face maximum repulsion. They form the higher energy eg set. The dxy, dxz, and dyz orbitals lie between axes, so they face less repulsion. They form the lower energy t2g set.",
        points: ["Higher set is eg, containing dx2 minus y2 and dz2.", "Lower set is t2g, containing dxy, dxz, and dyz.", "Each t2g electron gives stabilization of minus 0.4Δo.", "Each eg electron gives destabilization of plus 0.6Δo.", "The energy gap between t2g and eg is Δo."],
        example: "For low spin d6 octahedral, configuration is t2g6 eg0. CFSE is 6 multiplied by minus 0.4Δo, equal to minus 2.4Δo."
      },
      {
        title: "4. Tetrahedral Splitting",
        explain: "In a tetrahedral complex, four ligands approach between the axes. No ligand points directly at any d orbital. Therefore splitting is smaller than octahedral splitting. Here the e set is lower and the t2 set is higher.",
        points: ["Lower set is e, containing dx2 minus y2 and dz2.", "Higher set is t2, containing dxy, dxz, and dyz.", "Δt is nearly 4 by 9 of Δo.", "Tetrahedral complexes are mostly high spin because Δt is small."],
        example: "If Δo is 18000 cm minus 1, then Δt is 4 by 9 multiplied by 18000, equal to nearly 8000 cm minus 1."
      },
      {
        title: "5. High Spin and Low Spin",
        explain: "Electron arrangement depends on the comparison between crystal field splitting energy and pairing energy. If Δ is small, electrons occupy higher orbitals before pairing. This gives high spin. If Δ is large, electrons pair in lower orbitals before going to higher orbitals. This gives low spin.",
        points: ["Weak field ligands give small Δ and high spin complexes.", "Strong field ligands give large Δ and low spin complexes.", "High spin complexes have more unpaired electrons.", "Low spin complexes have fewer unpaired electrons.", "More unpaired electrons means stronger paramagnetism."],
        example: "[CoF6]3 minus is high spin because F minus is weak field. [Co(CN)6]3 minus is low spin because CN minus is strong field."
      },
      {
        title: "6. Spectrochemical Series",
        explain: "The spectrochemical series arranges ligands from weak field to strong field according to their ability to split d orbitals. It helps decide whether a complex will be high spin or low spin.",
        points: ["Weak field ligands are I minus, Br minus, SCN minus, Cl minus, and F minus.", "Medium field ligands include OH minus, H2O, NH3, and en.", "Strong field ligands include NO2 minus, CN minus, and CO.", "Weak field means small Δ and high spin.", "Strong field means large Δ and low spin."],
        example: "Order. I minus less than Br minus less than SCN minus less than Cl minus less than F minus less than OH minus less than H2O less than NH3 less than en less than NO2 minus less than CN minus less than CO."
      },
      {
        title: "7. Colour and Magnetic Properties",
        explain: "Transition metal complexes are often coloured because electrons absorb visible light and jump from lower d orbitals to higher d orbitals. Magnetic behaviour depends on unpaired electrons. Unpaired electrons make a complex paramagnetic. All paired electrons make it diamagnetic.",
        points: ["Energy absorbed is equal to Δ.", "Observed colour is complementary to absorbed colour.", "d0 and d10 complexes are often colourless because d d transition is not possible.", "Spin only magnetic moment is μ equal to square root of n(n plus 2) BM.", "n means number of unpaired electrons."],
        example: "For d5 high spin, n is 5. μ is square root of 5 multiplied by 7, equal to square root 35, equal to 5.92 BM."
      }
    ]
  },
  {
    id: "spectroscopy",
    nav: "CO2: Spectroscopy",
    code: "CO2",
    title: "Spectroscopy",
    color: "orange",
    intro: "Spectroscopy studies how matter interacts with electromagnetic radiation. In this syllabus, the key parts are vibrational spectroscopy and rotational spectroscopy.",
    formulas: ["Vibrational wavenumber = 1 by 2πc multiplied by square root of k by μ", "Reduced mass μ = m1m2 by m1 plus m2", "Linear molecule vibrational modes = 3N minus 5", "Non linear molecule vibrational modes = 3N minus 6", "Moment of inertia I = μr2", "Rotational line spacing = 2B"],
    lessons: [
      {
        title: "1. Meaning of Spectroscopy",
        explain: "Molecules have quantized energy levels. They absorb radiation only when the radiation energy matches the gap between two allowed energy levels. The absorbed radiation gives information about structure and bonding.",
        points: ["UV visible spectroscopy studies electronic transitions.", "IR spectroscopy studies vibrational transitions.", "Microwave spectroscopy studies rotational transitions.", "A spectrum is a record of absorbed or emitted radiation."],
        example: "IR spectroscopy identifies functional groups. Microwave spectroscopy helps calculate bond length."
      },
      {
        title: "2. Vibrational Spectroscopy",
        explain: "Atoms in a molecule are not fixed. They vibrate about their mean positions. A bond behaves like a spring. When IR radiation has the correct energy, the molecule absorbs it and moves to a higher vibrational level.",
        points: ["Common IR range is 4000 to 400 cm minus 1.", "A vibration is IR active only if it changes dipole moment.", "Stronger bond has larger force constant and higher frequency.", "Heavier atoms have larger reduced mass and lower frequency.", "Fingerprint region is 1500 to 400 cm minus 1 and is unique for each molecule."],
        example: "C double bond O stretching appears near 1700 cm minus 1 because the bond is strong."
      },
      {
        title: "3. Hooke Law Model",
        explain: "A chemical bond is treated as a spring joining two atoms. The vibrational frequency depends on the force constant and reduced mass. Stronger bonds vibrate faster. Heavier atoms vibrate slower.",
        points: ["Force constant k measures bond strength.", "Reduced mass μ depends on atomic masses.", "Higher k increases frequency.", "Higher μ decreases frequency."],
        example: "C H stretching has higher frequency than C Cl stretching because hydrogen is lighter."
      },
      {
        title: "4. Types of Vibrations",
        explain: "Vibrations are mainly stretching and bending. Stretching changes bond length. Bending changes bond angle. Bending needs less energy than stretching.",
        points: ["Symmetric stretching means bonds lengthen and shorten together.", "Asymmetric stretching means one bond lengthens while another shortens.", "Scissoring and rocking are in plane bending vibrations.", "Wagging and twisting are out of plane bending vibrations."],
        example: "CO2 symmetric stretch is IR inactive because dipole moment does not change. CO2 asymmetric stretch is IR active because dipole moment changes."
      },
      {
        title: "5. Number of Vibrational Modes",
        explain: "A molecule with N atoms has 3N total degrees of freedom. Some are used in translation and rotation. The remaining are vibrational modes.",
        points: ["Linear molecule has 3N minus 5 vibrational modes.", "Non linear molecule has 3N minus 6 vibrational modes.", "Linear molecules have two rotational degrees of freedom.", "Non linear molecules have three rotational degrees of freedom."],
        example: "CO2 is linear and has 3 atoms. Modes are 3 multiplied by 3 minus 5, equal to 4. H2O is non linear and has 3 atoms. Modes are 3 multiplied by 3 minus 6, equal to 3."
      },
      {
        title: "6. Rotational Spectroscopy",
        explain: "Rotational spectroscopy occurs in the microwave region. It is due to transitions between rotational energy levels. A molecule must have permanent dipole moment to show pure rotational spectrum.",
        points: ["HCl is rotationally active because it has permanent dipole moment.", "CO and H2O are rotationally active.", "N2 and O2 are inactive because they are homonuclear and have no dipole moment.", "CO2 is inactive in pure rotational spectroscopy because it has no permanent dipole moment."],
        example: "HCl gives rotational spectrum, but N2 does not."
      },
      {
        title: "7. Rigid Rotor Model",
        explain: "A diatomic molecule is treated as two masses connected by a fixed bond length. The molecule rotates about its centre of mass. Rotational energy depends on moment of inertia.",
        points: ["Moment of inertia I is μr2.", "Rotational quantum number J is 0, 1, 2, 3, and so on.", "Selection rule is ΔJ equal to plus or minus 1.", "Rigid rotor spectral lines are equally spaced by 2B."],
        example: "If spacing between lines is 20 cm minus 1, then 2B is 20 and B is 10 cm minus 1."
      }
    ]
  },
  {
    id: "stereochemistry",
    nav: "CO5: Stereochemistry",
    code: "CO5",
    title: "Stereochemistry",
    color: "green",
    intro: "Stereochemistry studies the three dimensional arrangement of atoms in molecules. It explains chirality, optical activity, enantiomers, diastereomers, and projection formulae.",
    formulas: ["Specific rotation = observed rotation by path length multiplied by concentration", "Maximum stereoisomers = 2 power n", "Enantiomeric excess = absolute difference of R and S by total R plus S multiplied by 100"],
    lessons: [
      {
        title: "1. Meaning of Stereochemistry",
        explain: "Stereoisomers have the same molecular formula and same bonding pattern, but different arrangement of atoms in space. This difference can change physical, chemical, and biological properties.",
        points: ["Constitutional isomers differ in connectivity.", "Stereoisomers have same connectivity but different spatial arrangement.", "Stereochemistry is important in medicines and biological systems.", "Different stereoisomers can behave differently in the body."],
        example: "Two enantiomers of a drug can have different effects because body receptors are chiral."
      },
      {
        title: "2. Symmetry Elements",
        explain: "Symmetry helps decide whether a molecule is chiral or achiral. A molecule with an internal plane of symmetry is usually achiral, even if it has chiral centres.",
        points: ["Cn is an axis of rotation.", "Plane of symmetry divides a molecule into two mirror halves.", "Centre of symmetry means each point has an opposite equivalent point.", "Improper axis means rotation followed by reflection.", "Plane of symmetry usually makes a molecule achiral."],
        example: "Meso compounds are achiral because they have internal symmetry."
      },
      {
        title: "3. Chirality",
        explain: "A molecule is chiral if it is not superimposable on its mirror image. A carbon attached to four different groups is called a chiral centre or asymmetric carbon.",
        points: ["Chiral molecules exist as enantiomer pairs.", "Enantiomers are mirror images that cannot be overlapped.", "Achiral molecules are superimposable on their mirror images.", "A molecule with one chiral centre is always chiral.", "A molecule with many chiral centres can be achiral if symmetry is present."],
        example: "A carbon attached to H, Cl, CH3, and C2H5 is chiral because all four groups are different."
      },
      {
        title: "4. Optical Activity",
        explain: "Chiral molecules rotate plane polarized light. Clockwise rotation is dextrorotatory and is written as plus. Anticlockwise rotation is laevorotatory and is written as minus.",
        points: ["Dextrorotatory means plus rotation.", "Laevorotatory means minus rotation.", "Enantiomers rotate light equally but in opposite directions.", "A racemic mixture contains equal enantiomers and is optically inactive.", "Optical activity depends on chirality."],
        example: "If one enantiomer rotates light by plus 20 degrees, the other rotates it by minus 20 degrees under same conditions."
      },
      {
        title: "5. R and S Configuration",
        explain: "R and S configuration gives absolute arrangement around a chiral centre. It is assigned using Cahn Ingold Prelog priority rules. Higher atomic number gets higher priority.",
        points: ["Give priorities 1 to 4 to groups attached to the chiral centre.", "Higher atomic number gets higher priority.", "If first atoms are same, compare the next atoms.", "Keep lowest priority group away from viewer.", "Trace 1 to 2 to 3. Clockwise is R. Anticlockwise is S."],
        example: "For Cl, OH, CH3, and H, priority order is Cl greater than OH greater than CH3 greater than H."
      },
      {
        title: "6. Enantiomers and Diastereomers",
        explain: "Enantiomers are non superimposable mirror images. Diastereomers are stereoisomers that are not mirror images. Diastereomers usually have different physical properties.",
        points: ["Enantiomers differ in direction of optical rotation.", "Enantiomers have same properties in achiral conditions.", "Diastereomers have different physical and chemical properties.", "Cis trans isomerism is a type of diastereomerism."],
        example: "Cis 2 butene and trans 2 butene are diastereomers."
      },
      {
        title: "7. Projection Formulae",
        explain: "Projection formulae help show three dimensional molecules on paper. Fischer, Newman, and Sawhorse projections are common in stereochemistry.",
        points: ["Fischer projection is common for carbohydrates and amino acids.", "In Fischer projection, horizontal bonds come toward viewer and vertical bonds go away.", "Newman projection views the molecule along a carbon carbon bond.", "Sawhorse projection shows an angled side view.", "Newman projection helps compare staggered and eclipsed conformations."],
        example: "Staggered ethane is more stable than eclipsed ethane because repulsion is lower."
      }
    ]
  }
];

const topicOptions = [
  "Crystal Field Theory",
  "Spectroscopy",
  "Stereochemistry",
  "Mixed CA3 Revision"
];

function notesForTopic(topic) {
  if (topic === "Mixed CA3 Revision") {
    return sections.map((section) => {
      return section.title + "
      " + section.intro + "
      " + section.formulas.join("
      ") + "
      " + section.lessons.map((lesson) => lesson.title + ". " + lesson.explain + " " + lesson.points.join(" ")).join("
      ");
    }).join("

");
  }

  const selected = sections.find((section) => section.title === topic);
  if (!selected) return "";
  return selected.title + "
  " + selected.intro + "
  " + selected.formulas.join("
  ") + "
  " + selected.lessons.map((lesson) => lesson.title + ". " + lesson.explain + " " + lesson.points.join(" ")).join("
  ");
}

function accent(color) {
  if (color === "orange") return "text-orange-300 border-orange-400/40 bg-orange-400/10";
  if (color === "green") return "text-lime-300 border-lime-400/40 bg-lime-400/10";
  return "text-cyan-300 border-cyan-400/40 bg-cyan-400/10";
}

function downloadPdf() {
  const loadScript = () => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
    script.onload = createPdf;
    document.body.appendChild(script);
  };

  const createPdf = () => {
    const doc = new window.jspdf.jsPDF({ unit: "pt", format: "a4" });
    const margin = 44;
    const width = doc.internal.pageSize.getWidth() - margin * 2;
    const height = doc.internal.pageSize.getHeight();
    let y = 52;

    const add = (text, size, bold) => {
      doc.setFont("helvetica", bold ? "bold" : "normal");
      doc.setFontSize(size);
      const wrapped = doc.splitTextToSize(text || " ", width);
      wrapped.forEach((line) => {
        if (y > height - 48) {
          doc.addPage();
          y = 52;
        }
        doc.text(line, margin, y);
        y += size + 5;
      });
    };

    add("Chemistry Master Notes", 20, true);
    add("Detailed offline notes for CO1, CO2, and CO5", 11, false);
    y += 12;

    sections.forEach((section) => {
      add(section.code + ": " + section.title, 16, true);
      add(section.intro, 10, false);
      y += 8;
      add("Important Formulae", 12, true);
      section.formulas.forEach((f, i) => add(String(i + 1) + ". " + f, 10, false));
      y += 8;
      section.lessons.forEach((lesson) => {
        add(lesson.title, 13, true);
        add(lesson.explain, 10, false);
        lesson.points.forEach((p, i) => add(String(i + 1) + ". " + p, 10, false));
        add("Example. " + lesson.example, 10, true);
        y += 8;
      });
    });

    doc.save("detailed-chemistry-notes.pdf");
  };

  if (window.jspdf) createPdf();
  else loadScript();
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState({});
  const lessonCount = useMemo(() => sections.reduce((sum, section) => sum + section.lessons.length, 0), []);

  return (
    <div className="min-h-screen bg-[#080b10] text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,212,255,0.08),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,107,53,0.06),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(127,255,107,0.06),transparent_30%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b10]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          <a href="#home" className="flex items-center gap-2 font-serif text-lg font-bold text-white"><Atom className="h-5 w-5 text-cyan-300" /> Chemistry Master Notes</a>
          <nav className="hidden items-center gap-5 lg:flex">
            {sections.map((s) => <a key={s.id} href={`#${s.id}`} className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400 hover:text-cyan-300">{s.nav}</a>)}
            <a href="#quiz" className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400 hover:text-cyan-300">Quiz</a>
          </nav>
          <button onClick={downloadPdf} className="hidden items-center gap-2 rounded-md border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-cyan-200 hover:bg-cyan-400/20 lg:inline-flex"><Download className="h-4 w-4" /> PDF Notes</button>
          <button className="lg:hidden" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
        </div>
        {menu && <div className="border-t border-white/10 px-4 py-4 lg:hidden"><div className="flex flex-col gap-3">{sections.map((s) => <a key={s.id} href={`#${s.id}`} onClick={() => setMenu(false)} className="text-sm text-slate-300">{s.nav}</a>)}<button onClick={downloadPdf} className="inline-flex items-center justify-center gap-2 rounded-md border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200"><Download className="h-4 w-4" /> Download PDF</button></div></div>}
      </header>

      <main id="home">
        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-md border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.25em] text-cyan-200">MAKAUT Chemistry CA3</p>
            <h1 className="font-serif text-5xl font-black leading-tight text-white lg:text-7xl">Detailed Chemistry Notes for Full Revision.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">These notes are made for starting from zero. Every topic has explanation, points, formulae, and examples. The PDF download gives offline notes for revision.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#cft" className="rounded-md bg-cyan-300 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-200">Start CO1</a><button onClick={downloadPdf} className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 font-semibold text-white hover:bg-white/10"><Download className="h-4 w-4" /> Download Offline Notes</button></div>
          </motion.div>
          <div className="mt-14 grid gap-4 md:grid-cols-3"><Stat label="Course Outcomes" value="3" /><Stat label="Detailed Lessons" value={String(lessonCount)} /><Stat label="PDF Download" value="Ready" /></div>
        </section>

        <OrbitalDiagram />

        {sections.map((section) => (
          <section key={section.id} id={section.id} className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 lg:px-8">
            <div className="mb-10 border-b border-white/10 pb-6"><span className={`inline-flex rounded-md border px-3 py-1 font-mono text-xs uppercase tracking-[0.25em] ${accent(section.color)}`}>{section.code}</span><h2 className="mt-4 font-serif text-4xl font-black text-white lg:text-5xl">{section.title}</h2><p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">{section.intro}</p></div>
            <div className="mb-8 rounded-md border border-white/10 bg-white/[0.03] p-5"><h3 className="mb-4 font-serif text-2xl font-bold text-white">Important Formulae</h3><div className="grid gap-3 md:grid-cols-2">{section.formulas.map((formula) => <div key={formula} className={`rounded-md border p-4 font-mono text-sm ${accent(section.color)}`}>{formula}</div>)}</div></div>
            <div className="space-y-5">
              {section.lessons.map((lesson, index) => {
                const key = section.id + String(index);
                const isOpen = open[key] !== false;
                return <article key={lesson.title} className="overflow-hidden rounded-md border border-white/10 bg-[#11141b] shadow-2xl shadow-black/20"><button onClick={() => setOpen({ ...open, [key]: !isOpen })} className="flex w-full items-center justify-between gap-4 border-b border-white/10 px-5 py-4 text-left hover:bg-white/[0.03]"><h3 className="font-serif text-2xl font-bold text-white">{lesson.title}</h3>{isOpen ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}</button>{isOpen && <div className="grid gap-6 p-5 lg:grid-cols-[1.1fr_0.9fr]"><div><p className="text-base leading-8 text-slate-300">{lesson.explain}</p><div className={`mt-5 rounded-md border p-4 ${accent(section.color)}`}><p className="font-semibold text-white">Example</p><p className="mt-2 text-sm leading-7 text-slate-200">{lesson.example}</p></div></div><ul className="space-y-3">{lesson.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-slate-300"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" /><span>{point}</span></li>)}</ul></div>}</article>;
              })}
            </div>
          </section>
        ))}

        <AIQuiz />
      </main>
      <footer className="border-t border-white/10 px-4 py-8 text-center font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Vercel ready React website with offline PDF notes</footer>
    </div>
  );
}

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
    <section id="quiz" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 lg:px-8">
      <div className="mb-8 flex items-center gap-3">
        <BookOpen className="h-7 w-7 text-cyan-300" />
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">AI Practice</p>
          <h2 className="font-serif text-4xl font-black text-white">Gemini AI Quiz Generator</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">Generate a new quiz every time from your chemistry notes. Choose topic, difficulty, and number of questions.</p>
        </div>
      </div>

      <div className="rounded-md border border-white/10 bg-[#11141b] p-5">
        <div className="grid gap-4 md:grid-cols-4">
          <label className="md:col-span-2">
            <span className="mb-2 block text-sm font-semibold text-slate-300">Topic</span>
            <select value={topic} onChange={(event) => setTopic(event.target.value)} className="w-full rounded-md border border-white/10 bg-[#080b10] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400">
              {topicOptions.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>

          <label>
            <span className="mb-2 block text-sm font-semibold text-slate-300">Difficulty</span>
            <select value={difficulty} onChange={(event) => setDifficulty(event.target.value)} className="w-full rounded-md border border-white/10 bg-[#080b10] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>

          <label>
            <span className="mb-2 block text-sm font-semibold text-slate-300">Questions</span>
            <select value={count} onChange={(event) => setCount(Number(event.target.value))} className="w-full rounded-md border border-white/10 bg-[#080b10] px-3 py-3 text-sm text-white outline-none focus:border-cyan-400">
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
            <div key={index} className="rounded-md border border-white/10 bg-[#11141b] p-5">
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

function Stat({ label, value }) {
  return <div className="rounded-md border border-white/10 bg-white/[0.03] p-5"><p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p><p className="mt-2 font-serif text-4xl font-black text-white">{value}</p></div>;
}

function OrbitalDiagram() {
  return <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8"><div className="rounded-md border border-white/10 bg-[#11141b] p-6"><p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.35em] text-slate-400">d orbital energy level diagrams</p><div className="grid gap-8 lg:grid-cols-3"><Diagram title="Octahedral Oh" top="eg, dx2 minus y2, dz2" bottom="t2g, dxy, dxz, dyz" delta="Δo" note="6 ligands along positive and negative x, y, z" /><div className="flex min-h-72 flex-col items-center justify-center rounded-md border border-white/10 bg-black/10 p-5"><p className="mb-8 font-mono text-sm font-bold text-white">Free Metal Ion</p><div className="space-y-3">{[1, 2, 3, 4, 5].map((n) => <div key={n} className="h-0.5 w-36 bg-slate-400" />)}</div><p className="mt-6 font-mono text-xs text-slate-400">5 degenerate d orbitals</p></div><Diagram title="Tetrahedral Td" top="t2, dxy, dxz, dyz" bottom="e, dx2 minus y2, dz2" delta="Δt" note="4 ligands, Δt = 4 by 9 Δo" /></div></div><div className="mt-6 rounded-md border border-cyan-400/30 bg-cyan-400/10 p-5 text-slate-200"><b>Key relationship.</b> Δt is nearly 4 by 9 of Δo. Tetrahedral splitting is smaller because there are only four ligands and no ligand points directly at the d orbitals.</div><div className="mt-6 rounded-md border border-white/10 bg-[#11141b] p-5"><p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-400">Spectrochemical series, weak to strong field</p><p className="mt-4 overflow-x-auto whitespace-nowrap font-mono text-sm text-slate-200">I minus to Br minus to SCN minus to Cl minus to F minus to OH minus to H2O to NH3 to en to NO2 minus to CN minus to CO</p><div className="mt-5 h-1 rounded-full bg-gradient-to-r from-orange-400 via-slate-400 to-cyan-300" /><div className="mt-2 flex justify-between font-mono text-xs text-slate-400"><span>Weak field, small Δ, high spin</span><span>Strong field, large Δ, low spin</span></div></div></section>;
}

function Diagram({ title, top, bottom, delta, note }) {
  return <div className="min-h-72 rounded-md border border-white/10 bg-black/10 p-5"><p className="mb-8 text-center font-mono text-sm font-bold text-white">{title}</p><div className="relative mx-auto h-44 max-w-xs"><div className="absolute left-3 top-0 h-full w-px bg-slate-700" /><span className="absolute left-1 -top-4 font-mono text-xs text-slate-400">E</span><div className="absolute left-10 top-4"><div className="h-1 w-20 rounded bg-orange-400 shadow-lg shadow-orange-400/40" /><div className="mt-3 h-1 w-20 rounded bg-orange-400 shadow-lg shadow-orange-400/40" /><p className="mt-2 font-mono text-xs text-orange-200">{top}</p></div><div className="absolute left-6 top-16 h-20 border-l border-dashed border-slate-500" /><span className="absolute left-8 top-20 font-mono text-xs text-white">{delta}</span><div className="absolute left-10 bottom-3"><div className="h-1 w-20 rounded bg-cyan-300 shadow-lg shadow-cyan-300/40" /><div className="mt-3 h-1 w-20 rounded bg-cyan-300 shadow-lg shadow-cyan-300/40" /><div className="mt-3 h-1 w-20 rounded bg-cyan-300 shadow-lg shadow-cyan-300/40" /><p className="mt-2 font-mono text-xs text-cyan-200">{bottom}</p></div></div><p className="mt-4 text-center font-mono text-xs text-slate-400">{note}</p></div>;
}
