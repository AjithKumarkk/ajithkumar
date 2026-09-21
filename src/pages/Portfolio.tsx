import React, { useState } from 'react';
import { projects, Project } from '../data/projects';
import { categoryLabels } from '../data/site';
import ProjectCard from '../components/ProjectCard';
export default function Portfolio() {
  const [category, setCategory] = useState<'all' | Project['category']>('all');
  const visible = projects.filter(p => category === 'all' || p.category === category);
  return <section className="page-shell section portfolio-page"><div className="page-intro"><p className="eyebrow">THE PROJECT COLLECTION</p><h1>Built to be played.<br /><span>And experienced.</span></h1><p>Games, interactive applications, and personal experiments. Explore the work and the systems I helped bring to life.</p></div><div className="filters" aria-label="Filter projects">{(['all', 'industrial', 'interactive', 'personal'] as const).map(c => <button key={c} className={category === c ? 'filter active' : 'filter'} aria-pressed={category === c} onClick={() => setCategory(c)}>{c === 'all' ? 'All projects' : categoryLabels[c]} <span>{projects.filter(p => c === 'all' || p.category === c).length}</span></button>)}</div><p className="results-count" aria-live="polite">Showing {visible.length} projects</p><div className="projects-grid">{visible.map(p => <ProjectCard key={p.title} project={p} />)}</div></section>;
}
