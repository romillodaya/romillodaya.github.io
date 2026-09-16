'use client';

// Full document navigation releases the unmodified Scroll Craft engine, which has no unmount API.

import { assetPath } from './photo-art';
import { usePathname } from 'next/navigation';
import { ThemeSwitch } from './theme-switch';
const navigation = [{ href: '/writing', label: 'Writing' }, { href: '/field-notes', label: 'Stories' }, { href: '/projects', label: 'Projects' }, { href: '/about', label: 'About' }];
export function SiteHeader() {
  const pathname = usePathname();
  return <header className="site-header"><a className="wordmark" href={assetPath('/')} aria-label="Romil Lodaya, home">Romil Lodaya<span className="wordmark-dots" aria-hidden="true"><i /><i /><i /><i /></span></a><nav aria-label="Primary navigation">{navigation.map(item => {const active = pathname === item.href || pathname.startsWith(`${item.href}/`);return <a key={item.href} href={assetPath(item.href)} aria-current={active ? 'page' : undefined}>{item.label}</a>;})}</nav><ThemeSwitch /></header>;
}
