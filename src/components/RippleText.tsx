import React from 'react';

export default function RippleText({ children }: { children: string }) {
  let character = 0;
  return <span className="ripple-text">
    <span className="visually-hidden">{children}</span>
    <span aria-hidden="true">{children.split(' ').map((word, wordIndex) => <React.Fragment key={wordIndex}>
      {wordIndex > 0 && ' '}
      <span className="ripple-word">{Array.from(word).map(letter => {
        const index = character++;
        return <span className="ripple-letter" key={index} style={{ '--letter-delay': `${index * 22}ms` } as React.CSSProperties}>{letter}</span>;
      })}</span>
    </React.Fragment>)}</span>
  </span>;
}
