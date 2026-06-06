import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import 'katex/dist/contrib/mhchem.mjs';

interface MathRendererProps {
  math: string;
  inline?: boolean;
  className?: string;
}

export const MathRenderer: React.FC<MathRendererProps> = ({ math, inline = false, className = '' }) => {
  const result = useMemo(() => {
    try {
      // Test rendering with throwOnError: true first to catch errors
      const html = katex.renderToString(math, {
        displayMode: !inline,
        throwOnError: true,
        strict: false,
      });
      return { html, isError: false, errorMessage: '' };
    } catch (err: any) {
      // Gracefully fall back to plain text display if KaTeX fails
      return { html: math, isError: true, errorMessage: err?.message || String(err) };
    }
  }, [math, inline]);

  if (result.isError) {
    if (inline) {
      return (
        <span className={`font-mono text-rose-600 dark:text-rose-400 bg-rose-100/10 px-1 py-0.5 rounded ${className}`} title={result.errorMessage}>
          {result.html}
        </span>
      );
    }
    return (
      <div className={`font-mono text-rose-600 dark:text-rose-455 bg-rose-100/10 p-2.5 rounded-lg border border-rose-200/50 dark:border-rose-900/40 text-xs overflow-x-auto whitespace-pre-wrap ${className}`}>
        <strong>KaTeX Compile Error:</strong> {result.errorMessage}
        <pre className="mt-1.5 p-2 bg-zinc-100 dark:bg-zinc-950 rounded border border-zinc-200/50 dark:border-zinc-900 overflow-x-auto">{result.html}</pre>
      </div>
    );
  }

  const Tag = inline ? 'span' : 'div';

  return (
    <Tag
      className={`${inline ? 'math-inline mx-1 text-sm md:text-base' : 'math-display block w-full overflow-x-auto py-2 my-2 text-sm md:text-base font-semibold'} ${className}`}
      dangerouslySetInnerHTML={{ __html: result.html }}
    />
  );
};

interface TextWithMathProps {
  text: string;
}

interface Part {
  text: string;
  display: boolean;
  isMath: boolean;
}

export const TextWithMath: React.FC<TextWithMathProps> = ({ text }) => {
  if (!text) return null;

  // Split by $$ ... $$ first, then $ ... $
  const blockRegex = /\$\$(.*?)\$\$/gs;
  const parts: Part[] = [];
  let lastIndex = 0;
  let match;

  while ((match = blockRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ text: text.substring(lastIndex, match.index), display: false, isMath: false });
    }
    parts.push({ text: match[1], display: true, isMath: true });
    lastIndex = blockRegex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push({ text: text.substring(lastIndex), display: false, isMath: false });
  }

  // Now process inline $ ... $ for non-math parts
  const finalParts: Part[] = [];
  const inlineRegex = /\$(.*?)\$/g;

  parts.forEach((p) => {
    if (p.isMath) {
      finalParts.push(p);
    } else {
      let inlineLastIndex = 0;
      let inlineMatch;
      while ((inlineMatch = inlineRegex.exec(p.text)) !== null) {
        if (inlineMatch.index > inlineLastIndex) {
          finalParts.push({ text: p.text.substring(inlineLastIndex, inlineMatch.index), display: false, isMath: false });
        }
        finalParts.push({ text: inlineMatch[1], display: false, isMath: true });
        inlineLastIndex = inlineRegex.lastIndex;
      }
      if (inlineLastIndex < p.text.length) {
        finalParts.push({ text: p.text.substring(inlineLastIndex), display: false, isMath: false });
      }
    }
  });

  return (
    <span className="text-with-math whitespace-pre-wrap leading-relaxed">
      {finalParts.map((part, i) =>
        part.isMath ? (
          <MathRenderer key={i} math={part.text} inline={!part.display} />
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </span>
  );
};
