'use client';
import { useEffect, useRef, useState } from 'react';
import { assetPath } from './photo-art';
export function FooterCompanion() {
 const [hello,setHello] = useState(false);
 const [visible,setVisible] = useState(false);
 const ref=useRef<HTMLButtonElement>(null);
 useEffect(()=>{const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setVisible(true);observer.disconnect();}},{threshold:.2});if(ref.current)observer.observe(ref.current);return()=>observer.disconnect();},[]);
 return <button ref={ref} type="button" className={`footer-companion ${visible?'is-visible':''} ${hello?'is-greeting':''}`} onClick={()=>setHello(!hello)} aria-label="Say hello to the little robot" aria-pressed={hello}><span className="companion-message" aria-live="polite">{hello?'Oh, hello there!':'psst… hello!'}</span>{/* eslint-disable-next-line @next/next/no-img-element */}<img src={assetPath('/images/companion.png')} width="1254" height="1254" alt="A tiny clay robot with a yellow star antenna, peeking over the footer"/></button>;
}
