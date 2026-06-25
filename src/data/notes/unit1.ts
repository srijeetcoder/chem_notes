export const unit1Notes = [
  {
    unitNumber: 1,
    unitTitle: "Atomic and Molecular Structure",
    topicTitle: "Schrödinger equation: introduction and wave mechanical model",
    definition: "The Schrödinger equation is a fundamental partial differential equation in quantum mechanics that describes how the wave function (quantum state) of a physical system changes over time. In its time-independent form, it is written as Hψ = Eψ, where H is the Hamiltonian operator, E is the energy eigenvalue, and ψ is the wave function.",
    explanation: "Classical mechanics failed to explain subatomic phenomena, such as electron behavior in atoms. Louis de Broglie proposed that particles exhibit wave-particle duality. Building on this, Erwin Schrödinger formulated a wave mechanical model where the electron is treated as a three-dimensional standing wave rather than a particle orbiting in fixed tracks. The wave function (ψ) itself has no direct physical meaning, but its square |ψ|² represents the probability density of finding the electron at a given point in space, resolving Born's interpretation. The Hamiltonian operator represents the sum of kinetic and potential energies: H = -((h_bar²)/(2m))∇² + V. The wave mechanical model defines orbitals as probability clouds instead of rigid Bohr orbits.",
    formulas: [
      "Hψ = Eψ (General time-independent Schrödinger Equation)",
      "-(h² / (8π²m)) * (d²ψ/dx² + d²ψ/dy² + d²ψ/dz²) + Vψ = Eψ",
      "P(x,y,z) = |ψ(x,y,z)|² (Probability density)"
    ],
    equations: [
      "∇²ψ + (8π²m / h²)(E - V)ψ = 0 (Three-dimensional form using Laplacian operator ∇²)"
    ],
    applications: [
      "Predicting electron probability distributions (orbitals) in hydrogen and multi-electron atoms.",
      "Providing the theoretical framework for modern chemical bonding models and quantum chemistry computations.",
      "Designing semiconductor materials by modeling electron states in quantum wells."
    ],
    importantPoints: [
      "ψ (wave function) represents the amplitude of the matter wave.",
      "|ψ|² is the probability density of finding an electron in a unit volume.",
      "The equation can only be solved exactly for one-electron systems (e.g., H, He⁺, Li²⁺).",
      "Solutions to the equation yield quantum numbers (n, l, m) representing boundary conditions."
    ],
    commonQuestions: [
      "Derive the time-independent Schrödinger wave equation for a particle in three dimensions.",
      "What is the physical significance of ψ and ψ²?",
      "Why did the wave mechanical model replace Bohr's planetary model of the atom?"
    ],
    shortAnswer: "The Schrödinger equation (Hψ = Eψ) mathematically describes electron behavior in atoms by treating them as waves rather than particles. The square of the wave function (|ψ|²) defines the probability density of locating an electron, replacing Bohr's circular orbits with three-dimensional probability regions called orbitals.",
    longAnswer: "The Schrödinger wave equation represents the foundation of the wave mechanical model of the atom. Developed by Erwin Schrödinger in 1926, it incorporates wave-particle duality (de Broglie hypothesis) to describe subatomic particles. The time-independent version is written as: ∇²ψ + (8π²m / h²)(E - V)ψ = 0, where ∇² is the Laplacian operator (d²/dx² + d²/dy² + d²/dz²), m is electron mass, h is Planck's constant, E is total energy, V is potential energy, and ψ is the wave function. The physical significance of ψ was explained by Max Born: while ψ represents the wave amplitude and can have positive, negative, or complex values, its square |ψ|² is always positive and real, representing the probability density of finding the electron. The wave mechanical model resolves the limitations of the Bohr model by showing that electrons do not orbit the nucleus in fixed planetary pathways. Instead, they occupy orbitals, which are three-dimensional probability clouds. Orbitals are obtained by solving the equation under specific boundary conditions, giving rise naturally to the principal, azimuthal, and magnetic quantum numbers.",
    derivation: [
      {
        title: "Step 1 — de Broglie wavelength for a particle",
        steps: [
          "de Broglie (1924) postulated that every particle with momentum $p$ has an associated wavelength: $\\lambda = \\dfrac{h}{p}$",
          "The total mechanical energy is $E = KE + V = \\dfrac{p^2}{2m} + V$, so the kinetic energy is $KE = E - V$",
          "Combining: $p = \\sqrt{2m(E-V)}$, hence the de Broglie wavelength becomes $\\lambda = \\dfrac{h}{\\sqrt{2m(E-V)}}$"
        ]
      },
      {
        title: "Step 2 — Classical 1D wave equation",
        steps: [
          "The classical wave equation for a standing wave $\\psi$ of wavelength $\\lambda$ along the x-axis is: $\\dfrac{d^2\\psi}{dx^2} + \\dfrac{4\\pi^2}{\\lambda^2}\\psi = 0$",
          "Substituting $\\lambda = \\dfrac{h}{\\sqrt{2m(E-V)}}$ into the equation above: $\\dfrac{4\\pi^2}{\\lambda^2} = \\dfrac{4\\pi^2 \\cdot 2m(E-V)}{h^2} = \\dfrac{8\\pi^2 m(E-V)}{h^2}$"
        ]
      },
      {
        title: "Step 3 — Schrödinger's time-independent equation (1D)",
        steps: [
          "Substituting into the wave equation: $\\dfrac{d^2\\psi}{dx^2} + \\dfrac{8\\pi^2 m}{h^2}(E - V)\\psi = 0$",
          "Rearranging: $-\\dfrac{h^2}{8\\pi^2 m}\\dfrac{d^2\\psi}{dx^2} + V\\psi = E\\psi$",
          "Recognising $\\hbar = \\dfrac{h}{2\\pi}$, we write the Hamiltonian operator as $\\hat{H} = -\\dfrac{\\hbar^2}{2m}\\nabla^2 + V$, giving the compact operator form: $\\boxed{\\hat{H}\\psi = E\\psi}$"
        ]
      },
      {
        title: "Step 4 — Extension to 3D (Laplacian form)",
        steps: [
          "In three dimensions, the second derivative is replaced by the Laplacian $\\nabla^2 = \\dfrac{\\partial^2}{\\partial x^2} + \\dfrac{\\partial^2}{\\partial y^2} + \\dfrac{\\partial^2}{\\partial z^2}$",
          "The complete 3D time-independent Schrödinger equation is: $\\nabla^2\\psi + \\dfrac{8\\pi^2 m}{h^2}(E - V)\\psi = 0$",
          "Physical interpretation: Solutions $\\psi_{nlm}$ under boundary conditions give quantized energies $E_n$ and quantum numbers $n, l, m_l$ naturally, without postulating them as in the Bohr model."
        ]
      }
    ]
  },
  {
    unitNumber: 1,
    unitTitle: "Atomic and Molecular Structure",
    topicTitle: "Particle in a box: solutions and applications for simple systems",
    definition: "The 'particle in a box' (or infinite potential well) is a fundamental model in quantum mechanics describing a particle free to move in a small region surrounded by impenetrable barriers. The potential energy V(x) is zero inside the box of length L and infinite outside.",
    explanation: "To solve this model, we apply the one-dimensional Schrödinger equation inside the box: -(h² / (8π²m))(d²ψ/dx²) = Eψ. Outside the box, since V = ∞, ψ(x) must be zero. Inside the box, the general solution of the second-order differential equation is ψ(x) = A sin(kx) + B cos(kx). Applying boundary conditions ψ(0) = 0 and ψ(L) = 0, we find B = 0 and k = nπ/L, where n is an integer. Normalizing ψ(x) such that the integral of |ψ|² from 0 to L equals 1 yields the amplitude A = √(2/L). The energy levels are quantized, depending on n²: E_n = (n²h²) / (8mL²). This simple system demonstrates three core quantum principles: energy quantization, the existence of a minimum zero-point energy (E₁ > 0), and the presence of nodes where the particle can never be found.",
    formulas: [
      "ψ_n(x) = √(2/L) * sin(nπx / L) (Normalized wave function)",
      "E_n = (n²h²) / (8mL²) (Quantized energy levels, n = 1, 2, 3...)",
      "E_1 = h² / (8mL²) (Zero-point energy)"
    ],
    equations: [
      "d²ψ/dx² + k²ψ = 0 where k = √(8π²mE/h²)"
    ],
    applications: [
      "Modeling delocalized π-electrons in conjugated molecules, such as linear polyenes (butadiene, hexatriene).",
      "Explaining the optoelectronic absorption spectra of quantum dots (semiconductor nanocrystals).",
      "Approximating free-electron behaviors in metals and metallic nanoparticles."
    ],
    importantPoints: [
      "n cannot be zero; if n = 0, then ψ = 0, meaning no particle exists in the box.",
      "The minimum energy (n=1) is called the zero-point energy, showing that a quantum particle can never be completely at rest.",
      "Energy levels are inversely proportional to L². Larger boxes have closer energy states; macroscopic boxes show continuous energy behavior.",
      "Nodes (where ψ = 0 inside the box) increase with higher energy quantum numbers, equal to n - 1."
    ],
    commonQuestions: [
      "Solve the Schrödinger wave equation for a particle in a 1D box of width L. Find its normalized wave function and energy eigenvalues.",
      "What is zero-point energy, and why can it not be zero for a particle in a box?",
      "Estimate the absorption wavelength of butadiene by treating its π-electrons as particles in a one-dimensional box."
    ],
    shortAnswer: "For a particle in a 1D box of length L, solving the Schrödinger equation under boundary conditions yields normalized wave functions ψ_n = √(2/L) sin(nπx/L) and quantized energy levels E_n = n²h²/(8mL²). The model shows that energy is quantized, and the particle has a non-zero minimum energy (zero-point energy) at n=1.",
    longAnswer: "The one-dimensional particle in a box model is a key quantum mechanics problem that illustrates energy quantization. Consider a particle of mass m confined in a box of width L along the x-axis, with potential energy V(x) = 0 for 0 < x < L, and V(x) = ∞ for x ≤ 0 and x ≥ L. The wave function ψ(x) must be zero outside the box. Inside the box, the Schrödinger equation is: d²ψ/dx² + (8π²mE/h²)ψ = 0. We define k² = 8π²mE/h², simplifying the equation to d²ψ/dx² + k²ψ = 0. The general solution is ψ(x) = A sin(kx) + B cos(kx). Applying the first boundary condition at x = 0 (ψ(0) = 0) gives B = 0. The second boundary condition at x = L (ψ(L) = 0) gives A sin(kL) = 0. Since A cannot be zero (otherwise the wave function is zero everywhere), sin(kL) = 0, which means kL = nπ (for n = 1, 2, 3...). Thus, k = nπ/L. Substituting this back gives E_n = n²h²/(8mL²), proving that energy is quantized. To find amplitude A, we normalize the wave function: ∫ |ψ|² dx = 1 from 0 to L. Ranging the integral of A² sin²(nπx/L) dx = 1 gives A = √(2/L). The final normalized wave function is ψ_n(x) = √(2/L) sin(nπx/L). Zero-point energy (n=1) is E₁ = h²/(8mL²), which shows the particle retains kinetic energy even at absolute zero temperature because confining its position (L) increases momentum uncertainty according to Heisenberg's uncertainty principle.",
    derivation: [
      {
        title: "Step 1 — Set up the Schrödinger equation inside the box (V = 0)",
        steps: [
          "Inside the box ($0 < x < L$), $V = 0$, so the TISE reduces to: $\\dfrac{d^2\\psi}{dx^2} = -\\dfrac{8\\pi^2 mE}{h^2}\\psi$",
          "Define the wave vector $k^2 = \\dfrac{8\\pi^2 mE}{h^2}$, so the equation becomes $\\dfrac{d^2\\psi}{dx^2} + k^2\\psi = 0$",
          "This is a standard SHM-type ODE. The general solution is: $\\psi(x) = A\\sin(kx) + B\\cos(kx)$"
        ]
      },
      {
        title: "Step 2 — Apply boundary conditions to quantize k",
        steps: [
          "Boundary condition 1: $\\psi(0) = 0 \\Rightarrow B\\cos(0) = B = 0$. So $\\psi(x) = A\\sin(kx)$",
          "Boundary condition 2: $\\psi(L) = 0 \\Rightarrow A\\sin(kL) = 0$. Since $A \\ne 0$, we need $\\sin(kL) = 0$",
          "$\\sin(kL) = 0 \\Rightarrow kL = n\\pi$ where $n = 1, 2, 3, \\ldots$ (integers, excluding 0)",
          "Therefore: $k_n = \\dfrac{n\\pi}{L}$ and $\\psi_n(x) = A\\sin\\!\\left(\\dfrac{n\\pi x}{L}\\right)$"
        ]
      },
      {
        title: "Step 3 — Derive the quantized energy levels",
        steps: [
          "From $k_n = \\dfrac{n\\pi}{L}$ and the definition $k^2 = \\dfrac{8\\pi^2 mE}{h^2}$:",
          "$\\dfrac{n^2\\pi^2}{L^2} = \\dfrac{8\\pi^2 mE_n}{h^2}$",
          "Solving for $E_n$: $\\boxed{E_n = \\dfrac{n^2 h^2}{8mL^2}}$ for $n = 1, 2, 3, \\ldots$",
          "Zero-point energy ($n = 1$): $E_1 = \\dfrac{h^2}{8mL^2} \\ne 0$ — the particle can never be fully at rest (Heisenberg uncertainty)"
        ]
      },
      {
        title: "Step 4 — Normalize the wave function",
        steps: [
          "Normalization condition: $\\int_0^L |\\psi_n(x)|^2\\, dx = 1$",
          "$A^2 \\int_0^L \\sin^2\\!\\left(\\dfrac{n\\pi x}{L}\\right) dx = A^2 \\cdot \\dfrac{L}{2} = 1$",
          "Therefore $A = \\sqrt{\\dfrac{2}{L}}$ and the normalized wave function is: $\\boxed{\\psi_n(x) = \\sqrt{\\dfrac{2}{L}}\\sin\\!\\left(\\dfrac{n\\pi x}{L}\\right)}$"
        ]
      },
      {
        title: "Step 5 — Worked Example: Energy levels of a confined electron",
        steps: [
          "Problem: An electron is confined in a 1D box of width $L = 1\\text{ \\AA} = 10^{-10}\\text{ m}$. Calculate its ground state energy ($E_1$) and the energy separation ($\\Delta E$) between the first excited state ($n=2$) and the ground state.",
          "Constants: $m_e \\approx 9.11 \\times 10^{-31}\\text{ kg}$, $h \\approx 6.626 \\times 10^{-34}\\text{ J s}$, $1\\text{ eV} \\approx 1.602 \\times 10^{-19}\\text{ J}$",
          "Ground state energy ($n=1$): $E_1 = \\dfrac{(1)^2 \\cdot h^2}{8 m_e L^2} = \\dfrac{(6.626 \\times 10^{-34})^2}{8 \\times 9.11 \\times 10^{-31} \\times (10^{-10})^2}$",
          "Calculation: $E_1 = \\dfrac{4.39 \\times 10^{-67}}{7.288 \\times 10^{-50}} \\approx 6.02 \\times 10^{-18}\\text{ J} \\approx \\dfrac{6.02 \\times 10^{-18}}{1.602 \\times 10^{-19}}\\text{ eV} \\approx 37.6\\text{ eV}$",
          "Energy separation: $\\Delta E = E_2 - E_1 = (2^2 - 1^2) E_1 = 3 E_1$",
          "Therefore: $\\Delta E = 3 \\times 37.6\\text{ eV} = 112.8\\text{ eV}$ (or $1.81 \\times 10^{-17}\\text{ J}$)"
        ]
      }
    ]
  },
  {
    unitNumber: 1,
    unitTitle: "Atomic and Molecular Structure",
    topicTitle: "Molecular orbitals of diatomic molecules (H₂, N₂, O₂, F₂, CO, NO)",
    definition: "Molecular Orbital (MO) Theory describes chemical bonding by treating electrons as delocalized over the entire molecule in orbitals formed by the Linear Combination of Atomic Orbitals (LCAO). Diatomic molecules can be homonuclear (H₂, N₂, O₂, F₂) or heteronuclear (CO, NO).",
    explanation: "According to LCAO, when atomic orbitals wave functions ψ_A and ψ_B overlap, they combine constructively to form a bonding molecular orbital (ψ_b = ψ_A + ψ_B) or destructively to form an antibonding molecular orbital (ψ_a = ψ_A - ψ_B). Bonding orbitals are lower in energy than parent atomic orbitals, stabilizing the molecule, while antibonding orbitals are higher in energy. For homonuclear diatomic molecules, s-p mixing occurs in B2, C2, and N₂ because the energy gap between 2s and 2p atomic orbitals is small, pushing the σ_2pz orbital above the π_2px/π_2py orbitals. In O₂ and F₂, no s-p mixing occurs, so σ_2pz remains lower in energy. Heteronuclear molecules like CO and NO have asymmetric atomic orbital levels: electronegative oxygen's orbitals are lower in energy, causing CO's bonding molecular orbitals to resemble oxygen's atomic orbitals, and antibonding orbitals to resemble carbon's.",
    formulas: [
      "ψ_bonding = ψ_A + ψ_B (Constructive interference)",
      "ψ_antibonding = ψ_A - ψ_B (Destructive interference)",
      "Bond Order (BO) = 0.5 * (N_b - N_a) (N_b = bonding electrons, N_a = antibonding electrons)"
    ],
    equations: [
      "N₂ MO Config: KK σ2s² σ*2s² π2px² = π2py² σ2pz² (BO = 3, Diamagnetic)",
      "O₂ MO Config: KK σ2s² σ*2s² σ2pz² π2px² = π2py² π*2px¹ = π*2py¹ (BO = 2, Paramagnetic)"
    ],
    applications: [
      "Explaining magnetic properties of O₂ (paramagnetism due to two unpaired electrons in antibonding π* orbitals), which valence bond theory failed to predict.",
      "Predicting stability, bond length, and bond energy of molecules and their ions (e.g., O₂⁺, O₂⁻).",
      "Understanding metal-carbonyl bonding in coordination chemistry via π-backbonding from metal d-orbitals to the vacant π* orbital of CO."
    ],
    importantPoints: [
      "Bond order is directly proportional to bond strength and inversely proportional to bond length.",
      "Molecules with zero bond order (like He₂, BO = 0.5*(2-2) = 0) cannot exist.",
      "If all electrons are paired, the molecule is diamagnetic; if unpaired electrons exist, it is paramagnetic.",
      "CO is a strong field ligand because of its vacant π* antibonding orbital, which accepts electron density from transition metals."
    ],
    commonQuestions: [
      "Write the molecular orbital configuration of CO and calculate its bond order. Explain why it is diamagnetic.",
      "Why is oxygen (O₂) paramagnetic? Illustrate with a molecular orbital energy diagram.",
      "Explain s-p mixing and how it affects the molecular orbital energy ordering of N₂ versus O₂."
    ],
    shortAnswer: "MO theory combines atomic orbitals via LCAO to form bonding (low energy) and antibonding (high energy) molecular orbitals. It successfully explains why O₂ is paramagnetic (having two unpaired electrons in π*2p orbitals) and why N₂ has a triple bond (bond order = 3) with no unpaired electrons (diamagnetic).",
    longAnswer: "Molecular Orbital (MO) Theory provides a wave mechanical explanation of chemical bonding using the Linear Combination of Atomic Orbitals (LCAO). For diatomic molecules, bonding is evaluated by calculating the bond order: BO = (N_b - N_a)/2. In homonuclear diatomic molecules, the relative energies of MOs depend on the energy difference between 2s and 2p atomic orbitals. In N₂ (14 electrons), the 2s-2p energy gap is small, leading to s-p mixing. This mixing raises the energy of the σ_2pz orbital above the degenerate π_2px and π_2py orbitals, giving the configuration: KK σ_2s² σ*_2s² π_2px² = π_2py² σ_2pz². Its bond order is (10 - 4)/2 = 3 (a triple bond), and it is diamagnetic. In O₂ (16 electrons), the 2s-2p gap is larger, so no s-p mixing occurs. The σ_2pz orbital remains below the π_2p orbitals: KK σ_2s² σ*_2s² σ_2pz² π_2px² = π_2py² π*_2px¹ = π*_2py¹. This configuration results in a bond order of (10 - 6)/2 = 2 and shows two unpaired electrons in the π* orbitals, making O₂ paramagnetic. For heteronuclear molecules like CO (14 valence/total electrons, isoelectronic with N₂), the atomic orbitals of oxygen are lower in energy than those of carbon due to oxygen's greater electronegativity. The resulting bonding MOs have more oxygen character, and the antibonding MOs have more carbon character. The bond order of CO is 3, and it is diamagnetic."
  },
  {
    unitNumber: 1,
    unitTitle: "Atomic and Molecular Structure",
    topicTitle: "Energy level diagrams of diatomic molecules",
    definition: "An energy level diagram of a diatomic molecule is a visual representation showing the relative energy of bonding and antibonding molecular orbitals in comparison to the atomic orbitals of the individual atoms from which they are formed.",
    explanation: "The construction of MO diagrams is based on three rules: the Aufbau principle, Pauli's exclusion principle, and Hund's rule of maximum multiplicity. The y-axis represents increasing energy. Atomic orbitals of the constituent atoms are placed on the left and right sides, while the resulting molecular orbitals occupy the center column. Bonding orbitals (e.g., σ, π) are drawn lower in energy than their starting atomic orbitals, whereas antibonding orbitals (e.g., σ*, π*) are drawn higher. Combining two 1s orbitals yields σ1s and σ*1s. Combining 2s orbitals yields σ2s and σ*2s. Combining 2p orbitals gives one σ2pz and two degenerate π2px/π2py orbitals, along with their corresponding antibonding partners. The placement of σ2pz relative to π2px/py is key: for atomic numbers Z ≤ 7 (up to nitrogen), s-p mixing shifts σ2pz upwards. For Z > 7 (oxygen and fluorine), σ2pz lies lower than the π2p orbitals.",
    formulas: [
      "N_b = Total number of electrons in bonding MOs",
      "N_a = Total number of electrons in antibonding MOs",
      "Bond Order = (N_b - N_a) / 2"
    ],
    equations: [
      "NO valence electrons = 11. Config: σ2s² σ*2s² σ2pz² π2px² = π2py² π*2px¹ (BO = 2.5, Paramagnetic)",
      "F₂ valence electrons = 14. Config: σ2s² σ*2s² σ2pz² π2px² = π2py² π*2px² = π*2py² (BO = 1, Diamagnetic)"
    ],
    applications: [
      "Analyzing electronic transitions (UV-Vis spectroscopy) by identifying the HOMO (Highest Occupied Molecular Orbital) and LUMO (Lowest Unoccupied Molecular Orbital).",
      "Evaluating chemical stability and reactivity of ion species like O₂⁻ (superoxide) and O₂²⁻ (peroxide).",
      "Explaining the color of transition metal complexes and coordination species through charge-transfer spectra."
    ],
    importantPoints: [
      "Homonuclear diagrams are symmetrical; heteronuclear diagrams are skewed, with bonding MOs closer to the electronegative atom.",
      "Only atomic orbitals of comparable energy and symmetry can combine.",
      "The number of molecular orbitals formed must equal the number of atomic orbitals combined.",
      "A higher bond order represents a more stable molecule with a larger bond dissociation energy."
    ],
    commonQuestions: [
      "Draw the molecular orbital energy level diagram for the nitric oxide (NO) molecule. Calculate its bond order and discuss its magnetic behavior.",
      "Compare the molecular orbital diagrams of O₂, O₂⁺, and O₂⁻. Order them by increasing bond length.",
      "Show how heteronuclear diatomic molecular orbital energy diagrams differ from homonuclear ones."
    ],
    shortAnswer: "Molecular orbital energy level diagrams display atomic orbitals on the sides combining to form molecular orbitals in the center. They illustrate the energy gaps, orbital occupation, HOMO-LUMO transitions, and show whether a diatomic molecule is paramagnetic or diamagnetic based on the distribution of electrons.",
    longAnswer: "An energy level diagram of a diatomic molecule maps out molecular orbitals (MOs) on a vertical energy scale. Atomic orbitals (AOs) of the individual atoms are aligned on the sides. Combining these AOs creates bonding MOs at lower energies and antibonding MOs at higher energies. For homonuclear diatomic molecules of elements with atomic number Z ≤ 7 (like B2, C2, N₂), the 2s and 2p energy gap is narrow. This leads to s-p hybridization mixing, which pushes the σ_2pz orbital above the π_2px/y orbitals. For elements with Z > 7 (like O₂, F₂), the 2s-2p energy gap is wide, preventing s-p mixing, meaning the σ_2pz orbital lies lower than the π_2px/y orbitals. In heteronuclear diatomic molecules, such as NO or CO, the diagram is asymmetric. Electronegativity differences cause the more electronegative atom's AOs (like oxygen) to be positioned lower on the energy scale than the less electronegative atom's AOs (like nitrogen or carbon). The resulting bonding MOs shift down closer in energy to the electronegative atom's AOs, meaning they share more of its wave function character. Conversely, the antibonding MOs shift closer to the electropositive atom's AOs. For example, in NO (15 total electrons), the valence configuration is σ_2s² σ*_2s² σ_2pz² π_2px² = π_2py² π*_2px¹. This yields a bond order of (10 - 5)/2 = 2.5. The single unpaired electron in the antibonding π* orbital makes the NO molecule paramagnetic and chemically reactive."
  },
  {
    unitNumber: 1,
    unitTitle: "Atomic and Molecular Structure",
    topicTitle: "pi-molecular orbitals of butadiene and benzene",
    definition: "The pi-molecular orbitals of conjugated systems like butadiene (linear) and benzene (cyclic) represent delocalized electronic states formed by the lateral overlap of unhybridized 2p atomic orbitals perpendicular to the molecular plane.",
    explanation: "For 1,3-butadiene (CH2=CH-CH=CH2), the four carbon atoms are sp² hybridized. Each carbon contributes one unhybridized 2p orbital, containing one electron. According to Huckel molecular orbital theory, these four 2p orbitals combine to form four π-molecular orbitals (ψ1, ψ2, ψ3*, ψ4*). The lowest energy orbital ψ1 has zero nodes (all orbitals in phase). ψ2 has one node, ψ3* has two nodes, and the highest energy ψ4* has three nodes. In the ground state, the four π-electrons pair up in ψ1 and ψ2, leaving ψ3* and ψ4* vacant. For benzene (C6H6), the six sp² carbon atoms contribute six 2p orbitals, generating six cyclic π-orbitals. Because of its circular symmetry, benzene's MOs feature degenerate levels. The lowest level is ψ1 (zero nodes, non-degenerate). Above it are the degenerate bonding orbitals ψ2 and ψ3 (one node). Next are the degenerate antibonding orbitals ψ4* and ψ5* (two nodes), followed by the highest antibonding orbital ψ6* (three nodes). The six π-electrons occupy ψ1, ψ2, and ψ3, creating a closed-shell electronic configuration that explains benzene's resonance stabilization.",
    formulas: [
      "E_k = α + m_k * β (Huckel orbital energy formula)",
      "m_k = 2 cos(kπ / (N+1)) (For linear conjugated polyenes like butadiene)",
      "m_k = 2 cos(2kπ / N) (For cyclic conjugated systems like benzene)"
    ],
    equations: [
      "Butadiene Orbital Energies: E1 = α + 1.62β, E2 = α + 0.62β, E3 = α - 0.62β, E4 = α - 1.62β",
      "Benzene Orbital Energies: E1 = α + 2β, E2 = E3 = α + β, E4 = E5 = α - β, E6 = α - 2β"
    ],
    applications: [
      "Explaining the photochemistry of Woodward-Hoffmann rules for electrocyclic reactions of butadiene.",
      "Predicting the UV absorption wavelength (HOMO-LUMO transition) of conjugated dienes and polyenes.",
      "Providing the basis for understanding thermodynamic aromatic stabilization energy in benzene."
    ],
    importantPoints: [
      "α (Coulomb integral) represents the energy of an electron in an isolated carbon 2p orbital (negative value).",
      "β (resonance integral) represents the interaction energy between adjacent 2p orbitals (negative value).",
      "Delocalization energy is the difference between the π-electron energy of the conjugated system and localized double bonds (Benzene delocalization energy = 2β).",
      "The number of nodes increases with the energy of the molecular orbital."
    ],
    commonQuestions: [
      "Determine the energy levels and draw the shapes of the π-molecular orbitals of 1,3-butadiene. Mark the HOMO and LUMO.",
      "Draw the molecular orbital energy level diagram of benzene's π-system and calculate its total π-electron energy.",
      "Explain why benzene is exceptionally stable using its molecular orbital closed-shell concept."
    ],
    shortAnswer: "Butadiene has 4 linear π-orbitals (ψ1 to ψ4*) with 0, 1, 2, and 3 nodes. The 4 π-electrons occupy ψ1 and ψ2. Benzene has 6 cyclic π-orbitals with degenerate levels (bonding: α+2β, α+β; antibonding: α-β, α-2β). The 6 π-electrons fill the three bonding orbitals, creating a highly stable closed-shell ring.",
    longAnswer: "Huckel Molecular Orbital (HMO) theory describes conjugated π systems by combining p-orbitals perpendicular to the σ-framework. For 1,3-butadiene, four p-orbitals generate four MOs: ψ1, ψ2, ψ3*, and ψ4*. The energy levels are E1 = α + 1.618β, E2 = α + 0.618β, E3 = α - 0.618β, and E4 = α - 1.618β. Both α and β are negative values, so E1 and E2 are bonding, while E3 and E4 are antibonding. In the ground state, the four π-electrons fill ψ1 and ψ2. The total π energy is 2(α + 1.618β) + 2(α + 0.618β) = 4α + 4.472β. An isolated system of two localized double bonds would have an energy of 4α + 4β, yielding a stabilization (delocalization) energy of 0.472β. The HOMO is ψ2 and the LUMO is ψ3*. For benzene, six cyclic p-orbitals generate six MOs. Due to cyclic boundary conditions, the energies are E1 = α + 2β, E2 = E3 = α + β, E4 = E5 = α - β, and E6 = α - 2β. The six π-electrons fill the three lowest bonding orbitals (one electron pair in E1, and two pairs in the degenerate E2/E3 level). The total π energy is 2(α + 2β) + 4(α + β) = 6α + 8β. Compared to three localized double bonds (6α + 6β), benzene has a resonance stabilization energy of 2β, which accounts for its exceptional chemical stability and resistance to addition reactions.",
    derivation: [
      {
        title: "Step 1 — Hückel secular determinant for butadiene (N = 4)",
        steps: [
          "The Hückel secular determinant for a linear conjugated system of $N$ atoms sets up a matrix equation $(\\mathbf{H} - E\\mathbf{S}) = 0$. Let $x = \\dfrac{\\alpha - E}{\\beta}$.",
          "For 1,3-butadiene ($N = 4$), the Hückel determinant is: $\\begin{vmatrix} x & 1 & 0 & 0 \\\\ 1 & x & 1 & 0 \\\\ 0 & 1 & x & 1 \\\\ 0 & 0 & 1 & x \\end{vmatrix} = 0$",
          "Expanding: $x^4 - 3x^2 + 1 = 0 \\Rightarrow x^2 = \\dfrac{3 \\pm \\sqrt{5}}{2}$, giving $x = \\pm 1.618,\\, \\pm 0.618$"
        ]
      },
      {
        title: "Step 2 — Butadiene energy levels",
        steps: [
          "Substituting back $E = \\alpha - x\\beta$:",
          "$E_1 = \\alpha + 1.618\\beta,\\; E_2 = \\alpha + 0.618\\beta,\\; E_3 = \\alpha - 0.618\\beta,\\; E_4 = \\alpha - 1.618\\beta$",
          "Total $\\pi$-electron energy (4 electrons filling $E_1, E_2$): $E_\\pi = 2(\\alpha + 1.618\\beta) + 2(\\alpha + 0.618\\beta) = 4\\alpha + 4.472\\beta$",
          "Two isolated ethylene double bonds would give $4\\alpha + 4\\beta$. Delocalization energy = $0.472\\beta\\approx 15\\text{ kJ/mol}$"
        ]
      },
      {
        title: "Step 3 — Hückel cyclic determinant for benzene (N = 6)",
        steps: [
          "For a cyclic system, the boundary condition is periodic ($\\psi_{N+1} = \\psi_1$). The secular determinant becomes: $\\begin{vmatrix} x & 1 & 0 & 0 & 0 & 1 \\\\ 1 & x & 1 & 0 & 0 & 0 \\\\ \\vdots & & \\ddots & & & \\vdots \\end{vmatrix} = 0$",
          "Solutions: $x_k = 2\\cos\\!\\left(\\dfrac{2k\\pi}{6}\\right)$ for $k = 0, 1, 2, 3, 4, 5$",
          "Energy levels: $E_k = \\alpha - 2\\cos\\!\\left(\\dfrac{2k\\pi}{6}\\right)\\beta$, giving $E_1 = \\alpha + 2\\beta$; $E_2 = E_3 = \\alpha + \\beta$; $E_4 = E_5 = \\alpha - \\beta$; $E_6 = \\alpha - 2\\beta$"
        ]
      },
      {
        title: "Step 4 — Benzene delocalization (resonance stabilization) energy",
        steps: [
          "Total $\\pi$ energy: $E_\\pi = 2(\\alpha + 2\\beta) + 4(\\alpha + \\beta) = 6\\alpha + 8\\beta$",
          "Three localized ethylene-like double bonds: $E_{\\text{local}} = 3 \\times 2(\\alpha + \\beta) = 6\\alpha + 6\\beta$",
          "$\\therefore$ Delocalization (resonance) energy $= E_\\pi - E_{\\text{local}} = \\boxed{2\\beta} \\approx -150\\text{ kJ/mol}$",
          "This large stabilization energy explains benzene's preference for substitution (which retains aromaticity) over addition (which would destroy it)."
        ]
      }
    ]
  },
  {
    unitNumber: 1,
    unitTitle: "Atomic and Molecular Structure",
    topicTitle: "Aromaticity and Huckel's rule",
    definition: "Aromaticity is a chemical property of cyclic, planar, conjugated systems containing a specific number of delocalized $\\pi$-electrons that exhibits high thermodynamic stability. Huckel's rule states that a monocyclic, planar, conjugated ring is aromatic if it contains $(4n + 2)$ $\\pi$-electrons, where $n$ is a non-negative integer ($n = 0, 1, 2, 3, \\dots$).",
    explanation: "For a molecule to be classified as aromatic, it must satisfy four structural criteria: 1. It must be cyclic (delocalization must happen around a loop). 2. It must be planar (allowing p-orbitals to align parallel for overlap). 3. It must be fully conjugated (every atom in the ring must possess an unhybridized p-orbital). 4. It must contain $(4n + 2)$ $\\pi$-electrons. If a compound meets the first three rules but has $4n$ $\\pi$-electrons, it is highly unstable and is classified as antiaromatic. If it fails any of the first three rules (e.g., non-planar or lacks conjugation at one carbon), it is non-aromatic. Aromatic compounds undergo electrophilic aromatic substitution rather than addition reactions, maintaining their stable ring electron systems. Heterocyclic rings (like pyridine, furan) and charged ions (like cyclopentadienyl anion, cycloheptatrienyl cation) can also display aromaticity.",
    diagramType: 'benzene_aromaticity',
    formulas: [
      "Number of π-electrons = 4n + 2 (Aromatic condition, n = 0, 1, 2...)",
      "Number of π-electrons = 4n (Antiaromatic condition, n = 1, 2...)"
    ],
    equations: [
      "Benzene (6 π-electrons, n=1) -> Aromatic",
      "Cyclooctatetraene (8 π-electrons, 4n conjugated but adopts non-planar tub shape) -> Non-aromatic",
      "Cyclopentadienyl Anion (6 π-electrons, n=1) -> Aromatic"
    ],
    applications: [
      "Explaining the relative stability and acidity of organic molecules (e.g., cyclopentadiene is unusually acidic because losing a proton yields the aromatic cyclopentadienyl anion).",
      "Designing organic semiconductors, dyes, and pigments (phthalocyanines) which utilize highly stable aromatic rings.",
      "Predicting chemical reactivity patterns of pharmaceutical compounds containing aromatic heterocyclic rings."
    ],
    importantPoints: [
      "Aromatic systems have large negative resonance energies, making them thermodynamically stable.",
      "In heterocyclic aromatic rings, lone pairs are counted in the (4n+2) sum only if they occupy a p-orbital to complete conjugation (like in furan or pyrrole, but not pyridine).",
      "Antiaromatic systems are less stable than their open-chain analogues and are highly reactive.",
      "The cycloheptatrienyl cation (tropylium ion) is stable because it has 6 π-electrons (4n+2) delocalized over 7 carbons."
    ],
    commonQuestions: [
      "State Huckel's rule of aromaticity. Classify the following as aromatic, non-aromatic, or antiaromatic: cyclopentadienyl anion, pyrrole, cyclobutadiene.",
      "Why is cyclopentadiene (pKa ≈ 16) much more acidic than cycloheptadiene?",
      "Explain the criteria of aromaticity using benzene and cyclooctatetraene as examples."
    ],
    shortAnswer: "Aromaticity is the extra stability found in cyclic, planar, fully conjugated systems with (4n + 2) π-electrons (Huckel's Rule). Compounds with 4n π-electrons are antiaromatic (highly unstable), while those lacking planarity, cyclicity, or full conjugation are non-aromatic.",
    longAnswer: "Huckel's rule provides a quantum mechanical explanation for the stability of aromatic systems. For a molecule to be aromatic, it must meet four criteria: it must be cyclic, planar, fully conjugated (sp² or sp hybridized atoms), and have (4n + 2) π-electrons, where n is a whole number. This specific count (2, 6, 10, 14, 18...) completes a closed shell of bonding molecular orbitals, similar to noble gas configurations in atoms. For example, benzene has a planar hexagon shape with six p-orbitals containing six π-electrons. Fitting this into the formula 4n + 2 = 6 gives n = 1, meaning benzene is aromatic and possesses high resonance stability. Cyclobutadiene is cyclic, planar, and fully conjugated, but has four π-electrons. Since 4n = 4 (n=1), it is antiaromatic and extremely unstable. Cyclooctatetraene has eight π-electrons, which matches the antiaromatic 4n formula. To avoid this unstable state, the molecule bends into a non-planar 'tub' shape. Lacking a planar configuration, the p-orbitals cannot align, making it non-aromatic. Huckel's rule also applies to ions: cyclopentadiene is not aromatic because it contains an sp³ carbon. However, deprotonation yields the cyclopentadienyl anion. The sp³ carbon becomes sp² hybridized, placing the lone pair in a p-orbital. This gives the ring a total of 6 π-electrons (4n+2, n=1) delocalized over the five carbons, making the anion aromatic and explaining its ease of formation."
  },
  {
    unitNumber: 1,
    unitTitle: "Atomic and Molecular Structure",
    topicTitle: "Crystal Field Theory (CFT) and splitting in octahedral/tetrahedral geometries",
    definition: "Crystal Field Theory (CFT) is an electrostatic model that describes the electronic structure of transition metal coordination complexes. It assumes that the bonding between the central metal ion and ligands is purely ionic, where ligands are treated as point negative charges that split the degeneracy of the metal's d-orbitals.",
    explanation: "In an isolated transition metal ion, all five d-orbitals (dxy, dyz, dxz, dx²-y², dz²) have equal energy (degenerate). When ligands approach the metal ion to form a complex, an electrostatic field is created. In an octahedral complex, six ligands approach along the cartesian axes (x, y, z). The dx²-y² and dz² orbitals point directly toward the axes and experience stronger electrostatic repulsion, shifting to a higher energy level (the eg set). The dxy, dyz, and dxz orbitals point between the axes, experiencing less repulsion, and remain at a lower energy level (the t2g set). The energy separation between these sets is the crystal field splitting energy (Δo). The barycenter (average energy) is maintained: eg orbitals are raised by +0.6 Δo, and t2g orbitals are lowered by -0.4 Δo. In a tetrahedral complex, four ligands approach between the cartesian axes. The dxy, dyz, and dxz orbitals experience stronger repulsion and form the higher-energy t2 set, while the dx²-y² and dz² orbitals form the lower-energy e set. Because there are fewer ligands and they do not point directly at the orbitals, tetrahedral splitting (Δt) is much smaller than octahedral splitting: Δt = (4/9) Δo. Tetrahedral complexes do not use the 'g' subscript because a tetrahedron lacks a center of inversion.",
    formulas: [
      "CFSE (Octahedral) = [(-0.4 * n_t2g) + (0.6 * n_eg)] * Δo + P (P = pairing energy)",
      "CFSE (Tetrahedral) = [(-0.6 * n_e) + (0.4 * n_t2)] * Δt",
      "Δt = (4/9) * Δo (Relationship between tetrahedral and octahedral splitting)"
    ],
    equations: [
      "Weak Field Ligands (High Spin, Δo < P): [CoF6]³⁻ (d⁶ complex, t2g⁴ eg²), CFSE = [(-0.4 * 4) + (0.6 * 2)]Δo = -0.4 Δo",
      "Strong Field Ligands (Low Spin, Δo > P): [Co(CN)6]³⁻ (d⁶ complex, t2g⁶ eg⁰), CFSE = -2.4 Δo + 2P"
    ],
    applications: [
      "Explaining the optical absorption spectra and colors of transition metal complexes (d-d transitions).",
      "Predicting the magnetic properties (high spin vs. low spin configurations) of coordination compounds.",
      "Accounting for thermodynamic properties, such as lattice energies of transition metal oxides and hydration enthalpies."
    ],
    importantPoints: [
      "The splitting pattern of d-orbitals in tetrahedral complexes is the exact inverse of octahedral complexes.",
      "Strong field ligands (e.g., CN⁻, CO) produce large splitting (high Δo), favoring electron pairing (low spin complexes).",
      "Weak field ligands (e.g., F⁻, Cl⁻) produce small splitting (low Δo), favoring unpaired electrons (high spin complexes).",
      "Tetrahedral complexes are almost always high spin because the splitting energy Δt is small and rarely exceeds the pairing energy P."
    ],
    commonQuestions: [
      "Explain the crystal field splitting of d-orbitals in an octahedral coordination complex. Draw the energy level diagram.",
      "Why are tetrahedral complexes generally high spin? Calculate the CFSE for a d⁵ tetrahedral system.",
      "Calculate the Crystal Field Stabilization Energy (CFSE) for a d⁶ metal ion in both weak and strong octahedral fields."
    ],
    shortAnswer: "CFT models metal-ligand bonding as ionic electrostatic interactions. In octahedral complexes, ligands approach along the axes, splitting d-orbitals into lower t2g and higher eg sets. In tetrahedral complexes, ligands approach between axes, splitting them into lower e and higher t2 sets, with Δt ≈ (4/9)Δo.",
    longAnswer: "Crystal Field Theory (CFT) explains the electronic properties of transition metal complexes. It treats ligands as negative point charges. When ligands approach a central metal cation, the electrostatic field removes the degeneracy of the five d-orbitals. In an octahedral complex, six ligands approach along the x, y, and z axes. The dx²-y² and dz² orbitals (eg set) point directly at the incoming ligands, experiencing greater repulsion and rising in energy. The dxy, dyz, and dxz orbitals (t2g set) point between the axes, experiencing less repulsion and lowering in energy relative to the barycenter. The energy difference is denoted as Δo. Each electron in the t2g set stabilizes the complex by -0.4 Δo, while each electron in the eg set destabilizes it by +0.6 Δo. In a tetrahedral complex, four ligands approach between the axes. Consequently, the dxy, dyz, and dxz orbitals (t2 set) experience greater repulsion and rise in energy, while the dx²-y² and dz² orbitals (e set) lower in energy. The splitting energy Δt is smaller because there are only four ligands and they do not point directly at any orbital. Quantitatively, Δt = (4/9) Δo. This small splitting energy means that Δt is almost always less than the spin pairing energy (P). Consequently, electrons do not pair up in the lower e orbitals but instead jump to the t2 set, making tetrahedral complexes almost exclusively high-spin. The arrangement of electrons determines the Crystal Field Stabilization Energy (CFSE), magnetic behavior, and electronic transitions that give these complexes their vibrant colors.",
    derivation: [
      {
        title: "Step 1 — Barycenter rule (energy conservation in the crystal field)",
        steps: [
          "In an octahedral field, the 5 degenerate d-orbitals split into $t_{2g}$ (×3) and $e_g$ (×2) sets.",
          "The barycenter (weighted average energy) is unchanged: $3 \\times (-0.4\\Delta_o) + 2 \\times (+0.6\\Delta_o) = -1.2\\Delta_o + 1.2\\Delta_o = 0$",
          "Therefore: $t_{2g}$ orbitals are stabilized by $-0.4\\Delta_o$ each, and $e_g$ orbitals are destabilized by $+0.6\\Delta_o$ each."
        ]
      },
      {
        title: "Step 2 — Crystal Field Stabilization Energy (CFSE) formula",
        steps: [
          "CFSE = (number of $t_{2g}$ electrons)$\\times(-0.4\\Delta_o)$ + (number of $e_g$ electrons)$\\times(+0.6\\Delta_o)$ + $P$ (if pairing occurs)",
          "Example: $\\text{Co}^{3+}$ ($d^6$) in strong field $\\Rightarrow t_{2g}^6 e_g^0$: $\\text{CFSE} = 6\\times(-0.4) + 0\\times(+0.6) = -2.4\\Delta_o$ (very stable)",
          "Same ion in weak field $\\Rightarrow t_{2g}^4 e_g^2$: $\\text{CFSE} = 4\\times(-0.4) + 2\\times(+0.6) = -0.4\\Delta_o$ (much less stable)"
        ]
      },
      {
        title: "Step 3 — Relationship between octahedral and tetrahedral splitting",
        steps: [
          "Tetrahedral geometry: 4 ligands approach along the diagonals of a cube — none aligns directly with any d-orbital.",
          "Fraction of ligands ($\\tfrac{4}{6}$) × geometric factor ($\\tfrac{2}{3}$) gives: $\\Delta_t = \\dfrac{4}{9}\\Delta_o$",
          "Because $\\Delta_t < \\Delta_o$ always, tetrahedral complexes are almost universally high-spin ($\\Delta_t < P$)."
        ]
      },
      {
        title: "Step 4 — Spin-only magnetic moment derivation",
        steps: [
          "Each unpaired electron has spin quantum number $s = \\tfrac{1}{2}$, contributing a magnetic moment.",
          "The spin-only magnetic moment formula is derived from: $\\mu_s = g_s\\sqrt{S(S+1)}\\,\\mu_B$, where $g_s \\approx 2$ and $S = \\tfrac{n}{2}$ for $n$ unpaired electrons.",
          "$\\mu_s = 2\\sqrt{\\tfrac{n}{2}\\left(\\tfrac{n}{2}+1\\right)} = \\sqrt{n(n+2)}\\,\\mu_B$, giving the familiar $\\boxed{\\mu_s = \\sqrt{n(n+2)}\\text{ BM}}$"
        ]
      }
    ]
  },
  {
    unitNumber: 1,
    unitTitle: "Atomic and Molecular Structure",
    topicTitle: "Energy level diagrams of transition metal ions",
    definition: "An energy level diagram of a transition metal ion shows the splitting of d-orbitals under different geometric coordination fields (octahedral, tetrahedral, or square planar) and how electrons occupy these states according to ligand strength.",
    explanation: "To draw these diagrams, we start with the degenerate 5 d-orbitals of the free metal ion in a spherical field. We then show them splitting into the respective sub-shells under the influence of the ligand field. For an octahedral field, the splitting results in a lower triply degenerate t2g level and a higher doubly degenerate eg level. For a tetrahedral field, the diagram displays a lower e level and a higher t2 level. For d¹ to d³ and d⁸ to d¹⁰ systems in octahedral complexes, there is only one possible electronic configuration. However, d⁴, d⁵, d⁶, and d⁷ systems can have two configurations depending on ligand strength. If the ligand is a strong field ligand, the crystal field splitting Δo is larger than the pairing energy P (Δo > P). Electrons will pair up in the lower t2g orbital first, forming a low-spin complex. If the ligand is a weak field ligand (Δo < P), electrons will occupy the higher eg orbitals before pairing, resulting in a high-spin complex. In square planar complexes, which can be viewed as octahedral complexes with the z-axis ligands removed, the orbital energies split further: dx²-y² is highest, followed by dxy, dz², and the degenerate dxz/dyz pair at the bottom.",
    formulas: [
      "Spin-Only Magnetic Moment (μ_s) = √(n(n+2)) BM (n = number of unpaired electrons)",
      "Barycenter Energy balance: 3 * (-0.4 Δo) + 2 * (+0.6 Δo) = 0"
    ],
    equations: [
      "d5 High Spin (Octahedral): t2g³ eg² (n = 5 unpaired electrons, μ_s = √35 ≈ 5.92 BM)",
      "d5 Low Spin (Octahedral): t2g⁵ eg⁰ (n = 1 unpaired electron, μ_s = √3 ≈ 1.73 BM)"
    ],
    applications: [
      "Determining coordination geometries (e.g., distinguishing between tetrahedral and square planar Ni(II) complexes).",
      "Interpreting electronic absorption bands (Tanabe-Sugano and Orgel diagrams) in coordination chemistry.",
      "Designing transition metal catalysts for polymerization and organic synthesis."
    ],
    importantPoints: [
      "Square planar splitting is common for d⁸ metal ions with strong-field ligands (e.g., [PtCl4]²⁻, [Ni(CN)4]²⁻).",
      "High-spin configurations maximize the number of parallel electron spins (Hund's rule).",
      "Low-spin configurations occur when the energy cost to pair electrons in the lower orbital is less than the energy required to promote them to the higher orbital.",
      "The g subscript (gerade, symmetric under inversion) is used only for centrosymmetric geometries like octahedral and square planar, not tetrahedral."
    ],
    commonQuestions: [
      "Draw the d-orbital energy level diagram for [Fe(CN)6]³⁻ and [Fe(H₂O)6]³⁺. Determine their magnetic moments.",
      "Explain the splitting of d-orbitals in a square planar crystal field. Why is the dx²-y² orbital highest in energy?",
      "For a d⁷ transition metal ion in an octahedral field, write the electron configurations for both high-spin and low-spin states."
    ],
    shortAnswer: "Transition metal orbital diagrams show how the five degenerate d-orbitals split into t2g/eg (octahedral) or e/t2 (tetrahedral) configurations. The electron distribution in d⁴-d⁷ systems depends on whether the ligand is strong-field (low-spin, paired) or weak-field (high-spin, unpaired).",
    longAnswer: "d-orbital energy level diagrams illustrate how coordination geometry and ligand strength dictate the electronic state of a transition metal ion. In a free transition metal ion, the five d orbitals are degenerate. When coordinated, they split. In octahedral fields, the splitting creates a t2g set (dxy, dxz, dyz) and an eg set (dx²-y², dz²). The electron configuration depends on the ligand field strength, defined by the spectrochemical series. For instance, consider Fe(III), which is a d⁵ ion. When coordinated with a weak-field ligand like H₂O in [Fe(H₂O)6]³⁺, the splitting energy Δo is smaller than the pairing energy P. According to Hund's rule, electrons fill all orbitals singly before pairing: t2g³ eg². This high-spin state has 5 unpaired electrons, resulting in a magnetic moment of √35 ≈ 5.92 BM. In contrast, when coordinated with a strong-field ligand like CN⁻ in [Fe(CN)6]³⁻, Δo is larger than P. The electrons pair up in the lower t2g orbitals: t2g⁵ eg⁰. This low-spin state has only 1 unpaired electron, giving a magnetic moment of √3 ≈ 1.73 BM. In a square planar field (common for d⁸ ions like Pt²⁺), the absence of ligands on the z-axis stabilizes dz² and the dxz/dyz orbitals. Repulsion is strongest in the xy-plane, pushing dx²-y² to the highest energy level, followed by dxy, dz², and then the dxz/dyz pair. The large energy gap between dxy and dx²-y² leads to pairing in dxy, making square planar d⁸ complexes diamagnetic."
  },
  {
    unitNumber: 1,
    unitTitle: "Atomic and Molecular Structure",
    topicTitle: "Magnetic properties of transition metal complexes",
    definition: "The magnetic properties of transition metal complexes refer to their behavior in an external magnetic field, which can be paramagnetic (attracted due to unpaired electrons) or diamagnetic (repelled due to all paired electrons).",
    explanation: "Paramagnetism arises from the spin and orbital angular momentum of unpaired electrons. In most first-row (3d) transition metal complexes, the ligands restrict orbital motion. This 'quenches' the orbital contribution, meaning the magnetic moment can be calculated using only the spin angular momentum: μ_s = √(n(n+2)) Bohr Magnetons (BM), where n is the number of unpaired electrons. Crystal Field Theory explains how ligand strength affects paramagnetism by determining whether a d⁴-d⁷ metal ion adopts a high-spin or low-spin configuration. For example, Co(III) is a d⁶ system. In a weak field (like [CoF6]³⁻), the splitting is small, yielding a t2g⁴ eg² configuration with four unpaired electrons (paramagnetic). In a strong field (like [Co(NH₃)6]³⁺), the splitting is large, yielding a t2g⁶ eg⁰ configuration with zero unpaired electrons (diamagnetic). Measuring the magnetic susceptibility of a complex allows us to calculate the experimental magnetic moment, which reveals the number of unpaired electrons and helps identify the oxidation state and coordination geometry of the metal.",
    formulas: [
      "μ_eff = √(n(n+2)) BM (Spin-only formula, n = number of unpaired electrons)",
      "BM = (e * h_bar) / (2m_e) = 9.274 * 10⁻²⁴ J/T (Bohr Magneton constant)"
    ],
    equations: [
      "n = 1 -> μ = √3 = 1.73 BM",
      "n = 2 -> μ = √8 = 2.83 BM",
      "n = 3 -> μ = √15 = 3.87 BM",
      "n = 4 -> μ = √24 = 4.90 BM",
      "n = 5 -> μ = √35 = 5.92 BM"
    ],
    applications: [
      "Determining the oxidation states of transition metals in unknown coordination compounds.",
      "Characterizing metalloproteins in biochemistry (e.g., identifying high-spin vs. low-spin iron states in hemoglobin).",
      "Developing contrast agents for Magnetic Resonance Imaging (MRI), such as paramagnetic Gd(III) complexes."
    ],
    importantPoints: [
      "Diamagnetic substances have all electrons paired, and their magnetic susceptibility is negative and temperature-independent.",
      "Paramagnetic susceptibility is positive and varies inversely with temperature (Curie's Law).",
      "Orbital contribution to the magnetic moment is not completely quenched in some complexes (e.g., Co²⁺, Ni²⁺), leading to experimental magnetic moments slightly higher than spin-only values.",
      "A high magnetic moment indicates a weak-field ligand, whereas a low or zero magnetic moment indicates a strong-field ligand."
    ],
    commonQuestions: [
      "A coordination complex of cobalt with formula [Co(NH₃)6]³⁺ is diamagnetic, while [CoF6]³⁻ is paramagnetic with a magnetic moment of 4.90 BM. Explain this difference using CFT.",
      "Derive the relation between the number of unpaired electrons and the spin-only magnetic moment.",
      "Explain how magnetic susceptibility measurements help determine the geometry of Ni(II) complexes."
    ],
    shortAnswer: "The magnetic behavior of transition metal complexes is determined by their unpaired electrons. Measured in Bohr Magnetons (BM), it is calculated using the spin-only formula: μ = √(n(n+2)). Strong-field ligands split d-orbitals widely, causing electron pairing (low-spin, diamagnetic/weakly paramagnetic). Weak-field ligands result in high-spin, strongly paramagnetic states.",
    longAnswer: "The magnetic properties of coordination complexes depend on their electron configurations, which are shaped by the central metal ion's d-electron count, coordination geometry, and ligand strength. Unpaired electrons have a magnetic spin that aligns with an external magnetic field, producing paramagnetism. When all electrons are paired, their spins cancel out, resulting in diamagnetism. The spin-only magnetic moment formula, μ_s = √(n(n+2)) BM, assumes that the ligand field quenches the orbital angular momentum of the 3d electrons. Consider a d⁶ nickel or cobalt complex. For Co³⁺ (d⁶), the orbital splitting determines the spin state. In [CoF6]³⁻, F⁻ is a weak-field ligand. The splitting energy Δo is less than the pairing energy P. The five d-electrons fill the orbitals singly, and the sixth pairs up: t2g⁴ eg². This leaves four unpaired electrons (n = 4), giving a magnetic moment of √24 = 4.90 BM. In [Co(NH₃)6]³⁺, NH₃ is a strong-field ligand. The splitting energy Δo is greater than the pairing energy P. All six electrons pair up in the lower energy orbitals: t2g⁶ eg⁰. This low-spin configuration has zero unpaired electrons (n = 0), making the complex diamagnetic. Measuring magnetic susceptibility using a Gouy balance determines the experimental magnetic moment, which reveals the number of unpaired electrons. This measurement is a key tool for identifying the spin state of the metal, its oxidation state, and its coordination geometry."
  },
  {
    unitNumber: 1,
    unitTitle: "Atomic and Molecular Structure",
    topicTitle: "Band structure of solids and the role of doping on band structures",
    definition: "Band structure describes the ranges of energy that an electron within a solid is allowed or forbidden to have, arising from the overlap of atomic orbitals in a crystal lattice. Doping is the intentional introduction of impurities into an intrinsic semiconductor to modify its electrical and band properties.",
    explanation: "When a large number of atoms (e.g., 10²³ atoms in a crystal) combine, their atomic orbitals merge into closely spaced energy molecular orbitals that form continuous energy bands. The highest filled band is the valence band, and the lowest vacant band is the conduction band. The energy gap between them is the band gap (Eg). In conductors (metals), these bands overlap, allowing electrons to move freely. In insulators, the band gap is wide (Eg > 3 eV), preventing electrons from crossing into the conduction band. In semiconductors, the gap is small (Eg ≈ 1-2 eV), allowing thermal energy to promote some electrons. We can modify the conductivity of intrinsic semiconductors by doping. Injecting a group 15 element (like phosphorus) into silicon creates an n-type semiconductor. The extra valence electron forms a donor energy level just below the conduction band, donating free electrons. Doping with a group 13 element (like boron) creates a p-type semiconductor. This configuration introduces an acceptor energy level just above the valence band, creating positive holes that accept valence electrons.",
    formulas: [
      "E_g = E_conduction - E_valence (Band gap energy)",
      "σ = n * e * μ_e + p * e * μ_h (Electrical conductivity of semiconductor)"
    ],
    equations: [
      "Si (Group 14) + P (Group 15) -> n-type semiconductor (majority carriers: electrons)",
      "Si (Group 14) + B (Group 13) -> p-type semiconductor (majority carriers: holes)"
    ],
    applications: [
      "Manufacturing microprocessors, diodes, transistors, and solar cells.",
      "Designing Light Emitting Diodes (LEDs) by engineering band gaps to emit specific light wavelengths.",
      "Constructing thermoelectric generators and photodetectors."
    ],
    importantPoints: [
      "In n-type semiconductors, the Fermi level shifts upward toward the conduction band.",
      "In p-type semiconductors, the Fermi level shifts downward toward the valence band.",
      "Intrinsic semiconductors have low electrical conductivity at room temperature, which increases with temperature.",
      "Doping increases the carrier concentration (electrons or holes) by orders of magnitude without requiring thermal excitation."
    ],
    commonQuestions: [
      "Explain the band theory of solids. Distinguish between conductors, insulators, and semiconductors using band diagrams.",
      "What is doping? Explain the formation and band structures of n-type and p-type semiconductors.",
      "How does the Fermi energy level change when an intrinsic semiconductor is doped with donor and acceptor impurities?"
    ],
    shortAnswer: "Band theory explains solid conductivity through valence (filled) and conduction (vacant) bands. Doping modifies these bands: n-type doping adds a donor level near the conduction band, increasing free electrons; p-type doping adds an acceptor level near the valence band, creating holes.",
    longAnswer: "Band theory of solids is an extension of Molecular Orbital theory applied to crystalline lattices. When N atoms combine to form a solid, N molecular orbitals are generated. These orbitals lie so close in energy that they form continuous bands. The valence band contains the valence electrons, and the conduction band is the next higher energy band. The energy separation between them is the band gap (Eg). In conductors, the conduction and valence bands overlap (Eg = 0), allowing free electron movement. In insulators, Eg is large (typically > 3 eV), preventing electrons from crossing. In semiconductors, Eg is small (0.5 to 2 eV), allowing some thermal excitation. Intrinsic semiconductors have low conductivity. Doping introduces impurity atoms that create new energy levels within the band gap. In n-type doping, silicon (group 14) is doped with phosphorus (group 15). The phosphorus atoms replace silicon in the lattice. Four of their five valence electrons form covalent bonds, while the fifth is weakly bound. This creates a donor energy level just below the conduction band. The energy required to promote these electrons is very small (~0.05 eV), increasing the concentration of conduction electrons. In p-type doping, silicon is doped with boron (group 13). The boron atom has only three valence electrons, leaving a vacant bond (a hole). This creates an acceptor energy level just above the valence band. Valence electrons can easily jump into this acceptor level, leaving mobile holes in the valence band that conduct electricity."
  }
];
