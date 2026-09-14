import type { Metadata, Viewport } from 'next';
import { SiteFooter } from './components/site-footer';
import { SiteHeader } from './components/site-header';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://romillodaya.github.io';
const ogImage = new URL('og.png', siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/favicon.svg` },
  title: {
    default: 'Romil Lodaya · Writing, notes & places',
    template: '%s · Romil',
  },
  description: 'Writing, field notes, trips, and things I make. A personal notebook by Romil Lodaya.',
  openGraph: {
    title: 'Romil Lodaya · Writing, notes & places',
    description: 'Writing, field notes, trips, and things I make. A personal notebook by Romil Lodaya.',
    type: 'website',
    images: [{ url: ogImage, width: 1730, height: 909, alt: 'I make useful things, then write down what broke.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romil Lodaya · Writing, notes & places',
    description: 'Writing, field notes, trips, and things I make. A personal notebook by Romil Lodaya.',
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#242329' },
    { media: '(prefers-color-scheme: light)', color: '#faf9f6' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body id="top">
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('romil-theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t;}catch(e){}})();` }} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
