import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { resumeUrl } from '../data/site';
export default function Navigation() {
  return <header className="site-header"><div className="nav-wrap">
    <Link className="wordmark" to="/" aria-label="Ajith Kumar home">AJITH KUMAR<span className="brand-dot">.</span></Link>
    <nav aria-label="Main navigation"><NavLink to="/" end>About</NavLink><NavLink to="/portfolio">Projects</NavLink><NavLink to="/resume">Experience</NavLink><NavLink to="/contact">Contact</NavLink></nav>
    <a className="button resume-nav" href={resumeUrl} download>Resume <span aria-hidden="true">↓</span></a>
  </div></header>;
}
