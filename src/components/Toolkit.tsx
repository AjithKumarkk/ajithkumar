import React from 'react';
import { Link } from 'react-router-dom';

const toolIcons: Record<string, string> = {
  Unity: 'unity', 'C#': 'csharp', 'C++': 'cplusplus', Python: 'python',
  JavaScript: 'javascript', 'Unreal Engine': 'unreal', Aseprite: 'aseprite',
  '.NET': 'dotnet', 'SQL Server': 'sqlserver', MySQL: 'mysql',
};

function ToolLogo({ name }: { name: string }) {
  return <img className={`tool-logo tool-logo-${toolIcons[name]}`} src={`${process.env.PUBLIC_URL}/assets/tools/${toolIcons[name]}.svg`} alt="" width="26" height="26" />;
}

const toolGroups = [
  { symbol: '</>', title: 'Code & logic', detail: 'The languages behind the experience.', tools: ['C#', 'C++', 'Python', 'JavaScript'] },
  { symbol: '◇', title: 'Engines & art', detail: 'From game worlds to pixel details.', tools: ['Unreal Engine', 'Aseprite'] },
  { symbol: '{ }', title: 'Apps & data', detail: 'A foundation beyond games.', tools: ['.NET', 'SQL Server', 'MySQL'] },
];

export default function Toolkit() {
  return (
    <section className="about-section toolkit-section" aria-labelledby="toolkit-heading">
      <div className="page-shell">
        <div className="toolkit-heading">
          <div>
            <p className="eyebrow">MY TOOLKIT / 02</p>
            <h2 id="toolkit-heading">The tools behind<br />the play<span className="brand-dot">.</span></h2>
          </div>
          <div className="toolkit-intro">
            <p>Game development is where my experience in code, interfaces, and data comes together. Here’s what I work with.</p>
            <Link className="text-link" to="/resume">Explore my experience <span aria-hidden="true">↗</span></Link>
          </div>
        </div>

        <div className="toolkit-grid">
          <div className="toolkit-primary">
            <div className="toolkit-primary-top">
              <div className="toolkit-brand-pair" aria-hidden="true">
                <span className="toolkit-symbol"><ToolLogo name="Unity" /></span>
                <span className="toolkit-brand-plus">+</span>
                <span className="toolkit-symbol"><ToolLogo name="C#" /></span>
              </div>
              <span className="toolkit-focus">PRIMARY TOOLSET</span>
            </div>
            <h3>Unity <span>+ C#</span></h3>
            <p>Building the mechanics, interfaces, and systems that make a game feel right.</p>
            <ul className="toolkit-capabilities">
              <li>2D & 3D gameplay</li>
              <li>UI & interaction</li>
              <li>Platform integrations</li>
              <li>Player progress & persistence</li>
            </ul>
            <div className="toolkit-primary-footer">
              <span>PC / CONSOLE / MOBILE</span>
              <Link to="/portfolio" className="text-link">See it in my work <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="toolkit-groups">
            {toolGroups.map(group => (
              <div className="toolkit-group" key={group.title}>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.detail}</p>
                  <ul className="toolkit-tools">{group.tools.map(tool => <li key={tool}><ToolLogo name={tool} /><span>{tool}</span></li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
