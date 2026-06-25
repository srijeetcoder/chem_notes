import React from 'react';

interface ChemicalDiagramsProps {
  type?: 'ethane_conformations' | 'cyclic_ketones' | 'benzene_aromaticity' | 'diels_alder' | 'aspirin_synthesis' | 'paracetamol_synthesis' | 'cyclohexane_chair' | 'sn1_vs_sn2' | 'addition_mechanism' | 'aldol_condensation' | 'redox_alcohols' | 'stereoisomers_tartaric';
}

export const ChemicalDiagrams: React.FC<ChemicalDiagramsProps> = ({ type }) => {
  if (!type) return null;

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm">
      <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-450 mb-4 flex items-center gap-2">
        <svg className="w-4 h-4 animate-pulse text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        Interactive Textbook Visualization
      </h3>

      <div className="flex flex-col items-center justify-center py-4 bg-zinc-50/50 dark:bg-zinc-950/20 rounded-xl border border-zinc-100 dark:border-zinc-850 p-4 overflow-x-auto">
        {type === 'ethane_conformations' && (
          <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full">
            {/* Staggered */}
            <div className="flex flex-col items-center text-center">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/25 px-2.5 py-1 rounded-md border border-emerald-100 dark:border-emerald-900/35 mb-4">
                Staggered Conformation (Gauche/Anti)
              </span>
              <svg width="220" height="220" viewBox="0 0 200 200" className="text-zinc-800 dark:text-zinc-200">
                {/* Back Carbon Circle */}
                <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="3" className="stroke-zinc-300 dark:stroke-zinc-700" />
                
                {/* Back Carbon Bonds (Inverted Y) */}
                <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="stroke-zinc-400 dark:stroke-zinc-650">
                  <line x1="100" y1="55" x2="100" y2="25" />
                  <line x1="61" y1="122.5" x2="35" y2="137.5" />
                  <line x1="139" y1="122.5" x2="165" y2="137.5" />
                </g>
                
                {/* Front Carbon Bonds (Normal Y) */}
                <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="stroke-emerald-600 dark:stroke-emerald-400">
                  <line x1="100" y1="100" x2="100" y2="155" />
                  <line x1="100" y1="100" x2="52.4" y2="72.5" />
                  <line x1="100" y1="100" x2="147.6" y2="72.5" />
                </g>
                
                {/* Hydrogen Labels */}
                <g className="text-[12px] font-bold font-sans fill-zinc-600 dark:fill-zinc-400">
                  {/* Back H's */}
                  <text x="96" y="20">H</text>
                  <text x="22" y="145">H</text>
                  <text x="168" y="145">H</text>
                </g>
                <g className="text-[12px] font-bold font-sans fill-emerald-600 dark:fill-emerald-400">
                  {/* Front H's */}
                  <text x="96" y="170">H</text>
                  <text x="38" y="70">H</text>
                  <text x="152" y="70">H</text>
                </g>
                
                {/* Torsional Angle Indicator */}
                <path d="M 100 45 A 55 55 0 0 1 133 63.3" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" />
                <text x="125" y="45" className="text-[10px] fill-emerald-500 font-bold">60°</text>
              </svg>
              <div className="mt-2 text-xs space-y-1">
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">Dihedral Angle: 60°</p>
                <p className="text-zinc-500">Min. Repulsion | Max. Stability</p>
                <p className="text-emerald-600 dark:text-emerald-400 font-bold">Relative Energy: 0 kcal/mol</p>
              </div>
            </div>

            {/* Eclipsed */}
            <div className="flex flex-col items-center text-center">
              <span className="text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/25 px-2.5 py-1 rounded-md border border-rose-100 dark:border-rose-900/35 mb-4">
                Eclipsed Conformation
              </span>
              <svg width="220" height="220" viewBox="0 0 200 200" className="text-zinc-800 dark:text-zinc-200">
                {/* Back Carbon Circle */}
                <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="3" className="stroke-zinc-300 dark:stroke-zinc-700" />
                
                {/* Back Carbon Bonds (Normal Y, offset counter-clockwise by 7deg) */}
                <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="stroke-zinc-400 dark:stroke-zinc-650" transform="rotate(-8 100 100)">
                  <line x1="100" y1="100" x2="100" y2="40" />
                  <line x1="100" y1="100" x2="48" y2="130" />
                  <line x1="100" y1="100" x2="152" y2="130" />
                </g>
                
                {/* Front Carbon Bonds (Normal Y, offset clockwise by 7deg) */}
                <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="stroke-rose-500" transform="rotate(8 100 100)">
                  <line x1="100" y1="100" x2="100" y2="40" />
                  <line x1="100" y1="100" x2="48" y2="130" />
                  <line x1="100" y1="100" x2="152" y2="130" />
                </g>

                {/* Hydrogen Labels */}
                <g className="text-[12px] font-bold font-sans fill-zinc-400 dark:fill-zinc-550">
                  <text x="80" y="32">H</text>
                  <text x="36" y="145">H</text>
                  <text x="156" y="122">H</text>
                </g>
                <g className="text-[12px] font-bold font-sans fill-rose-500">
                  <text x="108" y="32">H</text>
                  <text x="24" y="122">H</text>
                  <text x="144" y="145">H</text>
                </g>
                
                {/* Torsional Indicator */}
                <path d="M 92 38 A 62 62 0 0 1 108 38" fill="none" stroke="#f43f5e" strokeWidth="2" />
                <text x="96" y="20" className="text-[10px] fill-rose-500 font-bold">0°</text>
              </svg>
              <div className="mt-2 text-xs space-y-1">
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">Dihedral Angle: 0°</p>
                <p className="text-zinc-500">Max. Repulsion | Min. Stability</p>
                <p className="text-rose-500 font-bold">Torsional Strain: +3.0 kcal/mol</p>
              </div>
            </div>
          </div>
        )}

        {type === 'cyclic_ketones' && (
          <div className="w-full flex flex-col items-center">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-450 bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/30 mb-6">
              Ring Size Effects on Carbonyl (C=O) IR Stretching Frequency (Bent's Rule)
            </span>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
              {/* Cyclohexanone */}
              <div className="bg-white dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-150 dark:border-zinc-800 flex flex-col items-center justify-between text-center min-h-[220px]">
                <span className="text-[11px] font-bold text-zinc-400 uppercase">Cyclohexanone</span>
                <svg width="120" height="120" viewBox="0 0 120 120" className="stroke-zinc-800 dark:stroke-zinc-200 fill-none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Hexagon */}
                  <polygon points="60,35 90,52 90,87 60,105 30,87 30,52" />
                  {/* Double bond C=O */}
                  <line x1="57" y1="35" x2="57" y2="12" stroke="#10b981" />
                  <line x1="63" y1="35" x2="63" y2="12" stroke="#10b981" />
                  <text x="55" y="8" className="text-[12px] font-bold fill-emerald-600 dark:fill-emerald-400 stroke-none">O</text>
                </svg>
                <div className="mt-2 text-xs">
                  <p className="font-extrabold text-zinc-900 dark:text-zinc-50">1715 cm⁻¹</p>
                  <p className="text-zinc-500">Angle: ~112° (Unstrained)</p>
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-500">Standard sp² hybrid</p>
                </div>
              </div>

              {/* Cyclopentanone */}
              <div className="bg-white dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-150 dark:border-zinc-800 flex flex-col items-center justify-between text-center min-h-[220px]">
                <span className="text-[11px] font-bold text-zinc-400 uppercase">Cyclopentanone</span>
                <svg width="120" height="120" viewBox="0 0 120 120" className="stroke-zinc-800 dark:stroke-zinc-200 fill-none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Pentagon */}
                  <polygon points="60,35 90,58 78,95 42,95 30,58" />
                  {/* Double bond C=O */}
                  <line x1="57" y1="35" x2="57" y2="12" stroke="#10b981" />
                  <line x1="63" y1="35" x2="63" y2="12" stroke="#10b981" />
                  <text x="55" y="8" className="text-[12px] font-bold fill-emerald-600 dark:fill-emerald-400 stroke-none">O</text>
                </svg>
                <div className="mt-2 text-xs">
                  <p className="font-extrabold text-zinc-900 dark:text-zinc-50">1745 cm⁻¹</p>
                  <p className="text-zinc-500">Angle: ~108° (Moderate)</p>
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-500">Slightly increased s-character</p>
                </div>
              </div>

              {/* Cyclobutanone */}
              <div className="bg-white dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-150 dark:border-zinc-800 flex flex-col items-center justify-between text-center min-h-[220px]">
                <span className="text-[11px] font-bold text-zinc-400 uppercase">Cyclobutanone</span>
                <svg width="120" height="120" viewBox="0 0 120 120" className="stroke-zinc-800 dark:stroke-zinc-200 fill-none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Square rotated */}
                  <polygon points="60,35 90,65 60,95 30,65" />
                  {/* Double bond C=O */}
                  <line x1="57" y1="35" x2="57" y2="12" stroke="#10b981" />
                  <line x1="63" y1="35" x2="63" y2="12" stroke="#10b981" />
                  <text x="55" y="8" className="text-[12px] font-bold fill-emerald-600 dark:fill-emerald-400 stroke-none">O</text>
                </svg>
                <div className="mt-2 text-xs">
                  <p className="font-extrabold text-zinc-900 dark:text-zinc-50">1780 cm⁻¹</p>
                  <p className="text-zinc-500">Angle: ~90° (Strained)</p>
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-500">High ring p-character</p>
                </div>
              </div>

              {/* Cyclopropenone */}
              <div className="bg-white dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-150 dark:border-zinc-800 flex flex-col items-center justify-between text-center min-h-[220px]">
                <span className="text-[11px] font-bold text-zinc-400 uppercase">Cyclopropenone</span>
                <svg width="120" height="120" viewBox="0 0 120 120" className="stroke-zinc-800 dark:stroke-zinc-200 fill-none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Triangle */}
                  <polygon points="60,35 90,87 30,87" />
                  {/* Double bond bottom */}
                  <line x1="42" y1="80" x2="78" y2="80" />
                  {/* Double bond C=O */}
                  <line x1="57" y1="35" x2="57" y2="12" stroke="#10b981" />
                  <line x1="63" y1="35" x2="63" y2="12" stroke="#10b981" />
                  <text x="55" y="8" className="text-[12px] font-bold fill-emerald-600 dark:fill-emerald-400 stroke-none">O</text>
                </svg>
                <div className="mt-2 text-xs">
                  <p className="font-extrabold text-zinc-900 dark:text-zinc-50">1850 cm⁻¹</p>
                  <p className="text-zinc-500">Angle: ~60° (Extreme)</p>
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-500">Bent's rule: Max s-character in C=O</p>
                </div>
              </div>
            </div>

            {/* Explanation flow */}
            <div className="mt-6 p-4 rounded-xl bg-zinc-100/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/80 w-full max-w-4xl text-xs space-y-2 leading-relaxed">
              <p className="font-bold text-zinc-850 dark:text-zinc-200 text-center">Summary Mechanism (Bent's Rule & Ring Strain):</p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2 items-center text-center font-medium">
                <div className="p-2 rounded bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800">Smaller Ring Size</div>
                <div className="text-emerald-500 font-bold">→</div>
                <div className="p-2 rounded bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800">Decreased C-CO-C Internal Angle</div>
                <div className="text-emerald-500 font-bold">→</div>
                <div className="p-2 rounded bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800">Increases p-character in Ring (Bent's Rule)</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2 items-center text-center font-medium mt-1">
                <div className="p-2 rounded bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800">Concentrates s-character in external C=O</div>
                <div className="text-emerald-500 font-bold">→</div>
                <div className="p-2 rounded bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800">Stronger, Shorter C=O Bond (Force constant k ↑)</div>
                <div className="text-emerald-500 font-bold">→</div>
                <div className="p-2 rounded bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold">Higher IR Stretching Frequency (1715 → 1850 cm⁻¹)</div>
              </div>
            </div>
          </div>
        )}

        {type === 'benzene_aromaticity' && (
          <div className="w-full flex flex-col items-center">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-450 bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/30 mb-6">
              Benzene: Cyclic 2D Structure & 3D Delocalized π-System
            </span>

            <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full">
              {/* 2D Skeletal */}
              <div className="flex flex-col items-center text-center">
                <span className="text-xs font-bold text-zinc-500 mb-2">2D Aromatic Ring (Hückel Circle)</span>
                <svg width="150" height="150" viewBox="0 0 120 120" className="stroke-zinc-800 dark:stroke-zinc-200 fill-none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Hexagon */}
                  <polygon points="60,20 95,40 95,80 60,100 25,80 25,40" />
                  {/* Delocalized circle */}
                  <circle cx="60" cy="60" r="23" stroke="#10b981" strokeWidth="2" strokeDasharray="4,3" />
                </svg>
                <p className="text-xs text-zinc-400 dark:text-zinc-550 mt-1">6 π-electrons delocalized (n = 1)</p>
              </div>

              {/* 3D Delocalized Orbitals */}
              <div className="flex flex-col items-center text-center">
                <span className="text-xs font-bold text-zinc-500 mb-2">3D π-Delocalization (Overlapping p-orbitals)</span>
                <svg width="220" height="150" viewBox="0 0 200 130" className="stroke-zinc-800 dark:stroke-zinc-200 fill-none" strokeWidth="1.5">
                  {/* perspective hexagon plane */}
                  <polygon points="100,50 150,60 140,85 100,95 60,85 50,60" fill="none" strokeWidth="2" className="stroke-zinc-400 dark:stroke-zinc-700" />
                  
                  {/* Overlapping double-lobed orbitals at vertices */}
                  {/* Vertex 1: 100,50 */}
                  <ellipse cx="100" cy="35" rx="5" ry="12" fill="#3b82f6" fillOpacity="0.6" stroke="#2563eb" />
                  <ellipse cx="100" cy="65" rx="5" ry="12" fill="#ef4444" fillOpacity="0.6" stroke="#dc2626" />
                  
                  {/* Vertex 2: 150,60 */}
                  <ellipse cx="150" cy="45" rx="5" ry="12" fill="#3b82f6" fillOpacity="0.6" stroke="#2563eb" />
                  <ellipse cx="150" cy="75" rx="5" ry="12" fill="#ef4444" fillOpacity="0.6" stroke="#dc2626" />
                  
                  {/* Vertex 3: 140,85 */}
                  <ellipse cx="140" cy="70" rx="5" ry="12" fill="#3b82f6" fillOpacity="0.6" stroke="#2563eb" />
                  <ellipse cx="140" cy="100" rx="5" ry="12" fill="#ef4444" fillOpacity="0.6" stroke="#dc2626" />
                  
                  {/* Vertex 4: 100,95 */}
                  <ellipse cx="100" cy="80" rx="5" ry="12" fill="#3b82f6" fillOpacity="0.6" stroke="#2563eb" />
                  <ellipse cx="100" cy="110" rx="5" ry="12" fill="#ef4444" fillOpacity="0.6" stroke="#dc2626" />
                  
                  {/* Vertex 5: 60,85 */}
                  <ellipse cx="60" cy="70" rx="5" ry="12" fill="#3b82f6" fillOpacity="0.6" stroke="#2563eb" />
                  <ellipse cx="60" cy="100" rx="5" ry="12" fill="#ef4444" fillOpacity="0.6" stroke="#dc2626" />
                  
                  {/* Vertex 6: 50,60 */}
                  <ellipse cx="50" cy="45" rx="5" ry="12" fill="#3b82f6" fillOpacity="0.6" stroke="#2563eb" />
                  <ellipse cx="50" cy="75" rx="5" ry="12" fill="#ef4444" fillOpacity="0.6" stroke="#dc2626" />

                  {/* delocalized cloud ring above */}
                  <ellipse cx="100" cy="35" rx="42" ry="12" stroke="#10b981" strokeWidth="2.5" strokeDasharray="3,2" fill="#10b981" fillOpacity="0.1" />
                  {/* delocalized cloud ring below */}
                  <ellipse cx="100" cy="100" rx="42" ry="12" stroke="#10b981" strokeWidth="2.5" strokeDasharray="3,2" fill="#10b981" fillOpacity="0.1" />
                </svg>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-1">Planar overlap builds circular π-resonance cloud</p>
              </div>
            </div>
          </div>
        )}

        {type === 'diels_alder' && (
          <div className="w-full flex flex-col items-center">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-450 bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/30 mb-6">
              Diels-Alder [4+2] Cycloaddition
            </span>

            <div className="flex items-center justify-center gap-4 text-zinc-800 dark:text-zinc-200 font-bold text-sm">
              {/* Diene */}
              <div className="flex flex-col items-center text-center">
                <svg width="90" height="90" viewBox="0 0 90 90" className="stroke-zinc-800 dark:stroke-zinc-200 fill-none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* s-cis butadiene */}
                  <line x1="25" y1="20" x2="55" y2="30" />
                  <line x1="27" y1="17" x2="57" y2="27" className="stroke-emerald-500" />
                  
                  <line x1="55" y1="30" x2="55" y2="60" />
                  
                  <line x1="55" y1="60" x2="25" y2="70" />
                  <line x1="57" y1="63" x2="27" y2="73" className="stroke-emerald-500" />
                </svg>
                <span className="text-[10px] text-zinc-400 mt-1">Conjugated Diene (4 π)</span>
              </div>

              <div className="text-zinc-450 font-extrabold text-lg self-center select-none">+</div>

              {/* Dienophile */}
              <div className="flex flex-col items-center text-center">
                <svg width="70" height="90" viewBox="0 0 70 90" className="stroke-zinc-800 dark:stroke-zinc-200 fill-none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Ethylene */}
                  <line x1="32" y1="30" x2="32" y2="60" />
                  <line x1="38" y1="30" x2="38" y2="60" className="stroke-emerald-500" />
                </svg>
                <span className="text-[10px] text-zinc-400 mt-1">Dienophile (2 π)</span>
              </div>

              {/* Reaction arrow */}
              <div className="flex flex-col items-center text-center mx-2">
                <span className="text-[10px] text-red-500 font-extrabold">Δ (Heat)</span>
                <span className="text-xl text-emerald-500">→</span>
                <span className="text-[9px] text-zinc-400 font-sans">Concerted</span>
              </div>

              {/* Cyclohexene derivative */}
              <div className="flex flex-col items-center text-center">
                <svg width="100" height="90" viewBox="0 0 100 90" className="stroke-zinc-800 dark:stroke-zinc-200 fill-none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Cyclohexene ring */}
                  <polygon points="50,20 76,35 76,65 50,80 24,65 24,35" />
                  {/* Created double bond (left) */}
                  <line x1="30" y1="38" x2="30" y2="62" stroke="#10b981" />
                </svg>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold mt-1">Cyclohexene Ring</span>
              </div>
            </div>
          </div>
        )}

        {type === 'aspirin_synthesis' && (
          <div className="w-full flex flex-col items-center">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-450 bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/30 mb-6">
              Aspirin Synthesis (Acetylation of Salicylic Acid)
            </span>

            <div className="flex flex-wrap items-center justify-center gap-4 text-zinc-850 dark:text-zinc-200 font-bold text-sm">
              {/* Salicylic Acid */}
              <div className="flex flex-col items-center text-center">
                <svg width="140" height="130" viewBox="0 0 140 130" className="stroke-zinc-800 dark:stroke-zinc-200 fill-none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Benzene */}
                  <polygon points="50,45 80,62 80,97 50,115 20,97 20,62" />
                  <circle cx="50" cy="80" r="18" stroke="#71717a" strokeWidth="1.5" strokeDasharray="3,2" />
                  
                  {/* COOH substituent top */}
                  <line x1="50" y1="45" x2="50" y2="20" />
                  <text x="44" y="16" className="text-[9px] font-bold fill-zinc-700 dark:fill-zinc-300 stroke-none">COOH</text>
                  
                  {/* OH substituent side */}
                  <line x1="80" y1="62" x2="102" y2="50" stroke="#10b981" />
                  <text x="105" y="50" className="text-[9px] font-extrabold fill-emerald-600 dark:fill-emerald-400 stroke-none">OH</text>
                </svg>
                <span className="text-[10px] text-zinc-800 dark:text-zinc-200 font-bold">Salicylic Acid</span>
              </div>

              <div className="text-zinc-450 text-xl font-extrabold self-center select-none">+</div>

              {/* Acetic Anhydride */}
              <div className="flex flex-col items-center text-center">
                <svg width="150" height="130" viewBox="0 0 150 130" className="stroke-zinc-800 dark:stroke-zinc-200 fill-none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {/* H3C-CO-O-CO-CH3 */}
                  <text x="8" y="70" className="text-[9px] font-bold fill-zinc-700 dark:fill-zinc-300 stroke-none">H₃C</text>
                  <line x1="28" y1="67" x2="48" y2="55" />
                  
                  {/* C=O left */}
                  <line x1="45" y1="55" x2="45" y2="35" />
                  <line x1="51" y1="55" x2="51" y2="35" />
                  <text x="44" y="32" className="text-[9px] font-bold fill-zinc-700 dark:fill-zinc-300 stroke-none">O</text>
                  
                  {/* Central O */}
                  <line x1="48" y1="55" x2="68" y2="67" />
                  <text x="70" y="73" className="text-[10px] font-bold fill-zinc-700 dark:fill-zinc-300 stroke-none">O</text>
                  
                  {/* C=O right */}
                  <line x1="77" y1="67" x2="97" y2="55" />
                  <line x1="94" y1="55" x2="94" y2="35" />
                  <line x1="100" y1="55" x2="100" y2="35" />
                  <text x="93" y="32" className="text-[9px] font-bold fill-zinc-700 dark:fill-zinc-300 stroke-none">O</text>
                  
                  {/* CH3 right */}
                  <line x1="97" y1="55" x2="120" y2="67" />
                  <text x="122" y="72" className="text-[9px] font-bold fill-zinc-700 dark:fill-zinc-300 stroke-none">CH₃</text>
                </svg>
                <span className="text-[10px] text-zinc-500">Acetic Anhydride</span>
              </div>

              {/* Reaction arrow */}
              <div className="flex flex-col items-center text-center mx-1">
                <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-bold">H₃PO₄ (Acid)</span>
                <span className="text-xl text-emerald-500">→</span>
                <span className="text-[9px] text-zinc-400 font-sans">Acetylation</span>
              </div>

              {/* Aspirin */}
              <div className="flex flex-col items-center text-center">
                <svg width="150" height="130" viewBox="0 0 150 130" className="stroke-zinc-800 dark:stroke-zinc-200 fill-none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Benzene */}
                  <polygon points="50,45 80,62 80,97 50,115 20,97 20,62" />
                  <circle cx="50" cy="80" r="18" stroke="#71717a" strokeWidth="1.5" strokeDasharray="3,2" />
                  
                  {/* COOH top */}
                  <line x1="50" y1="45" x2="50" y2="20" />
                  <text x="44" y="16" className="text-[9px] font-bold fill-zinc-700 dark:fill-zinc-300 stroke-none">COOH</text>
                  
                  {/* O-CO-CH3 side */}
                  <line x1="80" y1="62" x2="102" y2="50" stroke="#10b981" />
                  <text x="105" y="50" className="text-[9px] font-bold fill-emerald-600 dark:fill-emerald-400 stroke-none">O</text>
                  
                  <line x1="113" y1="48" x2="128" y2="58" stroke="#10b981" />
                  
                  {/* C=O side */}
                  <line x1="125" y1="58" x2="122" y2="78" stroke="#10b981" />
                  <line x1="131" y1="57" x2="128" y2="77" stroke="#10b981" />
                  <text x="120" y="86" className="text-[9px] font-bold fill-emerald-600 dark:fill-emerald-400 stroke-none">O</text>
                  
                  {/* CH3 end */}
                  <line x1="128" y1="58" x2="144" y2="48" stroke="#10b981" />
                  <text x="144" y="44" className="text-[8px] font-bold fill-emerald-600 dark:fill-emerald-400 stroke-none">CH₃</text>
                </svg>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Aspirin (2-acetoxybenzoic acid)</span>
              </div>

              <div className="text-zinc-400 text-lg font-bold self-center select-none">+</div>

              {/* Acetic Acid */}
              <div className="flex flex-col items-center text-center">
                <svg width="90" height="130" viewBox="0 0 90 130" className="stroke-zinc-800 dark:stroke-zinc-200 fill-none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {/* CH3COOH */}
                  <text x="15" y="70" className="text-[9px] font-bold fill-zinc-700 dark:fill-zinc-300 stroke-none">H₃C</text>
                  <line x1="36" y1="67" x2="52" y2="57" />
                  <line x1="49" y1="57" x2="49" y2="35" />
                  <line x1="55" y1="57" x2="55" y2="35" />
                  <text x="48" y="32" className="text-[9px] font-bold fill-zinc-700 dark:fill-zinc-300 stroke-none">O</text>
                  
                  <line x1="52" y1="57" x2="68" y2="67" />
                  <text x="70" y="72" className="text-[9px] font-bold fill-zinc-700 dark:fill-zinc-300 stroke-none">OH</text>
                </svg>
                <span className="text-[10px] text-zinc-400">Acetic Acid</span>
              </div>
            </div>
          </div>
        )}

        {type === 'paracetamol_synthesis' && (
          <div className="w-full flex flex-col items-center">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-450 bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/30 mb-6">
              Paracetamol Industrial Synthesis Pathway
            </span>

            <div className="flex flex-col xl:flex-row items-center justify-center gap-2 text-zinc-850 dark:text-zinc-200 font-bold text-sm w-full max-w-4xl overflow-x-auto py-2">
              {/* Phenol */}
              <div className="flex flex-col items-center text-center min-w-[120px]">
                <svg width="100" height="110" viewBox="0 0 100 110" className="stroke-zinc-800 dark:stroke-zinc-200 fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="50,35 75,50 75,80 50,95 25,80 25,50" />
                  <circle cx="50" cy="65" r="15" stroke="#71717a" strokeWidth="1.2" strokeDasharray="3,2" />
                  {/* OH top */}
                  <line x1="50" y1="35" x2="50" y2="15" />
                  <text x="44" y="11" className="text-[9px] font-bold fill-zinc-700 dark:fill-zinc-300 stroke-none">OH</text>
                </svg>
                <span className="text-[10px] text-zinc-500">Phenol</span>
              </div>

              {/* Arrow 1 */}
              <div className="flex flex-col items-center text-center mx-1">
                <span className="text-[8px] text-zinc-400 leading-none">NaNO₃</span>
                <span className="text-[8px] text-zinc-400 leading-none">H₂SO₄</span>
                <span className="text-emerald-500 text-lg leading-none">→</span>
                <span className="text-[8px] text-zinc-400 leading-none">Nitration</span>
              </div>

              {/* p-Nitrophenol */}
              <div className="flex flex-col items-center text-center min-w-[120px]">
                <svg width="100" height="120" viewBox="0 0 100 120" className="stroke-zinc-800 dark:stroke-zinc-200 fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="50,35 75,50 75,80 50,95 25,80 25,50" />
                  <circle cx="50" cy="65" r="15" stroke="#71717a" strokeWidth="1.2" strokeDasharray="3,2" />
                  
                  {/* OH top */}
                  <line x1="50" y1="35" x2="50" y2="15" />
                  <text x="44" y="11" className="text-[9px] font-bold fill-zinc-700 dark:fill-zinc-300 stroke-none">OH</text>
                  
                  {/* NO2 bottom */}
                  <line x1="50" y1="95" x2="50" y2="110" />
                  <text x="42" y="118" className="text-[9px] font-bold fill-zinc-700 dark:fill-zinc-300 stroke-none">NO₂</text>
                </svg>
                <span className="text-[10px] text-zinc-500">p-Nitrophenol</span>
              </div>

              {/* Arrow 2 */}
              <div className="flex flex-col items-center text-center mx-1">
                <span className="text-[8px] text-zinc-400 leading-none">NaBH₄</span>
                <span className="text-emerald-500 text-lg leading-none">→</span>
                <span className="text-[8px] text-zinc-400 leading-none">Reduction</span>
              </div>

              {/* p-Aminophenol */}
              <div className="flex flex-col items-center text-center min-w-[120px]">
                <svg width="100" height="120" viewBox="0 0 100 120" className="stroke-zinc-800 dark:stroke-zinc-200 fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="50,35 75,50 75,80 50,95 25,80 25,50" />
                  <circle cx="50" cy="65" r="15" stroke="#71717a" strokeWidth="1.2" strokeDasharray="3,2" />
                  
                  {/* OH top */}
                  <line x1="50" y1="35" x2="50" y2="15" />
                  <text x="44" y="11" className="text-[9px] font-bold fill-zinc-700 dark:fill-zinc-300 stroke-none">OH</text>
                  
                  {/* NH2 bottom */}
                  <line x1="50" y1="95" x2="50" y2="110" />
                  <text x="42" y="118" className="text-[9px] font-bold fill-zinc-700 dark:fill-zinc-300 stroke-none">NH₂</text>
                </svg>
                <span className="text-[10px] text-zinc-500">p-Aminophenol</span>
              </div>

              {/* Arrow 3 */}
              <div className="flex flex-col items-center text-center mx-1">
                <span className="text-[8px] text-zinc-400 leading-none">Ac₂O</span>
                <span className="text-emerald-500 text-lg leading-none">→</span>
                <span className="text-[8px] text-zinc-400 leading-none">Acetylation</span>
              </div>

              {/* Paracetamol */}
              <div className="flex flex-col items-center text-center min-w-[150px]">
                <svg width="130" height="135" viewBox="0 0 130 135" className="stroke-zinc-800 dark:stroke-zinc-200 fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="50,35 75,50 75,80 50,95 25,80 25,50" />
                  <circle cx="50" cy="65" r="15" stroke="#71717a" strokeWidth="1.2" strokeDasharray="3,2" />
                  
                  {/* OH top */}
                  <line x1="50" y1="35" x2="50" y2="15" />
                  <text x="44" y="11" className="text-[9px] font-bold fill-zinc-700 dark:fill-zinc-300 stroke-none">OH</text>
                  
                  {/* NH-CO-CH3 bottom */}
                  <line x1="50" y1="95" x2="50" y2="108" stroke="#10b981" />
                  <text x="43" y="115" className="text-[9px] font-bold fill-emerald-650 dark:fill-emerald-400 stroke-none">NH</text>
                  
                  <line x1="58" y1="113" x2="74" y2="113" stroke="#10b981" />
                  {/* C=O side */}
                  <line x1="72" y1="113" x2="72" y2="128" stroke="#10b981" />
                  <line x1="76" y1="113" x2="76" y2="128" stroke="#10b981" />
                  <text x="70" y="134" className="text-[8px] font-bold fill-emerald-655 dark:fill-emerald-400 stroke-none">O</text>
                  
                  {/* CH3 */}
                  <line x1="74" y1="113" x2="90" y2="103" stroke="#10b981" />
                  <text x="92" y="103" className="text-[8px] font-bold fill-emerald-650 dark:fill-emerald-400 stroke-none">CH₃</text>
                </svg>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Paracetamol (p-acetaminophenol)</span>
              </div>
            </div>
          </div>
        )}

        {/* ── CYCLOHEXANE CHAIR vs BOAT ───────────────────────────── */}
        {type === 'cyclohexane_chair' && (
          <div className="w-full flex flex-col items-center">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-450 bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/30 mb-6">
              Cyclohexane Conformational Analysis: Chair vs Boat
            </span>
            <div className="flex flex-col md:flex-row gap-10 items-start justify-center w-full">
              {/* Chair */}
              <div className="flex flex-col items-center text-center">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 px-2.5 py-1 rounded-md border border-emerald-100 dark:border-emerald-900/35 mb-4">Chair Conformation — Most Stable (0 kcal/mol)</span>
                <svg width="270" height="180" viewBox="0 0 270 180" className="fill-none" strokeLinecap="round" strokeLinejoin="round">
                  {/* Chair skeleton */}
                  <polyline points="40,110 80,80 130,100 180,70 220,90 180,120" stroke="#3f3f46" strokeWidth="3" className="dark:stroke-zinc-300" fill="none"/>
                  <line x1="40" y1="110" x2="80" y2="130" stroke="#3f3f46" strokeWidth="3" className="dark:stroke-zinc-300"/>
                  <line x1="80" y1="130" x2="130" y2="100" stroke="#3f3f46" strokeWidth="3" className="dark:stroke-zinc-300"/>
                  <line x1="180" y1="120" x2="220" y2="90" stroke="#3f3f46" strokeWidth="3" className="dark:stroke-zinc-300"/>
                  {/* Axial bonds (vertical) */}
                  <g stroke="#6366f1" strokeWidth="2.5" strokeDasharray="5,3">
                    <line x1="80" y1="80" x2="80" y2="48"/><line x1="130" y1="100" x2="130" y2="130"/><line x1="180" y1="70" x2="180" y2="38"/>
                    <line x1="80" y1="130" x2="80" y2="160"/><line x1="130" y1="100" x2="130" y2="70"/><line x1="220" y1="90" x2="220" y2="120"/>
                  </g>
                  {/* Equatorial bonds */}
                  <g stroke="#10b981" strokeWidth="2.5" strokeDasharray="5,3">
                    <line x1="40" y1="110" x2="15" y2="95"/><line x1="80" y1="80" x2="70" y2="58"/><line x1="130" y1="100" x2="155" y2="115"/>
                    <line x1="180" y1="70" x2="165" y2="50"/><line x1="220" y1="90" x2="245" y2="75"/><line x1="180" y1="120" x2="200" y2="140"/>
                  </g>
                  {/* Labels */}
                  <text x="68" y="44" className="text-[10px] fill-indigo-500 font-bold" fontSize="11">ax</text>
                  <text x="168" y="33" className="text-[10px] fill-indigo-500 font-bold" fontSize="11">ax</text>
                  <text x="1" y="94" className="text-[10px] fill-emerald-600 font-bold" fontSize="11">eq</text>
                  <text x="238" y="73" className="text-[10px] fill-emerald-600 font-bold" fontSize="11">eq</text>
                  <text x="118" y="25" fontSize="10" className="fill-zinc-500 dark:fill-zinc-400">✓ All bonds staggered</text>
                </svg>
                <div className="mt-2 text-xs space-y-1 text-center">
                  <p className="font-semibold text-zinc-800 dark:text-zinc-200">Zero angle & torsional strain</p>
                  <p className="text-indigo-500 font-bold">6 axial (ax) + 6 equatorial (eq) bonds</p>
                  <p className="text-emerald-600 dark:text-emerald-400 font-bold">Relative Energy: 0 kcal/mol ✓</p>
                </div>
              </div>
              {/* Boat */}
              <div className="flex flex-col items-center text-center">
                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/25 px-2.5 py-1 rounded-md border border-rose-100 dark:border-rose-900/35 mb-4">Boat Conformation — Unstable (+7 kcal/mol)</span>
                <svg width="270" height="180" viewBox="0 0 270 180" className="fill-none" strokeLinecap="round" strokeLinejoin="round">
                  {/* Boat skeleton */}
                  <polyline points="40,100 90,70 140,90 190,70 240,100 190,130 140,90 90,130 40,100" stroke="#3f3f46" strokeWidth="3" className="dark:stroke-zinc-300" fill="none"/>
                  <line x1="90" y1="130" x2="40" y2="100" stroke="#3f3f46" strokeWidth="3" className="dark:stroke-zinc-300"/>
                  <line x1="190" y1="130" x2="240" y2="100" stroke="#3f3f46" strokeWidth="3" className="dark:stroke-zinc-300"/>
                  {/* Flagpole bonds */}
                  <line x1="90" y1="70" x2="90" y2="38" stroke="#f43f5e" strokeWidth="2.5"/>
                  <line x1="190" y1="70" x2="190" y2="38" stroke="#f43f5e" strokeWidth="2.5"/>
                  {/* Flagpole repulsion indicator */}
                  <path d="M 100 40 Q 140 20 180 40" fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4,2"/>
                  <text x="118" y="16" fontSize="10" className="fill-rose-500 font-bold">Flagpole H···H repulsion</text>
                  {/* Eclipsed bonds annotation */}
                  <text x="105" y="155" fontSize="10" className="fill-orange-500 font-bold">Eclipsed C-H bonds along sides</text>
                  <text x="82" y="35" fontSize="9" className="fill-rose-500">H</text>
                  <text x="186" y="35" fontSize="9" className="fill-rose-500">H</text>
                </svg>
                <div className="mt-2 text-xs space-y-1 text-center">
                  <p className="font-semibold text-zinc-800 dark:text-zinc-200">Torsional + flagpole strain</p>
                  <p className="text-orange-500 font-bold">C1–C4 H···H ≈ 1.83 Å (van der Waals clash)</p>
                  <p className="text-rose-500 font-bold">Relative Energy: +7.0 kcal/mol ✗</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-zinc-100/60 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/70 w-full max-w-2xl text-xs text-center leading-relaxed text-zinc-600 dark:text-zinc-400">
              <span className="font-bold text-zinc-800 dark:text-zinc-200">Ring-flip pathway:</span> Chair ⇌ Half-chair (10.8 kcal/mol) ⇌ Twist-boat (5.5 kcal/mol) ⇌ Boat (7.0 kcal/mol) ⇌ Chair<br/>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">Substituents prefer equatorial positions</span> — avoids 1,3-diaxial interactions (1.8 kcal/mol per methyl group)
            </div>
          </div>
        )}

        {/* ── SN1 vs SN2 MECHANISM COMPARISON ───────────────────── */}
        {type === 'sn1_vs_sn2' && (
          <div className="w-full flex flex-col items-center">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-450 bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/30 mb-6">
              Nucleophilic Substitution: SN1 vs SN2 Mechanism
            </span>
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-center w-full max-w-4xl">
              {/* SN2 */}
              <div className="flex-1 flex flex-col items-center">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800/40 mb-4">SN2 — Bimolecular Concerted</span>
                <svg width="300" height="140" viewBox="0 0 300 140" className="fill-none" strokeLinecap="round" strokeLinejoin="round">
                  {/* Nu: attacking */}
                  <text x="12" y="75" fontSize="13" fontWeight="bold" className="fill-blue-600 dark:fill-blue-400">Nu:⁻</text>
                  <line x1="48" y1="70" x2="90" y2="70" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arrowB)"/>
                  {/* Central C */}
                  <circle cx="115" cy="70" r="18" stroke="#3f3f46" strokeWidth="2.5" className="dark:stroke-zinc-300"/>
                  <text x="108" y="75" fontSize="11" fontWeight="bold" className="fill-zinc-700 dark:fill-zinc-200">C</text>
                  {/* 3 substituents */}
                  <line x1="115" y1="52" x2="115" y2="32" stroke="#3f3f46" strokeWidth="2" className="dark:stroke-zinc-400"/>
                  <text x="108" y="28" fontSize="11" className="fill-zinc-600 dark:fill-zinc-400">R</text>
                  <line x1="100" y1="82" x2="82" y2="98" stroke="#3f3f46" strokeWidth="2" className="dark:stroke-zinc-400"/>
                  <text x="70" y="110" fontSize="11" className="fill-zinc-600 dark:fill-zinc-400">R</text>
                  <line x1="130" y1="82" x2="148" y2="98" stroke="#3f3f46" strokeWidth="2" className="dark:stroke-zinc-400"/>
                  <text x="152" y="110" fontSize="11" className="fill-zinc-600 dark:fill-zinc-400">R</text>
                  {/* Leaving group */}
                  <line x1="133" y1="70" x2="175" y2="70" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4,2"/>
                  <text x="178" y="75" fontSize="13" fontWeight="bold" className="fill-rose-500">X⁻</text>
                  {/* Arrow: inversion */}
                  <path d="M 115 38 Q 200 10 220 70 Q 200 130 115 102" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3,2"/>
                  <text x="205" y="73" fontSize="10" className="fill-emerald-600 dark:fill-emerald-400">Inversion</text>
                  {/* Transition state bracket */}
                  <text x="90" y="15" fontSize="9" className="fill-zinc-500">[ Pentacoordinate TS ]‡</text>
                </svg>
                <div className="mt-2 w-full rounded-xl border border-blue-100 dark:border-blue-900/30 overflow-hidden text-xs">
                  {[['Rate', 'k[Substrate][Nu]  (2nd order)'],['Stereochemistry','Walden Inversion (100%)'],['Solvent','Polar aprotic (DMSO, DMF)'],['Best substrate','Methyl > 1° > 2° >> 3°']].map(([k,v],i)=>(
                    <div key={i} className={`flex gap-2 px-3 py-1.5 ${i%2===0?'bg-blue-50/50 dark:bg-blue-950/10':''}`}>
                      <span className="font-bold text-blue-600 dark:text-blue-400 w-28 shrink-0">{k}:</span>
                      <span className="text-zinc-700 dark:text-zinc-300">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* SN1 */}
              <div className="flex-1 flex flex-col items-center">
                <span className="text-xs font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/20 px-3 py-1 rounded-full border border-orange-200 dark:border-orange-800/40 mb-4">SN1 — Unimolecular Two-Step</span>
                <svg width="300" height="140" viewBox="0 0 300 140" className="fill-none" strokeLinecap="round" strokeLinejoin="round">
                  {/* Step 1: ionization */}
                  <text x="5" y="30" fontSize="9" className="fill-zinc-500">Step 1 (slow, rate-determining):</text>
                  <text x="10" y="50" fontSize="11" fontWeight="bold" className="fill-zinc-700 dark:fill-zinc-200">R₃C—X</text>
                  <line x1="72" y1="47" x2="100" y2="47" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrowO)"/>
                  <text x="105" y="50" fontSize="11" fontWeight="bold" className="fill-orange-500">R₃C⁺</text>
                  <text x="143" y="50" fontSize="11" className="fill-zinc-500">+</text>
                  <text x="155" y="50" fontSize="11" className="fill-rose-500">X⁻</text>
                  <text x="8" y="75" fontSize="9" className="fill-zinc-500">Step 2 (fast):</text>
                  {/* Planar carbocation */}
                  <circle cx="80" cy="105" r="20" stroke="#f59e0b" strokeWidth="2.5"/>
                  <text x="73" y="109" fontSize="11" fontWeight="bold" className="fill-orange-600">C⁺</text>
                  <text x="72" y="84" fontSize="9" className="fill-orange-500">sp² planar</text>
                  {/* Nu attacks both faces */}
                  <line x1="40" y1="105" x2="58" y2="105" stroke="#2563eb" strokeWidth="2"/>
                  <text x="8" y="108" fontSize="10" fontWeight="bold" className="fill-blue-600">Nu</text>
                  <line x1="102" y1="105" x2="122" y2="105" stroke="#2563eb" strokeWidth="2"/>
                  <text x="124" y="108" fontSize="10" fontWeight="bold" className="fill-blue-600">Nu</text>
                  <text x="140" y="108" fontSize="10" className="fill-emerald-500">→ Racemic!</text>
                </svg>
                <div className="mt-2 w-full rounded-xl border border-orange-100 dark:border-orange-900/30 overflow-hidden text-xs">
                  {[['Rate','k[Substrate]  (1st order)'],['Stereochemistry','Racemization (±50:50)'],['Solvent','Polar protic (H₂O, EtOH)'],['Best substrate','3° > 2° >> 1° > Methyl']].map(([k,v],i)=>(
                    <div key={i} className={`flex gap-2 px-3 py-1.5 ${i%2===0?'bg-orange-50/50 dark:bg-orange-950/10':''}`}>
                      <span className="font-bold text-orange-600 dark:text-orange-400 w-28 shrink-0">{k}:</span>
                      <span className="text-zinc-700 dark:text-zinc-300">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── ELECTROPHILIC ADDITION MECHANISM ───────────────────── */}
        {type === 'addition_mechanism' && (
          <div className="w-full flex flex-col items-center">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-450 bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/30 mb-6">
              Addition of HBr to Propene: Markovnikov vs Anti-Markovnikov
            </span>
            <div className="flex flex-col lg:flex-row gap-10 w-full max-w-4xl items-start justify-center">
              {/* Markovnikov */}
              <div className="flex-1 flex flex-col items-center">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-3 bg-blue-50 dark:bg-blue-950/20 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800/40">Markovnikov Addition (no peroxide)</span>
                <svg width="280" height="200" viewBox="0 0 280 200" className="fill-none" strokeLinecap="round" strokeLinejoin="round">
                  {/* Propene */}
                  <text x="10" y="55" fontSize="12" fontWeight="bold" className="fill-zinc-700 dark:fill-zinc-200">CH₃</text>
                  <line x1="40" y1="50" x2="65" y2="50" stroke="#3f3f46" strokeWidth="2.5" className="dark:stroke-zinc-300"/>
                  {/* Double bond C=C */}
                  <line x1="65" y1="47" x2="95" y2="47" stroke="#3f3f46" strokeWidth="2.5" className="dark:stroke-zinc-300"/>
                  <line x1="65" y1="53" x2="95" y2="53" stroke="#10b981" strokeWidth="2.5"/>
                  <line x1="95" y1="50" x2="125" y2="50" stroke="#3f3f46" strokeWidth="2.5" className="dark:stroke-zinc-300"/>
                  <text x="126" y="55" fontSize="12" fontWeight="bold" className="fill-zinc-700 dark:fill-zinc-200">CH₂</text>
                  {/* H⁺ attacks C3 (terminal) */}
                  <line x1="155" y1="30" x2="140" y2="45" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3,2"/>
                  <text x="155" y="26" fontSize="12" fontWeight="bold" className="fill-amber-500">H⁺</text>
                  {/* Arrow to carbocation */}
                  <text x="100" y="85" fontSize="10" className="fill-zinc-500">↓ Step 1: H⁺ adds to C3</text>
                  {/* Carbocation intermediate */}
                  <text x="20" y="120" fontSize="11" className="fill-zinc-700 dark:fill-zinc-200">CH₃</text>
                  <line x1="48" y1="116" x2="70" y2="116" stroke="#3f3f46" strokeWidth="2.5" className="dark:stroke-zinc-300"/>
                  <text x="73" y="120" fontSize="13" fontWeight="bold" className="fill-orange-500">C⁺</text>
                  <text x="68" y="106" fontSize="9" className="fill-orange-500">2° carbocation</text>
                  <line x1="90" y1="116" x2="112" y2="116" stroke="#3f3f46" strokeWidth="2.5" className="dark:stroke-zinc-300"/>
                  <text x="112" y="120" fontSize="11" className="fill-zinc-700 dark:fill-zinc-200">CH₃</text>
                  {/* Arrow to product */}
                  <text x="100" y="148" fontSize="10" className="fill-zinc-500">↓ Step 2: Br⁻ attacks C⁺</text>
                  {/* 2-bromopropane */}
                  <text x="10" y="180" fontSize="11" className="fill-zinc-700 dark:fill-zinc-200">CH₃</text>
                  <line x1="40" y1="176" x2="62" y2="176" stroke="#3f3f46" strokeWidth="2.5" className="dark:stroke-zinc-300"/>
                  <text x="63" y="180" fontSize="11" className="fill-zinc-700 dark:fill-zinc-200">CHBr</text>
                  <line x1="100" y1="176" x2="120" y2="176" stroke="#3f3f46" strokeWidth="2.5" className="dark:stroke-zinc-300"/>
                  <text x="121" y="180" fontSize="11" className="fill-zinc-700 dark:fill-zinc-200">CH₃</text>
                  <text x="50" y="198" fontSize="10" fontWeight="bold" className="fill-blue-600 dark:fill-blue-400">→ 2-Bromopropane (major)</text>
                </svg>
              </div>
              {/* Anti-Markovnikov */}
              <div className="flex-1 flex flex-col items-center">
                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 mb-3 bg-rose-50 dark:bg-rose-950/20 px-3 py-1 rounded-full border border-rose-200 dark:border-rose-800/40">Anti-Markovnikov (with peroxide, Kharasch)</span>
                <svg width="280" height="200" viewBox="0 0 280 200" className="fill-none" strokeLinecap="round" strokeLinejoin="round">
                  {/* Propene */}
                  <text x="10" y="55" fontSize="12" fontWeight="bold" className="fill-zinc-700 dark:fill-zinc-200">CH₃</text>
                  <line x1="40" y1="50" x2="65" y2="50" stroke="#3f3f46" strokeWidth="2.5" className="dark:stroke-zinc-300"/>
                  <line x1="65" y1="47" x2="95" y2="47" stroke="#3f3f46" strokeWidth="2.5" className="dark:stroke-zinc-300"/>
                  <line x1="65" y1="53" x2="95" y2="53" stroke="#10b981" strokeWidth="2.5"/>
                  <line x1="95" y1="50" x2="125" y2="50" stroke="#3f3f46" strokeWidth="2.5" className="dark:stroke-zinc-300"/>
                  <text x="126" y="55" fontSize="12" fontWeight="bold" className="fill-zinc-700 dark:fill-zinc-200">CH₂</text>
                  {/* Br• attacks C3 */}
                  <line x1="155" y1="30" x2="140" y2="45" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3,2"/>
                  <text x="155" y="26" fontSize="12" fontWeight="bold" className="fill-rose-500">Br•</text>
                  <text x="100" y="85" fontSize="10" className="fill-zinc-500">↓ Step 1: Br• adds to C3 (terminal)</text>
                  {/* Radical intermediate */}
                  <text x="20" y="120" fontSize="11" className="fill-zinc-700 dark:fill-zinc-200">CH₃</text>
                  <line x1="48" y1="116" x2="70" y2="116" stroke="#3f3f46" strokeWidth="2.5" className="dark:stroke-zinc-300"/>
                  <text x="70" y="120" fontSize="11" className="fill-zinc-700 dark:fill-zinc-200">CH•</text>
                  <text x="65" y="106" fontSize="9" className="fill-rose-500">2° carbon radical</text>
                  <line x1="95" y1="116" x2="112" y2="116" stroke="#3f3f46" strokeWidth="2.5" className="dark:stroke-zinc-300"/>
                  <text x="113" y="120" fontSize="11" className="fill-zinc-700 dark:fill-zinc-200">CH₂Br</text>
                  <text x="100" y="148" fontSize="10" className="fill-zinc-500">↓ Step 2: H• from HBr</text>
                  {/* 1-bromopropane */}
                  <text x="10" y="180" fontSize="11" className="fill-zinc-700 dark:fill-zinc-200">CH₃</text>
                  <line x1="40" y1="176" x2="62" y2="176" stroke="#3f3f46" strokeWidth="2.5" className="dark:stroke-zinc-300"/>
                  <text x="63" y="180" fontSize="11" className="fill-zinc-700 dark:fill-zinc-200">CH₂</text>
                  <line x1="90" y1="176" x2="112" y2="176" stroke="#3f3f46" strokeWidth="2.5" className="dark:stroke-zinc-300"/>
                  <text x="113" y="180" fontSize="11" className="fill-zinc-700 dark:fill-zinc-200">CH₂Br</text>
                  <text x="40" y="198" fontSize="10" fontWeight="bold" className="fill-rose-600 dark:fill-rose-400">→ 1-Bromopropane (anti-Markovnikov)</text>
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* ── ALDOL CONDENSATION / CLAISEN-SCHMIDT ───────────────── */}
        {type === 'aldol_condensation' && (
          <div className="w-full flex flex-col items-center">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-450 bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/30 mb-6">
              Claisen-Schmidt: Benzaldehyde + Acetaldehyde → Cinnamaldehyde
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-bold w-full max-w-4xl">
              {/* Benzaldehyde */}
              <div className="flex flex-col items-center text-center">
                <svg width="130" height="135" viewBox="0 0 130 135" className="fill-none stroke-zinc-800 dark:stroke-zinc-200" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="50,40 80,57 80,91 50,108 20,91 20,57"/>
                  <circle cx="50" cy="74" r="18" stroke="#71717a" strokeWidth="1.5" strokeDasharray="3,2"/>
                  <line x1="50" y1="40" x2="50" y2="20"/>
                  {/* C=O of CHO */}
                  <line x1="47" y1="20" x2="47" y2="5" stroke="#10b981"/>
                  <line x1="53" y1="20" x2="53" y2="5" stroke="#10b981"/>
                  <text x="44" y="3" className="text-[9px] font-bold fill-emerald-600 dark:fill-emerald-400 stroke-none" fontSize="9">O</text>
                  <text x="44" y="18" className="text-[9px] fill-zinc-700 dark:fill-zinc-300 stroke-none" fontSize="9">CH</text>
                </svg>
                <span className="text-[10px] text-zinc-600 dark:text-zinc-400">Benzaldehyde (no α-H)</span>
              </div>
              <div className="text-zinc-400 text-xl select-none">+</div>
              {/* Acetaldehyde */}
              <div className="flex flex-col items-center text-center">
                <svg width="100" height="80" viewBox="0 0 100 80" className="fill-none stroke-zinc-800 dark:stroke-zinc-200" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <text x="10" y="50" className="text-[12px] font-bold fill-zinc-700 dark:fill-zinc-300 stroke-none" fontSize="13">CH₃</text>
                  <line x1="38" y1="46" x2="58" y2="46"/>
                  <line x1="55" y1="43" x2="55" y2="20"/>
                  <line x1="61" y1="43" x2="61" y2="20"/>
                  <text x="54" y="17" className="text-[9px] font-bold fill-emerald-600 dark:fill-emerald-400 stroke-none" fontSize="9">O</text>
                  <text x="54" y="42" className="text-[9px] fill-zinc-700 dark:fill-zinc-300 stroke-none" fontSize="9">CH</text>
                  <text x="10" y="68" className="text-[9px] fill-orange-500 stroke-none" fontSize="9">↑ α-H (acidic)</text>
                </svg>
                <span className="text-[10px] text-zinc-600 dark:text-zinc-400">Acetaldehyde (has α-H)</span>
              </div>
              <div className="flex flex-col items-center mx-2">
                <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-bold">dil. NaOH</span>
                <span className="text-xl text-emerald-500">→</span>
                <span className="text-[9px] text-zinc-400">Δ (E1cB)</span>
              </div>
              {/* Cinnamaldehyde */}
              <div className="flex flex-col items-center text-center">
                <svg width="210" height="135" viewBox="0 0 210 135" className="fill-none stroke-zinc-800 dark:stroke-zinc-200" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="50,40 80,57 80,91 50,108 20,91 20,57"/>
                  <circle cx="50" cy="74" r="18" stroke="#71717a" strokeWidth="1.5" strokeDasharray="3,2"/>
                  {/* trans C=C chain */}
                  <line x1="80" y1="74" x2="110" y2="74"/>
                  <line x1="80" y1="80" x2="110" y2="80" stroke="#10b981"/>
                  <line x1="110" y1="74" x2="145" y2="74"/>
                  {/* CHO end */}
                  <line x1="142" y1="71" x2="142" y2="50" stroke="#10b981"/>
                  <line x1="148" y1="71" x2="148" y2="50" stroke="#10b981"/>
                  <text x="140" y="47" className="text-[9px] font-bold fill-emerald-600 dark:fill-emerald-400 stroke-none" fontSize="9">O</text>
                  <text x="140" y="70" className="text-[9px] fill-zinc-700 dark:fill-zinc-300 stroke-none" fontSize="9">CH</text>
                  <text x="85" y="67" className="text-[8px] fill-emerald-500 stroke-none" fontSize="8">C=C</text>
                  <text x="82" y="100" className="text-[8px] fill-orange-500 stroke-none" fontSize="8">(trans)</text>
                </svg>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Cinnamaldehyde (trans, C₉H₈O)</span>
              </div>
              <div className="text-zinc-400 text-xl select-none">+</div>
              <div className="flex flex-col items-center">
                <span className="text-[11px] text-zinc-500">H₂O</span>
              </div>
            </div>
            <div className="mt-5 p-4 rounded-xl bg-zinc-100/60 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 w-full max-w-3xl space-y-1">
              <p className="font-bold text-zinc-800 dark:text-zinc-200">Mechanism (E1cB):</p>
              <p>① Base (OH⁻) abstracts acidic α-H from acetaldehyde → forms carbanion (enolate)</p>
              <p>② Enolate attacks the electrophilic carbonyl carbon of benzaldehyde → β-hydroxy aldehyde</p>
              <p>③ Heating triggers E1cB dehydration: β-OH leaves as water, yielding the conjugated α,β-unsaturated aldehyde</p>
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold">Cinnamaldehyde: trans (E) configuration due to thermodynamic stability of the conjugated system</p>
            </div>
          </div>
        )}

        {/* ── ALCOHOL OXIDATION LADDER ───────────────────────────── */}
        {type === 'redox_alcohols' && (
          <div className="w-full flex flex-col items-center">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-450 bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/30 mb-6">
              Organic Oxidation Hierarchy: Alcohol → Aldehyde → Carboxylic Acid
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-4xl">
              {[
                { label: 'Primary Alcohol', formula: 'R—CH₂—OH', color: 'zinc', ox: '+1' },
                { label: 'Aldehyde', formula: 'R—CHO', color: 'amber', ox: '+2', reagent: 'PCC (mild)\nor CrO₃' },
                { label: 'Carboxylic Acid', formula: 'R—COOH', color: 'rose', ox: '+3', reagent: 'KMnO₄\nor K₂Cr₂O₇' },
              ].map((item, i) => (
                <React.Fragment key={i}>
                  <div className={`flex flex-col items-center text-center p-4 rounded-xl border-2 ${
                    item.color === 'zinc' ? 'border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/40' :
                    item.color === 'amber' ? 'border-amber-200 dark:border-amber-800/40 bg-amber-50 dark:bg-amber-950/15' :
                    'border-rose-200 dark:border-rose-800/40 bg-rose-50 dark:bg-rose-950/15'
                  } min-w-[110px]`}>
                    <span className={`text-[9px] font-bold uppercase tracking-wider mb-1 ${
                      item.color === 'zinc' ? 'text-zinc-500' : item.color === 'amber' ? 'text-amber-600 dark:text-amber-400' : 'text-rose-600 dark:text-rose-400'
                    }`}>Oxidation State C: {item.ox}</span>
                    <span className="text-sm font-bold text-zinc-800 dark:text-zinc-100 font-mono">{item.formula}</span>
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1">{item.label}</span>
                  </div>
                  {i < 2 && (
                    <div className="flex flex-col items-center">
                      <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-bold text-center">{item.reagent}</span>
                      <span className="text-emerald-500 text-lg">→</span>
                      <span className="text-[8px] text-zinc-400 font-sans">[O]</span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-4 w-full max-w-3xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                {[
                  { type: 'Secondary Alcohol → Ketone', reagent: 'PCC or K₂Cr₂O₇/H⁺', color: 'purple' },
                  { type: 'Ketone → Ester (BV oxidation)', reagent: 'mCPBA / CH₃COOOH', color: 'indigo' },
                  { type: 'Tertiary Alcohol', reagent: 'No oxidation (no α-H on C-OH)', color: 'zinc' },
                ].map((row, i) => (
                  <div key={i} className={`p-3 rounded-xl border text-center ${
                    row.color === 'purple' ? 'border-purple-200 dark:border-purple-800/40 bg-purple-50 dark:bg-purple-950/10' :
                    row.color === 'indigo' ? 'border-indigo-200 dark:border-indigo-800/40 bg-indigo-50 dark:bg-indigo-950/10' :
                    'border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/30'
                  }`}>
                    <p className="font-bold text-zinc-800 dark:text-zinc-200">{row.type}</p>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-1">{row.reagent}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 text-xs text-center text-zinc-600 dark:text-zinc-400">
                <span className="font-bold">Reduction (reverse):</span> LiAlH₄ (powerful, all carbonyls → alcohol) &nbsp;|&nbsp; NaBH₄ (selective, only aldehydes & ketones → alcohol)
              </div>
            </div>
          </div>
        )}

        {/* ── TARTARIC ACID FISCHER PROJECTIONS ──────────────────── */}
        {type === 'stereoisomers_tartaric' && (
          <div className="w-full flex flex-col items-center">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-450 bg-emerald-50 dark:bg-emerald-950/20 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/30 mb-6">
              Stereoisomers of Tartaric Acid — Fischer Projections
            </span>
            <div className="flex flex-col md:flex-row gap-8 items-start justify-center w-full max-w-3xl">
              {[
                { label: '(2R,3R)-Tartaric Acid', sub: 'L-(+)-tartaric acid', badge: 'Chiral — optically active (+)', color: 'blue', oh1: 'left', oh2: 'left' },
                { label: '(2S,3S)-Tartaric Acid', sub: 'D-(−)-tartaric acid', badge: 'Chiral — optically active (−)', color: 'rose', oh1: 'right', oh2: 'right' },
                { label: 'meso-Tartaric Acid', sub: '(2R,3S)', badge: 'Achiral — optically INACTIVE (σ plane)', color: 'emerald', oh1: 'right', oh2: 'left' },
              ].map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center text-center">
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full mb-3 ${
                    item.color === 'blue' ? 'bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/40' :
                    item.color === 'rose' ? 'bg-rose-50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/40' :
                    'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40'
                  }`}>{item.badge}</span>
                  <svg width="140" height="220" viewBox="0 0 140 220" className="fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {/* Vertical backbone */}
                    <line x1="70" y1="20" x2="70" y2="200" stroke="#3f3f46" strokeWidth="2.5" className="dark:stroke-zinc-400"/>
                    {/* COOH top */}
                    <text x="52" y="18" fontSize="10" fontWeight="bold" className="fill-zinc-700 dark:fill-zinc-300 stroke-none">COOH</text>
                    {/* C2 horizontal cross */}
                    <line x1="20" y1="80" x2="120" y2="80" stroke="#3f3f46" strokeWidth="2.5" className="dark:stroke-zinc-400"/>
                    <text x="58" y="78" fontSize="10" fontWeight="bold" className="fill-zinc-600 dark:fill-zinc-400 stroke-none">C₂</text>
                    {/* C2 substituents */}
                    <text x="5" y="83" fontSize="10" className={`stroke-none font-bold ${item.oh1 === 'left' ? 'fill-emerald-600 dark:fill-emerald-400' : 'fill-zinc-600 dark:fill-zinc-300'}`}>{item.oh1 === 'left' ? 'OH' : 'H'}</text>
                    <text x="122" y="83" fontSize="10" className={`stroke-none font-bold ${item.oh1 === 'right' ? 'fill-emerald-600 dark:fill-emerald-400' : 'fill-zinc-600 dark:fill-zinc-300'}`}>{item.oh1 === 'right' ? 'OH' : 'H'}</text>
                    {/* C3 horizontal cross */}
                    <line x1="20" y1="140" x2="120" y2="140" stroke="#3f3f46" strokeWidth="2.5" className="dark:stroke-zinc-400"/>
                    <text x="58" y="138" fontSize="10" fontWeight="bold" className="fill-zinc-600 dark:fill-zinc-400 stroke-none">C₃</text>
                    {/* C3 substituents */}
                    <text x="5" y="143" fontSize="10" className={`stroke-none font-bold ${item.oh2 === 'left' ? 'fill-emerald-600 dark:fill-emerald-400' : 'fill-zinc-600 dark:fill-zinc-300'}`}>{item.oh2 === 'left' ? 'OH' : 'H'}</text>
                    <text x="122" y="143" fontSize="10" className={`stroke-none font-bold ${item.oh2 === 'right' ? 'fill-emerald-600 dark:fill-emerald-400' : 'fill-zinc-600 dark:fill-zinc-300'}`}>{item.oh2 === 'right' ? 'OH' : 'H'}</text>
                    {/* COOH bottom */}
                    <text x="52" y="214" fontSize="10" fontWeight="bold" className="fill-zinc-700 dark:fill-zinc-300 stroke-none">COOH</text>
                    {/* Internal mirror plane for meso */}
                    {item.color === 'emerald' && (
                      <line x1="20" y1="110" x2="120" y2="110" stroke="#10b981" strokeWidth="1.5" strokeDasharray="5,3"/>
                    )}
                    {item.color === 'emerald' && (
                      <text x="24" y="108" fontSize="8" className="fill-emerald-500 stroke-none">σ mirror plane</text>
                    )}
                  </svg>
                  <p className="text-xs font-bold text-zinc-800 dark:text-zinc-100 mt-1">{item.label}</p>
                  <p className="text-[10px] text-zinc-500">{item.sub}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 text-xs text-center text-zinc-600 dark:text-zinc-400 w-full max-w-3xl">
              <span className="font-bold">(2R,3R) and (2S,3S)</span> are enantiomers — mirror images, opposite optical rotation. &nbsp;|&nbsp;
              <span className="font-bold">meso-(2R,3S)</span> is a diastereomer of both — achiral due to internal plane of symmetry, optically inactive.
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
