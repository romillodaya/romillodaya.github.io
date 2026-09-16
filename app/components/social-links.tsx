import { SiteIcon, type IconName } from './site-icon';
const profiles: { name: string; icon: IconName; href: string }[] = [
  { name: 'GitHub', icon: 'github', href: 'https://github.com/romillodaya' },
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/romil-lodaya/' },
  { name: 'Google Scholar', icon: 'scholar', href: 'https://scholar.google.com/citations?user=qtpDmGoAAAAJ&hl=en' },
];
export function SocialLinks() {
  return <div className="social-links" aria-label="Find Romil online">{profiles.map(profile => <a key={profile.icon} className={`social-${profile.icon}`} href={profile.href} target="_blank" rel="noreferrer"><span className="social-icon"><SiteIcon name={profile.icon} /></span>{profile.name}<span className="visually-hidden"> (opens in a new tab)</span></a>)}</div>;
}
