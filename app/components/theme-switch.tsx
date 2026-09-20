'use client';
import { useSyncExternalStore } from 'react';
import { SiteIcon } from './site-icon';
function subscribe(onChange: () => void) { const observer = new MutationObserver(onChange); observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] }); return () => observer.disconnect(); }
function getTheme() { return document.documentElement.dataset.theme === 'dark'; }
export function ThemeSwitch() {
 const dark = useSyncExternalStore(subscribe, getTheme, () => true);
 function toggleTheme() { const next = !getTheme(); document.documentElement.dataset.theme = next ? 'dark' : 'light'; try { localStorage.setItem('romil-theme', next ? 'dark' : 'light'); } catch {} }
 return <button className="theme-toggle" type="button" role="switch" aria-label="Dark mode" aria-checked={dark} title={`Switch to ${dark ? 'light' : 'dark'} theme`} onClick={toggleTheme}><SiteIcon name={dark ? 'sun' : 'moon'} /></button>;
}
