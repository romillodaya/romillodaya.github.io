import type { Metadata } from 'next';
import { PlaygroundTools } from '../components/playground-tools';
export const metadata: Metadata={title:'Playground',description:'Small browser tools and interactive ML experiments. No sign-up, no setup.'};
export default function PlaygroundPage(){return <main id="main-content" className="page-shell playground-page"><header className="page-hero"><p className="section-kicker">SMALL THINGS, MADE USEFUL</p><h1>A little room to play<span className="yellow">.</span></h1><p>Tools for the everyday. Experiments for the curious. Everything here runs right in your browser.</p></header><PlaygroundTools/></main>;}
