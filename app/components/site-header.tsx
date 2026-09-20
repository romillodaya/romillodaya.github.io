'use client';
import { assetPath } from './photo-art';
import { usePathname } from 'next/navigation';
import { ThemeSwitch } from './theme-switch';
import { Wordmark } from './wordmark';
const navigation = [{ href: '/projects', label: 'Projects' }, { href: '/writing', label: 'Writing' }, { href: '/playground', label: 'Playground' }, { href: '/about', label: 'About' }];
export function SiteHeader() {
 const pathname = usePathname();
 return <header className="site-header"><Wordmark/><nav aria-label="Primary navigation">{navigation.map(item => <a key={item.href} href={assetPath(item.href)} aria-current={pathname === item.href || pathname.startsWith(`${item.href}/`) ? 'page' : undefined}>{item.label}</a>)}</nav><ThemeSwitch /></header>;
}
