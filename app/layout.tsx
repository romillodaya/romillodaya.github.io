import type { Metadata, Viewport } from 'next';
import { SiteFooter } from './components/site-footer';
import { SiteHeader } from './components/site-header';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const ogImage = new URL('og.png', siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Romil — engineer, tinkerer & side-quest enthusiast',
    template: '%s · Romil',
  },
  description: 'A personal digital garden for code, writing, photographs, and curious experiments.',
  openGraph: {
    title: 'Romil — engineer, tinkerer & side-quest enthusiast',
    description: 'A personal digital garden for code, writing, photographs, and curious experiments.',
    type: 'website',
    images: [{ url: ogImage, width: 1730, height: 909, alt: 'I make useful things, then write down what broke.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romil — engineer, tinkerer & side-quest enthusiast',
    description: 'A personal digital garden for code, writing, photographs, and curious experiments.',
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0c0c0f' },
    { media: '(prefers-color-scheme: light)', color: '#f5f2ea' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
