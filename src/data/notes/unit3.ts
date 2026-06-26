export const unit3Notes = [
  {
    unitNumber: 3,
    unitTitle: "Intermolecular Forces and Potential Energy Surfaces",
    topicTitle: "Ionic, dipolar and van der Waals interactions",
    definition: "Intermolecular forces are the electrostatic attractive or repulsive forces that act between neighboring molecules, ions, or atoms. They include strong ionic forces, dipole-dipole forces, hydrogen bonding, and weak van der Waals forces (Keesom, Debye, and London dispersion forces).",
    explanation: "Intermolecular forces determine the physical state, boiling point, melting point, and solubility of substances. They are weaker than intramolecular covalent or ionic chemical bonds. 1. Ionic interactions: The strongest attractive forces, occurring between full oppositely charged ions (energy ∝ 1/r). 2. Dipole-dipole interactions: Occur between polar molecules with permanent dipoles, where the positive end of one aligns with the negative end of another (energy ∝ 1/r³ for stationary, 1/r⁶ for rotating). A strong type of this is hydrogen bonding, which occurs when H is bonded to highly electronegative N, O, or F. 3. van der Waals interactions: The sum of three forces: Keesom forces (permanent dipole-dipole), Debye forces (permanent dipole-induced dipole, energy ∝ 1/r⁶), and London dispersion forces (temporary dipole-induced dipole, energy ∝ 1/r⁶, present in all molecules, even non-polar ones like He or CH₄). At very close distances, electron cloud overlap causes strong repulsion, described by the Lennard-Jones potential.",
    formulas: [
      "V(r) = 4ε * [(σ/r)¹² - (σ/r)⁶] (Lennard-Jones Potential)",
      "E_ion-ion ∝ 1/r, E_dipole-dipole ∝ 1/r³",
      "E_dispersion ∝ 1/r⁶"
    ],
    equations: [
      "Dipole moment: μ = q * d (q = charge, d = separation distance)"
    ],
    applications: [
      "Explaining why water has an anomalously high boiling point (100°C) compared to H2S (-60°C) due to intermolecular hydrogen bonding.",
      "Predicting the solubility of substances (like dissolves like; polar compounds dissolve in polar water, non-polar in hexane).",
      "Designing polymers, adhesives, and self-cleaning surfaces by tailoring surface energy and adhesion forces."
    ],
    importantPoints: [
      "London dispersion forces are the only intermolecular forces present in non-polar molecules.",
      "Dispersion forces increase with molecular weight and surface area because larger electron clouds are more polarizable.",
      "In the Lennard-Jones potential, the r⁻¹² term represents short-range Pauli repulsion, and the r⁻⁶ term represents long-range van der Waals attraction.",
      "Hydrogen bonds are stronger than typical dipole-dipole interactions because of hydrogen's small size, which allows close approach."
    ],
    commonQuestions: [
      "Explain the different types of intermolecular forces. Arrange them in order of decreasing strength.",
      "What is the Lennard-Jones potential? Explain the physical meaning of the attractive and repulsive terms in the equation.",
      "Why does neon (atomic weight 20) boil at -246°C while water (molecular weight 18) boils at 100°C?"
    ],
    shortAnswer: "Intermolecular forces act between molecules. They range from strong ionic attractions to weaker van der Waals forces. van der Waals forces include dipole-dipole, dipole-induced dipole, and London dispersion forces (temporary dipole-induced dipole, ∝ 1/r⁶). The balance between attraction and repulsion is described by the Lennard-Jones potential.",
    longAnswer: "Intermolecular forces are electrostatic interactions that govern the physical properties of matter. The strongest are ionic forces, which occur between fully charged ions and follow Coulomb's law. Dipole-dipole forces occur between polar molecules (like HCl) due to the attraction of permanent dipoles. Hydrogen bonding is a strong form of dipole-dipole interaction that occurs when hydrogen is bonded to N, O, or F. This bonding creates a highly polar bond, and hydrogen's small size allows neighboring dipoles to approach closely, yielding energies of 10-40 kJ/mol. This bonding explains why water is liquid at room temperature while H2S is a gas. van der Waals forces are weaker and are classified into three types. Keesom forces are interactions between permanent rotating dipoles. Debye forces occur when a polar molecule induces a temporary dipole in a neighboring non-polar molecule. London dispersion forces are present in all molecules and arise from temporary fluctuations in electron density that create an instantaneous dipole, which in turn induces a dipole in a neighboring molecule. The energy of these three van der Waals interactions is inversely proportional to the sixth power of distance (1/r⁶). At very close distances, the Pauli exclusion principle prevents electron clouds from overlapping, causing repulsion. The Lennard-Jones potential models this balance: V(r) = 4ε * [(σ/r)¹² - (σ/r)⁶], where ε is the well depth, σ is the distance where the potential is zero, and r is the distance between particles. The r⁻¹² term represents the steep, short-range repulsion, while the r⁻⁶ term represents the long-range attraction.",
    questionsAndAnswers: [
      {
        question: "Van der Waals forces are directly proportional to which factor?",
        answer: "Van der Waals dispersion forces (London forces) are directly proportional to the **polarizability** (and **molecular size/electron count**) of the interacting molecules. Larger molecules with more electrons have larger, more diffuse electron clouds that are more easily distorted to form temporary dipoles.",
        type: "very_short",
        marks: "1 Mark"
      },
      {
        question: "Give an example of compound having zero dipole moment.",
        answer: "**Carbon dioxide ($CO_2$)**. It is a linear molecule ($O=C=O$). Although the individual $C-O$ bonds are highly polar, the two bond dipoles point in exactly opposite directions and cancel each other out, giving a net dipole moment ($\\\\mu$) of zero. Other examples include methane ($CH_4$) and boron trifluoride ($BF_3$).",
        type: "very_short",
        marks: "1 Mark"
      },
      {
        question: "Compare intermolecular forces in H\u2082 and halogens. Arrange them in increasing order of strength.",
        answer: "Both hydrogen ($H_2$) and halogens ($F_2, Cl_2, Br_2, I_2$) are homonuclear, non-polar diatomic molecules. The only intermolecular forces acting between them are **London Dispersion Forces** (induced dipole-induced dipole forces).\\n\\nThe strength of dispersion forces depends on the polarizability, which increases with the size of the electron cloud and the total number of electrons. \\n\\n**Increasing Order of Strength:**\\n\\n$H_2 \\\\text{ (2 }e^-) < F_2 \\\\text{ (18 }e^-) < Cl_2 \\\\text{ (34 }e^-) < Br_2 \\\\text{ (70 }e^-) < I_2 \\\\text{ (106 }e^-)$\\n\\nAccordingly, $H_2, F_2, Cl_2$ are gases at room temperature, $Br_2$ is a liquid, and $I_2$ is a solid.",
        type: "short",
        marks: "3 Marks"
      },
      {
        question: "Explain the boiling point anomalies of n-pentane vs neopentane and H\u2082O vs H\u2082S.",
        answer: "1. **n-pentane vs. Neopentane:**\\n- n-pentane has a long, linear chain, providing a larger surface area for contact between molecules, resulting in stronger London dispersion forces. \\n- Neopentane is highly branched and spherical, reducing its surface area and weakening dispersion forces. Thus, n-pentane has a higher boiling point ($36^\\\\circ\\\\text{ C}$) than neopentane ($9.5^\\\\circ\\\\text{ C}$).\\n\\n2. **H\u2082O vs. H\u2082S:**\\n- Oxygen is highly electronegative and small, allowing water ($H_2O$) molecules to form strong, extensive network of **intermolecular hydrogen bonds**.\\n- Sulfur is larger and less electronegative, so hydrogen sulfide ($H_2S$) cannot form hydrogen bonds. It relies only on weaker dipole-dipole forces. Thus, water is a liquid (BP $100^\\\\circ\\\\text{ C}$) whereas $H_2S$ is a gas (BP $-60^\\circ\\\\text{ C}$) at room temperature.",
        type: "short",
        marks: "3 Marks"
      },
      {
        question: "Discuss types and conditions of hydrogen bonding.",
        answer: "**Hydrogen bonding** is a strong dipole-dipole attraction occurring when a hydrogen atom covalently bonded to a highly electronegative atom is attracted to a lone pair on a nearby electronegative atom.\\n\\n**Conditions for Formation:**\\n1. **Highly Electronegative Atom:** Hydrogen must be bonded to Fluorine ($F$), Oxygen ($O$), or Nitrogen ($N$). These atoms strongly pull electron density, leaving hydrogen with a large partial positive charge.\\n2. **Small Atomic Size:** The electronegative atom must be small (like $F, O, N$). This concentrates the charge density, enabling strong electrostatic attractions. Larger atoms (like $Cl$) have diffuse charge and rarely form strong hydrogen bonds.\\n\\n**Types of Hydrogen Bonding:**\\n1. **Intermolecular:** Formed between different molecules of the same or different substances, leading to molecular association and high boiling points. Examples: water ($H_2O$), ammonia ($NH_3$), hydrogen fluoride ($HF$).\\n2. **Intramolecular:** Formed within a single molecule when the donor and acceptor groups are in close proximity, forming a chelate ring. This reduces intermolecular interaction, lowering boiling points. Example: o-nitrophenol, salicylaldehyde.",
        type: "long",
        marks: "5 Marks"
      },
      {
        question: "Explain boiling point difference between p-nitrophenol and o-nitrophenol.",
        answer: "The difference in boiling points is due to the type of hydrogen bonding present in each isomer:\\n\\n1. **o-nitrophenol (Lower Boiling Point, $216^\\\\circ\\\\text{ C}$):**\\n- It undergoes **intramolecular hydrogen bonding** because the hydroxyl ($-OH$) and nitro ($-NO_2$) groups are on adjacent carbon atoms, forming a stable 6-membered chelate ring within the same molecule.\\n- This prevents the molecule from forming hydrogen bonds with neighboring molecules. As a result, it exists as discrete monomers with weak intermolecular forces, making it volatile and lower boiling.\\n\\n2. **p-nitrophenol (Higher Boiling Point, $279^\\\\circ\\\\text{ C}$):**\\n- It undergoes **intermolecular hydrogen bonding** because the $-OH$ and $-NO_2$ groups are on opposite sides of the benzene ring, preventing them from bonding within the same molecule.\\n- It forms extensive hydrogen bond chains linking multiple molecules together. This molecular association requires significant thermal energy to break, resulting in a much higher boiling point.",
        type: "long",
        marks: "5 Marks"
      }
    ]
  },
  {
    unitNumber: 3,
    unitTitle: "Intermolecular Forces and Potential Energy Surfaces",
    topicTitle: "Equations of state of real gases and critical phenomena",
    definition: "An equation of state is a thermodynamic equation relating state variables (pressure P, volume V, and temperature T) of a gas. Real gases deviate from the Ideal Gas Law (PV = nRT) at high pressures and low temperatures due to intermolecular forces and finite molecular volumes.",
    explanation: "The Ideal Gas Law assumes gas molecules have zero volume and experience no intermolecular forces. To account for real gas behavior, Johannes van der Waals modified the ideal equation. He introduced a correction term for pressure (a/V²) to account for intermolecular attractions, which reduce the impact force of molecules against the container wall. He also added a correction term for volume (b) to account for the finite volume occupied by the gas molecules themselves (excluded volume). This yields the van der Waals equation of state: (P + a/V²)(V - b) = RT (for 1 mole). Critical phenomena occur at the critical point, defined by critical temperature (Tc), pressure (Pc), and volume (Vc). Above Tc, a gas cannot be liquefied, regardless of the pressure applied. Below Tc, compressing the gas causes a phase transition to a liquid. At the critical point, the liquid and gas phases have identical densities, and the boundary between them disappears.",
    formulas: [
      "(P + an² / V²) * (V - nb) = nRT (van der Waals equation)",
      "T_c = 8a / (27Rb), P_c = a / (27b²), V_c = 3b (Critical constants)",
      "Z = PV / (nRT) (Compressibility factor; Z = 1 for ideal gas)"
    ],
    equations: [
      "At critical point: (dP/dV)_T = 0 and (d²P/dV²)_T = 0 (Inflection point on P-V isotherm)"
    ],
    applications: [
      "Industrial liquefaction of gases (e.g., nitrogen, oxygen, helium) by cooling them below their critical temperatures.",
      "Using supercritical fluids (like supercritical CO₂ above its critical point: 31°C, 73 atm) for decaffeinating coffee and extracting essential oils.",
      "Designing high-pressure gas storage and pipeline systems in chemical engineering."
    ],
    importantPoints: [
      "The van der Waals constant 'a' measures the strength of intermolecular attraction; polar gases (like NH₃) have higher 'a' values than noble gases.",
      "The constant 'b' represents the excluded volume, which is approximately four times the actual volume of the gas molecules.",
      "The compressibility factor Z indicates deviation from ideality: Z < 1 indicates that attractive forces dominate, while Z > 1 indicates that repulsive forces dominate (high pressure).",
      "At the critical point, the van der Waals equation exhibits a point of inflection on the P-V isotherm, allowing the derivation of critical constants in terms of a and b."
    ],
    commonQuestions: [
      "Derive the van der Waals equation of state for a real gas. Explain the physical significance of the constants 'a' and 'b'.",
      "Define critical temperature, critical pressure, and critical volume. Express them in terms of the van der Waals constants.",
      "What is the compressibility factor Z? Explain its variation with pressure for hydrogen and carbon dioxide gases at room temperature."
    ],
    shortAnswer: "Real gases deviate from PV = nRT due to intermolecular forces and molecular volume. The van der Waals equation, (P + a/V²)(V - b) = RT, corrects for these factors. The critical point represents the limit of gas-liquid coexistence, defined by Tc, Pc, and Vc, above which the gas cannot be liquefied.",
    longAnswer: "The Ideal Gas Law (PV = nRT) assumes that gas molecules are non-interacting point masses. Real gases deviate from this behavior at high pressure (where molecules are forced close together) and low temperature (where kinetic energy is low, allowing intermolecular forces to take effect). Johannes van der Waals corrected these assumptions. He accounted for intermolecular attractions by adding a term to the pressure: P_ideal = P_real + an²/V², where 'a' is a constant representing the attraction strength. He accounted for the physical volume of the molecules by subtracting their volume from the total volume: V_ideal = V_real - nb, where 'b' is the excluded volume. For 1 mole of gas, this yields: (P + a/V²)(V - b) = RT. Plotting P against V at different temperatures generates isotherms. At high temperatures, the curves are hyperbolic, resembling ideal behavior. As temperature decreases, a loop appears. The isotherm at the critical temperature (Tc) has an inflection point, representing the critical point. At this point, the first and second derivatives of pressure with respect to volume are zero: (dP/dV)_T = 0 and (d²P/dV²)_T = 0. Solving these equations using the van der Waals formula yields the critical constants: Vc = 3b, Pc = a/(27b²), and Tc = 8a/(27Rb). These constants define the critical state, above which the gas behaves as a supercritical fluid, a state that combines the diffusivity of a gas with the density and solvent properties of a liquid.",
    derivation: [
      {
        title: "Step 1 — Expressing P as a function of V from van der Waals equation",
        steps: [
          "For 1 mole of a real gas, the van der Waals equation is: $\\left(P + \\dfrac{a}{V^2}\\right)(V-b) = RT$",
          "Solving for pressure $P$: $P = \\dfrac{RT}{V-b} - \\dfrac{a}{V^2}$"
        ]
      },
      {
        title: "Step 2 — Applying critical inflection point conditions",
        steps: [
          "At the critical point ($T = T_c, V = V_c, P = P_c$), the P-V isotherm has a point of inflection.",
          "This means the first and second derivatives of pressure with respect to volume at constant temperature are zero:",
          "First derivative: $\\left(\\dfrac{\\partial P}{\\partial V}\\right)_T = -\\dfrac{RT_c}{(V_c - b)^2} + \\dfrac{2a}{V_c^3} = 0 \\implies \\dfrac{RT_c}{(V_c - b)^2} = \\dfrac{2a}{V_c^3}$  (Equation 1)",
          "Second derivative: $\\left(\\dfrac{\\partial^2 P}{\\partial V^2}\\right)_T = \\dfrac{2RT_c}{(V_c - b)^3} - \\dfrac{6a}{V_c^4} = 0 \\implies \\dfrac{2RT_c}{(V_c - b)^3} = \\dfrac{6a}{V_c^4}$  (Equation 2)"
        ]
      },
      {
        title: "Step 3 — Solving for critical constants Vc, Tc, and Pc",
        steps: [
          "Divide Equation 2 by Equation 1 to eliminate $RT_c$ and $a$:",
          "$\\dfrac{2}{(V_c - b)} = \\dfrac{3}{V_c} \\implies 2V_c = 3V_c - 3b \\implies \\boxed{V_c = 3b}$",
          "Substitute $V_c = 3b$ back into Equation 1:",
          "$\\dfrac{RT_c}{(3b - b)^2} = \\dfrac{2a}{(3b)^3} \\implies \\dfrac{RT_c}{4b^2} = \\dfrac{2a}{27b^3} \\implies \\boxed{T_c = \\dfrac{8a}{27Rb}}$",
          "Substitute $V_c = 3b$ and $T_c = \\dfrac{8a}{27Rb}$ into the pressure equation:",
          "$P_c = \\dfrac{R \\cdot \\left(\\dfrac{8a}{27Rb}\\right)}{3b - b} - \\dfrac{a}{(3b)^2} = \\dfrac{8a/27b}{2b} - \\dfrac{a}{9b^2} = \\dfrac{4a}{27b^2} - \\dfrac{3a}{27b^2} \\implies \\boxed{P_c = \\dfrac{a}{27b^2}}$"
        ]
      },
      {
        title: "Step 4 — Deriving the critical compressibility factor (RTc / PcVc = 8/3)",
        steps: [
          "The critical compressibility factor $Z_c$ is the ratio $\\dfrac{RT_c}{P_c V_c}$ at the critical point.",
          "Substitute the derived expressions for $V_c$, $P_c$, and $T_c$:",
          "$\\dfrac{RT_c}{P_c V_c} = \\dfrac{R \\left(\\dfrac{8a}{27Rb}\\right)}{\\left(\\dfrac{a}{27b^2}\\right) (3b)} = \\dfrac{\\dfrac{8a}{27b}}{\\dfrac{3a}{27b}}$",
          "Simplifying the ratio gives: $\\boxed{\\dfrac{RT_c}{P_c V_c} = \\dfrac{8}{3} \\approx 2.67}$",
          "This ratio is a constant for all van der Waals gases, though real gases typically have experimental values around 3.0 to 3.8."
        ]
      }
    ],
    questionsAndAnswers: [
      {
        question: "Write down the formula of critical volume for Van der Waals\u2019 gas.",
        answer: "The critical volume ($V_c$) is:\\n\\n$V_c = 3b$\\n\\nwhere $b$ is the van der Waals volume correction constant (co-volume).",
        type: "very_short",
        marks: "1 Mark"
      },
      {
        question: "Write down the relation of critical temperature for Van der Waals\u2019 gas.",
        answer: "The critical temperature ($T_c$) is:\\n\\n$T_c = \\\\frac{8a}{27Rb}$\\n\\nwhere $a$ and $b$ are van der Waals constants and $R$ is the universal gas constant.",
        type: "very_short",
        marks: "1 Mark"
      },
      {
        question: "The unit of van der Waals constant \u2018a\u2019 is ____________.",
        answer: "**$\\\\text{L}^2\\\\text{ atm mol}^{-2}$** (or $\\\\text{dm}^6\\\\text{ atm mol}^{-2}$). The constant $a$ represents the correction for attractive forces, and its unit is derived from the pressure correction term $P_{corr} = \\\\frac{an^2}{V^2} \\\\Rightarrow a = \\\\frac{P V^2}{n^2}$.",
        type: "very_short",
        marks: "1 Mark"
      },
      {
        question: "Write the expression of critical pressure.",
        answer: "The critical pressure ($P_c$) is:\\n\\n$P_c = \\\\frac{a}{27b^2}$\\n\\nwhere $a$ and $b$ are van der Waals constants.",
        type: "very_short",
        marks: "1 Mark"
      },
      {
        question: "When do real gases behave as ideal gases?",
        answer: "Real gases behave most like ideal gases at **high temperatures** and **low pressures**.\\n- At **low pressure**, the gas volume is huge, making the actual volume of the gas molecules negligible.\\n- At **high temperature**, the kinetic energy of the molecules is very high, making the intermolecular attractive forces negligible.",
        type: "very_short",
        marks: "1 Mark"
      },
      {
        question: "What is defined by compressibility factor of gases?",
        answer: "The **compressibility factor ($Z$)** is a dimensionless quantity that measures the deviation of a real gas from ideal behavior. It is defined as the ratio of the molar volume of a gas to the molar volume of an ideal gas at the same temperature and pressure:\\n\\n$Z = \\\\frac{PV}{nRT}$\\n\\n- For an **ideal gas**, $Z = 1$ under all conditions.\\n- For a **real gas**, $Z \\\\neq 1$. If $Z < 1$, attractive forces dominate (gas is easier to compress). If $Z > 1$, repulsive forces and molecular volume dominate (gas is harder to compress).",
        type: "short",
        marks: "2 Marks"
      },
      {
        question: "Prove that RTc / PcVc = 8/3.",
        answer: "The critical constants in terms of van der Waals constants $a$ and $b$ are:\\n\\n$T_c = \\\\frac{8a}{27Rb}$, $P_c = \\\\frac{a}{27b^2}$, and $V_c = 3b$\\n\\nSubstitute these critical constants into the ratio:\\n\\n$\\\\frac{R T_c}{P_c V_c} = \\\\frac{R \\\\left( \\\\frac{8a}{27Rb} \\\\right)}{\\\\left( \\\\frac{a}{27b^2} \\\\right) (3b)}$\\n\\nSimplifying the numerator:\\n\\n$R \\\\times \\\\frac{8a}{27Rb} = \\\\frac{8a}{27b}$\\n\\nSimplifying the denominator:\\n\\n$\\\\frac{a}{27b^2} \\\\times 3b = \\\\frac{3a}{27b}$\\n\\nNow divide the two terms:\\n\\n$\\\\frac{R T_c}{P_c V_c} = \\\\frac{\\\\frac{8a}{27b}}{\\\\frac{3a}{27b}} = \\\\frac{8a}{27b} \\\\times \\\\frac{27b}{3a} = \\\\boxed{\\\\frac{8}{3}}$\\n\\nHence proved.",
        type: "short",
        marks: "3 Marks"
      },
      {
        question: "Calculate the Boyle temperature for a gas whose van der Waals constant a = 7.18 L2 atm mol-2, b = 0.854 L mol-1.",
        answer: "**Given Data:**\\n- $a = 7.18\\\\text{ L}^2\\\\text{ atm mol}^{-2}$\\n- $b = 0.854\\\\text{ L mol}^{-1}$\\n- Gas constant $R = 0.0821\\\\text{ L atm K}^{-1}\\\\text{ mol}^{-1}$\\n\\n**Formula:**\\nThe Boyle temperature ($T_B$) is given by:\\n\\n$T_B = \\\\frac{a}{Rb}$\\n\\n**Calculation:**\\n\\n$T_B = \\\\frac{7.18}{0.0821 \\\\times 0.854}$\\n\\n$T_B = \\\\frac{7.18}{0.0701134} \\\\approx 102.41\\\\text{ K}$ (or $\\\\approx 102.53\\\\text{ K}$ using $R \\\\approx 0.08206$)\\n\\n**Answer:** The Boyle temperature of the gas is approximately **102.4 K** (or **102.5 K**).",
        type: "short",
        marks: "3 Marks"
      },
      {
        question: "Write van der Waals equation of real gases and explain significance of constants a and b.",
        answer: "**Van der Waals Equation:**\\nFor $n$ moles of a real gas, the equation is:\\n\\n$\\\\left(P + \\\\frac{an^2}{V^2}\\\\right)(V - nb) = nRT$\\n\\n**Significance of Constant 'a':**\\n- It acts as a **pressure correction** term, accounting for the attractive intermolecular forces between gas molecules.\\n- Real gas molecules attract each other, pulling back molecules about to strike the container wall, which reduces the measured pressure. The term $\\\\frac{an^2}{V^2}$ corrects for this reduction.\\n- A higher $a$ value indicates stronger intermolecular forces, making the gas easier to liquefy. Unit: $\\\\text{L}^2\\\\text{ atm mol}^{-2}$.\\n\\n**Significance of Constant 'b':**\\n- It acts as a **volume correction** term (excluded volume or co-volume), representing the finite size of the gas molecules.\\n- It represents the volume that is unavailable for the free movement of molecules because they cannot overlap. It is roughly 4 times the actual molecular volume.\\n- A higher $b$ value indicates a larger molecular size. Unit: $\\\\text{L mol}^{-1}$.",
        type: "long",
        marks: "5 Marks"
      },
      {
        question: "Discuss critical phenomenon of real gases.",
        answer: "**Critical Phenomena of Real Gases:**\\nCritical phenomena refer to the physical behavior of real gases as they approach and undergo the transition between the gaseous and liquid phases at a unique set of conditions called the critical point $(P_c, V_c, T_c)$:\\n\\n1. **Critical Temperature ($T_c$):** The maximum temperature at which a gas can be liquefied by the application of pressure alone. Above $T_c$, the kinetic energy of molecules is too high for intermolecular attractions to bind them into a liquid, regardless of pressure. $T_c = \\\\frac{8a}{27Rb}$.\\n2. **Critical Pressure ($P_c$):** The minimum pressure required to liquefy the gas at its critical temperature. $P_c = \\\\frac{a}{27b^2}$.\\n3. **Critical Volume ($V_c$):** The volume occupied by one mole of the gas at $T_c$ and $P_c$. $V_c = 3b$.\\n4. **Behavior at the Critical Point:** At the critical point, the density of the liquid phase equals the density of the vapor phase. The surface tension between the phases drops to zero, and the boundary separating liquid and gas completely disappears, merging the substance into a single homogeneous phase known as a **supercritical fluid**.",
        type: "long",
        marks: "5 Marks"
      }
    ]
  },
  {
    unitNumber: 3,
    unitTitle: "Intermolecular Forces and Potential Energy Surfaces",
    topicTitle: "Potential energy surfaces: introduction and representations",
    definition: "A Potential Energy Surface (PES) is a mathematical function or coordinate plot that describes the potential energy of a molecular system as a function of its atomic geometries under the Born-Oppenheimer approximation.",
    explanation: "The Born-Oppenheimer approximation assumes that since atomic nuclei are much heavier than electrons, we can consider the nuclei as stationary while calculating the electronic energy. By solving the electronic Schrödinger equation for many fixed nuclear geometries, we get the potential energy of the system as a function of the nuclear coordinates. For a diatomic molecule, the PES is a simple one-dimensional curve plotting energy against bond length (the Morse potential). This curve shows a minimum energy point (the equilibrium bond length, re) and an asymptotic limit at high distances (dissociation energy). For a system with N atoms, the potential energy depends on 3N - 6 coordinates (3N - 5 for linear). The resulting multidimensional PES is a hypersurface. We represent these surfaces using 3D plots or 2D contour maps (similar to topographical maps). On a PES, stable molecules and intermediates occupy energy minima (valleys), while transition states correspond to saddle points (the energy maximum along the minimum energy reaction pathway).",
    formulas: [
      "V(r) = D_e * [1 - e^(-a*(r - r_e))]² (Morse Potential for diatomic molecules)",
      "Degrees of freedom = 3N - 6 (Non-linear system coordinates)"
    ],
    equations: [
      "F_i = -dV/dq_i (Force acting on a nucleus along coordinate q_i)"
    ],
    applications: [
      "Modeling chemical reaction pathways to identify transition states and calculate activation energies.",
      "Simulating molecular dynamics to study protein folding and chemical reaction rates.",
      "Predicting vibrational spectra by calculating the curvature of the PES around its minima."
    ],
    importantPoints: [
      "A minimum point on a PES represents a stable molecular structure, where all force derivatives are zero and the second derivatives are positive.",
      "A transition state is a first-order saddle point, which represents an energy minimum in all directions except the reaction coordinate, where it is a maximum.",
      "The Born-Oppenheimer approximation is required to define a PES; if nuclear and electronic motions couple strongly (non-adiabatic effects), the concept of a PES breaks down.",
      "Reaction coordinates show the path of least energy connecting reactants, transition states, and products on the PES."
    ],
    commonQuestions: [
      "What is a Potential Energy Surface (PES)? Explain how it is constructed using the Born-Oppenheimer approximation.",
      "Describe the Morse potential energy curve for a diatomic molecule. Label the equilibrium bond distance and dissociation energy.",
      "Explain the terms: local minimum, global minimum, transition state, and reaction coordinate in the context of a PES."
    ],
    shortAnswer: "A Potential Energy Surface (PES) maps a molecular system's energy against its atomic coordinates under the Born-Oppenheimer approximation. Stable molecules are located at energy minima, while transition states are located at first-order saddle points (saddle-like energy maxima along the reaction pathway). Diatomic systems are modeled using the Morse potential curve.",
    longAnswer: "A Potential Energy Surface (PES) is a concept in quantum chemistry that relates molecular energy to molecular geometry. It is based on the Born-Oppenheimer approximation, which separates nuclear and electronic motion. Since nuclei are thousands of times heavier than electrons, we can solve the electronic Schrödinger equation for fixed nuclear positions. Plotting the resulting energies against the coordinates of the nuclei generates the PES. For a diatomic molecule, the surface is a one-dimensional curve of potential energy V(r) versus internuclear distance r. It is modeled by the Morse potential: V(r) = De * [1 - e^(-a(r-re))]², where De is the depth of the energy well (dissociation energy), re is the equilibrium bond length, and 'a' controls the width of the potential. For a polyatomic system with N atoms, the PES is a multidimensional surface with 3N-6 independent coordinates. We represent these surfaces using 3D energy plots or 2D contour maps. On these maps, valleys and basins represent stable chemical species: local minima represent isomers or intermediates, and the lowest point is the global minimum. A chemical reaction is represented by a path crossing these valleys. The reactants and products are minima, connected by a path of least energy called the reaction coordinate. The highest energy point along this path is the transition state, which is a first-order saddle point. At this point, the system is at an energy maximum along the reaction coordinate but at an energy minimum in all other perpendicular directions."
  }
];
