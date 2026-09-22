import React from 'react';

type GameIconName = 'controller' | 'dpad' | 'heart' | 'coin';

export default function GameIcon({ name }: { name: GameIconName }) {
  return <svg className={`game-icon game-icon-${name}`} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {name === 'controller' && <>
      <path fill="currentColor" fillOpacity=".08" d="M15 14h18c5 0 7 4 8 9l3 12c1 5-4 8-7 4l-7-7H18l-7 7c-3 4-8 1-7-4l3-12c1-5 3-9 8-9Z" />
      <path d="M15 20v10m-5-5h10M20 14l2-4h4" />
      <circle className="controller-button button-a" cx="33" cy="21" r="2" fill="#89e5d2" stroke="none" />
      <circle className="controller-button button-b" cx="38" cy="26" r="2" fill="#c3acff" stroke="none" />
      <path d="M23 27h2" />
    </>}
    {name === 'dpad' && <path fill="currentColor" fillOpacity=".14" d="M18 6h12v12h12v12H30v12H18V30H6V18h12Z" />}
    {name === 'heart' && <path fill="currentColor" fillOpacity=".25" d="M6 10h12v6h12v-6h12v6h4v14h-6v6h-6v6H20v-6h-6v-6H8v-6H2V16h4Z" transform="translate(1 -1) scale(.95)" />}
    {name === 'coin' && <>
      <ellipse cx="24" cy="24" rx="16" ry="19" fill="currentColor" fillOpacity=".13" />
      <ellipse cx="24" cy="24" rx="11" ry="14" strokeOpacity=".5" />
      <path d="m21 20 4-3v14m-4 0h8" />
    </>}
  </svg>;
}
