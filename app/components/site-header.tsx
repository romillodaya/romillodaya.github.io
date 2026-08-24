'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navigation = [
  { href: '/writing', label: 'Writing' },
  { href: '/projects', label: 'Projects' },
  { href: '/field-notes', label: 'Field notes' },
  { href: '/about', label: 'About' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const saved = window.localStorage.getItem('romil-theme');
    if (saved === 'light') {
      setTheme('light');
      document.documentElement.dataset.theme = 'light';
    }
  }, []);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem('romil-theme', next);
  }

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Romil, home">
        <span className="prompt" aria-hidden="true">~/</span>romil<span className="cursor" aria-hidden="true" />
      </Link>
      <nav aria-label="Primary navigation">
        {navigation.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return <Link key={item.href} href={item.href} className={active ? 'active' : ''} aria-current={active ? 'page' : undefined}>{item.label}</Link>;
        })}
      </nav>
      <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
        <span aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span>
        <span className="theme-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
      </button>
    </header>
  );
}
