import type { Metadata } from 'next';
import { PlaygroundTools } from '../components/playground-tools';
export const metadata: Metadata={title:'Playground',description:'Small browser tools and interactive ML experiments. No sign-up, no setup.'};
export default function PlaygroundPage(){return <main id="main-content" className="page-shell playground-page"><header className="page-hero"><p className="section-kicker">BROWSER TOOLS</p><h1>Playground<span className="yellow">.</span></h1><p>Interactive tools and ML experiments. Everything runs in your browser.</p></header><PlaygroundTools/></main>;}
