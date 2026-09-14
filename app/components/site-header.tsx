'use client';

// Full document navigation releases the unmodified Scroll Craft engine, which has no unmount API.

import { assetPath } from './photo-art';
import { usePathname } from 'next/navigation';
import { useSyncExternalStore } from 'react';
const navigation = [{ href: '/writing', label: 'Writing' }, { href: '/field-notes', label: 'Stories' }, { href: '/projects', label: 'Projects' }, { href: '/about', label: 'About' }];
function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}
function getTheme() { return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'; }
export function SiteHeader() {
  const pathname = usePathname();
  const theme = useSyncExternalStore(subscribeTheme, getTheme, () => 'light');
  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { window.localStorage.setItem('romil-theme', next); } catch { /* Theme still works without storage. */ }
  }
  return <header className="site-header"><a className="wordmark" href={assetPath('/')} aria-label="Romil Lodaya, home">Romil Lodaya<span className="wordmark-dots" aria-hidden="true"><i /><i /><i /><i /></span></a><nav aria-label="Primary navigation">{navigation.map(item => {const active = pathname === item.href || pathname.startsWith(`${item.href}/`);return <a key={item.href} href={assetPath(item.href)} aria-current={active ? 'page' : undefined}>{item.label}</a>;})}</nav><button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">{theme === 'light' ? <path d="M20 15.3A8.5 8.5 0 0 1 8.7 4 8.5 8.5 0 1 0 20 15.3Z" /> : <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></>}</svg></button></header>;
}
