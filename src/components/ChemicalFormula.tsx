import React from 'react';

interface ChemicalFormulaProps {
  formula: string;
  className?: string;
}

export const ChemicalFormula: React.FC<ChemicalFormulaProps> = ({ formula, className = '' }) => {
  if (!formula) return null;

  // 1. Extract leading coefficient if any (e.g., 2H2O, 1/2O2)
  let coefficient = '';
  let rest = formula.trim();
  const coeffMatch = rest.match(/^([0-9./\s]+)\s*([A-Z[(].*)$/);
  if (coeffMatch) {
    coefficient = coeffMatch[1];
    rest = coeffMatch[2];
  }

  // 2. Extract trailing charge if any (e.g., SO42-, Ca2+, H+, OH-)
  let charge = '';
  const chargeMatch = rest.match(/^([A-Za-z0-9()[\]]+)(?:([0-9]*[+-]))$/);
  if (chargeMatch) {
    rest = chargeMatch[1];
    charge = chargeMatch[2];
  }

  // 3. Parse the main formula body for subscripts (numbers)
  // Split by numbers so we can wrap them in <sub>
  const parts = rest.split(/([0-9]+)/);

  return (
    <span className={`inline-flex items-baseline font-medium tracking-wide ${className}`}>
      {coefficient && <span className="mr-0.5 font-semibold text-zinc-900 dark:text-zinc-100">{coefficient}</span>}
      {parts.map((part, index) => {
        if (/^[0-9]+$/.test(part)) {
          return (
            <sub key={index} className="text-[0.75em] leading-none -bottom-[0.15em] relative select-none font-semibold text-zinc-800 dark:text-zinc-200">
              {part}
            </sub>
          );
        }
        return <span key={index}>{part}</span>;
      })}
      {charge && (
        <sup className="text-[0.7em] leading-none -top-[0.3em] relative ml-[0.05em] select-none font-bold text-amber-600 dark:text-amber-400">
          {charge}
        </sup>
      )}
    </span>
  );
};
