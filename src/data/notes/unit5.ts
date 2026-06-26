export const unit5Notes = [
  {
    unitNumber: 5,
    unitTitle: "Periodic Properties",
    topicTitle: "Effective nuclear charge and Slater's rules",
    definition: "Effective nuclear charge (Zeff) is the net positive charge experienced by an electron in a multi-electron atom. It is less than the actual nuclear charge (Z) due to shielding (or screening) by inner-shell electrons: Zeff = Z - S, where S is the shielding constant.",
    explanation: "In a multi-electron atom, electrons are attracted to the positive nucleus but repelled by other electrons. The inner electrons shield the outer valence electrons from the full attractive force of the nucleus. John C. Slater formulated a set of empirical rules to calculate the shielding constant (S) for a specific electron. According to Slater's rules, the atomic orbitals are grouped in order of increasing principal quantum number (n) and azimuthal quantum number (l). For an electron in an (ns, np) group: 1. Electrons in groups outside the chosen one contribute 0 to S. 2. Other electrons in the same (ns, np) group contribute 0.35 each (except 1s, which contributes 0.30). 3. Electrons in the (n-1) shell contribute 0.85 each. 4. Electrons in the (n-2) and deeper shells contribute 1.00 each. For an electron in an (nd) or (nf) group: 1. Other electrons in the same group contribute 0.35 each. 2. All electrons in shells closer to the nucleus (lower n or same n but s/p) contribute 1.00 each. Calculating S allows the determination of Zeff, which explains atomic properties like size and ionization energy.",
    formulas: [
      "Z_eff = Z - S (Effective nuclear charge)",
      "S = Σ (Number of electrons in group * shielding factor) (Slater's shielding constant)"
    ],
    equations: [
      "Calculation for 2p electron in Carbon (Z=6, 1s² 2s² 2p²): Groups are (1s)² (2s, 2p)⁴. For one 2p electron, S = (3 * 0.35) + (2 * 0.85) = 1.05 + 1.70 = 2.75. Zeff = 6 - 2.75 = 3.25."
    ],
    applications: [
      "Predicting periodic trends in atomic radii, ionization energies, and electron affinities.",
      "Explaining the relative stability of valence electron shells in transition metal chemistry.",
      "Computing electronegativity scales based on effective nuclear charge (Allred-Rochow scale)."
    ],
    importantPoints: [
      "Zeff increases across a period because the nuclear charge (Z) increases by 1 for each element, while the shielding (S) by valence electrons only increases by 0.35.",
      "Zeff remains relatively constant down a group because the increase in nuclear charge is balanced by the shielding of new inner electron shells.",
      "d and f electrons are poor shielders compared to s and p electrons, which explains the high Zeff of post-transition metals and lanthanides.",
      "Slater's rules are an approximation; modern quantum mechanics uses Hartree-Fock calculations to find more accurate shielding values."
    ],
    commonQuestions: [
      "What is effective nuclear charge? State Slater's rules for calculating the shielding constant.",
      "Calculate the effective nuclear charge (Zeff) experienced by a 3d valence electron and a 4s valence electron in Zinc (Z = 30).",
      "Why does the effective nuclear charge increase across a period but change very little down a group?"
    ],
    shortAnswer: "Effective nuclear charge (Zeff = Z - S) is the net attractive force felt by a valence electron after accounting for shielding (S) by core electrons. Slater's rules calculate S by assigning weight factors: same-shell electrons shield poorly (0.35), shell n-1 shields moderately (0.85), and deeper shells shield completely (1.00).",
    longAnswer: "Effective nuclear charge (Zeff) represents the net positive charge experienced by an electron in a multi-electron atom. The core electrons shield the valence electrons from the full positive charge of the nucleus. The relationship is expressed as Zeff = Z - S, where Z is the atomic number and S is the shielding constant. John C. Slater developed empirical rules to calculate S by grouping atomic orbitals by principal quantum number: (1s) (2s, 2p) (3s, 3p) (3d) (4s, 4p) (4d) (4f)... For a valence electron in an (ns, np) orbital, the shielding constant S is calculated by adding: 1. 0.35 for each of the other electrons in the same (ns, np) group. 2. 0.85 for each of the electrons in the (n-1) shell. 3. 1.00 for each of the electrons in the (n-2) and deeper shells. For a valence electron in an (nd) or (nf) orbital, the shielding is: 1. 0.35 for each of the other electrons in the same (nd) or (nf) group. 2. 1.00 for all electrons in lower-energy groups. To illustrate, consider Zinc (Z = 30, 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s²). For a 4s valence electron, the grouping is (1s)² (2s,2p)⁸ (3s,3p)⁸ (3d)¹⁰ (4s)². The shielding is S = (1 * 0.35) + (18 * 0.85) + (10 * 1.00) = 0.35 + 15.30 + 10.00 = 25.65. This gives Zeff = 30 - 25.65 = 4.35. For a 3d electron in the same atom, the grouping is (1s)² (2s,2p)⁸ (3s,3p)⁸ (3d)¹⁰. Electrons in the 4s group do not shield the 3d electrons. The shielding is S = (9 * 0.35) + (18 * 1.00) = 3.15 + 18.00 = 21.15. This gives Zeff = 30 - 21.15 = 8.85. The much higher Zeff felt by the 3d electrons explains why they are held more tightly and are closer to the nucleus than the 4s electrons, even though the 4s orbital is filled first.",
    derivation: [
      {
        title: "Step 1 — Slater's Rules for shielding calculation",
        steps: [
          "Group orbitals by principal quantum number: $(1s)\\ (2s,2p)\\ (3s,3p)\\ (3d)\\ (4s,4p)\\ (4d)\\ (4f)\\ (5s,5p)\\ \\dots$",
          "For an electron in a given $(ns, np)$ group:",
          "1. Electrons in groups to the right (higher energy) contribute $0$ shielding.",
          "2. Other electrons in the same $(ns, np)$ group shield by $0.35$ each (except the $1s$ group where other electron shields by $0.30$).",
          "3. Electrons in the $(n-1)$ shell shield by $0.85$ each.",
          "4. Electrons in $(n-2)$ and deeper shells shield by $1.00$ each.",
          "For an electron in a given $(nd)$ or $(nf)$ group:",
          "1. Other electrons in the same group shield by $0.35$ each.",
          "2. All electrons in groups to the left (inner shells or same $n$ but $s/p$) shield by $1.00$ each."
        ]
      },
      {
        title: "Step 2 — Worked Calculation: Valence electron in Nitrogen (Z = 7)",
        steps: [
          "Electron configuration of Nitrogen: $1s^2\\ 2s^2\\ 2p^3$",
          "Grouped configuration: $(1s)^2\\ (2s, 2p)^5$",
          "We calculate the shielding constant ($\\sigma$ or $S$) for one of the valence electrons in the $(2s, 2p)$ group.",
          "There are $5 - 1 = 4$ other electrons in the same $(2s, 2p)$ group, contributing: $4 \\times 0.35 = 1.40$",
          "There are $2$ electrons in the $n-1$ shell ($(1s)$ group), contributing: $2 \\times 0.85 = 1.70$",
          "Total shielding constant: $S = 1.40 + 1.70 = 3.10$",
          "Effective nuclear charge: $Z_{eff} = Z - S = 7 - 3.10 = \\boxed{3.90}$"
        ]
      },
      {
        title: "Step 3 — Worked Calculation: Valence 4s electron in Zinc (Z = 30)",
        steps: [
          "Electron configuration of Zinc: $1s^2\\ 2s^2\\ 2p^6\\ 3s^2\\ 3p^6\\ 3d^{10}\\ 4s^2$",
          "Grouped configuration: $(1s)^2\\ (2s, 2p)^8\\ (3s, 3p)^8\\ (3d)^{10}\\ (4s)^2$",
          "We calculate shielding constant $S$ for one $4s$ valence electron ($n=4$):",
          "1. Other electrons in same $(4s)$ group: $1$ electron $\\times 0.35 = 0.35$",
          "2. Electrons in $n-1$ shell ($(3s, 3p)$ and $(3d)$ groups, total $8+10 = 18$ electrons): $18 \\times 0.85 = 15.30$",
          "3. Electrons in $n-2$ and deeper shells ($(1s)$ and $(2s, 2p)$ groups, total $2+8 = 10$ electrons): $10 \\times 1.00 = 10.00$",
          "Total shielding: $S = 0.35 + 15.30 + 10.00 = 25.65$",
          "Effective nuclear charge: $Z_{eff} = Z - S = 30 - 25.65 = \\boxed{4.35}$"
        ]
      },
      {
        title: "Step 4 — Worked Calculation: Inner 3d electron in Zinc (Z = 30)",
        steps: [
          "Grouped configuration: $(1s)^2\\ (2s, 2p)^8\\ (3s, 3p)^8\\ (3d)^{10}\\ (4s)^2$",
          "We calculate shielding constant $S$ for one $3d$ electron ($n=3$):",
          "1. Electrons in groups to the right (the $(4s)$ group): contribute $0$ shielding.",
          "2. Other electrons in same $(3d)$ group: $10 - 1 = 9$ electrons $\\times 0.35 = 3.15$",
          "3. All electrons in groups to the left ($(1s)$, $(2s, 2p)$, and $(3s, 3p)$ groups, total $2+8+8 = 18$ electrons): $18 \\times 1.00 = 18.00$",
          "Total shielding: $S = 3.15 + 18.00 = 21.15$",
          "Effective nuclear charge: $Z_{eff} = Z - S = 30 - 21.15 = \\boxed{8.85}$",
          "Conclusion: The $3d$ electrons feel a much higher effective nuclear charge ($8.85$) than the $4s$ electrons ($4.35$), explaining why they are held more tightly and why $4s$ electrons are ionized first."
        ]
      }
    ],
    questionsAndAnswers: [
      {
        question: "What is the shielding constant value for 1s orbital electron?",
        answer: "For a single isolated electron in the 1s orbital (like in a Hydrogen atom), the shielding constant is **zero ($\\sigma = 0$)** because there are no other electrons present to shield it from the nucleus. In a multi-electron atom, a 1s electron is shielded by another 1s electron in the same shell by **$0.30$** according to Slater's rules.",
        type: "very_short",
        marks: "1 Mark"
      },
      {
        question: "Define screening constant and calculate effective nuclear charge.",
        answer: "1. **Screening Constant (Shielding Constant, $\\sigma$):** A measure of the reduction in nuclear attraction experienced by a valence electron due to the electrostatic repulsion from inner-shell (intervening) electrons.\n2. **Effective Nuclear Charge ($Z_{eff}$):** The actual net positive nuclear charge experienced by an electron in a multi-electron atom. It is calculated by subtracting the screening constant from the actual nuclear charge (atomic number, $Z$):\n\n$Z_{eff} = Z - \\sigma$\n\nA higher $Z_{eff}$ indicates that the electron is held more tightly by the nucleus, directly influencing atomic size and ionization energy.",
        type: "long",
        marks: "5 Marks"
      },
      {
        question: "Calculate effective nuclear charge using Slater’s rule.",
        answer: "**Slater's Rules for $ns/np$ Valence Electron:**\n- Group configuration: $(1s)(2s, 2p)(3s, 3p)(3d)(4s, 4p)...$\n- Electrons to the right contribute $0$ shielding.\n- Electrons in the same group contribute $0.35$ each (except $1s$, which is $0.30$).\n- Electrons in $(n-1)$ shell contribute $0.85$ each.\n- Electrons in $(n-2)$ shell or lower contribute $1.00$ each.\n\n**Example Calculation for a valence electron in Nitrogen ($Z=7$):**\n- Electronic configuration grouped: $(1s^2)(2s^2 2p^3)$\n- The electron of interest is in the $(2s, 2p)$ group ($n=2$). There are 4 other electrons in this same group.\n- The inner shell is $(1s)$ ($n-1 = 1$), which contains 2 electrons.\n\n**Calculate Shielding Constant ($\\sigma$):**\n\n$\\sigma = (4 \\times 0.35) + (2 \\times 0.85) = 1.40 + 1.70 = 3.10$\n\n**Calculate Effective Nuclear Charge ($Z_{eff}$):**\n\n$Z_{eff} = Z - \\sigma = 7 - 3.10 = 3.90$\n\n**Answer:** The effective nuclear charge for a valence electron in Nitrogen is **3.90**.",
        type: "long",
        marks: "5 Marks"
      }
    ]
  },
  {
    unitNumber: 5,
    unitTitle: "Periodic Properties",
    topicTitle: "Penetration of orbitals",
    definition: "Penetration of orbitals describes the ability of an electron in a given orbital to spend time close to the nucleus, passing through the shielding electron clouds of inner shells.",
    explanation: "Although an orbital's energy depends primarily on its principal quantum number (n), the radial probability distribution functions show that different subshells (s, p, d, f) have different probability densities close to the nucleus. An s-orbital has a higher probability density near the nucleus because it has radial nodes and a non-zero probability at r = 0. A p-orbital has a node at the nucleus, and d and f orbitals have even larger regions of zero probability near the center. Thus, for a given shell n, the s-orbital penetrates closest to the nucleus, followed by p, d, and f orbitals. Because s-electrons penetrate the inner core electrons, they experience less shielding and feel a higher effective nuclear charge (Zeff). This makes the s-orbital lower in energy than the p, d, and f orbitals of the same shell, splitting the degeneracy of the n energy levels in multi-electron atoms.",
    formulas: [
      "Order of penetration: s > p > d > f",
      "Order of shielding ability: s > p > d > f"
    ],
    equations: [
      "Radial Probability Function: P(r) = r² * R_nl(r)² (describes the probability of finding an electron in a spherical shell of radius r)"
    ],
    applications: [
      "Explaining why the 4s orbital is filled before the 3d orbital in the transition metals (K, Ca) because 4s penetrates the argon core more effectively, lowering its energy.",
      "Accounting for the inert pair effect in heavy p-block elements (e.g., Pb, Bi) where the 6s electrons are held tightly due to relativistic penetration, making them chemically inert.",
      "Understanding the hybridization properties of atomic orbitals during chemical bond formation."
    ],
    importantPoints: [
      "Penetration is determined by the behavior of the radial wave function near the nucleus (r → 0).",
      "Orbitals that penetrate more effectively are better shielders. Thus, s-electrons shield other electrons very well, while d and f electrons are poor shielders.",
      "The poor shielding of 4f electrons (due to their low penetration) causes the lanthanide contraction, which reduces the size of 5d transition metals.",
      "Penetration explain why subshell energies follow the order ns < np < nd < nf in multi-electron atoms, whereas they are degenerate in the single-electron hydrogen atom."
    ],
    commonQuestions: [
      "Explain the concept of orbital penetration and its role in splitting subshell energy levels.",
      "Why is the 4s orbital filled before the 3d orbital in Potassium, but the 3d orbital becomes lower in energy in Sc?",
      "Compare the radial probability distribution curves of 3s, 3p, and 3d orbitals to explain their relative penetration and energies."
    ],
    shortAnswer: "Penetration is the ability of an electron in an orbital to get close to the nucleus. Due to radial nodes, s-orbitals penetrate the core electron cloud best, followed by p, d, and f. Better penetration increases Zeff and lowers orbital energy, explaining why the subshell energies of a shell follow the order ns < np < nd < nf.",
    longAnswer: "Orbital penetration refers to the probability of finding an electron close to the nucleus within the inner core electron shells. In a hydrogen atom, energy depends only on the principal quantum number n, and all subshells of a given shell (e.g., 3s, 3p, 3d) are degenerate. In multi-electron atoms, this degeneracy is removed by electron-electron repulsions and shielding. The radial probability distribution function, P(r) = r²R(r)², describes the probability of finding an electron at distance r from the nucleus. Examining the plots of these functions for 3s, 3p, and 3d orbitals reveals that the 3s orbital has two radial nodes and a small probability peak close to the nucleus, within the 1s and 2s core shells. The 3p orbital has one node and a smaller peak near the center, while the 3d orbital has zero nodes and its probability density is concentrated far from the nucleus. Thus, the 3s orbital penetrates the inner electron core most effectively, followed by 3p, and then 3d. An orbital that penetrates the core experiences a stronger nuclear attraction (higher Zeff) and is lower in energy. This explains the subshell energy order: ns < np < nd < nf. It also explains why potassium fills the 4s orbital before the 3d orbital: the 4s electron penetrates the argon core, lowering its energy below the 3d orbital. Furthermore, since s-electrons penetrate closest, they are held most tightly, which explains the inert pair effect in heavy metals like lead (Pb²⁺ stable, Pb⁴⁺ oxidizing) where the 6s² electrons resist ionization."
  },
  {
    unitNumber: 5,
    unitTitle: "Periodic Properties",
    topicTitle: "Variations of s, p, d and f orbital energies of atoms in the periodic table",
    definition: "The variation of orbital energies refers to the shifting relative energy levels of the s, p, d, and f atomic subshells across periods and down groups in the periodic table, driven by changes in nuclear charge (Z) and electron shielding.",
    explanation: "As we move across a period, the atomic number Z increases. This increase in positive charge stabilizes all orbitals, lowering their energy. However, the rate of stabilization varies by orbital type. Because s-orbitals penetrate closest to the nucleus, they are stabilized most rapidly, followed by p-orbitals. The d and f orbitals, which do not penetrate the core effectively, are stabilized more slowly. For example, in the third period, the 3s and 3p orbitals drop rapidly in energy. In transition metals, as the d-orbitals are filled, they shield outer electrons poorly, causing a slow contraction in atomic size. Down a group, the principal quantum number n increases, placing the valence electrons in larger, higher-energy shells. Although the nuclear charge increases, the inner electron shells shield the outer electrons effectively, causing the valence s and p orbitals to become higher in energy and more reactive.",
    formulas: [
      "E_n ≈ -13.6 * (Z_eff² / n²) eV (Hydrogenic energy approximation)"
    ],
    equations: [
      "Orbital energy order for multi-electron atoms: 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p"
    ],
    applications: [
      "Explaining the transition from representative elements (filling s and p) to transition elements (filling d) and lanthanides (filling f).",
      "Predicting the chemical reactivity and oxidation states of elements across the periodic table.",
      "Understanding the electrical band gaps of elements and compounds based on their valence orbital energies."
    ],
    importantPoints: [
      "In the hydrogen atom, all subshells in a shell are degenerate; in multi-electron atoms, shielding and penetration split these energy levels.",
      "The energy of the nd orbitals drops below the (n+1)s orbital once the transition series begins (e.g., in Scandium, 3d is lower than 4s).",
      "Poor shielding by 4f orbitals causes the lanthanide contraction, which makes the energies and sizes of 5d transition metals (like Hf, Au) very similar to 4d metals (like Zr, Ag).",
      "Relativistic effects in heavy elements (like Au, Hg) lower the energy of s-orbitals and raise the energy of d/f orbitals."
    ],
    commonQuestions: [
      "Explain how the relative energies of 4s and 3d orbitals vary from Potassium (K) to Zinc (Zn).",
      "Why do d and f orbitals shield outer electrons poorly compared to s and p orbitals?",
      "Discuss the variation of s and p orbital energies down a group in the periodic table."
    ],
    shortAnswer: "Orbital energies decrease across a period due to increasing Zeff. s and p orbitals stabilize faster than d and f because they penetrate the core more effectively. Down a group, energies increase as the principal quantum number n increases, placing valence electrons in larger, less-bound shells.",
    longAnswer: "The energies of s, p, d, and f orbitals vary systematically across the periodic table due to the balance between nuclear charge (Z) and electron shielding. Across a period, Z increases while electrons are added to the same valence shell. Because these valence electrons shield each other poorly, the effective nuclear charge (Zeff) increases. This pull from the nucleus stabilizes all orbitals, lowering their energy. The stabilization is most pronounced for s and p orbitals due to their high penetration, while d and f orbitals stabilize more slowly. Down a group, as n increases, the valence electrons occupy larger orbitals with more radial nodes. These outer orbitals are shielded from the nucleus by the new inner electron shells, causing their energy to rise (become less negative). An interesting crossover occurs in transition metals. In potassium and calcium, the 4s orbital is lower in energy than the 3d orbital because the 4s orbital penetrates the argon core. However, once the 3d orbitals begin to fill starting with scandium, the 3d energy drops rapidly below the 4s energy. In the neutral atoms, the 4s orbital remains occupied because it experiences less electron-electron repulsion, but ionization removes the 4s electrons first because they occupy a higher-energy shell. In heavy elements (Z > 70), relativistic effects become significant: the high velocity of electrons near the heavy nucleus increases their relativistic mass, contracting and stabilizing the s and p orbitals, while shielding the d and f orbitals and raising their energies. This effect explains the gold color of Au and the liquid state of Hg.",
    questionsAndAnswers: [
      {
        question: "Acidic, basic and amphoteric oxides of p-block elements with reactions.",
        answer: "The chemical nature of p-block oxides varies systematically with non-metallic character:\\n\\n1. **Acidic Oxides:** Formed by non-metals. They react with water to form acids, or with bases to form salts. Example: Sulfur dioxide ($SO_2$):\\n\\n$\\\\text{SO}_2 + \\\\text{H}_2\\\\text{O} \\\\rightarrow \\\\text{H}_2\\\\text{SO}_3$\\n\\n2. **Basic Oxides:** Formed by heavy metallic elements at the bottom of groups. They react with acids to form salt and water. Example: Bismuth(III) oxide ($Bi_2O_3$):\\n\\n$\\\\text{Bi}_2\\\\text{O}_3 + 6\\\\text{HCl} \\\\rightarrow 2\\\\text{BiCl}_3 + 3\\\\text{H}_2\\\\text{O}$\\n\\n3. **Amphoteric Oxides:** Formed by metalloids or border metals. They exhibit both acidic and basic behaviors depending on reactants. Example: Aluminum oxide ($Al_2O_3$):\\n- *Basic behavior (reacting with acid):*\\n  $\\\\text{Al}_2\\\\text{O}_3 + 6\\\\text{HCl} \\\\rightarrow 2\\\\text{AlCl}_3 + 3\\\\text{H}_2\\\\text{O}$\\n- *Acidic behavior (reacting with base):*\\n  $\\\\text{Al}_2\\\\text{O}_3 + 2\\\\text{NaOH} \\\\rightarrow 2\\\\text{NaAlO}_2 + \\\\text{H}_2\\\\text{O}$",
        type: "long",
        marks: "5 Marks"
      },
      {
        question: "Merits and demerits of long periodic table.",
        answer: "**Merits of the Long Form (Bohr's) Periodic Table:**\\n- Organizes elements based on the fundamental atomic property: **atomic number** ($Z$) rather than atomic weight.\\n- Directly correlates the position of an element with its **electronic configuration**, dividing elements into logical blocks ($s, p, d, f$).\\n- Resolves the position of isotopes by grouping them at a single atomic number.\\n- Explains periodicity of properties naturally as a consequence of configuration repeating at regular intervals.\\n\\n**Demerits of the Long Form Periodic Table:**\\n- The position of **Hydrogen** remains ambiguous: it exhibits properties of both alkali metals (Group 1) and halogens (Group 17) but is placed above Group 1.\\n- **Helium** is placed in the p-block (Group 18) because of its noble gas inertness, even though its electronic configuration ($1s^2$) matches s-block elements.\\n- Lanthanides and Actinides are placed in separate rows at the bottom of the main body, which breaks the visual continuity of the table.",
        type: "long",
        marks: "5 Marks"
      }
    ]
  },
  {
    unitNumber: 5,
    unitTitle: "Periodic Properties",
    topicTitle: "Electronic configurations of atoms",
    definition: "The electronic configuration of an atom is the distribution of its electrons among the atomic orbitals, governed by three quantum mechanical rules: the Aufbau principle, the Pauli exclusion principle, and Hund's rule of maximum multiplicity.",
    explanation: "1. Aufbau Principle: Electrons fill the lowest-energy orbitals first. The relative order of orbital energies is approximated by the Madelung rule (n+l rule): orbitals with lower (n+l) values are filled first; if two orbitals have the same (n+l) value, the one with the lower n value is filled first. 2. Pauli Exclusion Principle: No two electrons in an atom can have the same four quantum numbers. This means an orbital can hold a maximum of two electrons with opposite spins. 3. Hund's Rule: In degenerate orbitals (like the three 2p orbitals), electrons occupy them singly with parallel spins before pairing up. This arrangement minimizes electron-electron repulsion. Anomalies occur in transition metals: Chromium (Z=24) is [Ar] 3d⁵ 4s¹ (instead of 3d⁴ 4s²) and Copper (Z=29) is [Ar] 3d¹⁰ 4s¹ (instead of 3d⁹ 4s²). These configurations occur because half-filled (d⁵) and fully filled (d¹⁰) subshells have extra stability due to their symmetrical charge distribution and high exchange energy.",
    formulas: [
      "Total orbitals in shell = n²",
      "Maximum electrons in shell = 2n²",
      "Exchange Energy (E_ex) ∝ K * N (N = number of possible parallel electron pairs)"
    ],
    equations: [
      "Chromium Configuration: Cr (Z=24) -> [Ar] 3d⁵ 4s¹",
      "Copper Configuration: Cu (Z=29) -> [Ar] 3d¹⁰ 4s¹"
    ],
    applications: [
      "Predicting the chemical valency, oxidation states, and reactivity patterns of elements.",
      "Explaining the magnetic behavior (paramagnetism vs. diamagnetism) of elements and ions.",
      "Determining the position of an element in the periodic table (s, p, d, or f block)."
    ],
    importantPoints: [
      "The (n+l) rule predicts the filling order: e.g., 4s (4+0=4) fills before 3d (3+2=5).",
      "The extra stability of half-filled and fully filled subshells is driven by exchange energy (stabilization from exchanging identical spin electrons) and pairing energy (avoiding repulsion).",
      "For transition metal cations, electrons are always removed from the ns orbital before the (n-1)d orbital (e.g., Fe²⁺ is [Ar] 3d⁶, not [Ar] 3d⁴ 4s²).",
      "The ground state configuration represents the lowest-energy state; promoting an electron to a higher orbital creates an excited state."
    ],
    commonQuestions: [
      "State the Aufbau principle, Pauli exclusion principle, and Hund's rule. How do they determine electronic configurations?",
      "Why do Chromium and Copper show anomalous electronic configurations? Explain using exchange energy and symmetry.",
      "Write the ground state electronic configurations for the following species: Fe, Fe²⁺, Fe³⁺, and Cu⁺."
    ],
    shortAnswer: "Electronic configurations describe the distribution of electrons in orbitals, governed by the Aufbau (fill low energy first), Pauli (max 2 electrons per orbital), and Hund's (fill degenerates singly first) rules. Chromium ([Ar] 3d⁵ 4s¹) and Copper ([Ar] 3d¹⁰ 4s¹) show anomalies because half-filled and fully filled d-subshells are exceptionally stable due to exchange energy and symmetry.",
    longAnswer: "Electronic configurations represent the arrangement of electrons in an atom's energy levels. This distribution is governed by three rules. The Aufbau Principle states that electrons occupy the lowest-energy orbitals available. The order of orbital filling is determined by the (n+l) rule. Orbitals are filled in order of increasing (n+l) value. For example, 4s (4+0=4) fills before 3d (3+2=5). If two orbitals share the same (n+l) value, the one with the lower n fills first (e.g., 3d (3+2=5) fills before 4p (4+1=5)). The Pauli Exclusion Principle requires that each electron have a unique set of four quantum numbers (n, l, ml, ms), which limits each orbital to a maximum of two electrons with anti-parallel spins. Hund's Rule of Maximum Multiplicity states that degenerate orbitals must be singly occupied by electrons with parallel spins before they pair. This arrangement minimizes electron-electron repulsion and maximizes exchange energy. Exchange energy is a quantum mechanical stabilization that occurs when electrons with parallel spins exchange positions. The exchange energy increases with the number of possible exchanges, which is maximized in half-filled and fully filled subshells. This stabilization explains the anomalous configurations of Chromium (Z=24) and Copper (Z=29). Chromium is [Ar] 3d⁵ 4s¹ rather than [Ar] 3d⁴ 4s², and Copper is [Ar] 3d¹⁰ 4s¹ rather than [Ar] 3d⁹ 4s². The symmetrical charge distribution in these configurations also minimizes destabilizing electron-electron repulsions, making these states thermodynamically favored.",
    questionsAndAnswers: [
      {
        question: "State Hund\u2019s rule and Pauli exclusion principle. Write electronic configuration of Fe.",
        answer: "1. **Hund's Rule of Maximum Multiplicity:**\\nWhen filling degenerate orbitals (orbitals of the same energy, e.g., $2p_x, 2p_y, 2p_z$), electrons must occupy each orbital singly with parallel spins first before pairing begins. This minimizes electron-electron electrostatic repulsion.\\n\\n2. **Pauli Exclusion Principle:**\\nNo two electrons in the same atom can have the same set of all four quantum numbers ($n, l, m_l, m_s$). This implies that a single orbital can hold a maximum of two electrons, and they must have opposite (paired) spins.\\n\\n3. **Electronic Configuration of Iron ($Fe$, $Z=26$):**\\n\\n$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6$ (or $[\\\\text{Ar}] 3d^6 4s^2$)",
        type: "long",
        marks: "5 Marks"
      }
    ]
  },
  {
    unitNumber: 5,
    unitTitle: "Periodic Properties",
    topicTitle: "Periodic trends: atomic and ionic sizes",
    definition: "Atomic radius is half the distance between the nuclei of two identical bonded atoms. Ionic radius is the effective radius of a monatomic ion in a crystal lattice.",
    explanation: "Atomic and ionic sizes show distinct periodic trends: 1. Across a Period: Atomic radius decreases. As the atomic number Z increases, electrons are added to the same shell. Because these valence electrons shield each other poorly, the effective nuclear charge (Zeff) increases, pulling the electron cloud closer to the nucleus. 2. Down a Group: Atomic radius increases. The principal quantum number n increases, placing the valence electrons in new, larger shells farther from the nucleus. Although the nuclear charge increases, it is shielded by the inner electron shells. 3. Ionic Radii: Cations are always smaller than their parent atoms because losing electrons reduces electron-electron repulsion, causing the remaining electron cloud to contract (and sometimes removes the outer shell entirely). Anions are always larger than their parent atoms because adding electrons increases repulsion, expanding the electron cloud against the constant nuclear charge.",
    formulas: [
      "r_cation < r_atom < r_anion (Size relationship)",
      "Size of Isoelectronic ions: Decreases with increasing atomic number (nuclear charge Z)"
    ],
    equations: [
      "Isoelectronic series size order: O²⁻ (140 pm) > F⁻ (133 pm) > Na⁺ (102 pm) > Mg²⁺ (72 pm) > Al³⁺ (54.5 pm) (All have 10 electrons)"
    ],
    applications: [
      "Predicting coordination geometries and packing structures of ionic crystals (radius ratio rules).",
      "Explaining the solubility and lattice energies of salts (smaller ions form stronger lattices).",
      "Understanding biological ion transport (e.g., cell membranes selectively transport K⁺ over Na⁺ based on size differences)."
    ],
    importantPoints: [
      "Covalent radius is used for non-metals; metallic radius is used for metals; van der Waals radius (which is largest) is used for non-bonded adjacent atoms.",
      "In an isoelectronic series (ions with the same number of electrons), the radius decreases as the atomic number (Z) increases because the greater nuclear charge pulls the same number of electrons more tightly.",
      "The lanthanide contraction is the decrease in atomic and ionic radii across the lanthanide series (Ce to Lu), caused by the poor shielding of 4f electrons. This contraction makes the sizes of 5d transition metals very similar to their 4d counterparts.",
      "Transition metals show a less pronounced decrease in atomic radius across a period because electrons are added to the inner (n-1)d subshell, which shields the outer ns valence electrons."
    ],
    commonQuestions: [
      "Define atomic radius and ionic radius. Explain the trends in atomic size across a period and down a group.",
      "Why is a cation always smaller than its parent atom, while an anion is always larger?",
      "Arrange the following isoelectronic ions in order of decreasing size, and explain your reasoning: N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺, Al³⁺."
    ],
    shortAnswer: "Atomic size decreases across a period due to increasing Zeff, and increases down a group due to the addition of new electron shells. Cations are smaller than their parent atoms due to reduced electron repulsion, while anions are larger due to increased repulsion. In isoelectronic series, size decreases as nuclear charge increases.",
    longAnswer: "Atomic and ionic sizes are fundamental properties that show periodic trends. The atomic radius is determined by the boundary of the electron cloud. Across a period, the atomic radius decreases. Although the atomic number Z increases, the new electrons are added to the same principal energy shell. The shielding constant (S) only increases by 0.35 per electron (according to Slater's rules), while the nuclear charge increases by 1.00. This mismatch causes the effective nuclear charge (Zeff = Z - S) to increase across the period, pulling the valence electrons closer to the nucleus. Down a group, the atomic radius increases. Each step down the group adds a new principal energy shell (n increases). Although the nuclear charge increases, the inner electron shells shield the valence electrons effectively, keeping Zeff relatively constant. The physical size of the larger valence shell dominates, expanding the atom. Ionic radii show similar trends. A cation is always smaller than its parent atom. For example, forming Na⁺ from Na removes the outer 3s electron and leaves a closed 2p shell, which experiences a stronger pull from the nucleus. An anion is always larger than its parent atom. In forming Cl⁻ from Cl, the addition of an electron to the valence shell increases electron-electron repulsion, causing the cloud to expand. In an isoelectronic series (such as O²⁻, F⁻, Na⁺, Mg²⁺, Al³⁺, all having 10 electrons), the number of electrons is constant, but the nuclear charge Z increases (O = 8, F = 9, Na = 11, Mg = 12, Al = 13). The higher nuclear charge pulls the 10 electrons more tightly, decreasing the ionic radius: O²⁻ (1.40 Å) > F⁻ (1.33 Å) > Na⁺ (1.02 Å) > Mg²⁺ (0.72 Å) > Al³⁺ (0.54 Å).",
    questionsAndAnswers: [
      {
        question: "Arrange halogens in ascending order of boiling point and mention periodic trend of atomic radii.",
        answer: "**Halogen Boiling Point Order:**\\n\\n$F_2 < Cl_2 < Br_2 < I_2$\\n\\n*Explanation:* As non-polar molecules, they are held by London forces. Down the group, the size of the electron cloud and polarizability increase, making intermolecular forces stronger and raising the boiling point.\\n\\n**Periodic Trend of Atomic Radii:**\\n- **Down a Group:** Atomic radius **increases** because new shell levels (shells) are added, placing outer electrons further from the nucleus.\\n- **Across a Period:** Atomic radius **decreases** because the nuclear charge increases (more protons) while shielding remains relatively constant, pulling the electron shells closer to the nucleus.",
        type: "short",
        marks: "3 Marks"
      }
    ]
  },
  {
    unitNumber: 5,
    unitTitle: "Periodic Properties",
    topicTitle: "Periodic trends: ionization energies, electron affinity, and electronegativity",
    definition: "Ionization Energy (IE) is the minimum energy required to remove an electron from a gaseous atom in its ground state. Electron Affinity (EA) is the energy change when an electron is added to a gaseous atom. Electronegativity (EN) is the relative ability of an atom in a molecule to attract shared bonding electrons to itself.",
    explanation: "1. Ionization Energy: Increases across a period due to increasing Zeff, which holds valence electrons more tightly. It decreases down a group because the valence shell is farther from the nucleus, reducing the attractive force. Anomalies occur: Nitrogen (1s² 2s² 2p³) has a higher first IE than Oxygen (1s² 2s² 2p⁴) because nitrogen has a stable, half-filled 2p subshell. 2. Electron Affinity: Becomes more negative (more exothermic) across a period, peaking at the halogens, which release energy to complete their valence shell. Noble gases and group 2 elements have positive (endothermic) EAs because adding an electron requires placing it in a higher-energy subshell. 3. Electronegativity: Increases across a period and decreases down a group. Fluorine is the most electronegative element (4.0 on the Pauling scale).",
    formulas: [
      "X(g) + IE → X⁺(g) + e⁻ (First Ionization Energy)",
      "X(g) + e⁻ → X⁻(g) + EA (First Electron Affinity)",
      "EN_Mulliken = (IE + EA) / 2 (Mulliken Electronegativity scale)"
    ],
    equations: [
      "Pauling Electronegativity difference: |χ_A - χ_B| = 0.102 * √(Δ) (where Δ is ionic resonance energy in kJ/mol)"
    ],
    applications: [
      "Predicting the nature of chemical bonds (ionic bonds form when the EN difference > 1.7; covalent bonds form when the difference < 1.7).",
      "Accounting for the reducing strength of alkali metals (low IE makes them strong reducing agents) and the oxidizing strength of halogens (high EA makes them strong oxidizing agents).",
      "Explaining molecular dipoles and chemical reactivity based on electronegativity differences."
    ],
    importantPoints: [
      "Successive ionization energies always increase (IE1 < IE2 < IE3) because removing an electron from a cation requires overcoming a stronger electrostatic attraction.",
      "Oxygen has a lower first IE than nitrogen because the fourth 2p electron in oxygen is paired, experiencing electron-electron repulsion that makes it easier to remove.",
      "Chlorine has a more negative electron affinity than fluorine (-349 kJ/mol vs -328 kJ/mol) because fluorine's small size leads to strong electron-electron repulsion in its compact 2p subshell, reducing the energy released upon adding an electron.",
      "Electronegativity is a chemical property of bonded atoms, whereas ionization energy and electron affinity are physical properties of isolated gaseous atoms."
    ],
    commonQuestions: [
      "Explain the periodic trends in ionization energy. Why is the first ionization energy of Nitrogen higher than that of Oxygen?",
      "Why does Chlorine have a higher electron affinity than Fluorine?",
      "Describe the Pauling and Mulliken scales of electronegativity. How are they related?"
    ],
    shortAnswer: "Ionization energy (energy to remove an electron) and electronegativity (ability to attract shared electrons) increase across a period and decrease down a group. Electron affinity (energy change when adding an electron) becomes more exothermic across a period. Anomalies occur due to orbital subshell stability (e.g., N vs O, F vs Cl).",
    longAnswer: "Ionization energy (IE), electron affinity (EA), and electronegativity (EN) are three key properties that describe an atom's affinity for electrons. First Ionization Energy (IE1) is the energy required for the reaction: X(g) → X⁺(g) + e⁻. Across a period, IE1 increases because the increase in effective nuclear charge (Zeff) holds the valence electrons more tightly. Down a group, IE1 decreases because the valence shell is farther from the nucleus (higher n), reducing the electrostatic attraction. There are two notable exceptions to the period trend. First, boron (2p¹) has a lower IE1 than beryllium (2s²) because removing a 2p electron requires less energy than removing a penetrated 2s electron. Second, oxygen (2p⁴) has a lower IE1 than nitrogen (2p³) because oxygen has a paired electron in a 2p orbital. The repulsion between the two electrons in the same orbital makes it easier to remove one, despite oxygen's higher nuclear charge. Electron Affinity (EA) is the energy change for: X(g) + e⁻ → X⁻(g). It becomes more negative (more exothermic) across a period as atoms approach a noble gas configuration. Halogens have the most negative EA values. However, fluorine (-328 kJ/mol) has a less negative EA than chlorine (-349 kJ/mol). Fluorine is a very small atom with a compact 2p subshell. When an electron is added, it experiences strong electrostatic repulsion from the seven electrons already packed in that small space, reducing the net energy released. Electronegativity (EN) describes an atom's ability to attract electron density in a covalent bond. Pauling derived his scale from bond dissociation energies, assigning fluorine a value of 4.0. Mulliken defined electronegativity as the average of the atom's ionization energy and electron affinity: EN = (IE + EA)/2. Both properties increase across a period and decrease down a group, driving the polar character of chemical bonds.",
    questionsAndAnswers: [
      {
        question: "Arrange in decreasing order of second ionization potentials of C, N, O and F.",
        answer: "The decreasing order of second ionization potentials is:\\n\\n$\\\\boxed{\\\\text{O} > \\\\text{F} > \\\\text{N} > \\\\text{C}}$\\n\\n*Explanation:* The first ionization removes one electron. The configuration of the monocations are:\\n- $O^+: [He] 2s^2 2p^3$ (half-filled $2p$ subshell, exceptionally stable, making second electron removal very difficult, highest potential).\\n- $F^+: [He] 2s^2 2p^4$\\n- $N^+: [He] 2s^2 2p^2$\\n- $C^+: [He] 2s^2 2p^1$",
        type: "very_short",
        marks: "1 Mark"
      },
      {
        question: "How does hybridization affect electronegativity?",
        answer: "Electronegativity **increases** with an increase in the **s-character** of the hybrid orbital. \\n- Hybridization types: $sp$ ($50\\\\%$ s-character) $> sp^2$ ($33.3\\\\%$ s-character) $> sp^3$ ($25\\\\%$ s-character).\\n- Because s-orbitals are closer to the nucleus than p-orbitals, hybrid orbitals with more s-character hold electron density closer to the nucleus, making the atom more electronegative.",
        type: "very_short",
        marks: "1 Mark"
      },
      {
        question: "Explain variation of electron affinity and electronegativity in periodic table. Comment on chlorine and fluorine.",
        answer: "1. **Periodic Trends:**\\n- **Electronegativity:** Increases across a period (due to increasing $Z_{eff}$ and decreasing size) and decreases down a group (due to increasing atomic size and shielding).\\n- **Electron Affinity (EA):** Generally becomes more negative (exothermic) across a period. Down a group, it usually becomes less negative.\\n\\n2. **Chlorine vs. Fluorine EA anomaly:**\\nFluorine is above Chlorine in Group 17, but Chlorine has a higher (more negative) electron affinity than Fluorine ($-349\\\\text{ kJ/mol}$ vs $-328\\\\text{ kJ/mol}$):\\n- **Reason:** Fluorine is a very small atom with high electron density in its compact $2p$ subshell. An incoming electron experiences significant electron-electron repulsion, which reduces energy release.\\n- Chlorine, being larger, accommodates the incoming electron in its larger $3p$ orbital with less repulsion, releasing more energy.",
        type: "short",
        marks: "3 Marks"
      },
      {
        question: "Define Pauling scale of electronegativity.",
        answer: "The **Pauling scale** is a relative scale for electronegativity based on bond dissociation energies. \\n\\nPauling noted that a heteronuclear bond $A-B$ is stronger than the average of the homonuclear bonds $A-A$ and $B-B$. This \"excess bond energy\" ($\\\\Delta$) is due to electrostatic ionic resonance stabilization caused by electronegativity differences:\\n\\n$\\\\Delta = D(A-B) - \\\\sqrt{D(A-A) \\\\times D(B-B)}$\\n\\nHe defined the electronegativity difference ($\\\\chi_A - \\\\chi_B$) as:\\n\\n$\\\\chi_A - \\\\chi_B = 0.208 \\\\sqrt{\\\\Delta}$ (where $\\\\Delta$ is in kcal/mol)\\n\\nHe assigned a fixed value of **4.0 to Fluorine** (the most electronegative element) to serve as a reference point to calculate values for all other elements.",
        type: "short",
        marks: "3 Marks"
      },
      {
        question: "Explain why the second ionization energies for copper and chromium are enormously high? Iron is a transition element but sodium is not. Explain.",
        answer: "1. **Copper and Chromium Second Ionization:**\\n- Neutral Chromium ($Cr$) has configuration $[\\\\text{Ar}]3d^5 4s^1$. Its monocation $Cr^+$ has the stable **half-filled** $[\\\\text{Ar}]3d^5$ configuration.\\n- Neutral Copper ($Cu$) has configuration $[\\\\text{Ar}]3d^{10} 4s^1$. Its monocation $Cu^+$ has the stable **fully filled** $[\\\\text{Ar}]3d^{10}$ configuration.\\n- Removing a second electron requires breaking these exceptionally stable half-filled and fully filled subshells, resulting in enormously high second ionization energies.\\n\\n2. **Iron vs. Sodium Transition Character:**\\n- A transition element is defined as one possessing a partially filled d-subshell in its atomic state or stable oxidation states.\\n- **Iron ($Fe$, $[\\\\text{Ar}]3d^6 4s^2$)** has a partially filled $3d$ subshell, fitting the definition.\\n- **Sodium ($Na$, $1s^2 2s^2 2p^6 3s^1$)** has no d-electrons in any state and cannot display transition properties (like variable valency or colored complexes).",
        type: "long",
        marks: "5 Marks"
      },
      {
        question: "First ionization energies of copper is higher than those of alkali metals while second and third energies are lower. Explain. Why are lanthanides and actinides placed in separate rows at the bottom of the periodic table?",
        answer: "1. **Copper vs. Alkali Metals Ionization:**\\n- Copper ($Cu$, $[\\\\text{Ar}]3d^{10} 4s^1$) has a higher first IE than Potassium ($K$, $[\\\\text{Ar}]4s^1$) because $3d$ electrons shield poorly, resulting in a higher $Z_{eff}$ that holds the $4s$ electron more tightly.\\n- However, after removing the first electron, Potassium becomes the highly stable noble gas core $K^+$ ($[\\\\text{Ar}]$), which requires huge energy to disrupt. Copper's second and third electrons are removed from its $3d$ subshell, which is easier to disrupt than a closed noble gas shell, making its 2nd and 3rd IE lower than Potassium's.\\n\\n2. **f-block Separate Placement:**\\nLanthanides ($4f$) and Actinides ($5f$) are placed at the bottom to preserve the structure and compact shape of the periodic table. If placed in the main body, the table would become too wide, disrupting the column alignments of $s$, $p$, and $d$ block elements.",
        type: "long",
        marks: "5 Marks"
      },
      {
        question: "First ionization energies of 5d elements are higher than 3d and 4d elements. Give reason.",
        answer: "The first ionization energies of $5d$ transition elements are unexpectedly higher than their $3d$ and $4d$ congeners due to the **Lanthanide Contraction**.\\n\\nBetween the $4d$ and $5d$ series, the $14$ f-block lanthanide elements are filled ($4f$ shell). Electrons in $f$ orbitals have extremely poor shielding effects. As a result, the nuclear charge increases by 14 units without a corresponding increase in shielding, exerting a very strong electrostatic pull on the outer valence electrons. This massive increase in $Z_{eff}$ binds the outer electrons tightly, raising the ionization energy.",
        type: "long",
        marks: "5 Marks"
      }
    ]
  },
  {
    unitNumber: 5,
    unitTitle: "Periodic Properties",
    topicTitle: "Polarizability and Fajan's rules",
    definition: "Polarization is the distortion of the electron cloud of an anion by the electrostatic field of a neighboring cation. Polarizability is the ease with which an anion's electron cloud can be distorted. Fajan's rules are empirical guidelines that predict the degree of covalent character in an ionic bond based on polarization.",
    explanation: "No chemical bond is purely ionic or covalent. When a cation and an anion approach each other, the positive charge of the cation attracts the outer electron cloud of the anion, while repelling its nucleus. This distortion shifts electron density into the space between the nuclei, introducing covalent character into the ionic bond. Casimir Fajan formulated three rules to predict this polarization: 1. Size of the ions: Smaller cations have a higher charge density (polarizing power) and cause more distortion. Larger anions have valence electrons that are weakly held and shielded from their own nucleus, making them more polarizable. 2. Charge of the ions: Higher charges on either the cation or the anion increase the electrostatic force, increasing polarization and covalent character. 3. Electronic configuration of the cation: Cations with a pseudo-noble gas configuration ((n-1)d¹⁰ ns⁰, e.g., Cu⁺, Ag⁺, Zn²⁺) have greater polarizing power than cations with a noble gas configuration ((n-1)p⁶ ns⁰, e.g., Na⁺, Ca²⁺) of similar size and charge. This difference occurs because d-electrons shield the nuclear charge poorly, resulting in a higher effective nuclear charge.",
    formulas: [
      "Polarizing Power ∝ Charge / Size (Ionic Potential, φ)",
      "φ = z / r (where z = ionic charge, r = ionic radius)"
    ],
    equations: [
      "φ_Be²⁺ (charge/size) is high -> BeCl₂ is covalent (molecular gas/polymer)",
      "φ_Ba²⁺ is low -> BaCl₂ is ionic (high melting solid)"
    ],
    applications: [
      "Explaining why transition metal salts (like AgCl, AgI) are less soluble in water and have lower melting points than alkali metal salts (like NaCl).",
      "Accounting for the color of certain ionic compounds (e.g., AgCl is white, AgBr is pale yellow, AgI is bright yellow due to charge-transfer transitions facilitated by polarization).",
      "Predicting the thermal stability of metal carbonates (carbonates of polarizing cations like BeCO₃ decompose at lower temperatures than CaCO₃)."
    ],
    importantPoints: [
      "A high ionic potential (φ) indicates a highly polarizing cation, which favors covalent character.",
      "Fajan's rules explain why LiCl is soluble in organic solvents like ethanol, whereas NaCl is insoluble; Li⁺ is small and polarizing, giving LiCl covalent character.",
      "Highly covalent ionic compounds tend to have lower melting and boiling points, are less soluble in polar solvents, and may show color.",
      "The polarizing power of a cation is its ability to distort an anion; the polarizability of an anion is its susceptibility to being distorted."
    ],
    commonQuestions: [
      "State Fajan's rules. Explain how they are used to predict the covalent character in ionic compounds.",
      "Why is AgCl (melting point 455°C) less ionic than NaCl (melting point 801°C) despite Ag⁺ and Na⁺ having similar ionic radii?",
      "Arrange the following in order of increasing covalent character and explain: NaCl, MgCl₂, AlCl₃, SiCl4."
    ],
    shortAnswer: "Polarization is the distortion of an anion's electron cloud by a cation, introducing covalent character into an ionic bond. Fajan's rules state that covalent character is favored by: 1. Small cation size, 2. Large anion size, 3. High ionic charges, and 4. Pseudo-noble gas configurations ((n-1)d¹⁰) in the cation, which shield the nuclear charge poorly.",
    longAnswer: "Fajan's rules describe the transition from ionic to covalent bonding through polarization. When a cation and an anion form an ionic lattice, the cation's positive charge exerts an attractive force on the anion's outer electron cloud. This attraction distorts the anion's electron cloud, pulling it into the internuclear region. This sharing of electron density introduces covalent character into the ionic bond. Casimir Fajan established rules to predict this behavior. First, cation size: smaller cations have a higher charge-to-size ratio (ionic potential, φ = z/r). This high charge density gives them greater polarizing power. For example, Li⁺ is smaller than Na⁺, so LiCl has more covalent character than NaCl. Second, anion size: larger anions are more polarizable. Their valence electrons are farther from the nucleus and shielded by inner shells, making the electron cloud soft and easily distorted. Consequently, AgI is more covalent than AgF. Third, ionic charge: higher charges on either ion increase the electrostatic attraction, increasing polarization. In the series NaCl, MgCl₂, AlCl₃, and SiCl4, the covalent character increases with the cation charge (+1, +2, +3, +4). SiCl4 is a volatile covalent liquid. Fourth, cation configuration: cations with a pseudo-noble gas configuration (18 electrons in the outer shell, ns²np⁶nd¹⁰, like Ag⁺ or Cu⁺) are more polarizing than cations with a noble gas configuration (8 electrons, ns²np⁶, like Na⁺ or K⁺) of similar size and charge. The ten d-electrons shield the nucleus poorly compared to s and p electrons. This poor shielding results in a higher effective nuclear charge, giving Ag⁺ greater polarizing power than Na⁺. This difference explains why AgCl is less soluble and has a lower melting point than NaCl.",
    questionsAndAnswers: [
      {
        question: "Arrange NaF, NaCl, NaBr, NaI in order of increasing melting point.",
        answer: "The order of increasing melting points is:\n\n$\\boxed{\\text{NaI} < \\text{NaBr} < \\text{NaCl} < \\text{NaF}}$\n\n*Explanation:* According to Fajan's rules, covalent character increases with an increase in the size of the anion. Among the halides, Iodide ($I^-$) is the largest and most easily polarized, imparting the highest covalent character (and lowest melting point) to $NaI$. Fluoride ($F^-$) is the smallest, forming the most purely ionic compound ($NaF$) with the highest lattice energy and melting point.",
        type: "very_short",
        marks: "1 Mark"
      }
    ]
  },
  {
    unitNumber: 5,
    unitTitle: "Periodic Properties",
    topicTitle: "Oxidation states and their stability",
    definition: "An oxidation state is the formal charge an atom would carry in a molecule if all shared bonding electrons were assigned to the more electronegative atom. The stability of oxidation states refers to the thermodynamic and kinetic likelihood of an element remaining in a specific oxidation state under standard chemical conditions.",
    explanation: "The stability of oxidation states varies across the periodic table, shaped by electron configurations. 1. Representative (s and p block) elements: Typically show group oxidation states (e.g., +1 for alkali metals, +2 for alkaline earths, +3 for boron group). In the heavier p-block elements (periods 5 and 6, like Pb, Bi, Tl), the +2 lower oxidation state becomes more stable than the group oxidation state (+4 for Pb, +3 for Tl). This trend is called the inert pair effect, caused by the tight binding of the outer 6s² electrons due to poor shielding by 4f and 5d subshells. 2. Transition (d-block) elements: Exhibit variable oxidation states because the energy difference between the ns and (n-1)d orbitals is small, allowing both to participate in bonding. The most stable states correspond to empty (d⁰), half-filled (d⁵), or fully filled (d¹⁰) subshells. Early transition metals show high stable states (e.g., Mn(VII) in MnO4⁻), while late transition metals favor lower states (e.g., Cu(II), Fe(II), Fe(III)).",
    formulas: [
      "Group Oxidation State = Number of valence s and p electrons",
      "Inert Pair Effect State = Group Oxidation State - 2"
    ],
    equations: [
      "Pb⁴⁺ (oxidizing agent) + 2e⁻ → Pb²⁺ (highly stable state due to inert pair effect)",
      "Tl³⁺ + 2e⁻ → Tl⁺ (E° = +1.25 V, proving Tl(I) is much more stable than Tl(III))"
    ],
    applications: [
      "Predicting redox reactions (e.g., identifying why PbO2 is a strong oxidizing agent while SnO2 is stable).",
      "Selecting transition metal catalysts based on their ability to switch between stable oxidation states (e.g., Fe²⁺/Fe³⁺, V⁴⁺/V⁵⁺).",
      "Stabilizing unstable oxidation states using coordinating ligands (e.g., stabilizing Co(III) as [Co(NH₃)6]³⁺)."
    ],
    importantPoints: [
      "The inert pair effect explains why Tl(I), Pb(II), and Bi(III) are more stable than Tl(III), Pb(IV), and Bi(V) respectively.",
      "The first-row transition metals show oxidation states from +1 to +7, with +2 and +3 being the most common. Manganese shows the widest range (from +2 to +7).",
      "Higher oxidation states in transition metals are stabilized by highly electronegative and oxidizing ligands like oxygen and fluorine (e.g., VF5, MnO4⁻).",
      "The relative stability of transition metal oxidation states can be evaluated using Latimer and Frost diagrams."
    ],
    commonQuestions: [
      "What is the inert pair effect? Explain why Pb(II) compounds are stable, whereas Pb(IV) compounds act as strong oxidizing agents.",
      "Why do transition metals exhibit variable oxidation states, while s-block elements do not?",
      "Discuss the stable oxidation states of first-row transition metals. Why is Sc(III) diamagnetic while Fe(III) is paramagnetic?"
    ],
    shortAnswer: "Oxidation state stability is determined by electron configurations. In heavy p-block elements, the inert pair effect makes the +2 lower state (e.g., Pb²⁺) more stable than the group state (+4) because the 6s² electrons are held tightly. Transition metals show variable oxidation states due to the close energies of ns and (n-1)d orbitals, with d⁰, d⁵, and d¹⁰ configurations being particularly stable.",
    longAnswer: "The stability of oxidation states is governed by the energy required to remove valence electrons. In s-block elements, the oxidation states are fixed (+1 for Group 1, +2 for Group 2) because removing core electrons requires too much energy. In contrast, p-block elements show more variation. While lighter p-block elements favor the group oxidation state (e.g., +4 for carbon and silicon), heavier p-block elements (like tin and lead) show a preference for lower oxidation states. In period 6 elements like thallium, lead, and bismuth, the +1, +2, and +3 states are more stable than the +3, +4, and +5 group states, respectively. This preference is caused by the inert pair effect, where the outer 6s² electron pair resists participating in bonding. This resistance occurs because the 6s orbital penetrates the core effectively, and the preceding 4f and 5d shells shield the nucleus poorly, increasing the effective nuclear charge felt by the 6s electrons. Consequently, Pb(IV) compounds like PbO2 are strong oxidizing agents, readily accepting two electrons to reduce to the stable Pb(II) state. Transition metals exhibit variable oxidation states because the ns and (n-1)d orbitals have similar energies. As a result, electrons can be removed from both subshells. The stability of these states is determined by orbital configurations. Scandium (d¹) forms only Sc(III) by losing all three valence electrons to achieve a stable [Ar] d⁰ noble gas core. Manganese (d⁵ 4s²) exhibits oxidation states from +2 to +7. Its most stable state is Mn(II) because it has a half-filled d⁵ configuration. In later transition metals, the increasing nuclear charge stabilizes the d-orbitals, making them harder to oxidize. Consequently, lower oxidation states like Cu(I) (d¹⁰) and Zn(II) (d¹⁰) are highly stable."
  },
  {
    unitNumber: 5,
    unitTitle: "Periodic Properties",
    topicTitle: "Coordination numbers and geometries",
    definition: "Coordination number (CN) is the number of donor atoms directly attached to a central metal ion in a coordination complex. Geometry refers to the three-dimensional spatial arrangement of these ligands around the metal center.",
    explanation: "The coordination number and geometry of a complex depend on the size and charge of the metal ion, the size and electrostatic repulsions of the ligands, and the d-electron configuration of the metal. 1. Coordination Number 2: Rare, typical for d¹⁰ metal ions (e.g., Cu⁺, Ag⁺, Au⁺). It adopts a linear geometry (e.g., [Ag(NH₃)2]⁺). 2. Coordination Number 4: Common, exhibits two geometries: tetrahedral (favored by steric factors and d⁰ or d¹⁰ ions, e.g., [Ni(CO)4], [Zn(NH₃)4]²⁺) and square planar (favored by d⁸ metal ions with strong-field ligands, e.g., [PtCl4]²⁻, [Ni(CN)4]²⁻). 3. Coordination Number 6: The most common coordination number, adopting an octahedral geometry (e.g., [Co(NH₃)6]³⁺, [Fe(H₂O)6]²⁺). Distortions from octahedral geometry, such as tetragonal elongation or compression, can occur due to the Jahn-Teller effect in complexes with asymmetric d-orbital occupation (like d⁹ Cu²⁺).",
    formulas: [
      "Radius Ratio (r_cation / r_anion) -> Predicts coordination geometry",
      "CN = 2 (Linear), CN = 4 (Tetrahedral or Square Planar), CN = 6 (Octahedral)"
    ],
    equations: [
      "[Ag(NH₃)2]⁺ -> CN = 2, Linear geometry",
      "[PtCl4]²⁻ -> CN = 4, Square Planar geometry (d⁸ Pt²⁺)",
      "[Co(NH₃)6]³⁺ -> CN = 6, Octahedral geometry"
    ],
    applications: [
      "Designing transition metal catalysts with specific geometries to control reactant access.",
      "Developing chelating agents for heavy metal detoxification (chelation therapy, e.g., EDTA complexes with CN = 6).",
      "Synthesizing stereospecific pharmaceutical agents (e.g., cisplatin, a square planar Pt complex used as an anti-cancer drug)."
    ],
    importantPoints: [
      "Isomerism (cis/trans and optical) is common in coordination geometries, especially octahedral and square planar, but does not occur in tetrahedral complexes for simple monodentate ligands.",
      "Cisplatin (cis-[Pt(NH₃)₂Cl₂]) is an active chemotherapeutic drug, whereas transplatin is inactive, demonstrating the biological importance of coordination geometry.",
      "Octahedral complexes can undergo tetragonal distortion (Jahn-Teller effect) to lower their energy, common in d⁹ Cu(II) complexes where the z-axis bonds stretch.",
      "Ligand size limits coordination numbers: bulky ligands (like triphenylphosphine) favor lower coordination numbers (CN = 3 or 4) due to steric hindrance."
    ],
    commonQuestions: [
      "Define coordination number. Discuss the common geometries associated with coordination numbers 4 and 6.",
      "Why does Ni(II) form a tetrahedral complex with chloride ions ([NiCl4]²⁻) but a square planar complex with cyanide ions ([Ni(CN)4]²⁻)?",
      "Explain the Jahn-Teller distortion in octahedral complexes. Which d-orbital configurations show this effect?"
    ],
    shortAnswer: "Coordination number (CN) is the number of ligand donor atoms bonded to a metal. Common geometries include: CN = 2 (linear), CN = 4 (tetrahedral or square planar), and CN = 6 (octahedral). Square planar geometry is favored by d⁸ ions with strong-field ligands, while octahedral is the most common arrangement.",
    longAnswer: "Coordination number (CN) and geometry describe the structural arrangement of coordination complexes. The coordination number is the number of donor atoms directly bonded to the metal ion. For CN = 2, the geometry is linear, minimizing repulsion between the two ligands. This geometry is typical for d¹⁰ ions like Ag⁺ in [Ag(NH₃)2]⁺. For CN = 4, there are two common geometries: tetrahedral and square planar. Tetrahedral geometry is favored when steric factors dominate (large ligands like Cl⁻) or when the metal has a d⁰ or d¹⁰ configuration, which has no stereochemical preference (e.g., [Zn(NH₃)4]²⁺). Square planar geometry is adopted by d⁸ metal ions (like Ni²⁺, Pd²⁺, Pt²⁺) in combination with strong-field ligands. In a d⁸ ion, splitting the orbitals in a square planar field leaves the high-energy dx²-y² orbital empty, while the lower orbitals are filled. This arrangement provides significant crystal field stabilization energy. For example, [NiCl4]²⁻ is tetrahedral, whereas [Ni(CN)4]²⁻ is square planar. CN = 6 is the most common coordination number, adopting octahedral geometry. In this arrangement, six ligands are positioned at the corners of a regular octahedron. If the d-orbitals are asymmetrically occupied (e.g., d⁹ Cu²⁺ in [Cu(H₂O)6]²⁺), the complex undergoes Jahn-Teller distortion. This distortion elongates the bonds along the z-axis, lowering the symmetry from octahedral (Oh) to tetragonal (D4h) and stabilizing the system."
  },
  {
    unitNumber: 5,
    unitTitle: "Periodic Properties",
    topicTitle: "Hard-Soft Acids and Bases (HSAB) concept",
    definition: "The Hard-Soft Acids and Bases (HSAB) concept is a qualitative rule formulated by Ralph Pearson to predict the stability, chemical reactivity, and equilibrium properties of acid-base complexes. It states that hard acids prefer to coordinate with hard bases, and soft acids prefer to coordinate with soft bases.",
    explanation: "The HSAB concept classifies Lewis acids (electrophiles) and Lewis bases (nucleophiles) based on their charge density, polarizability, and electronegativity: 1. Hard Acids: Small ionic size, high oxidation state, and low polarizability (e.g., H⁺, Li⁺, Na⁺, Al³⁺, Ti⁴⁺, Fe³⁺). 2. Soft Acids: Large ionic size, low oxidation state, and high polarizability (e.g., Ag⁺, Au⁺, Hg²⁺, Pt²⁺, Cd²⁺). 3. Hard Bases: Small donor atoms, high electronegativity, and low polarizability (e.g., F⁻, OH⁻, H₂O, NH₃, CO3²⁻). 4. Soft Bases: Large donor atoms, low electronegativity, and high polarizability (e.g., I⁻, CN⁻, CO, S²⁻, phosphines). Hard-hard interactions are primarily ionic, driven by electrostatic attractions. Soft-soft interactions are primarily covalent, driven by the overlap of polarizable orbitals. Borderline species (like Fe²⁺, Cu²⁺, pyridine) show intermediate properties.",
    formulas: [
      "Hard-Hard interaction: Electrostatic (Ionic) driving force",
      "Soft-Soft interaction: Orbital overlap (Covalent) driving force"
    ],
    equations: [
      "Spontaneous displacement: AgI(s) (soft-soft) + F⁻(aq) (hard base) -> No reaction",
      "Spontaneous displacement: AgF(aq) (soft-hard) + I⁻(aq) (soft base) -> AgI(s)↓ (soft-soft) + F⁻(aq) (highly favored)"
    ],
    applications: [
      "Explaining the solubility and stability of minerals in geochemistry (Goldschmidt's classification; hard metal ions occur as oxides/carbonates, soft metal ions occur as sulfides).",
      "Predicting the toxicity of heavy metals (toxic metals like Hg²⁺, Cd²⁺ are soft acids that bind to the soft sulfur-containing thiol groups in enzymes, disrupting their function).",
      "Choosing coordinating ligands to stabilize specific oxidation states of metals in inorganic synthesis."
    ],
    importantPoints: [
      "Hard species are 'hard' because they hold their valence electrons tightly and resist polarization.",
      "Soft species are 'soft' because their large, diffuse electron clouds are easily polarized by neighboring charges.",
      "The HSAB principle explains why AgI is insoluble in water while AgF is highly soluble; Ag⁺ is a soft acid and forms a stable, covalent soft-soft lattice with the soft I⁻ ion.",
      "Hard-soft combinations are thermodynamically less stable and are often highly reactive or soluble."
    ],
    commonQuestions: [
      "State and explain Pearson's Hard-Soft Acids and Bases (HSAB) principle. Give examples of each class.",
      "Explain the thermodynamic basis of HSAB. Why do hard-hard interactions favor ionic bonding while soft-soft interactions favor covalent bonding?",
      "Use the HSAB principle to explain why mercury (Hg²⁺) is highly toxic to biological systems."
    ],
    shortAnswer: "Pearson's HSAB principle states that hard acids (small, high charge, low polarizability) prefer hard bases (small, electronegative), and soft acids (large, low charge, highly polarizable) prefer soft bases. Hard-hard bonds are ionic, while soft-soft bonds are covalent. This concept predicts reaction spontaneity, solubility, and metal toxicity.",
    longAnswer: "The Hard-Soft Acids and Bases (HSAB) concept, developed by Ralph Pearson in 1963, is a qualitative tool for predicting chemical reactivity and complex stability. It categorizes Lewis acids and bases into 'hard' or 'soft' categories. Hard acids (like H⁺, Na⁺, Fe³⁺) are characterized by small ionic radii, high positive charges, and low polarizability. Hard bases (like F⁻, OH⁻, NH₃) have small donor atoms and high electronegativity. These species hold their valence electrons tightly. The bonding between a hard acid and a hard base is primarily ionic, driven by electrostatic attraction. Soft acids (like Ag⁺, Hg²⁺, Pt²⁺) have larger ionic radii, low oxidation states, and high polarizability. Soft bases (like I⁻, S²⁻, CN⁻) contain larger, less electronegative donor atoms. These species have soft, easily distorted electron clouds. The bonding between a soft acid and a soft base is primarily covalent, driven by orbital overlap. The HSAB principle states that hard-hard and soft-soft complexes are thermodynamically more stable than mixed hard-soft complexes. This principle explains many chemical phenomena. In geochemistry, hard metals like aluminum and calcium are found in the earth's crust as carbonates and oxides (hard bases), while soft metals like copper, lead, and mercury are found as sulfides (soft bases). It also explains heavy metal toxicity: methylmercury and cadmium are soft acids that enter biological systems and bind to the soft sulfur atoms in the thiol groups (-SH) of cysteine residues. This binding deactivates crucial enzymes, causing toxicity. Hard-soft combinations are unstable; for example, AgF (soft acid-hard base) reacts spontaneously with iodide ions to precipitate AgI (soft-soft) and release fluoride (hard base), demonstrating the thermodynamic drive toward matched complexes.",
    questionsAndAnswers: [
      {
        question: "Give one example of soft acid.",
        answer: "**$\\\\text{Cu}^+$ (Copper(I))**. Other examples include **$\\\\text{Ag}^+$**, **$\\\\text{Hg}^{2+}$**, and **$\\\\text{Au}^+$**. Soft acids are characterized by large ionic size, low positive charge, and easily polarizable outer electron clouds.",
        type: "very_short",
        marks: "1 Mark"
      }
    ]
  },
  {
    unitNumber: 5,
    unitTitle: "Periodic Properties",
    topicTitle: "Molecular geometries (VSEPR theory)",
    definition: "Valence Shell Electron Pair Repulsion (VSEPR) theory is a qualitative model used in chemistry to predict the three-dimensional geometry of individual molecules based on the electrostatic repulsion between valence electron pairs surrounding a central atom.",
    explanation: "The core premise of VSEPR theory is that valence electron pairs (both bonding pairs in shared bonds and non-bonding lone pairs) adopt a spatial arrangement that minimizes electrostatic repulsion, maximizing the distance between them. The basic geometry is determined by the steric number (SN), which is the sum of bonded atoms and lone pairs on the central atom. The geometries are: 1. SN = 2: Linear (e.g., BeCl₂, CO₂). 2. SN = 3: Trigonal Planar (e.g., BF₃). 3. SN = 4: Tetrahedral (e.g., CH₄). 4. SN = 5: Trigonal Bipyramidal (e.g., PCl₅). 5. SN = 6: Octahedral (e.g., SF₆). Repulsion strength follows the order: lone pair-lone pair (lp-lp) > lone pair-bond pair (lp-bp) > bond pair-bond pair (bp-bp). Lone pairs occupy more space because they are attracted to only one nucleus, which distorts the ideal bond angles. For example, water (H₂O, SN=4 with 2 bonding pairs and 2 lone pairs) has a bent geometry with a bond angle of 104.5°, compressed from the ideal tetrahedral angle of 109.5°.",
    formulas: [
      "Steric Number (SN) = 0.5 * [V + M - C + A] (V = valence electrons of central atom, M = monovalent atoms, C = cation charge, A = anion charge)",
      "Order of repulsion: lp-lp > lp-bp > bp-bp"
    ],
    equations: [
      "NH₃: SN = 0.5 * (5 + 3) = 4 (tetrahedral arrangement, 1 lone pair -> Trigonal Pyramidal geometry, angle 107°)",
      "H₂O: SN = 0.5 * (6 + 2) = 4 (tetrahedral arrangement, 2 lone pairs -> Bent geometry, angle 104.5°)"
    ],
    applications: [
      "Predicting the three-dimensional shapes and bond angles of inorganic and organic molecules.",
      "Determining molecular polarity (dipole moments) based on geometric symmetry.",
      "Explaining chemical reactivity and reaction sites based on steric accessibility."
    ],
    importantPoints: [
      "VSEPR distinguishes between electron-group geometry (arrangement of all electron pairs) and molecular geometry (spatial arrangement of atoms only).",
      "Multiple bonds (double or triple) are treated as a single electron group for predicting geometry, though they exert stronger repulsion than single bonds.",
      "In trigonal bipyramidal geometry (SN = 5), lone pairs always occupy equatorial positions because they experience less repulsion (only two 90° interactions) than axial positions (three 90° interactions).",
      "VSEPR theory cannot predict the structures of transition metal complexes, which are influenced by d-orbital splitting and crystal field effects."
    ],
    commonQuestions: [
      "State the postulates of VSEPR theory. Explain the order of repulsions among bonding and lone electron pairs.",
      "Using VSEPR theory, predict the shapes and bond angles of SF₄, ClF₃, and XeF₂.",
      "Why is the bond angle in NH₃ (107°) and H₂O (104.5°) less than the regular tetrahedral angle of 109.5°?"
    ],
    shortAnswer: "VSEPR theory predicts molecular shapes by minimizing repulsion between valence electron pairs (lp-lp > lp-bp > bp-bp). The steric number (bonded atoms + lone pairs) determines the electron geometry, while the presence of lone pairs distorts bond angles and determines the molecular shape (e.g., NH₃ is trigonal pyramidal, H₂O is bent).",
    longAnswer: "Valence Shell Electron Pair Repulsion (VSEPR) theory, proposed by Sidgwick and Powell and developed by Gillespie and Nyholm, predicts molecular geometry. The central atom's valence electron pairs arrange themselves in space to minimize electrostatic repulsion. The starting point is calculating the Steric Number (SN) of the central atom: SN = (Valence electrons + Monovalent atoms - Cationic charge + Anionic charge)/2. The steric number defines the electron-pair geometry: linear (SN=2, 180°), trigonal planar (SN=3, 120°), tetrahedral (SN=4, 109.5°), trigonal bipyramidal (SN=5, 90°/120°), and octahedral (SN=6, 90°). The actual molecular shape depends on the distribution of these electron pairs between bonding pairs (bp) and lone pairs (lp). Since lone pairs are attracted to only one nucleus, they are diffuse and occupy more space than bonding pairs, which are localized between two nuclei. This difference yields the repulsion order: lp-lp > lp-bp > bp-bp. The presence of lone pairs compresses the bond angles of adjacent bonding pairs. For example, methane (CH₄), ammonia (NH₃), and water (H₂O) all have SN = 4 (tetrahedral electron geometry). Methane has 0 lone pairs, forming a regular tetrahedron with 109.5° angles. Ammonia has 1 lone pair, which repels the three N-H bonds, compressing the angle to 107° and forming a trigonal pyramidal shape. Water has 2 lone pairs, which exert strong lp-lp repulsion, compressing the O-H angle to 104.5° and creating a bent (V-shaped) geometry. In trigonal bipyramidal systems (SN=5), axial and equatorial positions are not equivalent. Lone pairs and bulky electronegative ligands occupy the equatorial positions first to minimize 90° repulsions, as seen in the seesaw shape of SF₄, the T-shape of ClF₃, and the linear shape of XeF₂.",
    questionsAndAnswers: [
      {
        question: "What is the hybridization of XeF\u2084?",
        answer: "The hybridization of Xenon in $XeF_4$ is **$sp^3d^2$**.\\n\\n*Reasoning:* Xenon has 8 valence electrons. In $XeF_4$, it forms 4 single bonds with Fluorine atoms, leaving 2 lone pairs. The steric number is $4 + 2 = 6$, which corresponds to octahedral electronic geometry and $sp^3d^2$ hybridization. The molecular shape is **square planar**.",
        type: "very_short",
        marks: "1 Mark"
      },
      {
        question: "Show the hybridization and molecular geometry of BF3, CH4, BrF5, SCl6, PCl5 and ClF3 according to VSEPR theory?",
        answer: "According to VSEPR theory, the hybridization, steric number (SN), and geometries are:\\n\\n1. **$BF_3$:** $\\\\text{SN} = 3$ bond pairs $+ 0$ lone pairs $= 3$. Hybridization is **$sp^2$**. Shape: **Trigonal Planar** ($120^\\\\circ$ angles).\\n2. **$CH_4$:** $\\\\text{SN} = 4$ bond pairs $+ 0$ lone pairs $= 4$. Hybridization is **$sp^3$**. Shape: **Tetrahedral** ($109.5^\\\\circ$ angles).\\n3. **$BrF_5$:** $\\\\text{SN} = 5$ bond pairs $+ 1$ lone pair $= 6$. Hybridization is **$sp^3d^2$**. Shape: **Square Pyramidal** ($90^\\\\circ$ angles).\\n4. **$SCl_6$:** $\\\\text{SN} = 6$ bond pairs $+ 0$ lone pairs $= 6$. Hybridization is **$sp^3d^2$**. Shape: **Octahedral** ($90^\\\\circ$ angles).\\n5. **$PCl_5$:** $\\\\text{SN} = 5$ bond pairs $+ 0$ lone pairs $= 5$. Hybridization is **$sp^3d$**. Shape: **Trigonal Bipyramidal** ($90^\\\\circ$ and $120^\\\\circ$ angles).\\n6. **$ClF_3$:** $\\\\text{SN} = 3$ bond pairs $+ 2$ lone pairs $= 5$. Hybridization is **$sp^3d$**. Shape: **T-shaped** ($<90^\\\\circ$ angles).",
        type: "long",
        marks: "5 Marks"
      }
    ]
  }
];
