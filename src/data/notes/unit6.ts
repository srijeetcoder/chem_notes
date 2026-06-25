export const unit6Notes = [
  {
    unitNumber: 6,
    unitTitle: "Stereochemistry",
    topicTitle: "Representations of 3D structures: Fischer, Newman, Sawhorse, Wedge-Dash",
    definition: "Representations of 3D structures are standardized graphic methods used to project three-dimensional molecular arrangements onto a two-dimensional page or screen, including Fischer projection, Newman projection, Sawhorse projection, and Wedge-Dash formulas.",
    explanation: "Because organic molecules exist in three dimensions, chemists use standardized projections to describe their structures: 1. Wedge-Dash: The most direct representation. Normal lines show bonds in the plane of the page, a solid wedge shows a bond pointing toward the viewer, and a dashed wedge shows a bond pointing away. 2. Fischer Projection: A flat representation where a tetrahedral carbon is drawn as a cross. Vertical lines represent bonds pointing away from the viewer (into the page), and horizontal lines represent bonds pointing toward the viewer (out of the page). 3. Newman Projection: Visualizes a molecule by looking directly down a specific carbon-carbon bond. The front carbon is drawn as a point where three bonds meet, and the back carbon is drawn as a circle, with its bonds projecting from the edge. Under this projection, rotation about the single bond leads to three main conformations: (a) Eclipsed Conformation: Bonds on the rear carbon are directly behind the bonds on the front carbon (dihedral angle = 0°). This results in maximum overlap of electron clouds, highest torsional strain, and lowest stability. (b) Staggered Conformation: Bonds on the rear carbon lie exactly between the bonds on the front carbon (dihedral angle = 60°). This results in minimum overlap of electron clouds, least torsional strain, and highest stability. (c) Skew Conformation: Any conformation that is neither perfectly eclipsed nor perfectly staggered. A specific skew conformer is the Gauche conformation. 4. Sawhorse Projection: Views the carbon-carbon bond from an oblique angle, showing the spatial relationship between groups on adjacent carbons.",
    formulas: [
      "Fischer Projection: Vertical = Go away from viewer, Horizontal = Come toward viewer",
      "Dihedral (Torsional) Angle: Eclipsed (0°), Gauche/Skew (60°), Staggered/Anti (180°)"
    ],
    equations: [
      "Interconversion: A Wedge-Dash drawing can be converted to a Fischer projection by looking down the main carbon chain from a specific angle."
    ],
    applications: [
      "Representing sugar molecules (carbohydrates) in Fischer projections to easily identify D- and L-isomers.",
      "Analyzing the steric hindrance and energy profiles of organic molecules during conformational changes.",
      "Communicating the stereochemical outcomes of organic reactions."
    ],
    importantPoints: [
      "In a Fischer projection, rotating the drawing by 90° changes the stereochemistry to its enantiomer, whereas rotating it by 180° retains the configuration.",
      "Eclipsed conformations possess the highest torsional strain due to electron-cloud repulsion of bonds directly behind one another.",
      "Staggered conformations are the most thermodynamically stable due to minimized torsional strain.",
      "Gauche conformation is a type of staggered conformation where the two largest groups are at a 60° dihedral angle to each other."
    ],
    commonQuestions: [
      "Describe the Fischer, Newman, and Sawhorse projections. Draw these projections for the eclipsed and staggered conformations of ethane.",
      "Explain the terms: Eclipsed, Staggered, and Skew conformations. Which is the most stable and why?",
      "Discuss why rotating a Fischer projection by 90° changes the stereochemistry of a chiral carbon."
    ],
    shortAnswer: "Chemists represent 3D molecules in 2D using Wedge-Dash, Fischer, Newman, and Sawhorse projections. Newman projections are used to evaluate conformations resulting from rotation around single bonds, which include Eclipsed (least stable, highest strain), Staggered (most stable, lowest strain), and Skew/Gauche (intermediate).",
    longAnswer: "Representing three-dimensional molecular structures on a two-dimensional surface is a key skill in stereochemistry. The Wedge-Dash representation is the most common method. In this system, solid lines show bonds in the plane of the paper. A solid wedge represents a bond pointing toward the viewer, and a dashed wedge represents a bond pointing away. The Fischer projection is a flat drawing where a tetrahedral carbon is represented by a cross. The vertical bonds point away from the viewer, while the horizontal bonds point toward the viewer. Fischer projections are widely used in carbohydrate chemistry because they simplify structures with multiple chiral centers. The Newman projection is designed to analyze conformations by looking down a carbon-carbon bond. The front carbon is drawn as a point of three intersecting lines, and the back carbon is represented by a circle. The angle between substituents on the front and back carbons is the dihedral angle. This view clearly shows the differences between staggered (dihedral angle = 60°, lowest energy, most stable due to minimal steric/torsional strain), eclipsed (dihedral angle = 0°, highest energy, least stable due to maximum torsional strain and electron cloud overlap), and skew conformations (which represent any intermediate state between eclipsed and staggered, such as the Gauche conformation where bulky groups are adjacent at 60°)."
  },
  {
    unitNumber: 6,
    unitTitle: "Stereochemistry",
    topicTitle: "Structural isomers and stereoisomers",
    definition: "Isomers are compounds that share the same molecular formula but have different chemical structures. Structural (constitutional) isomers differ in the connectivity of their atoms. Stereoisomers have the same connectivity but differ in the three-dimensional arrangement of their atoms in space.",
    explanation: "According to the course materials, isomerism is divided into: 1. Structural Isomerism: Atoms have the same molecular formula but differ in their connectivity. It is further divided into six types: (a) Chain Isomerism: Different carbon chain arrangements (e.g., n-pentane, iso-pentane, and neo-pentane). (b) Position Isomerism: Differ in the position of a functional group, substituent, or multiple bond on the same carbon skeleton (e.g., But-1-ene and But-2-ene). (c) Functional Isomerism: Same molecular formula but different functional groups (e.g., Ethyl Alcohol [CH3-CH2-OH] and Dimethyl Ether [CH3-O-CH3]). (d) Metamerism: Differ in the alkyl groups attached on either side of a polyvalent atom (e.g., Methyl propyl ether [CH3-O-CH2-CH2-CH3] and Diethyl ether [CH3-CH2-O-CH2-CH3]). (e) Ring Isomerism: Differ by having an open-chain vs. a cyclic ring structure (e.g., Propene and Cyclopropane). (f) Tautomerism: Dynamic equilibrium where a compound exists in interconvertible forms that differ in the relative positions of an atom, usually hydrogen (e.g., Keto-Enol tautomerism of Acetaldehyde). 2. Stereoisomerism: Same connectivity but different relative arrangements in 3D space.",
    formulas: [
      "Maximum number of stereoisomers = 2^n (where n = number of chiral centers, assuming no meso compounds)"
    ],
    equations: [
      "Chain Isomers: CH3-CH2-CH2-CH2-CH3 (n-pentane) vs. CH3-CH(CH3)-CH2-CH3 (iso-pentane) vs. C(CH3)4 (neo-pentane)",
      "Position Isomers: CH3-CH2-CH=CH2 (But-1-ene) vs. CH3-CH=CH-CH3 (But-2-ene)",
      "Functional Isomers: CH3CH2OH (Ethyl Alcohol) vs. CH3OCH3 (Dimethyl Ether)",
      "Metamers: CH3-O-C3H7 (Methyl propyl ether) vs. C2H5-O-C2H5 (Diethyl ether)",
      "Ring Isomers: CH3-CH=CH2 (Propene) vs. Cyclopropane (c-C3H6)",
      "Tautomers: CH3-CH=O (Keto form) <-> CH2=CH-OH (Enol form)"
    ],
    applications: [
      "Distinguishing between different chemical compounds with the same formula in pharmaceutical chemistry, where one isomer may be active and another toxic.",
      "Analyzing food chemistry (e.g., trans-fats are geometric isomers of cis-fats, possessing different properties and health effects).",
      "Identifying organic reaction mechanisms that yield specific stereoisomeric mixtures."
    ],
    importantPoints: [
      "Structural isomers have different physical properties (boiling point, solubility) and chemical reactivities.",
      "Stereoisomers have the same structural connectivity but different spatial orientation of bonds.",
      "Metamerism is common in ethers, ketones, and esters.",
      "Tautomerism is a chemical reaction involving proton transfer (migration of a proton), whereas other isomerisms are purely structural/configurational."
    ],
    commonQuestions: [
      "Define isomerism. Classify the different types of structural isomers with examples.",
      "Explain tautomerism with the keto-enol system as an example.",
      "Identify the isomerism relation between cyclopropane and propene."
    ],
    shortAnswer: "Isomers have the same molecular formula. Structural isomers differ in atom connectivity (chain, position, functional, metamerism, ring, and tautomerism). Stereoisomers have the same connectivity but different 3D shapes. They include conformers (interconvert by bond rotation) and configurational isomers (enantiomers and diastereomers).",
    longAnswer: "Isomerism is a central concept in organic chemistry. Isomers are molecules that have the same molecular formula but different chemical structures. They are divided into structural (constitutional) isomers and stereoisomers. Structural isomers differ in the connectivity of their atoms. This category includes chain isomers (differences in the carbon skeleton, like n-pentane, iso-pentane, and neo-pentane), position isomers (differing locations of a functional group or multiple bond, like But-1-ene and But-2-ene), functional isomers (different functional groups, like ethyl alcohol and dimethyl ether), metamers (different alkyl chains attached to a heteroatom, like methyl propyl ether and diethyl ether), ring isomers (where one is an open chain and the other is a ring, like propene and cyclopropane), and tautomers (which exist in a dynamic equilibrium of interconvertible forms due to rapid proton migration, such as the keto and enol forms of acetaldehyde). Stereoisomers have the same molecular formula and atom connectivity, but their atoms are arranged differently in space. They are divided into conformational and configurational isomers. Conformational isomers can interconvert by rotation around single carbon-carbon σ-bonds. configurational isomers can only be interconverted by breaking and reforming covalent bonds. This group is further divided into enantiomers (non-superimposable mirror images) and diastereomers (non-superimposable non-mirror images, including geometric cis/trans isomers)."
  },
  {
    unitNumber: 6,
    unitTitle: "Stereochemistry",
    topicTitle: "Configurations: D/L and R/S designations",
    definition: "Configurations are nomenclatures used to describe the absolute three-dimensional arrangement of atoms around a chiral center. D/L is a relative configuration system based on glyceraldehyde, while R/S is the absolute configuration system based on the Cahn-Ingold-Prelog (CIP) priority rules.",
    explanation: "1. D/L System: Used primarily for sugars and amino acids. In a Fischer projection, if the hydroxyl group (-OH) on the bottom-most chiral carbon points to the right, it is a D-sugar; if it points to the left, it is an L-sugar. Similarly, L-amino acids have the amino group (-NH2) on the left. 2. R/S System (Absolute Configuration): According to the course materials, absolute configuration is determined in Fischer projections using the following steps:\n  - Step 1: Point out the chiral carbon.\n  - Step 2: Assign priority to the four groups according to the Cahn-Ingold-Prelog (CIP) priority rules (based on atomic number).\n  - Step 3: Trace the path from priority 1 → 2 → 3, and check the position of the lowest priority group (position 4):\n    1. If position 4 is on a vertical position:\n       - Clockwise path → R configuration\n       - Anticlockwise path → S configuration\n    2. If position 4 is on a horizontal position:\n       - Clockwise path → S configuration\n       - Anticlockwise path → R configuration",
    formulas: [
      "Priority order: I > Br > Cl > F > O > N > C > H (Based on atomic number)",
      "Path 1 → 2 → 3 (Group 4 Vertical): Clockwise = R, Anticlockwise = S",
      "Path 1 → 2 → 3 (Group 4 Horizontal): Clockwise = S, Anticlockwise = R"
    ],
    equations: [
      "Fischer projection rule: If the lowest priority group (4) is on a horizontal bond, the apparent configuration is reversed."
    ],
    applications: [
      "Naming pharmaceutical drugs to ensure the correct enantiomer is specified (e.g., (S)-ibuprofen is the active pain reliever).",
      "Standardizing the nomenclature of biochemistry, where D-glucose and L-amino acids are the dominant biological forms.",
      "Communicating the stereochemical pathways of organic reactions (e.g., SN2 reactions proceed with inversion of configuration)."
    ],
    importantPoints: [
      "The D/L system does not correlate with the direction of optical rotation (plus/dextro or minus/laevo); a D-sugar can rotate light in either direction.",
      "Similarly, R/S designations do not predict the optical rotation direction; (+)-alanine can have either R or S configuration.",
      "When comparing isotopes, the isotope with the higher mass number has priority (e.g., Deuterium ²H > Hydrogen ¹H).",
      "Double and triple bonds are treated as duplicated or triplicated single bonds in the CIP priority rules."
    ],
    commonQuestions: [
      "State the Cahn-Ingold-Prelog (CIP) priority rules for assigning R and S configurations.",
      "Explain the vertical and horizontal rules for determining R/S configuration in a Fischer projection.",
      "Assign the R/S configuration to the chiral centers in (2R,3R)-tartaric acid shown in a Fischer projection."
    ],
    shortAnswer: "The D/L system designates relative configuration based on glyceraldehyde (OH on the right = D, OH on the left = L). The R/S system designates absolute configuration using CIP rules: rank groups by atomic number (1 > 2 > 3 > 4), trace 1 → 2 → 3. If group 4 is vertical, clockwise is R and anticlockwise is S. If group 4 is horizontal, clockwise is S and anticlockwise is R.",
    longAnswer: "Configurational nomenclature systems describe the three-dimensional arrangement of substituents around a chiral carbon. The D/L system, introduced by Emil Fischer, is a relative configuration system. It compares the stereochemistry of a molecule to D-glyceraldehyde (which has the -OH group on the right in a Fischer projection). For carbohydrates, the configuration is determined by the lowest chiral carbon in the chain: if its -OH group is on the right, it is a D-sugar; if on the left, it is an L-sugar. Natural sugars are mostly D-sugars, whereas natural amino acids are L-amino acids (with the -NH2 group on the left). The modern R/S system designates absolute configuration based on the Cahn-Ingold-Prelog (CIP) priority rules. To assign a configuration: 1. Rank the four groups around the chiral carbon by atomic number. The atom with the highest atomic number gets priority 1; the lowest (often hydrogen) gets priority 4. If the atoms are isotopes (like D and H), the heavier isotope has priority. If the atoms directly attached to the chiral center are identical, we compare the next atoms along the chain until a difference is found. Double and triple bonds are treated as multiple single bonds (e.g., -CHO is treated as a carbon bonded to two oxygens and a hydrogen). 2. View the molecule in a Fischer projection and trace a circle from priority 1 to 2 to 3. 3. Look at the position of group 4: if it is on a vertical bond, clockwise is R (rectus, right) and anticlockwise is S (sinister, left). If it is on a horizontal bond, the rule is reversed, so clockwise is S and anticlockwise is R."
  },
  {
    unitNumber: 6,
    unitTitle: "Stereochemistry",
    topicTitle: "Symmetry elements: plane, center, and axis of symmetry",
    definition: "Symmetry elements are geometric entities (points, lines, or planes) with respect to which symmetry operations (inversion, rotation, or reflection) can be performed, including the plane of symmetry (σ), center of symmetry (i), and proper axis of symmetry (Cn).",
    explanation: "Symmetry elements determine whether a molecule is chiral or achiral. 1. Plane of Symmetry (σ, mirror plane): An imaginary plane that bisects a molecule into two halves that are mirror images of each other. A molecule with a plane of symmetry is achiral (e.g., meso-tartaric acid). 2. Center of Symmetry (i, inversion center): A point in space such that any line drawn from a substituent through the center encounters an identical substituent at an equal distance on the opposite side. A molecule with a center of symmetry is achiral (e.g., trans-1,2-dichloroethylene). 3. Proper Axis of Symmetry (Cn): An imaginary axis about which rotation of the molecule by an angle of 360°/n yields a configuration indistinguishable from the original (e.g., water has a C2 axis, ammonia has a C3 axis). A molecule can have an axis of symmetry and still be chiral (e.g., C2-symmetric tartaric acid). A molecule is chiral only if it lacks an improper axis of symmetry (Sn, rotation-reflection axis), which includes planes (S1) and centers (S2) of symmetry.",
    formulas: [
      "θ = 360° / n (Angle of rotation for Cn proper axis)",
      "S_n = Improper axis (Rotation by 360°/n followed by reflection in a perpendicular plane)"
    ],
    equations: [
      "Chirality condition: Absence of S_n improper axis (which includes σ and i)"
    ],
    applications: [
      "Predicting whether a molecule is chiral and optically active without having to build and test its mirror image.",
      "Determining the vibrational modes and selection rules in infrared and Raman spectroscopy using point groups.",
      "Analyzing the NMR properties of molecules (symmetric nuclei are equivalent, simplifying spectra)."
    ],
    importantPoints: [
      "A molecule is achiral if it contains a plane of symmetry (σ) or a center of symmetry (i).",
      "Having a proper axis of symmetry (Cn) does not make a molecule achiral; many chiral molecules have C2 axes of symmetry.",
      "Meso compounds are achiral overall because they contain an internal plane or center of symmetry, even though they contain chiral carbons.",
      "Inversion through a center of symmetry changes all coordinates (x,y,z) of the atoms to (-x,-y,-z)."
    ],
    commonQuestions: [
      "Define plane of symmetry, center of symmetry, and proper axis of symmetry. Illustrate each with a molecular example.",
      "Explain why a molecule with a C2 proper axis of symmetry can still be chiral, whereas a molecule with a plane of symmetry is always achiral.",
      "Identify the symmetry elements present in cis- and trans-1,2-dichloroethylene."
    ],
    shortAnswer: "Symmetry elements include the plane of symmetry (σ, mirror plane), center of symmetry (i, inversion point), and proper axis of symmetry (Cn, rotation axis). A molecule with a plane (σ) or center (i) of symmetry is achiral. Chirality requires the absence of any improper axis of symmetry (Sn).",
    longAnswer: "Symmetry elements describe the structural symmetry of molecules and determine whether they are chiral. A plane of symmetry (σ) is an imaginary plane that divides a molecule into two halves that are mirror images. For example, cis-1,2-dichloroethylene has a plane of symmetry passing perpendicular to the C=C bond, making it achiral. A center of symmetry (i) is a point at the center of a molecule. If we draw a line from any atom through this point and extend it an equal distance in the opposite direction, we find an identical atom. trans-1,2-dichloroethylene has a center of symmetry at the midpoint of the C=C bond, making it achiral. A proper axis of symmetry (Cn) is an axis about which rotation of the molecule by 360°/n results in an arrangement indistinguishable from the starting one. Water has a C2 proper axis (180° rotation), and ammonia has a C3 proper axis (120° rotation). The presence of a proper axis (Cn) does not affect chirality. For example, (2R,3R)-tartaric acid has a C2 proper axis of symmetry but lacks planes or centers of symmetry, making it chiral. A molecule is chiral if it lacks an improper axis of symmetry (Sn). An Sn operation involves rotating the molecule by 360°/n followed by reflecting it across a plane perpendicular to the axis. A plane of symmetry is equivalent to an S1 axis, and a center of symmetry is equivalent to an S2 axis. Therefore, any molecule with a plane or center of symmetry contains an improper axis and is achiral."
  },
  {
    unitNumber: 6,
    unitTitle: "Stereochemistry",
    topicTitle: "Chirality and optical activity",
    definition: "Chirality is the geometric property of a molecule (or object) of being non-superimposable on its mirror image. Optical activity is the ability of a chiral substance to rotate the plane of polarization of plane-polarized light.",
    explanation: "An object is chiral if it lacks symmetry (specifically, an improper axis of symmetry Sn). The most common cause of molecular chirality is a asymmetric carbon atom (chiral center) bonded to four different groups. Chiral molecules exist as a pair of non-superimposable mirror images called enantiomers. Enantiomers have identical physical properties (density, boiling point) but interact differently with chiral phenomena, such as polarized light. When plane-polarized light passes through a solution of a single enantiomer, the electric field of the light interacts with the asymmetric electron cloud of the molecule, rotating the plane of polarization. If the light is rotated clockwise, the substance is dextrorotatory, designated as (+) or d. If rotated counterclockwise, it is laevorotatory, designated as (-) or l. A 50:50 mixture of both enantiomers is a racemic mixture, which is optically inactive because the equal and opposite rotations cancel each other out.",
    formulas: [
      "[α]_λ^T = α_observed / (c * l) (Specific rotation formula)",
      "ee = (|[α]_observed| / |[α]_pure|) * 100% (Enantiomeric excess)"
    ],
    equations: [
      "Racemic mixture: 50% (+) + 50% (-) -> [α]_observed = 0 (Optically inactive due to external compensation)"
    ],
    applications: [
      "Measuring specific rotation with a polarimeter to determine the purity and concentration of chiral compounds (like sugars) in industry.",
      "Designing enantiomerically pure pharmaceuticals to avoid side effects (e.g., L-DOPA is used to treat Parkinson's, while D-DOPA is toxic).",
      "Analyzing asymmetric synthesis reactions in organic chemistry."
    ],
    importantPoints: [
      "A molecule with chiral centers is not always chiral; if it has an internal plane of symmetry, it is a meso compound and is optically inactive.",
      "The specific rotation [α] depends on the temperature (T), wavelength of light (λ, usually the sodium D-line, 589 nm), solvent, and concentration.",
      "Chirality can exist without a chiral carbon, as seen in chiral allenes or biphenyls with restricted rotation (atropisomerism).",
      "Enantiomeric excess (ee) measures the optical purity of a mixture, representing the excess of one enantiomer over the other."
    ],
    commonQuestions: [
      "Define chirality and optical activity. Describe the working principle of a polarimeter.",
      "What is a racemic mixture? Why is it optically inactive, and how does this differ from the optical inactivity of a meso compound?",
      "A solution of a pure chiral compound (0.5 g/mL) in a 10 cm tube rotates the plane of polarized light by +10°. Calculate its specific rotation."
    ],
    shortAnswer: "Chirality is the property of being non-superimposable on a mirror image, often caused by a carbon bonded to four different groups. Chiral substances are optically active, rotating plane-polarized light. Dextrorotatory (+) substances rotate light clockwise, while laevorotatory (-) substances rotate it counterclockwise. Racemic mixtures (50:50) are optically inactive.",
    longAnswer: "Chirality is a geometric property. A molecule is chiral if its mirror image cannot be superimposed on the original structure, similar to how a left hand cannot be superimposed on a right hand. Chirality occurs when a molecule lacks an improper axis of symmetry (Sn), which includes planes (σ) and centers (i) of symmetry. The most common source of chirality in organic chemistry is a stereocenter: a tetrahedral carbon atom bonded to four different groups. Chiral molecules display optical activity, which is the ability to rotate the plane of polarization of plane-polarized light. This rotation is measured using a polarimeter. Monochromatic light (typically the sodium D-line, 589 nm) is passed through a polarizer, creating plane-polarized light. This polarized light then passes through a sample tube containing the dissolved chiral compound. The chiral molecules interact with the light, rotating its plane of polarization by an angle α. An analyzer is rotated to match this new angle, determining the direction and magnitude of rotation. If the rotation is clockwise, the compound is dextrorotatory, marked with a (+) prefix. If counterclockwise, it is laevorotatory, marked with a (-) prefix. The specific rotation [α] is a standardized property: [α] = α_obs / (c·l), where α_obs is the observed rotation, c is the concentration in g/mL, and l is the path length in decimeters. Enantiomers rotate polarized light by equal angles but in opposite directions. A 50:50 mixture of both enantiomers is a racemic mixture (represented by (±) or d,l). It is optically inactive due to external compensation, where the rotation of one enantiomer is cancelled by the equal and opposite rotation of the other. In contrast, a meso compound is optically inactive due to internal compensation: the molecule has chiral centers but contains an internal plane of symmetry. One half of the molecule cancels the optical rotation of the other half."
  },
  {
    unitNumber: 6,
    unitTitle: "Stereochemistry",
    topicTitle: "Enantiomers and diastereomers",
    definition: "Enantiomers are stereoisomers that are non-superimposable mirror images of each other. Diastereomers are stereoisomers that are non-superimposable and are not mirror images of each other.",
    explanation: "1. Enantiomers: Occur only in chiral molecules. A molecule with one chiral carbon always has one pair of enantiomers (e.g., D- and L-lactic acid). Enantiomers have identical physical properties (melting point, boiling point, density, solubility) in achiral environments. However, they differ in how they rotate plane-polarized light (one is (+), the other is (-)) and in their reactions with other chiral molecules (such as enzymes). 2. Diastereomers: Occur in molecules with multiple chiral centers, or in molecules with restricted rotation (geometric isomers). Diastereomers have different physical properties (melting point, solubility, stability) and different chemical reactivities. Unlike enantiomers, they can be separated easily using standard techniques like crystallization or chromatography. A subcategory of diastereomers is epimers, which differ in configuration at only one of several chiral centers (e.g., D-glucose and D-galactose).",
    formulas: [
      "Relationship: If a molecule has configuration (R,R), its enantiomer is (S,S), and its diastereomers are (R,S) and (S,R)."
    ],
    equations: [
      "Enantiomers: (2R,3R)-tartaric acid and (2S,3S)-tartaric acid",
      "Diastereomers: (2R,3R)-tartaric acid and meso-(2R,3S)-tartaric acid"
    ],
    applications: [
      "Resolving racemic mixtures (separating enantiomers) by reacting them with a pure chiral reagent to form diastereomeric salts, which can be separated by fractional crystallization.",
      "Predicting drug interactions in pharmacology, where diastereomers of a drug have different therapeutic profiles.",
      "Synthesizing stereochemically pure polymers with controlled physical properties."
    ],
    importantPoints: [
      "A molecule with n chiral centers can have a maximum of 2^n stereoisomers, which form pairs of enantiomers and sets of diastereomers.",
      "Enantiomers have identical physical properties, which makes separating them (resolution) difficult, requiring chiral stationary phases in chromatography or chiral resolving agents.",
      "Meso compounds are diastereomers of the active enantiomeric pairs in molecules like tartaric acid.",
      "Geometric isomers (cis/trans or E/Z) are a class of diastereomers because they are stereoisomers that are not mirror images."
    ],
    commonQuestions: [
      "Compare the physical and chemical properties of enantiomers and diastereomers.",
      "What is resolution of a racemic mixture? Explain the chemical method of resolving a mixture of enantiomeric acids using a chiral base.",
      "Write all the stereoisomers of 2,3-dichlorobutane. Explain the relationships between them."
    ],
    shortAnswer: "Enantiomers are non-superimposable mirror images (like R vs S configurations). They have identical physical properties except for the direction they rotate polarized light. Diastereomers are stereoisomers that are not mirror images (like R,R vs R,S). They have different physical and chemical properties and are easily separated.",
    longAnswer: "Enantiomers and diastereomers are the two primary classes of configurational stereoisomers. Enantiomers are stereoisomers that are non-superimposable mirror images. This relationship is binary: a chiral molecule has exactly one enantiomer. For a molecule with multiple chiral centers, its enantiomer is formed by reversing the configuration of every center (e.g., the enantiomer of (2R, 3R)-dichloropentane is (2S, 3S)-dichloropentane). Enantiomers have identical physical properties, such as melting point, boiling point, density, and solubility in achiral solvents. They also show identical chemical reactivity when reacting with achiral reagents. They differ in two ways: they rotate plane-polarized light in equal but opposite directions, and they interact differently with other chiral species. This difference is critical in pharmacology, as receptors and enzymes are chiral proteins. One enantiomer may fit the receptor active site (e.g., L-DOPA for Parkinson's), while the other enantiomer is inactive or toxic (e.g., D-DOPA). Diastereomers are stereoisomers that are not mirror images. This relationship occurs in molecules with multiple chiral centers when some, but not all, of the configurations are reversed (e.g., (2R, 3R)-dichloropentane and (2R, 3S)-dichloropentane). Diastereomers have different physical properties (such as different boiling points, solubilities, and dipole moments) and different chemical reactivities with both chiral and achiral reagents. Because of these differences, diastereomers can be separated using standard laboratory techniques like fractional distillation, recrystallization, or chromatography. This difference is exploited in the resolution of racemic mixtures, where a racemic mixture of enantiomers (e.g., an acid, ±A) is reacted with a pure enantiomer of a resolving agent (e.g., a base, +B). This reaction produces a mixture of salts ((+A)(+B) and (-A)(+B)) that are diastereomers. These salts are separated based on their different solubilities, and are then treated with acid to regenerate the pure, separated enantiomers."
  },
  {
    unitNumber: 6,
    unitTitle: "Stereochemistry",
    topicTitle: "Conformational analysis of cyclohexane (chair and boat conformations)",
    definition: "Conformational analysis is the study of the relative thermodynamic stabilities and energy differences of the various three-dimensional shapes (conformations) that a molecule can adopt by rotating around single bonds, focusing on the chair, boat, twist-boat, and half-chair conformations of cyclohexane.",
    explanation: "According to Baeyer's strain theory, planar cyclohexane would have bond angles of 120°, which deviates from the ideal tetrahedral angle of 109.5°, causing angle strain. To avoid this strain, the cyclohexane ring puckers into non-planar conformations: 1. Chair Conformation: The most stable conformation, with zero angle strain (all C-C-C angles are 111°) and zero torsional strain (all C-H bonds are fully staggered, as seen in a Newman projection). Cyclohexane has 12 hydrogens in the chair form: 6 axial (pointing vertically up or down) and 6 equatorial (pointing out around the ring). 2. Boat Conformation: A high-energy, unstable conformation. It experiences torsional strain because the C-H bonds along the sides are eclipsed, and steric strain (transannular strain) due to repulsion between the 'flagpole' hydrogens at positions 1 and 4. 3. Twist-Boat: A intermediate conformation that releases some flagpole steric strain, lying lower in energy than the boat. 4. Half-Chair: The highest energy transition state, formed during the ring flip.",
    formulas: [
      "Energy differences relative to Chair (0 kcal/mol): Half-Chair (10.8 kcal/mol) > Boat (7.0 kcal/mol) > Twist-Boat (5.5 kcal/mol) > Chair"
    ],
    equations: [
      "Ring flip: Chair 1 ⇌ Half-Chair ⇌ Twist-Boat ⇌ Boat ⇌ Twist-Boat ⇌ Half-Chair ⇌ Chair 2 (Exchanges all axial and equatorial positions)"
    ],
    applications: [
      "Explaining the relative stability and reactivity of substituted cyclohexanes (e.g., equatorial substituents are more stable than axial ones).",
      "Understanding the structures of natural steroids, hormones, and sugars (like glucose, which exists in a chair conformation with all bulky groups equatorial).",
      "Predicting the stereochemical outcome of elimination and addition reactions in cyclic systems."
    ],
    importantPoints: [
      "During a chair-to-chair ring flip, all axial bonds become equatorial, and all equatorial bonds become axial, but substituents that point 'up' remain pointing 'up'.",
      "Substituted cyclohexanes (like methylcyclohexane) prefer to place bulky substituents in the equatorial position to avoid 1,3-diaxial steric interactions.",
      "The chair conformation has a center of inversion, making unsubstituted cyclohexane achiral.",
      "The energy barrier for the ring-flip is low (~10.8 kcal/mol), meaning the two chair forms interconvert rapidly at room temperature."
    ],
    importantReactions: [],
    commonQuestions: [
      "Draw the energy profile diagram for the conformational interconversion of cyclohexane. Discuss the stability of the chair and boat conformations.",
      "What are axial and equatorial bonds in cyclohexane? Explain why methylcyclohexane exists predominantly with the methyl group in the equatorial position.",
      "Explain the terms: torsional strain, angle strain, and flagpole interactions in cyclohexane conformations."
    ],
    shortAnswer: "Cyclohexane puckers to avoid angle strain, forming the stable chair conformation (0 kcal/mol, zero angle/torsional strain, staggered bonds) and the unstable boat conformation (+7.0 kcal/mol, eclipsed bonds and flagpole repulsions). Substituted cyclohexanes prefer equatorial positions to avoid 1,3-diaxial steric interactions.",
    longAnswer: "Conformational analysis of cyclohexane evaluates the energy changes as the molecule puckers to minimize strain. If cyclohexane were flat, it would have C-C-C angles of 120°, deviating from the tetrahedral 109.5° angle and causing angle strain. Additionally, all twelve C-H bonds would be eclipsed, causing maximum torsional strain. To eliminate this strain, the ring puckers into non-planar shapes. The most stable shape is the chair conformation. In the chair form, the C-C-C angles are 111.5° (nearly tetrahedral, eliminating angle strain), and all C-H bonds are staggered (eliminating torsional strain). The chair conformation has 12 hydrogen atoms divided into two sets: 6 axial bonds (pointing vertically up and down) and 6 equatorial bonds (projecting outward around the perimeter). The boat conformation is an unstable conformer, lying approximately 7.0 kcal/mol higher in energy than the chair. This high energy is caused by two factors: 1. Torsional strain: The C-H bonds along the sides of the boat are eclipsed. 2. Steric (flagpole) strain: The two hydrogen atoms at C1 and C4 point inward toward each other, causing van der Waals repulsion. Cyclohexane relaxes this strain by twisting slightly into the twist-boat conformation, which lies about 5.5 kcal/mol above the chair. During a chair-to-chair ring flip, the molecule passes through the high-energy half-chair conformation (10.8 kcal/mol). This ring flip converts all axial positions to equatorial, and all equatorial positions to axial. In substituted cyclohexanes, equatorial isomers are thermodynamically favored. For example, in methylcyclohexane, placing the methyl group in the axial position causes steric repulsion with the axial hydrogens at C3 and C5 (1,3-diaxial interactions). This steric strain raises the energy of the axial conformer by 1.8 kcal/mol, meaning that 95% of methylcyclohexane molecules exist with the methyl group in the equatorial position at room temperature."
  },
  {
    unitNumber: 6,
    unitTitle: "Stereochemistry",
    topicTitle: "Isomerism in transition metal coordination compounds",
    definition: "Isomerism in coordination compounds refers to the existence of two or more complexes with the same chemical formula but different structural arrangements or spatial orientations of ligands around the central metal ion.",
    explanation: "Isomerism in transition metal complexes is divided into two categories: 1. Structural Isomerism: Includes ionization isomerism (exchange of ligands between coordination and ionization spheres, e.g., [Co(NH₃)₅Br]SO₄ vs [Co(NH₃)₅SO₄]Br), solvate/hydrate isomerism, coordination isomerism, and linkage isomerism (ambidentate ligands like NO2⁻ or SCN⁻ bonding through different donor atoms). 2. Stereoisomerism: Same connectivity but different spatial arrangements. This includes: a. Geometrical Isomerism: Occurs in square planar and octahedral complexes (but not tetrahedral, where all positions are adjacent). In square planar complexes (like Ma2b2), ligands can be adjacent (cis) or opposite (trans). In octahedral complexes, geometrical isomers can be cis/trans (for Ma4b2) or facial/meridional (fac/mer, for Ma3b3). b. Optical Isomerism: Occurs when a complex is chiral and lacks an improper axis of symmetry, forming non-superimposable mirror images (enantiomers). This is common in octahedral complexes containing bidentate chelating ligands (e.g., [Co(en)3]³⁺, which exists as left-handed Λ and right-handed Δ enantiomers).",
    formulas: [
      "Ma2b2 Square Planar -> cis and trans isomers",
      "Ma4b2 Octahedral -> cis and trans isomers",
      "Ma3b3 Octahedral -> fac (facial) and mer (meridional) isomers"
    ],
    equations: [
      "Linkage isomerism: [Co(NH₃)5(NO2)]²⁺ (nitro, yellow, Co-N bond) and [Co(NH₃)5(ONO)]²⁺ (nitrito, red, Co-O bond)",
      "Ionization isomerism: [Co(NH₃)₅Br]SO₄ (gives BaSO₄ precipitate with Ba²⁺) and [Co(NH₃)₅SO₄]Br (gives AgBr precipitate with Ag⁺)"
    ],
    applications: [
      "Synthesizing stereospecific coordination complexes for catalytic applications.",
      "Developing metal-based drugs, such as cisplatin (cis-diamminedichloroplatinum(II)), which binds to DNA to inhibit cancer cells, while the trans isomer is ineffective.",
      "Using chiral coordination complexes as templates for asymmetric synthesis."
    ],
    importantPoints: [
      "Tetrahedral complexes do not show geometrical isomerism because all four positions are equivalent and adjacent (bond angles are all 109.5°).",
      "Octahedral complexes of type [M(AA)3]³⁺ (AA = symmetrical bidentate ligand like ethylenediamine) lack a plane of symmetry and are always optically active.",
      "Facial (fac) isomers have three identical ligands occupying one face of the octahedron; meridional (mer) isomers have them arranged around a meridian belt.",
      "Linkage isomers involve ambidentate ligands such as NO2⁻ (nitro/nitrito), SCN⁻ (thiocyanato/isothiocyanato), and CN⁻ (cyano/isocyano)."
    ],
    commonQuestions: [
      "Classify the different types of structural isomerism in coordination compounds. Give an example of linkage and ionization isomerism.",
      "Draw the geometrical and optical isomers of [Co(en)2Cl2]⁺. Which of these isomers is optically active and why?",
      "Distinguish between facial (fac) and meridional (mer) isomers in octahedral complexes of type [Ma3b3]."
    ],
    shortAnswer: "Coordination compounds show structural isomerism (ionization, linkage, coordination, hydrate) and stereoisomerism (geometrical and optical). Geometrical isomers include cis/trans (in square planar Ma2b2 and octahedral Ma4b2) and fac/mer (in octahedral Ma3b3). Optical isomers are non-superimposable mirror images, common in octahedral complexes with chelating ligands.",
    longAnswer: "Isomerism in transition metal complexes is classified into structural isomerism and stereoisomerism. Structural isomerism involves different connectivity. Linkage isomerism occurs with ambidentate ligands. For example, [Co(NH₃)5(NO2)]²⁺ contains a Co-NO2 bond, while [Co(NH₃)5(ONO)]²⁺ contains a Co-ONO bond. Ionization isomerism occurs when ligands inside the coordination sphere exchange with counter-ions outside. [Co(NH₃)₅Br]SO₄ and [Co(NH₃)₅SO₄]Br are ionization isomers; the first yields a precipitate with BaCl₂, and the second reacts with AgNO₃. Stereoisomerism involves identical chemical connectivity but different spatial arrangements. Geometrical isomerism occurs in square planar and octahedral complexes. In square planar Ma2b2 complexes, such as Pt(NH₃)₂Cl₂, the cis isomer has identical ligands adjacent to each other (90° bond angle), while the trans isomer has them opposite (180° bond angle). In octahedral Ma4b2 complexes, like [Co(NH₃)4Cl2]⁺, cis/trans isomers form. In octahedral Ma3b3 complexes, like [Ru(NH₃)₃Cl₃], facial (fac) and meridional (mer) isomers form. In the fac isomer, the three identical ligands occupy one triangular face of the octahedron. In the mer isomer, they lie in a plane that bisects the metal center. Optical isomerism occurs when a complex is chiral. For example, the cis-[Co(en)2Cl2]⁺ isomer lacks a plane of symmetry, making it chiral and optically active, existing as non-superimposable mirror images. The trans-[Co(en)2Cl2]⁺ isomer, however, has a plane of symmetry that makes it achiral and optically inactive."
  }
];
