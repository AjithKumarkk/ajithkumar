import React from 'react';
import { experiences, education, skills } from '../data/career';
import { resumeUrl } from '../data/site';
export default function Resume() {
  return <section className="page-shell section resume-page"><div className="page-intro"><p className="eyebrow">THE JOURNEY SO FAR</p><h1>Experience<span className="brand-dot">.</span></h1><p>From understanding data to building software—and bringing interactive worlds to life.</p><a className="button primary" href={resumeUrl} download>Download resume ↓</a></div>
    <div className="resume-section"><div><p className="eyebrow">01 / EXPERIENCE</p><h2>Where I’ve worked</h2></div><div className="timeline">{experiences.map(e => <article key={e.title} className="timeline-entry"><p className="tiny-label">{e.period}</p><h3>{e.title}</h3><p className="company">{e.company}</p><ul className="feature-list">{e.responsibilities.map(r => <li key={r}>{r}</li>)}</ul></article>)}</div></div>
    <div className="resume-section"><div><p className="eyebrow">02 / EDUCATION</p><h2>The foundation</h2></div><div>{education.map(e => <article key={e.degree}><p className="tiny-label">{e.period}</p><h3>{e.degree}</h3><p className="company">{e.institution}</p><p>{e.university}</p><p>{e.details}</p></article>)}</div></div>
    <div className="resume-section"><div><p className="eyebrow">03 / SKILLS</p><h2>My toolkit</h2></div><div><h3>Technical</h3><div className="skill-inline">{skills.technical.map(s => <span key={s.name}>{s.name}</span>)}</div><h3 className="soft-heading">How I work</h3><div className="skill-inline">{skills.soft.map(s => <span key={s}>{s}</span>)}</div></div></div></section>;
}
