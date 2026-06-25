import React from 'react';

interface ChemicalDiagramsProps {
  type?: 'ethane_conformations' | 'cyclic_ketones' | 'benzene_aromaticity' | 'diels_alder' | 'aspirin_synthesis' | 'paracetamol_synthesis';
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
      </div>
    </div>
  );
};
