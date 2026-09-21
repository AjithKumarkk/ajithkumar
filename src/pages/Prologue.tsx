import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { resumeUrl } from '../data/site';
import ProjectCard from '../components/ProjectCard';
import Toolkit from '../components/Toolkit';
const featured = ['Rotted – A Brain Rot Simulator', 'The Curse 404', 'Fast Gear'].map(title => projects.find(p => p.title === title)!);
export default function Prologue() {
  return <><section className="page-shell hero"><div className="hero-topline"><span className="eyebrow">GAMEPLAY · SYSTEMS · INTERACTION</span><span className="availability"><i /> Open to opportunities</span></div><h1>Hey, I’m Ajith.<br /><span>I build games.</span></h1><div className="hero-bottom"><div className="hero-copy"><p className="hero-role">Unity Game Developer</p><p>I turn ideas into interactive experiences with Unity and C#. From gameplay mechanics and polished UI to platform integrations, I build the systems that bring games to life.</p><div className="button-row"><Link className="button primary" to="/portfolio">Explore my projects <span aria-hidden="true">↗</span></Link><a className="button secondary" href={resumeUrl} download>Download resume <span aria-hidden="true">↓</span></a></div></div><div className="hero-note"><span className="tiny-label">BASED IN</span><p>Kerala, India</p><span className="tiny-label">CURRENTLY BUILDING AT</span><p>Sector4 Interactive</p></div></div></section>
    <div className="expertise-strip"><div className="page-shell"><span>Unity & C#</span><span>Gameplay systems</span><span>UI & interaction</span><span>PC · Console · Mobile</span></div></div>
    <section className="page-shell section"><div className="section-heading"><div><p className="eyebrow">SELECTED WORK / 01</p><h2>Games I’ve worked on<span className="brand-dot">.</span></h2></div><Link className="text-link" to="/portfolio">All {projects.length} projects ↗</Link></div><div className="featured-grid">{featured.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div></section>
    <Toolkit />
    <section className="page-shell contact-banner"><p className="eyebrow">HAVE SOMETHING IN MIND?</p><div><h2>Let’s build something<br />worth playing.</h2><Link className="button primary" to="/contact">Get in touch ↗</Link></div></section></>;
}
