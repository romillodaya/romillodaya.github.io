'use client';

import { useEffect, useRef, useSyncExternalStore } from 'react';
import { SiteIcon } from './site-icon';

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'data-switch-sound'] });
  return () => observer.disconnect();
}
function getTheme() { return document.documentElement.dataset.theme === 'dark'; }
function getSound() { return document.documentElement.dataset.switchSound !== 'off'; }

export function ThemeSwitch() {
  const dark = useSyncExternalStore(subscribe, getTheme, () => false);
  const sound = useSyncExternalStore(subscribe, getSound, () => true);
  const audio = useRef<AudioContext | null>(null);
  useEffect(() => () => { void audio.current?.close().catch(() => {}); }, []);

  async function clickSound(nextDark: boolean) {
    if (!sound) return;
    try {
      const context = audio.current ?? new AudioContext();
      audio.current = context;
      await context.resume();
      if (context.state !== 'running') return;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const now = context.currentTime;
      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(nextDark ? 580 : 760, now);
      oscillator.frequency.exponentialRampToValueAtTime(110, now + .035);
      gain.gain.setValueAtTime(.0001, now);
      gain.gain.exponentialRampToValueAtTime(.065, now + .002);
      gain.gain.exponentialRampToValueAtTime(.0001, now + .045);
      oscillator.connect(gain).connect(context.destination);
      oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
      oscillator.start(now);
      oscillator.stop(now + .05);
    } catch { /* A blocked or unavailable audio device must not block the theme. */ }
  }
  function toggleTheme() {
    const next = !getTheme();
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    try { localStorage.setItem('romil-theme', next ? 'dark' : 'light'); } catch { /* Session-only preference. */ }
    void clickSound(next);
  }
  function toggleSound() {
    const next = !getSound();
    document.documentElement.dataset.switchSound = next ? 'on' : 'off';
    try { localStorage.setItem('romil-switch-sound', next ? 'on' : 'off'); } catch { /* Session-only preference. */ }
  }
  return <div className="theme-controls">
    <button className="theme-switch" type="button" role="switch" aria-label="Dark mode" aria-checked={dark} title={`Switch to ${dark ? 'light' : 'dark'} theme`} onClick={toggleTheme}>
      <span className="switch-track" aria-hidden="true"><SiteIcon name="sun" /><SiteIcon name="moon" /><span className="switch-thumb"><span /></span></span>
    </button>
    <button className="switch-sound" type="button" aria-label="Theme switch sound" aria-pressed={sound} title={sound ? 'Mute switch sound' : 'Enable switch sound'} onClick={toggleSound}><SiteIcon name={sound ? 'sound' : 'muted'} /></button>
  </div>;
}
