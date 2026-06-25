export const unit7Notes = [
  {
    unitNumber: 7,
    unitTitle: "Organic Reactions and Synthesis of a Drug Molecule",
    topicTitle: "Introduction to fundamental organic reaction types",
    definition: "Organic reactions are chemical transformations involving carbon compounds, classified into four fundamental types: substitution, addition, elimination, and rearrangement reactions.",
    explanation: "Organic reactions occur through the breaking of existing covalent bonds and the formation of new ones. Bonds can break homolytically (each atom retains one electron, forming free radicals) or heterolytically (one atom retains both electrons, forming ions). Reagents are classified as nucleophiles (electron-rich species with lone pairs or negative charges that attack electron-poor centers) or electrophiles (electron-poor species that attack electron-rich centers). 1. Substitution: One atom or group is replaced by another. 2. Addition: Two molecules react to form a single product, typical of unsaturated compounds with double or triple bonds. 3. Elimination: Atoms or groups are removed from adjacent carbon atoms, forming a double or triple bond. 4. Rearrangement: A molecule undergoes structural reorganization, producing an isomer of the starting material.",
    formulas: [
      "\\text{Substitution: } \\ce{R-X + Y -> R-Y + X}",
      "\\text{Addition: } \\ce{A=B + X-Y -> X-A-B-Y}",
      "\\text{Elimination: } \\ce{X-A-B-Y -> A=B + X-Y}"
    ],
    equations: [
      "\\text{Radical substitution: } \\ce{CH₄ + Cl₂ ->[light] CH₃Cl + HCl}",
      "\\text{Addition to ethylene: } \\ce{CH2=CH2 + Br2 -> CH2Br-CH2Br}"
    ],
    applications: [
      "Manufacturing basic petrochemicals (polymers, solvents) through addition and elimination reactions.",
      "Synthesizing active pharmaceutical ingredients (APIs) by combining sequence reactions.",
      "Refining crude oil fractions into gasoline using thermal and catalytic cracking (elimination/rearrangement)."
    ],
    importantPoints: [
      "Nucleophiles (e.g., OH⁻, NH₃, H₂O) are Lewis bases; electrophiles (e.g., H⁺, BF₃, carbocations) are Lewis acids.",
      "Reaction mechanisms describe the step-by-step pathway of bond-breaking and bond-forming, including transition states and intermediates (like carbocations, carbanions, and free radicals).",
      "Thermodynamics determines the position of equilibrium (spontaneity), whereas kinetics determines the rate at which the reaction occurs.",
      "In addition reactions, the hybridization of carbon changes from sp² to sp³, whereas in elimination reactions, it changes from sp³ to sp²."
    ],
    commonQuestions: [
      "Classify the fundamental types of organic reactions. Give one example of each type.",
      "Explain the difference between homolytic and heterolytic bond cleavage. What intermediates are formed in each case?",
      "Define nucleophiles and electrophiles. Classify the following: AlCl₃, NH₃, H3O⁺, CN⁻, BF₃."
    ],
    shortAnswer: "Organic reactions are classified into four main types: substitution (replacing a group), addition (adding groups across a double/triple bond), elimination (removing groups to form a double/triple bond), and rearrangement (reorganizing the carbon skeleton). Reactions are driven by attacks from electrophiles (electron-poor) or nucleophiles (electron-rich).",
    longAnswer: "Organic chemistry is built upon fundamental reaction types. These reactions involve the cleavage of covalent bonds and the formation of new ones, proceeding via homolytic or heterolytic pathways. Homolytic cleavage divides the bonding electrons equally, yielding uncharged free radicals. Heterolytic cleavage assigns both bonding electrons to the more electronegative atom, producing ionic intermediates (carbocations and carbanions). The reacting species are classified as nucleophiles (electron pair donors, like OH⁻, H₂O, NH₃) or electrophiles (electron pair acceptors, like H⁺, NO2⁺, AlCl₃). The four main reaction classes are: 1. Substitution: An atom or group on a carbon skeleton is replaced by another. For example, in the chlorination of methane, a chlorine atom replaces a hydrogen atom. 2. Addition: Reagents add across a multiple bond (double or triple bond), converting unsaturated π-bonds into saturated σ-bonds. An example is the halogenation of ethene with bromine to form 1,2-dibromoethane. 3. Elimination: The reverse of addition. Two substituents are removed from adjacent carbon atoms (typically a hydrogen and a leaving group), forming a multiple bond. An example is the dehydration of ethanol with acid to yield ethene. 4. Rearrangement: The carbon skeleton or functional groups of a molecule are reorganized to form a structural isomer. An example is the isomerization of n-butane to isobutane under acidic conditions. Understanding these classes and their mechanisms allows chemists to design synthetic routes for complex target molecules."
  },
  {
    unitNumber: 7,
    unitTitle: "Organic Reactions and Synthesis of a Drug Molecule",
    topicTitle: "Substitution reactions (nucleophilic SN1 and SN2, electrophilic)",
    definition: "A substitution reaction involves replacing an atom or group of atoms attached to a carbon atom of a substrate with another atom or group (the substituent), leaving the rest of the molecule unchanged.",
    explanation: "1. Electrophilic Aromatic Substitution (S_E): Aromatic systems undergo S_E due to their electron-rich π-systems. The general mechanism follows three steps:\n  - Step 1: Formation of an electrophile: E-Nu → E⁺ + Nu⁻.\n  - Step 2: Electrophilic attack on the benzene ring to form a resonance-stabilized arenium ion (sigma complex).\n  - Step 3: Deprotonation by a base to restore aromaticity.\n  Key examples:\n  - Nitration: Benzene + conc. HNO₃/conc. H₂SO₂ → Nitrobenzene.\n  - Halogenation: Benzene + Cl₂/FeCl₃ → Chlorobenzene; Benzene + Br₂/FeBr₃ → Bromobenzene.\n  - Iodination: Benzene + I₂ + HNO₃ (with heat) → Iodobenzene (requires HNO₃ to oxidize I⁻ and drive reaction).\n  - Sulfonation: Benzene + conc. H₂SO₄ at 80°C (or fuming H₂SO₄ at room temp) → Benzenesulfonic acid + H₂O.\n  - Friedel-Crafts Alkylation: Benzene + RX + anhydrous AlCl₃ → Alkylbenzene + HX.\n  - Friedel-Crafts Acylation: Benzene + RCOCl + anhydrous AlCl₃ → Acylbenzene + HCl.\n\n2. Nucleophilic Substitution (S_N):\n  - S_N2: Bimolecular, single-step concerted process. Backside attack of nucleophile causes Walden Inversion (like an umbrella turning inside out). Favored by polar aprotic solvents (DMSO, DMF). Reactivity: Methyl > Primary > Secondary > Tertiary (steric hindrance control).\n  - S_N1: Unimolecular, two-step process. Rate-determining carbocation formation followed by fast nucleophilic attack, yielding a Racemic Mixture. Favored by polar protic solvents (H₂O, EtOH). Reactivity: Tertiary > Secondary > Primary > Methyl (carbocation stability control).\n  - S_Ni (Internal): Substitution Nucleophilic Internal. Uncommon pathway yielding Retention of Configuration because the nucleophile attacks from the frontside via a cyclic transition state (e.g., alcohol + SOCl₂).\n\nS_N1 vs S_N2 Comparison Table:\n- S_N1: First order rate law | Nucleophile attack from either side | Racemic mixture | Favored by polar protic solvents | Favored by low concentration of nucleophile.\n- S_N2: Second order rate law | Backside attack | Inversion of configuration | Favored by polar aprotic solvents | Favored by high concentration of nucleophile.",
    formulas: [
      "\\text{S}_\\text{N}1\\text{ Rate} = k[\\text{Substrate}]",
      "\\text{S}_\\text{N}2\\text{ Rate} = k[\\text{Substrate}][\\text{Nucleophile}]",
      "\\text{S}_\\text{N}2\\text{ Reactivity: Methyl} > 1^\\circ > 2^\\circ > 3^\\circ",
      "\\text{S}_\\text{N}1\\text{ Reactivity: } 3^\\circ > 2^\\circ > 1^\\circ > \\text{Methyl}"
    ],
    equations: [
      "\\text{Iodination: } \\ce{C6H6 + I2 ->[HNO3][\\Delta] C6H5I}",
      "\\text{Friedel-Crafts Alkylation: } \\ce{C6H6 + RX ->[anh. AlCl3] C6H5R + HX}",
      "\\text{S}_\\text{N}i\\text{ Example: } \\ce{R-OH + SOCl2 -> R-Cl + SO2 + HCl}"
    ],
    applications: [
      "Synthesizing primary alkyl halides via S_N2 and tertiary derivatives via S_N1.",
      "Manufacturing nitrobenzene, benzenesulfonic acid, and Friedel-Crafts alkyl/acyl intermediates in industry.",
      "Controlled stereoselective syntheses using Walden inversion (S_N2) or configuration retention (S_Ni)."
    ],
    importantPoints: [
      "Unlike chlorination and bromination, iodination of benzene requires an oxidizing agent (HNO₃) and heat to destroy the HI byproduct.",
      "S_N2 involves a pentacoordinate transition state with partial bonds to both the nucleophile and leaving group.",
      "S_N1 leads to racemization due to the planar sp²-hybridized carbocation intermediate.",
      "S_Ni reactions occur with thionyl chloride (SOCl₂) and proceed with retention of configuration in the absence of pyridine."
    ],
    commonQuestions: [
      "Explain the steps of the general mechanism of electrophilic aromatic substitution.",
      "Compare the S_N1 and S_N2 mechanisms in terms of kinetics, stereochemistry, solvent effect, and substrate reactivity.",
      "What is the S_Ni mechanism? Illustrate with a classic reaction.",
      "Write equations for Friedel-Crafts alkylation, acylation, and sulfonation of benzene."
    ],
    shortAnswer: "Substitution reactions replace a group on a substrate. Electrophilic aromatic substitutions (EAS) on benzene include nitration, halogenation, sulfonation, and Friedel-Crafts reactions. Nucleophilic substitutions occur via S_N1 (2 steps, carbocation, racemization, 3° substrates) or S_N2 (1 step, backside attack, inversion, 1° substrates), or S_Ni (retention, thionyl chloride).",
    longAnswer: "Substitution reactions replace a group on a carbon center while keeping the remainder of the molecular skeleton intact. Electrophilic Aromatic Substitution (EAS) involves the attack of a benzene ring on an electrophile. First, a strong electrophile is generated (such as NO₂⁺ via H₂SO₄/HNO₃, or R⁺/RCO⁺ via AlCl₃). The ring π-system attacks the electrophile, breaking aromaticity to form a resonance-stabilized arenium ion (sigma complex). Finally, a weak base abstracts a proton from the sp³ carbon, restoring the stable aromatic system. Iodination is unique because it is reversible; adding nitric acid (HNO₃) shifts the equilibrium by oxidizing the byproduct HI. Nucleophilic substitutions can proceed by three pathways: S_N1, S_N2, or S_Ni. S_N1 is a unimolecular two-step mechanism where the leaving group departs to form a planar carbocation intermediate. This planar geometry allows nucleophilic attack from either side, resulting in a racemic mixture. S_N1 is favored by tertiary substrates and polar protic solvents. S_N2 is a bimolecular concerted single-step mechanism. The nucleophile attacks from the backside, pushing substituents through a pentacoordinate transition state into a reversed spatial arrangement (Walden inversion). S_N2 is favored by primary substrates and polar aprotic solvents (like DMSO and DMF). S_Ni is a unimolecular internal nucleophilic substitution where the nucleophile is part of the leaving group complex. The attack occurs from the front side within a cyclic transition state, leading to retention of stereochemical configuration, as seen in the reaction of alcohols with thionyl chloride.",
    diagramType: 'sn1_vs_sn2',
    derivation: [
      {
        title: "Step 1 — SN2 rate law from the collision theory",
        steps: [
          "SN2 is a concerted, bimolecular reaction: Nucleophile (Nu) + substrate (R-X) $\\xrightarrow{k}$ products in a single step.",
          "Rate law: $\\text{rate} = k_2[\\text{R-X}][\\text{Nu}]$ (2nd order overall). Both concentrations appear because both species must collide simultaneously.",
          "The transition state: $[\\text{Nu}\\cdots\\text{C}\\cdots\\text{X}]^\\ddagger$ is pentacoordinate. The LUMO of C-X is attacked by the HOMO of Nu from the backside ($180^\\circ$)."
        ]
      },
      {
        title: "Step 2 — SN1 rate law and carbocation stability",
        steps: [
          "SN1 is a two-step mechanism. The rate-determining step (RDS) is ionization: $\\text{R-X} \\xrightarrow{k_1} \\text{R}^+ + \\text{X}^-$ (slow).",
          "Rate law: $\\text{rate} = k_1[\\text{R-X}]$ (1st order, unimolecular). [Nu] does not appear because it is not involved in the RDS.",
          "Carbocation stability: $3^\\circ > 2^\\circ > 1^\\circ > \\text{Methyl}$, because each additional alkyl group donates electron density via hyperconjugation and induction, lowering the activation energy $\\Delta G^\\ddagger$."
        ]
      },
      {
        title: "Step 3 — Walden inversion geometry proof",
        steps: [
          "In SN2, the nucleophile must approach the rear lobe of the C-X $\\sigma^*$ antibonding orbital (backside attack).",
          "As the nucleophile forms a new bond, the three remaining substituents invert (like an umbrella turning inside out): $\\text{(R)} \\to \\text{(S)}$ configuration.",
          "Evidence: The SN2 reaction of (R)-2-bromooctane with $\\text{OH}^-$ gives exclusively (S)-2-octanol — 100\\% inversion of configuration."
        ]
      }
    ]
  },
  {
    unitNumber: 7,
    unitTitle: "Organic Reactions and Synthesis of a Drug Molecule",
    topicTitle: "Addition reactions (electrophilic, nucleophilic, free radical)",
    definition: "An addition reaction is an organic reaction where two or more molecules combine to form a single larger molecule. Electrophilic addition occurs on carbon-carbon double/triple bonds, nucleophilic addition occurs on polar carbon-heteroatom double bonds, and free-radical addition proceeds via radical intermediates.",
    explanation: "1. Electrophilic Addition: Typical of alkenes and alkynes. The electron-rich π-bond acts as a nucleophile, attacking an electrophile (like H⁺ in HBr) to form a carbocation intermediate. The nucleophilic partner (like Br⁻) then attacks the carbocation. The regioselectivity is governed by Markovnikov's Rule: the hydrogen adds to the carbon with more hydrogen atoms, forming the more stable carbocation intermediate. 2. Nucleophilic Addition: Typical of carbonyl compounds (aldehydes and ketones). The polar C=O bond has an electron-deficient carbon (δ+). A nucleophile attacks this carbon, pushing the π-electrons onto the electronegative oxygen to form a tetrahedral intermediate, which is then protonated. 3. Free-Radical Addition: Occurs when alkenes react with HBr in the presence of peroxides (Kharasch effect), proceeding via radical intermediates. This pathway results in Anti-Markovnikov addition because the bromine radical attacks first, forming the more stable carbon radical.",
    formulas: [
      "\\text{Markovnikov's rule: H adds to carbon with more H's}",
      "\\text{Anti-Markovnikov addition: } \\ce{HBr} + \\text{Peroxides}"
    ],
    equations: [
      "\\text{Electrophilic Addition: } \\ce{CH3-CH=CH2 + HBr -> CH3-CH(Br)-CH3}",
      "\\text{Free-Radical Addition: } \\ce{CH3-CH=CH2 + HBr ->[Peroxide] CH3-CH2-CH2Br}",
      "\\text{Nucleophilic Addition: } \\ce{R-CHO + HCN -> R-CH(OH)CN}"
    ],
    applications: [
      "Hydration of alkenes to produce industrial alcohols (e.g., ethylene to ethanol).",
      "Manufacturing synthetic polymers (like polyethylene, polypropylene) via free-radical addition polymerization.",
      "Synthesizing cyanohydrins and hemiacetals in carbohydrate and pharmaceutical chemistry."
    ],
    importantPoints: [
      "Markovnikov's rule is based on the thermodynamic stability of carbocation intermediates: tertiary > secondary > primary.",
      "Carbonyl groups undergo nucleophilic addition because the electronegative oxygen polarizes the carbonyl carbon, making it highly electrophilic.",
      "The peroxide effect (anti-Markovnikov addition) works only for HBr, not for HCl or HI, due to thermodynamic limitations of the radical propagation steps.",
      "Nucleophilic addition of Grignard reagents (RMgX) to carbonyls is a key method for forming carbon-carbon bonds."
    ],
    commonQuestions: [
      "Explain the mechanism of electrophilic addition of HBr to propene. State Markovnikov's rule.",
      "What is the peroxide effect? Discuss the free-radical mechanism of the addition of HBr to propene in the presence of benzoyl peroxide.",
      "Explain the mechanism of nucleophilic addition of HCN to acetaldehyde."
    ],
    shortAnswer: "Addition reactions combine molecules across multiple bonds. Alkenes undergo electrophilic addition (e.g., adding HBr via a carbocation, following Markovnikov's rule). In the presence of peroxides, HBr adds via a free-radical mechanism, yielding anti-Markovnikov products. Carbonyls (C=O) undergo nucleophilic addition (e.g., adding HCN) due to the polar carbon center.",
    longAnswer: "Addition reactions are characteristic of molecules containing multiple bonds. Alkenes undergo electrophilic addition because their π-electron cloud is accessible to electrophiles. When propene reacts with HBr, the reaction begins with the electrophilic attack of H⁺ on the π-bond. According to Markovnikov's rule, the electrophile adds to the sp² carbon that already has more hydrogens (C3). This selective addition generates a secondary carbocation (CH3-CH⁺-CH3), which is more stable than a primary carbocation due to inductive stabilization and hyperconjugation from the two flanking methyl groups. In the second step, the nucleophilic bromide ion (Br⁻) attacks the carbocation, yielding 2-bromopropane. If the same reaction is carried out in the presence of organic peroxides (ROOR), the mechanism changes to free-radical addition (the Kharasch or peroxide effect). The peroxide decomposes thermally to form alkoxyl radicals (RO•), which react with HBr to generate a bromine radical (Br•). The Br• radical attacks the alkene first. To form the more stable secondary carbon radical (CH3-CH•-CH2Br) instead of a primary one, the bromine radical attaches to the terminal carbon. The secondary radical then abstracts a hydrogen atom from HBr to form 1-bromopropane, yielding the anti-Markovnikov product. Polar double bonds, such as the carbonyl group (C=O) in aldehydes and ketones, undergo nucleophilic addition. Because oxygen is more electronegative than carbon, the carbonyl carbon carries a partial positive charge (δ+). A nucleophile (such as a cyanide ion, CN⁻) attacks this carbon, converting the hybridization from planar sp² to tetrahedral sp³ and forming an alkoxide intermediate. Protonation of this intermediate yields a cyanohydrin, a key intermediate in the synthesis of amino acids and hydroxy acids.",
    diagramType: 'addition_mechanism',
    derivation: [
      {
        title: "Step 1 — Markovnikov's rule from carbocation stability",
        steps: [
          "When HBr adds to propene ($\\text{CH}_3\\text{-CH=CH}_2$), the proton (H⁺) adds to the $\\pi$-bond first (electrophilic attack on the more electron-rich carbon).",
          "Two possible carbocations form: (a) H⁺ on C3 (terminal) $\\to$ secondary carbocation $\\text{CH}_3\\text{-}\\overset{+}{\\text{C}}\\text{H-CH}_3$; (b) H⁺ on C2 $\\to$ primary carbocation $\\text{CH}_3\\text{-CH}_2\\text{-}\\overset{+}{\\text{C}}\\text{H}_2$",
          "Stability: $2^\\circ$ carbocation $(E_a \\text{ lower})$ is strongly preferred. Br⁻ attacks the $2^\\circ$ carbocation $\\to$ **2-bromopropane** (Markovnikov product)."
        ]
      },
      {
        title: "Step 2 — Hammond postulate justification",
        steps: [
          "The Hammond postulate: for an endothermic step, the transition state resembles the products. Since carbocation formation is endothermic, the TS resembles the carbocation.",
          "Therefore: the TS energy order mirrors the carbocation stability order: $3^\\circ < 2^\\circ < 1^\\circ$ (lower activation energy for more stable carbocation).",
          "$\\Delta G^\\ddagger(2^\\circ\\text{ cation}) < \\Delta G^\\ddagger(1^\\circ\\text{ cation})$, so the $2^\\circ$ carbocation forms faster and exclusively."
        ]
      },
      {
        title: "Step 3 — Anti-Markovnikov free-radical mechanism (Kharasch)",
        steps: [
          "Initiation: $\\text{ROOR} \\xrightarrow{h\\nu \\text{ or } \\Delta} 2\\,\\text{RO}^\\bullet \\xrightarrow{+\\text{HBr}} \\text{ROH} + \\text{Br}^\\bullet$",
          "Propagation 1: $\\text{Br}^\\bullet + \\text{CH}_3\\text{-CH=CH}_2 \\to \\text{CH}_3\\text{-}\\overset{\\bullet}{\\text{C}}\\text{H-CH}_2\\text{Br}$ (2° radical, more stable)",
          "Propagation 2: $\\text{CH}_3\\text{-}\\overset{\\bullet}{\\text{C}}\\text{H-CH}_2\\text{Br} + \\text{HBr} \\to \\text{CH}_3\\text{-CH}_2\\text{-CH}_2\\text{Br}$ (1-bromopropane) $+ \\text{Br}^\\bullet$. Anti-Markovnikov product."
        ]
      }
    ]
  },
  {
    unitNumber: 7,
    unitTitle: "Organic Reactions and Synthesis of a Drug Molecule",
    topicTitle: "Elimination reactions (E1 and E2 mechanisms)",
    definition: "An elimination reaction involves the removal of two or four atoms or groups from adjacent carbon atoms to produce multiple bonds in the product, operating via E1, E2, or E1cB mechanisms.",
    explanation: "1. E2 Mechanism: Bimolecular, single-step reaction with a transition state. A base uses its lone pair to remove a β-hydrogen, enabling the carbon to form a double bond as the leaving group departs. It requires an anti-periplanar conformation (dihedral angle 180° between H and Lg).\n  - Saytzev (Zaitsev) Rule: In substrates with multiple β-hydrogens on different carbons, the proton is eliminated preferably from the carbon with the least hydrogen atoms. This yields the more substituted, thermodynamically stable alkene (Saytzev product), favored by small bases like CH₃ONa/CH₃OH.\n  - Hoffmann Rule: When bulky bases (like potassium tert-butoxide, t-BuOK) are used, steric hindrance prevents attack on the more substituted carbon, yielding the less substituted, kinetically stable alkene as the major product (Hoffmann product).\n2. E1 Mechanism: Unimolecular, two-step reaction. First, the leaving group departs to form a carbocation intermediate (rate-determining step). Second, a weak base removes a β-proton to form the double bond. Competes with S_N1.\n3. E1cB Mechanism: Elimination Unimolecular conjugate Base. It occurs when the substrate has a poor leaving group and a highly acidic β-proton. First, a strong base removes the β-proton to form a carbanion intermediate. Second, the carbanion collapses, ejecting the leaving group to form the double bond.\n  Key examples of E1cB:\n  - Aldol Condensation: Aldehydes/ketones with an α-hydrogen react in base to form a β-hydroxy carbonyl, which dehydrates on heating via E1cB to an α,β-unsaturated carbonyl.\n  - Claisen-Schmidt Reaction: A cross-aldol condensation between an aromatic aldehyde (no α-hydrogen, e.g. benzaldehyde) and an aliphatic aldehyde/ketone (e.g. acetaldehyde) to yield cinnamaldehyde.",
    formulas: [
      "\\text{E1 Rate} = k[\\text{Substrate}]",
      "\\text{E2 Rate} = k[\\text{Substrate}][\\text{Base}]",
      "\\text{E1cB Rate} = k[\\text{Carbanion Intermediate}]"
    ],
    equations: [
      "\\text{Saytzev Product (with CH3ONa): } \\ce{CH3-CH2-CH(Br)-CH3 -> CH3-CH=CH-CH3 } \\text{ (2-butene)}",
      "\\text{Hoffmann Product (with t-BuOK): } \\ce{CH3-CH2-CH(Br)-CH3 -> CH3-CH2-CH=CH2 } \\text{ (1-butene)}",
      "\\text{Claisen-Schmidt: } \\ce{C6H5-CHO + CH3-CHO ->[dil. NaOH][\\Delta] C6H5-CH=CH-CHO + H2O } \\text{ (cinnamaldehyde)}"
    ],
    applications: [
      "Dehydration of alcohols and dehydrohalogenation of alkyl halides to form alkenes.",
      "Selective synthesis of thermodynamic (Saytzev) or kinetic (Hoffmann) alkenes.",
      "Synthesizing α,β-unsaturated carbonyl compounds (like cinnamaldehyde) via aldol condensation."
    ],
    importantPoints: [
      "Zaitsev products are thermodynamically stable due to alkene stabilization by hyperconjugation and alkyl group donation.",
      "Hoffmann products are kinetically favored when steric hindrance (from a bulky base like t-BuOK) blocks access to the more substituted proton.",
      "E1cB mechanism is unique because deprotonation occurs *before* the leaving group departs, forming a stable carbanion conjugate base.",
      "The Claisen-Schmidt reaction is a specialized cross-aldol reaction between aromatic and aliphatic carbonyls."
    ],
    commonQuestions: [
      "Compare E1, E2, and E1cB mechanisms in terms of intermediates, kinetics, and driving forces.",
      "State the Saytzev rule and contrast it with Hoffmann elimination. Show products for 2-bromobutane reacting with CH3ONa and t-BuOK.",
      "Explain the mechanism of base-catalyzed aldol condensation and the subsequent E1cB dehydration.",
      "Describe the Claisen-Schmidt synthesis of cinnamaldehyde from benzaldehyde and acetaldehyde."
    ],
    shortAnswer: "Eliminations form multiple bonds. E1 is unimolecular (carbocation intermediate). E2 is bimolecular (concerted, requires anti-periplanar H/Lg alignment). Regioselectivity yields the highly substituted Zaitsev product (small bases) or the less substituted Hoffmann product (bulky bases like t-BuOK). E1cB occurs via a carbanion intermediate, driving dehydration in Aldol and Claisen-Schmidt reactions.",
    longAnswer: "Elimination reactions involve the loss of two atoms or groups from adjacent carbons to form an alkene. E1 is a unimolecular two-step pathway competing with S_N1: the leaving group departs to form a carbocation, which is subsequently deprotonated by a weak base. E2 is a bimolecular concerted single-step pathway: a base abstracts a β-proton as the leaving group departs. E2 requires an anti-periplanar conformation (180° dihedral angle between H and Lg) for optimal parallel p-orbital overlap. The regioselectivity of E2 is controlled by base size: small bases (like ethoxide or methoxide) yield the thermodynamically stable, more highly substituted alkene (Saytzev product, e.g. 2-butene) following Zaitsev's rule. Bulky bases (like t-butoxide) suffer from steric hindrance, abstracting the most accessible proton from the least substituted carbon, yielding the less substituted alkene (Hoffmann product, e.g. 1-butene) as the major product. E1cB is a unimolecular conjugate base mechanism that occurs when the substrate has an acidic β-proton and a poor leaving group. A strong base removes the acidic proton first, forming a stable carbanion conjugate base. The carbanion then slow ejects the leaving group to form the π-bond. This mechanism drives the dehydration step in Aldol Condensations (where β-hydroxy aldehydes/ketones eliminate water to form α,β-unsaturated carbonyls) and the Claisen-Schmidt Reaction (a cross-aldol condensation between aromatic aldehydes like benzaldehyde and aliphatic carbonyls like acetaldehyde to synthesize cinnamaldehyde).",
    diagramType: 'aldol_condensation',
    derivation: [
      {
        title: "Step 1 — E2 kinetics and anti-periplanar requirement",
        steps: [
          "E2 is bimolecular: $\\text{rate} = k_2[\\text{Substrate}][\\text{Base}]$. Both species are involved in the rate-determining step (a single concerted step).",
          "Stereoelectronic requirement: H and leaving group must be anti-periplanar (dihedral angle $= 180^\\circ$) for the base, C-H, C-C, and C-LG bonds to be in the same plane and allow formation of the $\\pi$-bond.",
          "If dihedral angle $\\ne 180^\\circ$: poor orbital overlap, slow or no E2. Example: trans-isomers react faster than cis-isomers with E2."
        ]
      },
      {
        title: "Step 2 — Zaitsev vs. Hofmann regioselectivity",
        steps: [
          "Multiple β-H's can be eliminated. Zaitsev's rule: with small base, the thermodynamically more stable (more substituted) alkene is formed.",
          "Stability order: $\\text{tetrasubstituted} > \\text{trisubstituted} > \\text{disubstituted} > \\text{monosubstituted}$ alkene (each alkyl group donates via hyperconjugation, stabilizing the π-system).",
          "With bulky base (t-BuOK): steric repulsion near the more substituted carbon makes H abstraction difficult — base attacks the least hindered H, giving Hofmann (less substituted) product."
        ]
      },
      {
        title: "Step 3 — E1cB mechanism and aldol condensation",
        steps: [
          "E1cB (Elimination Unimolecular Conjugate Base): Step 1 (fast): Base removes acidic α-H $\\to$ stabilized carbanion (enolate). Step 2 (slow, RDS): leaving group departs from the carbanion.",
          "In aldol condensation: β-hydroxy carbonyl $\\xrightarrow{\\text{heat, base}}$ enolate $\\to$ loss of OH⁾ as water $\\to$ $\\alpha,\\beta$-unsaturated carbonyl.",
          "Claisen-Schmidt: PhCHO (no α-H, can't self-condense) + CH₃CHO (has α-H, forms enolate) $\\xrightarrow{\\text{NaOH, }Δ}$ trans-cinnamaldehyde (C₆H₅CH=CH-CHO) + H₂O."
        ]
      }
    ]
  },
  {
    unitNumber: 7,
    unitTitle: "Organic Reactions and Synthesis of a Drug Molecule",
    topicTitle: "Oxidation and reduction reactions in organic chemistry",
    definition: "Oxidation is the gain of oxygen or loss of hydrogen (raising carbon oxidation state). Reduction is the loss of oxygen or gain of hydrogen (lowering carbon oxidation state).",
    explanation: "Organic redox reactions are characterized by changes in the numbers of bonds to oxygen and hydrogen:\n1. Oxidation:\n  - Alcohols: Primary alcohols are oxidized to aldehydes (using mild Pyridinium Chlorochromate, PCC or CrO₃/Py) and further to carboxylic acids (using strong KMnO₄ or K₂Cr₂O₶). Secondary alcohols are oxidized to ketones (using PCC or K₂Cr₂O₶). Tertiary alcohols resist oxidation.\n  - Ring Substituents: Alkyl benzenes (like toluene) are oxidized to benzoic acid using KMnO₄.\n  - Epoxidation: Alkenes react with mCPBA (meta-Chloroperoxybenzoic Acid, m-ClC₆H₄CO₃H) to form epoxides.\n  - Baeyer-Villiger Oxidation: Ketones are oxidized to esters using peroxy acids (e.g., CH₃COOOH or perbenzoic acid) in NaOH. Aldehydes do not participate.\n  - Glycol Cleavage: 1,2-diols are cleaved into two carbonyl compounds using HIO₄ or NaIO₄.\n  - Ozonolysis: Alkenes react with ozone (O₃) to form ozonides, which are reduced with Zn/H₂O to yield carbonyl compounds.\n2. Reduction:\n  - LiAlH₄: A powerful, non-selective hydride reducing agent that reduces aldehydes, ketones, esters, and carboxylic acids to alcohols. Requires anhydrous conditions.\n  - NaBH₄: A milder, selective reducing agent that reduces only aldehydes and ketones to alcohols. Can be used in water or ethanol.",
    formulas: [
      "\\text{Primary Alcohol } \\ce{R-CH2OH ->[PCC] R-CHO ->[K2Cr2O7/H+] R-COOH}",
      "\\text{Epoxidation: } \\ce{R-CH=CH-R' ->[mCPBA] R-CH(O)CH-R'} \\text{ (epoxide)}",
      "\\text{Baeyer-Villiger: } \\ce{R-CO-R ->[CH3COOOH][NaOH] R-CO-O-R} \\text{ (ester)}"
    ],
    equations: [
      "\\text{Toluene Oxidation: } \\ce{C6H5-CH3 ->[KMnO4] C6H5-COOH}",
      "\\text{Glycol Cleavage: } \\ce{R-CH(OH)-CH(OH)-R' ->[HIO4] R-CHO + R'-CHO}",
      "\\text{Ozonolysis: } \\ce{R2C=CR2 ->[1. O3][2. Zn/H2O] 2 R2C=O}"
    ],
    applications: [
      "Synthesizing aldehydes, ketones, and carboxylic acids from alcohol precursors.",
      "Cleaving alkenes via ozonolysis to identify double bond positions in structural elucidation.",
      "Converting ketones to esters via Baeyer-Villiger oxidation in organic synthesis."
    ],
    importantPoints: [
      "PCC ([C₅H₅NH]⁺[CrO₃Cl]⁻) is anhydrous, preventing aldehyde hydration and thus stopping oxidation at the aldehyde stage.",
      "Aldehydes do not undergo Baeyer-Villiger oxidation; the reaction is selective for ketones to yield esters.",
      "LiAlH₄ reacts violently with water or alcohols, so reductions must be run in dry ether; NaBH₄ is stable in protic solvents.",
      "Ozonolysis involves the formation of a cyclic ozonide intermediate, which is cleaved reductively with Zn/H₂O to prevent further oxidation."
    ],
    commonQuestions: [
      "Detail the oxidation pathways for primary, secondary, and tertiary alcohols. State the reagents used.",
      "What is the Baeyer-Villiger oxidation? Provide the general equation and discuss reactant selectivity.",
      "Explain the process of alkene ozonolysis, showing the intermediates and final carbonyl products.",
      "Compare LiAlH4 and NaBH4 in terms of reducing strength, selectivity, and safety."
    ],
    shortAnswer: "Oxidation increases oxygen content or decreases hydrogen (e.g. alcohol to carbonyl via PCC, epoxidation with mCPBA, ketone to ester via Baeyer-Villiger, ozonolysis). Reduction increases hydrogen or decreases oxygen (e.g. carbonyls to alcohols using LiAlH₄ or NaBH₄).",
    longAnswer: "Redox reactions in organic chemistry are defined by changes in the bonds to oxygen and hydrogen. Oxidation involves increasing C-O bonds or decreasing C-H bonds, whereas reduction is the reverse. Primary alcohols can be oxidized to aldehydes using mild anhydrous Pyridinium Chlorochromate (PCC) in dichloromethane, which prevents the aldehyde from forming a hydrate that would oxidize further. Strong reagents like KMnO₄ or acidic K₂Cr₂O₇ oxidize primary alcohols directly to carboxylic acids, and secondary alcohols to ketones. Tertiary alcohols resist oxidation due to the lack of a hydrogen on the carbinol carbon. Alkenes can be oxidized to epoxides (three-membered cyclic ethers) using mCPBA, or cleaved to carbonyls via ozonolysis (treatment with O₃ followed by reductive workup with Zn/H₂O). Ketones undergo Baeyer-Villiger oxidation using peroxy acids to insert an oxygen atom adjacent to the carbonyl, yielding esters. Reduction reactions utilize hydride transfer. Lithium Aluminum Hydride (LiAlH₄) is a powerful, non-selective reducing agent that reduces aldehydes, ketones, esters, and carboxylic acids to alcohols; it requires anhydrous solvents like diethyl ether due to its violent reaction with water. Sodium Borohydride (NaBH₄) is a milder, selective agent that reduces only aldehydes and ketones, and is safe to use in water or alcohol.",
    diagramType: 'redox_alcohols',
    derivation: [
      {
        title: "Step 1 — Organic oxidation state of carbon",
        steps: [
          "Carbon oxidation state is calculated by assigning: $-1$ for each C-H bond, $+1$ for each C-O, C-N, or C-halogen bond, and $0$ for C-C bonds.",
          "Primary alcohol R-CH₂-OH: oxidation state of the carbinol C = 2 H bonds ($-2$) + 1 O bond ($+1$) = $-1$.",
          "Aldehyde R-CHO: 1 H ($-1$) + 1 O ($+1$) = $0$. Carboxylic acid R-COOH: 2 O bonds ($+2$). Oxidation increases the state: $\\text{alcohol}(-1) \\to \\text{aldehyde}(0) \\to \\text{acid}(+2)$."
        ]
      },
      {
        title: "Step 2 — Mechanism of PCC oxidation of primary alcohol",
        steps: [
          "PCC ($[\\text{C}_5\\text{H}_5\\text{NH}]^+[\\text{CrO}_3\\text{Cl}]^-$): The Cr(VI) complex coordinates to the alcohol oxygen, forming a chromate ester.",
          "The chromate ester undergoes an E2-type intramolecular elimination: base abstracts the α-H, and the Cr–O bond breaks simultaneously, releasing Cr(IV).",
          "PCC is anhydrous (in CH₂Cl₂, no water): aldehydes cannot hydrate to gem-diols, so oxidation stops at the aldehyde stage. $1^\\circ\\text{ alcohol} \\to \\text{aldehyde only}$."
        ]
      },
      {
        title: "Step 3 — Selectivity: LiAlH₄ vs. NaBH₄",
        steps: [
          "LiAlH₄: provides H⁾ (hydride) from Al-H (very reactive). Reduces all C=O groups: aldehydes, ketones, esters, carboxylic acids, amides. Reacts violently with water (generates H₂), must use dry ether.",
          "NaBH₄: provides H⁾ from B-H (milder). Reduces only polarized C=O with low steric demand: aldehydes and ketones. Does NOT reduce esters or carboxylic acids. Safe in water or ethanol.",
          "Rule of thumb: $\\text{NaBH}_4$ reduces aldehydes \\& ketones; $\\text{LiAlH}_4$ reduces everything including esters, acids, and amides."
        ]
      }
    ]
  },
  {
    unitNumber: 7,
    unitTitle: "Organic Reactions and Synthesis of a Drug Molecule",
    topicTitle: "Cyclization and ring-opening reactions",
    definition: "Cyclization reactions close open-chain precursors to form cyclic structures (e.g. Diels-Alder cycloaddition). Ring-opening reactions cleave cyclic systems, often driven by the release of ring strain in 3- or 4-membered rings (like epoxides).",
    explanation: "1. Cyclization & Diels-Alder: Rings can form via intramolecular nucleophilic attack or via cycloaddition. The Diels-Alder Reaction is a classic concerted $[4+2]$ cycloaddition. A conjugated diene ($4\\pi$-electrons) reacts with a dienophile (alkene or alkyne, $2\\pi$-electrons) under thermal conditions to form a stable six-membered cyclohexene ring in a single step. It is highly valued for building complex rings with predictable stereochemistry. 2. Ring-Opening: Common in small rings (3- or 4-membered) due to severe ring strain (angle strain from $60^\\circ$ bond angles and eclipsing torsional strain). \n  - Epoxide Ring-Opening Regioselectivity:\n    - Under Acidic Conditions: Epoxide oxygen is protonated, weakening the C-O bond. The nucleophile attacks the *more* substituted carbon because it can better stabilize the partial positive charge ($S_N1$-like regioselectivity).\n    - Under Basic Conditions: The nucleophile attacks the *less* sterically hindered carbon ($S_N2$ mechanism).",
    diagramType: 'diels_alder',
    formulas: [
      "\\text{Diels-Alder: Diene } (4\\pi) + \\text{ Dienophile } (2\\pi) \\xrightarrow{\\Delta} \\text{ Cyclohexene derivative}",
      "\\text{Epoxide Acid-catalyzed: nucleophile attacks more substituted Carbon}",
      "\\text{Epoxide Base-catalyzed: nucleophile attacks less substituted Carbon}"
    ],
    equations: [
      "\\text{Diels-Alder: } \\ce{CH2=CH-CH=CH2 + CH2=CH2 ->[\\Delta] Cyclohexene}",
      "\\text{Acidic opening: } \\ce{(CH3)2C(O)CH2 + H+ + CH3OH -> (CH3)2C(OCH3)-CH2OH}",
      "\\text{Basic opening: } \\ce{(CH3)2C(O)CH2 + CH3O- + CH3OH -> (CH3)2C(OH)-CH2OCH3}"
    ],
    applications: [
      "Using the Diels-Alder reaction to build six-membered rings stereospecifically in natural product synthesis.",
      "Industrial manufacturing of ethylene glycol by the ring-opening hydration of ethylene oxide.",
      "Ring-opening polymerization (ROP) to manufacture polymers like Nylon-6 from caprolactam."
    ],
    importantPoints: [
      "Three-membered rings (like cyclopropane and epoxides) have high ring strain (~27 kcal/mol) due to angle strain and eclipsing C-H bonds.",
      "The Diels-Alder reaction is stereospecific: cis-dienophiles yield cis-cyclohexene products, and trans-dienophiles yield trans-cyclohexene products.",
      "In acidic epoxide ring-opening, the transition state has carbocation-like character, directing the nucleophile to the more substituted carbon.",
      "Intramolecular cyclizations are favored at high dilutions to prevent competing intermolecular polymerizations."
    ],
    commonQuestions: [
      "What is the Diels-Alder reaction? Provide the reactants, products, and stereochemical considerations.",
      "Discuss the ring-opening reactions of epoxides under acidic and basic conditions, and explain the difference in regioselectivity.",
      "Why do five- and six-membered rings form much more easily during cyclization than three- or seven-membered rings?"
    ],
    shortAnswer: "Cyclization forms rings from open chains (e.g. Diels-Alder $[4+2]$ cycloaddition to form cyclohexenes). Ring-opening cleaves strained rings like epoxides. Epoxide ring-opening is pH-dependent: nucleophiles attack the more substituted carbon in acid ($S_N1$-like) and the less substituted carbon in base ($S_N2$).",
    longAnswer: "Cyclization and ring-opening reactions govern the interconversion between cyclic and acyclic molecular systems. Cyclization can occur through intramolecular nucleophilic attack or pericyclic reactions. The Diels-Alder reaction is a pericyclic $[4+2]$ cycloaddition where a conjugated diene ($4\\pi$-electrons in s-cis conformation) reacts with a dienophile (alkene or alkyne, $2\\pi$-electrons) under thermal conditions to form a cyclohexene ring in a single concerted step. The reaction is stereospecific and builds two new C-C bonds and up to four stereocenters. Ring-opening reactions are thermodynamically driven by the release of ring strain in small rings. Epoxides (oxiranes) experience high ring strain due to $60^\\circ$ bond angles (angle strain) and eclipsed C-H bonds (torsional strain). Nucleophilic ring-opening of epoxides is regioselective: under basic conditions, a strong nucleophile attacks the less sterically hindered carbon in a classic $S_N2$ mechanism. Under acidic conditions, the oxygen is protonated, weakening the C-O bonds. The bond to the more substituted carbon is weaker because it can stabilize a partial positive charge (carbocation character). Thus, the nucleophile attacks the more substituted carbon, yielding a different regioisomer."
  },
  {
    unitNumber: 7,
    unitTitle: "Organic Reactions and Synthesis of a Drug Molecule",
    topicTitle: "Synthesis of a commonly used drug molecule: Aspirin (acetylsalicylic acid)",
    definition: "Aspirin (acetylsalicylic acid, IUPAC: 2-acetoxybenzoic acid) is a widely used analgesic, antipyretic, and anti-inflammatory drug synthesized by acetylating salicylic acid (2-hydroxybenzoic acid) with acetic anhydride in the presence of a strong acid catalyst like $\\ce{H3PO4}$.",
    explanation: "Aspirin is synthesized by treating salicylic acid with acetic anhydride. The phenolic hydroxyl group ($-OH$) acts as a nucleophile, attacking the carbonyl carbon of acetic anhydride, which has been protonated by a strong acid catalyst (like phosphoric acid, $\\ce{H3PO4}$) to make it more electrophilic. The reaction proceeds via nucleophilic acyl substitution, yielding acetylsalicylic acid and acetic acid byproduct. The crude product is purified by recrystallization.\n- Side Effects: A major side effect of aspirin is gastric irritation, which can lead to stomach ulcers and internal bleeding.\n- Medicinal Utility: Used as an analgesic to relieve acute pain, headache, and muscle ache, an antipyretic to reduce fever, and to treat inflammatory diseases like rheumatoid arthritis.",
    diagramType: 'aspirin_synthesis',
    formulas: [
      "\\text{Salicylic Acid } (\\ce{C7H6O3}) + \\text{Acetic Anhydride } (\\ce{C4H6O3}) \\xrightarrow{\\text{H}_3\\text{PO}_4} \\text{Aspirin } (\\ce{C9H8O4}) + \\text{Acetic Acid } (\\ce{C2H4O2})",
      "\\text{Percent Yield} = \\frac{\\text{Actual Yield}}{\\text{Theoretical Yield}} \\times 100\\%"
    ],
    equations: [
      "\\ce{C6H4(OH)(COOH) + (CH3CO)2O ->[H3PO4] C6H4(OCOCH3)(COOH) + CH3COOH}"
    ],
    applications: [
      "Relieving acute pain and headaches without causing significant nervous system disturbance.",
      "Treating fever and inflammatory conditions such as rheumatoid arthritis.",
      "Cardiovascular protection: low-dose therapy acts as an antiplatelet agent."
    ],
    importantPoints: [
      "The synthesis of aspirin is an acetylation of the phenolic hydroxyl group of salicylic acid, which is prepared from phenol via the Kolbe-Schmitt reaction.",
      "Phosphoric acid ($\\ce{H3PO4}$) is commonly used as a catalyst to generate a highly active electrophilic carbonyl in the acetic anhydride.",
      "A major side effect is gastric irritation, stomach ulcers, and bleeding due to cyclooxygenase inhibition in the stomach lining.",
      "The product can slowly hydrolyze back to salicylic acid in moist environments, giving off a vinegar smell."
    ],
    commonQuestions: [
      "Write the chemical equation, mechanism, and catalyst for the synthesis of Aspirin from salicylic acid.",
      "What are the major side effects of aspirin, and what are its primary medicinal utilities?",
      "Why is acetic anhydride used instead of acetyl chloride in the preparation of aspirin?"
    ],
    shortAnswer: "Aspirin (2-acetoxybenzoic acid) is synthesized by acetylating the phenolic $-OH$ group of salicylic acid with acetic anhydride, catalyzed by a strong acid like $\\ce{H3PO4}$. It is used to treat fever, headaches, and inflammation, but can cause gastric irritation and ulcers.",
    longAnswer: "Aspirin, chemically known as acetylsalicylic acid or 2-acetoxybenzoic acid, is an analgesic, antipyretic, and anti-inflammatory drug. It is synthesized by acetylating the phenolic hydroxyl group of salicylic acid. Salicylic acid is prepared industrially from phenol via the Kolbe-Schmitt reaction, which reacts sodium phenoxide with carbon dioxide under high pressure, followed by acidification. The acetylation reaction is carried out by treating salicylic acid with excess acetic anhydride in the presence of a strong acid catalyst, such as concentrated phosphoric acid ($\\ce{H3PO4}$) or sulfuric acid ($\\ce{H2SO4}$). The mechanism is a nucleophilic acyl substitution: 1. Protonation: The acid catalyst protonates a carbonyl oxygen of the acetic anhydride, making the carbonyl carbon highly electrophilic. 2. Nucleophilic Attack: The weak nucleophile, the phenolic oxygen of salicylic acid, attacks the protonated carbonyl carbon, forming a tetrahedral intermediate. 3. Collapse: The intermediate collapses, reforming the C=O double bond and ejecting a neutral acetic acid molecule. 4. Deprotonation yields acetylsalicylic acid (Aspirin). Crude aspirin is isolated by adding cold water to decompose excess anhydride and precipitate the product. It is purified by recrystallization from a water-ethanol mixture. Aspirin is widely used to treat fever, headaches, and rheumatoid arthritis, but its use carries a risk of gastric irritation, stomach ulcers, and internal bleeding."
  },
  {
    unitNumber: 7,
    unitTitle: "Organic Reactions and Synthesis of a Drug Molecule",
    topicTitle: "Synthesis of a commonly used drug molecule: Paracetamol (acetaminophen)",
    definition: "Paracetamol (acetaminophen, IUPAC: N-(4-hydroxyphenyl)acetamide) is a widely used analgesic and antipyretic drug synthesized by acetylating p-aminophenol with acetic anhydride.",
    explanation: "Paracetamol is synthesized through a multi-step pathway starting from phenol:\n  - Step 1 (Nitration): Phenol is nitrated using sodium nitrate ($\\ce{NaNO3}$) and dilute sulfuric acid ($\\ce{H2SO4}$), yielding a mixture of ortho- and para-nitrophenol.\n  - Step 2 (Separation): Para-nitrophenol is separated from the ortho- isomer using steam distillation.\n  - Step 3 (Reduction): Para-nitrophenol is reduced into para-aminophenol using sodium borohydride ($\\ce{NaBH4}$) as the reducing agent.\n  - Step 4 (Acetylation): Para-aminophenol (which contains both $-NH_2$ and $-OH$ groups) is acetylated with acetic anhydride. Because nitrogen is less electronegative than oxygen, its lone pair is held less tightly and is more available, making the amino group a stronger nucleophile than the phenol. Amide formation occurs selectively, yielding paracetamol and acetic acid byproduct.\n- Toxicity: Overdose can cause serious liver damage (hepatotoxicity) due to depletion of glutathione and accumulation of the toxic metabolite NAPQI.\n- Medicinal Utility: Used to relieve mild to moderate pain (headache, toothache, muscle pain, sinus pain) and reduce fever caused by common cold, influenza, viral infections, and dengue.",
    diagramType: 'paracetamol_synthesis',
    formulas: [
      "\\text{Phenol } \\ce{C6H5OH ->[NaNO3][dil. H2SO4] p-nitrophenol + o-nitrophenol}",
      "\\text{p-Nitrophenol } \\ce{->[NaBH4] p-aminophenol}",
      "\\text{p-Aminophenol } (\\ce{C6H7NO}) + \\text{Acetic Anhydride } (\\ce{C4H6O3}) \\rightarrow \\text{Paracetamol } (\\ce{C8H9NO2}) + \\text{Acetic Acid } (\\ce{C2H4O2})"
    ],
    equations: [
      "\\text{Selective Acetylation: } \\ce{HOC6H4NH2 + (CH3CO)2O -> HOC6H4NHCOCH3 + CH3COOH}"
    ],
    applications: [
      "Relieving mild to moderate pain including muscle aches, toothaches, headaches, and sinus pain.",
      "Reducing fever associated with viral infections, common cold, influenza, and dengue.",
      "First-choice antipyretic for patients sensitive to gastric irritation from aspirin."
    ],
    importantPoints: [
      "The synthesis begins with phenol nitration using $\\ce{NaNO3}$/dil. $\\ce{H2SO4}$, followed by steam distillation to isolate the para isomer.",
      "The reduction of the nitro group to an amine group is carried out using $\\ce{NaBH4}$.",
      "Acetylation occurs selectively at the nitrogen atom ($-NH_2$) rather than the oxygen atom ($-OH$) because nitrogen is less electronegative and more nucleophilic.",
      "Paracetamol overdose can lead to severe hepatotoxicity (liver damage) due to the accumulation of N-acetyl-p-benzoquinone imine (NAPQI)."
    ],
    commonQuestions: [
      "Detail the four-step synthetic route of Paracetamol starting from phenol, showing all reagents.",
      "Why does the acetylation of p-aminophenol occur selectively at the nitrogen atom rather than the oxygen atom?",
      "Discuss the medicinal utilities of paracetamol and the danger of overdose."
    ],
    shortAnswer: "Paracetamol (p-hydroxyacetanilide) is synthesized from phenol by nitration ($\\ce{NaNO3}$/dil. $\\ce{H2SO4}$), steam distillation, reduction of p-nitrophenol ($\\ce{NaBH4}$) to p-aminophenol, and selective acetylation of the amino group with acetic anhydride. Overdose can cause severe liver damage.",
    longAnswer: "Paracetamol, also known as acetaminophen or N-(4-hydroxyphenyl)acetamide, is a widely used analgesic and antipyretic drug. It is synthesized starting from phenol. First, phenol undergoes nitration using sodium nitrate ($\\ce{NaNO3}$) and dilute sulfuric acid ($\\ce{H2SO4}$) to yield a mixture of ortho- and para-nitrophenol. From this mixture, para-nitrophenol is separated using steam distillation (since ortho-nitrophenol is steam-volatile due to intramolecular hydrogen bonding, whereas para-nitrophenol is not). Next, para-nitrophenol is reduced to para-aminophenol using sodium borohydride ($\\ce{NaBH4}$). Finally, para-aminophenol is acetylated. The molecule contains both a primary amine ($-NH_2$) and a phenolic hydroxyl ($-OH$) group. Nitrogen is larger and less electronegative than oxygen, so its lone pair is less tightly bound and more available for nucleophilic attack, making the amine group a stronger nucleophile. Heating p-aminophenol with acetic anhydride in water or dilute acid leads to selective acetylation of the amine group, forming an amide bond to yield paracetamol and acetic acid byproduct. Paracetamol is isolated by cooling the mixture to precipitate the product, which is purified by recrystallization from hot water. It is used to relieve fever and pain from the common cold, influenza, and dengue. However, an overdose can cause severe liver damage due to the accumulation of N-acetyl-p-benzoquinone imine (NAPQI), which depletes cellular glutathione."
  }
];
