import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { categoryLabels, projectSlug } from '../data/site';
import { ProjectImage } from '../components/ProjectCard';
export default function ProjectDetail() {
  const {
    slug
  } = useParams();
  const project = projects.find(p => projectSlug(p.title) === slug);
  useEffect(() => {
    document.title = project ? `${project.title} | Ajith Kumar` : 'Project not found | Ajith Kumar';
    return () => {
      document.title = 'Ajith Kumar | Unity Game Developer';
    };
  }, [project]);
  if (!project) return <section className="page-shell empty-page"><h1>Project not found.</h1><Link className="button primary" to="/portfolio">Browse projects ↗</Link></section>;
  const links = [...(project.storeLinks || [])];
  if (project.liveUrl && !links.some(l => l.url === project.liveUrl)) links.push({
    platform: 'Live demo',
    url: project.liveUrl
  });
  if (project.githubUrl) links.push({
    platform: 'Source code',
    url: project.githubUrl
  });
  return <article className="page-shell project-detail"><Link className="back-link" to="/portfolio">← All projects</Link><div className="detail-heading"><p className="eyebrow">{categoryLabels[project.category]}</p><h1>{project.modalTitle || project.title}</h1><div className="detail-badges"><span>{project.platform}</span>{project.isComingSoon && <span>Coming soon{project.comingSoonDate ? ` · ${project.comingSoonDate}` : ''}</span>}{project.isNextFestParticipant && <span>Steam Next Fest</span>}{project.isOfficiallyCredited && <span>Officially credited</span>}</div></div><ProjectImage className="detail-cover" src={project.image} alt={project.title} />
    <div className="detail-columns"><div><section className="detail-section"><p className="eyebrow">OVERVIEW</p><h2>About the project</h2><p className="long-description">{project.longDescription || project.description}</p></section>{!!project.roleContributions?.length && <section className="detail-section"><p className="eyebrow">MY CONTRIBUTION</p><h2>What I worked on</h2><ul className="contribution-list">{project.roleContributions.map(r => <li key={r}>{r}</li>)}</ul></section>}{!!project.features?.length && <section className="detail-section"><h2>Key features</h2><ul className="feature-list">{project.features.map(f => <li key={f}>{f}</li>)}</ul></section>}</div>
    <aside className="project-sidebar"><div className="sidebar-block"><p className="eyebrow">TECHNOLOGIES</p><div className="tags">{project.technologies.map(t => <span key={t}>{t}</span>)}</div></div>{!!links.length && <div className="sidebar-block"><p className="eyebrow">PROJECT LINKS</p><div className="store-links">{links.map((l, i) => l.url ? <a key={i} href={l.url} target="_blank" rel="noreferrer">{project.isComingSoon && l.platform === 'Steam' ? 'Wishlist on Steam' : l.label || l.platform}<span aria-hidden="true">↗</span></a> : <span className="unlinked-store" key={i}>{l.platform}<small>Link unavailable</small></span>)}</div></div>}{(project.rating || project.languagesCount || project.installs) && <div className="sidebar-block"><p className="eyebrow">AT A GLANCE</p>{project.rating && <p>★ {project.rating} store rating</p>}{project.installs && <p>{project.installs}</p>}{project.languagesCount && <p>{project.languagesCount} supported languages</p>}</div>}{project.isProfessionalTeam && <p className="team-note">{project.professionalTeamText || 'Developed as part of a professional team.'}</p>}</aside></div>
    {project.youtubeVideoId && <section className="detail-section"><h2>See it in action</h2><iframe className="video-embed" src={`https://www.youtube.com/embed/${project.youtubeVideoId}?rel=0`} title={`${project.title} demonstration`} loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></section>}{!!project.images?.length && <section className="detail-section"><h2>Project gallery</h2><div className="gallery">{project.images.map(img => <a href={img.url} target="_blank" rel="noreferrer" key={img.url} aria-label={`Open ${img.alt} full size`}><ProjectImage src={img.url} alt={img.alt} /></a>)}</div></section>}<div className="detail-end"><Link className="text-link" to="/portfolio">← Back to all projects</Link><Link className="text-link" to="/contact">Let’s work together ↗</Link></div></article>;
}
