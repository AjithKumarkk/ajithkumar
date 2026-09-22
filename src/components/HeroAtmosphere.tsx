import React, { useState } from 'react';
import GameIcon from './GameIcon';

export default function HeroAtmosphere() {
  const [paused, setPaused] = useState(false);
  return <div className={`hero-atmosphere${paused ? ' is-paused' : ''}`}>
    <div className="arcade-scene" aria-hidden="true">
      <div className="arcade-grid" />
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <div className="game-core"><GameIcon name="controller" /></div>
      <span className="floating-token token-one"><GameIcon name="dpad" /></span>
      <span className="floating-token token-two"><GameIcon name="heart" /></span>
      <span className="floating-token token-three"><GameIcon name="coin" /></span>
      <span className="scene-label">CODE. PLAY. REPEAT.</span>
    </div>
    <button className="motion-toggle" aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? '▶ Play motion' : 'Ⅱ Pause motion'}</button>
  </div>;
}
