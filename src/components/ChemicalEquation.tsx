import React from 'react';
import { ChemicalFormula } from './ChemicalFormula';

interface ChemicalEquationProps {
  equation: string;
  className?: string;
}

export const ChemicalEquation: React.FC<ChemicalEquationProps> = ({ equation, className = '' }) => {
  if (!equation) return null;

  // Split by whitespace
  const tokens = equation.trim().split(/\s+/);

  return (
    <div className={`my-3 p-3.5 rounded-xl border font-mono text-sm md:text-base overflow-x-auto whitespace-nowrap scrollbar-thin
      bg-zinc-50/70 dark:bg-zinc-900/40 
      border-zinc-200/70 dark:border-zinc-800/60 
      text-zinc-800 dark:text-zinc-200 ${className}`}
    >
      <div className="flex items-center gap-1.5 min-w-max">
        {tokens.map((token, index) => {
          // Check for reaction arrows
          if (token === '->' || token === '-->' || token === '→') {
            return (
              <span key={index} className="mx-2 text-emerald-500 dark:text-emerald-400 font-bold text-lg select-none">
                →
              </span>
            );
          }
          if (token === '<=>' || token === '⇌' || token === '===' || token === '\\rightleftharpoons' || token === '\\leftrightharpoons') {
            return (
              <span key={index} className="mx-2 text-amber-500 dark:text-amber-400 font-bold text-lg select-none">
                ⇌
              </span>
            );
          }
          if (token === '+') {
            return (
              <span key={index} className="mx-1.5 text-zinc-400 dark:text-zinc-500 font-semibold select-none">
                +
              </span>
            );
          }
          if (token === '(s)' || token === '(l)' || token === '(g)' || token === '(aq)') {
            return (
              <span key={index} className="text-zinc-400 dark:text-zinc-500 text-xs font-sans italic ml-0.5 mr-1 self-end mb-0.5 select-none">
                {token}
              </span>
            );
          }
          if (token === 'Δ' || token === '\\Delta') {
            return (
              <span key={index} className="mx-1 text-red-500 dark:text-red-400 font-semibold select-none">
                Δ
              </span>
            );
          }

          // Otherwise, it's a chemical formula
          return <ChemicalFormula key={index} formula={token} />;
        })}
      </div>
    </div>
  );
};
