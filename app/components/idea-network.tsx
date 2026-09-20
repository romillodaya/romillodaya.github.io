'use client';
import { useState } from 'react';
const layers = [3, 5, 5, 3];
const nodes = layers.flatMap((count, layer) => Array.from({ length: count }, (_, i) => ({ x: 65 + layer * 91, y: 165 + (i - (count - 1) / 2) * 43, layer, id: `${layer}-${i}` })));
export function IdeaNetwork() {
  const [pulse, setPulse] = useState(0);
  return <button type="button" className="idea-network" onClick={() => setPulse(pulse + 1)} aria-label="Send a thought through the neural network">
    <span className="network-note">a little curiosity goes a long way</span>
    <svg key={pulse} viewBox="0 0 420 330" role="img" aria-label="An illustrated neural network connecting ideas to experiments">
      <defs><linearGradient id="network-gradient"><stop stopColor="var(--lavender)"/><stop offset=".5" stopColor="var(--mint)"/><stop offset="1" stopColor="var(--yellow)"/></linearGradient></defs>
      <path className="network-orbit" d="M27 201C-6 88 165 18 297 49S442 229 351 278 84 319 38 245"/>
      <g className="network-edges">{nodes.flatMap(a => nodes.filter(b => b.layer === a.layer + 1).map(b => <path key={`${a.id}-${b.id}`} d={`M${a.x} ${a.y} C${a.x+45} ${a.y} ${b.x-45} ${b.y} ${b.x} ${b.y}`}/>))}</g>
      <g className="network-nodes">{nodes.map((n, i) => <g key={n.id} style={{ animationDelay: `${n.layer * 130}ms` }}><circle className="node-halo" cx={n.x} cy={n.y} r="15"/><circle cx={n.x} cy={n.y} r={n.layer===0||n.layer===3?7:5.5} fill={['var(--lavender)','var(--lavender)','var(--mint)','var(--yellow)'][n.layer]}/>{i===7 && <circle cx={n.x} cy={n.y} r="10" fill="none" stroke="var(--lavender)" strokeWidth="1"/>}</g>)}</g>
      <g className="network-labels"><text x="48" y="264">ideas</text><text x="156" y="315">a few experiments</text><text x="299" y="264">possibilities</text></g>
      <path className="network-spark" d="M330 37v18m-9-9h18M95 280v12m-6-6h12"/>
    </svg>
    <span className="network-hint"><span aria-hidden="true">↳</span> hover or tap to connect the dots</span>
  </button>;
}
