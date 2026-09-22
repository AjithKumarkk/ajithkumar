import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../data/projects';
import { categoryLabels, projectSlug } from '../data/site';
export function ProjectImage({
  src,
  alt,
  className = ''
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  return failed ? <div className={`image-fallback ${className}`}><span>{alt}</span><small>Preview unavailable</small></div> : <img className={className} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}
export default function ProjectCard({
  project,
  index
}: {
  project: Project;
  index?: number;
}) {
  const moveLight = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--light-x', `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty('--light-y', `${event.clientY - bounds.top}px`);
  };
  return <article className="project-card"><Link to={`/portfolio/${projectSlug(project.title)}`} className="project-card-link" onPointerMove={moveLight}>
    <div className="project-media"><ProjectImage src={project.image} alt={project.title} /><span className="project-arrow" aria-hidden="true">↗</span><span className="platform-label">{project.platform}</span></div>
    <div className="project-card-body"><div className="project-kicker"><span>{categoryLabels[project.category]}</span>{index !== undefined && <span className="project-number">0{index + 1}</span>}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{(project.cardTags || project.technologies).slice(0, 4).map(t => <span key={t}>{t}</span>)}</div><span className="text-link">Explore project <span aria-hidden="true">↗</span></span></div>
  </Link></article>;
}
