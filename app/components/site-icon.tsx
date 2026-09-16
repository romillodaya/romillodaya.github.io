import type { SVGProps } from 'react';
export type IconName = 'write' | 'compass' | 'code' | 'arrow' | 'github' | 'linkedin' | 'scholar' | 'sun' | 'moon' | 'sound' | 'muted';
export function SiteIcon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  const paths = {
    scholar: <><path d="m2 9 10-7 10 7-10 7L2 9Z"/><path d="M6 12v6c3 3 9 3 12 0v-6M22 9v8"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></>,
    moon: <path d="M20 15.3A8.5 8.5 0 0 1 8.7 4 8.5 8.5 0 1 0 20 15.3Z"/>,
    sound: <><path d="m11 5-5 4H3v6h3l5 4V5Z"/><path d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/></>,
    muted: <><path d="m11 5-5 4H3v6h3l5 4V5Z"/><path d="m16 9 6 6m0-6-6 6"/></>,
    write: <><path d="M15 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-8"/><path d="m12 13 8-8-3-3-8 8-1 4 4-1Z"/><path d="m15 4 3 3"/></>,
    compass: <><circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z"/></>,
    code: <><path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18"/></>,
    arrow: <><path d="M5 12h14m-6-6 6 6-6 6"/></>,
    github: <><path d="M9 19c-4 1-4-2-6-2m12 5v-3.8a3.3 3.3 0 0 0-.9-2.6c3-.4 6.1-1.5 6.1-6.6a5.1 5.1 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5s-1.1-.4-3.6 1.3a12.5 12.5 0 0 0-6.4 0C6.2 1.6 5.1 2 5.1 2A4.7 4.7 0 0 0 5 5.5 5.1 5.1 0 0 0 3.6 9c0 5.1 3.1 6.2 6.1 6.6a3.3 3.3 0 0 0-.9 2.6V22"/></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7.5 10v7m4-7v7m0-4a3 3 0 0 1 6 0v4"/><circle cx="7.5" cy="7" r=".6" fill="currentColor" stroke="none"/></>,
  };
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
