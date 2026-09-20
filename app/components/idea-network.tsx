'use client';

import { useId, useState } from 'react';

const layers = [3, 5, 5, 3];
const nodes = layers.flatMap((count, layer) =>
  Array.from({ length: count }, (_, index) => ({
    x: 65 + layer * 91,
    y: 165 + (index - (count - 1) / 2) * 43,
    layer,
    id: `${layer}-${index}`,
  })),
);

export function IdeaNetwork() {
  const [pulse, setPulse] = useState(0);
  const gradientId = useId();

  return (
    <button type="button" className="idea-network" onClick={() => setPulse(value => value + 1)} aria-label="Animate the neural network">
      <svg key={pulse} viewBox="0 0 420 330" role="img" aria-label="A neural network sketch with lavender, mint, and gold nodes">
        <defs>
          <linearGradient id={gradientId}>
            <stop stopColor="var(--lavender)" />
            <stop offset=".6" stopColor="var(--mint)" />
            <stop offset="1" stopColor="var(--yellow)" />
          </linearGradient>
        </defs>
        <path className="network-orbit" d="M27 201C-6 88 165 18 297 49S442 229 351 278 84 319 38 245" />
        <g className="network-edges">
          {nodes.flatMap(from => nodes.filter(to => to.layer === from.layer + 1).map(to => (
            <path key={`${from.id}-${to.id}`} d={`M${from.x} ${from.y} C${from.x + 45} ${from.y} ${to.x - 45} ${to.y} ${to.x} ${to.y}`} />
          )))}
        </g>
        <g className="network-traces" stroke={`url(#${gradientId})`}>
          {[-1, 0, 1].map((lane, index) => (
            <path key={lane} pathLength="1" style={{ animationDelay: `${index * 140}ms` }} d={`M65 ${165 + lane * 43} C110 ${165 + lane * 43} 115 ${165 + lane * 86} 156 ${165 + lane * 86} S210 ${165 - lane * 43} 247 ${165 - lane * 43} S298 ${165 + lane * 43} 338 ${165 + lane * 43}`} />
          ))}
        </g>
        <g className="network-nodes">
          {nodes.map((node, index) => (
            <g key={node.id} style={{ animationDelay: `${node.layer * 130}ms` }}>
              <circle className="node-halo" cx={node.x} cy={node.y} r="15" />
              <circle cx={node.x} cy={node.y} r={node.layer === 0 || node.layer === 3 ? 7 : 5.5} fill={index === nodes.length - 1 ? 'var(--red)' : ['var(--lavender)', 'var(--lavender)', 'var(--mint)', 'var(--yellow)'][node.layer]} />
              {index === 7 && <circle cx={node.x} cy={node.y} r="10" fill="none" stroke="var(--lavender)" strokeWidth="1" />}
            </g>
          ))}
        </g>
        <g className="network-labels"><text x="48" y="264">ideas</text><text x="157" y="315">experiments</text><text x="307" y="264">results</text></g>
        <path className="network-spark" d="M330 37v18m-9-9h18M95 280v12m-6-6h12" />
      </svg>
      <span className="network-hint"><span aria-hidden="true">↳</span> hover or tap to connect the dots</span>
    </button>
  );
}
