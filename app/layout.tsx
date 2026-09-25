import type { Metadata, Viewport } from 'next';
import { SiteFooter } from './components/site-footer';
import { SiteHeader } from './components/site-header';
import './globals.css';
import './styles/content.css';
import localFont from 'next/font/local';
const dmSans = localFont({ src: [{ path: '../public/fonts/dm-sans-regular.ttf', weight: '400' }, { path: '../public/fonts/dm-sans-bold.ttf', weight: '700' }], variable: '--font-dm', display: 'swap' });
const kalam = localFont({ src: '../public/fonts/kalam.ttf', weight: '400', variable: '--font-hand', display: 'swap' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://romillodaya.github.io';
const ogImage = new URL('og.png', siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/favicon.svg` },
  title: {
    default: 'Romil Lodaya · ML / AI Engineer',
    template: '%s · Romil Lodaya',
  },
  description: 'Projects and writing on machine learning and AI by Romil Lodaya.',
  openGraph: {
    title: 'Romil Lodaya · ML / AI Engineer',
    description: 'Projects and writing on machine learning and AI by Romil Lodaya.',
    type: 'website',
    images: [{ url: ogImage, width: 1730, height: 909, alt: 'I make useful things, then write down what broke.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romil Lodaya · ML / AI Engineer',
    description: 'Projects and writing on machine learning and AI by Romil Lodaya.',
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#101113' },
    { media: '(prefers-color-scheme: light)', color: '#fafaf8' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Shared font tokens resolve on :root, so their font variables must live here too.
    <html lang="en" data-theme="dark" className={`${dmSans.variable} ${kalam.variable}`} suppressHydrationWarning>
      <body id="top">
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('romil-theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t;var s=localStorage.getItem('romil-switch-sound');if(s==='off'||s==='on')document.documentElement.dataset.switchSound=s;}catch(e){}})();` }} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
