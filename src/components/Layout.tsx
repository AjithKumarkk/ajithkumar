import React from 'react';
import Navigation from './Navigation';
import { socials } from '../data/site';
import ScrollEffects from './ScrollEffects';
import { useLocation } from 'react-router-dom';
export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  const { pathname } = useLocation();
  return <><a className="skip-link" href="#main">Skip to content</a><Navigation /><main id="main" key={pathname}>{children}</main><ScrollEffects />
    <footer className="site-footer"><div className="page-shell footer-inner"><div><span className="footer-name">AJITH KUMAR<span className="brand-dot">.</span></span><p>Unity Game Developer · Kerala, India</p></div><div className="footer-right"><div className="social-links">{socials.map(s => <a key={s.name} href={s.url} target="_blank" rel="noreferrer">{s.name} ↗</a>)}</div><small>© {new Date().getFullYear()} Ajith Kumar</small></div></div></footer></>;
}
