import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { projects } from './data/projects';
import { projectSlug } from './data/site';
beforeEach(() => {
  window.history.replaceState({}, '', '/');
  window.scrollTo = jest.fn();
});
test('supports the GitHub Pages base path in preview and deep links', () => {
  window.history.replaceState({}, '', '/ajithkumar/portfolio/the-curse-404');
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('The Curse 404');
  expect(screen.getByRole('link', { name: /All projects/ })).toHaveAttribute('href', '/ajithkumar/portfolio');
});
test('introduces Ajith without a portrait and exposes featured projects and resume', () => {
  render(<App />);
  expect(screen.getByRole('heading', {
    level: 1
  })).toHaveTextContent('Hey, I’m Ajith.');
  expect(screen.queryByAltText('Ajith Kumar')).not.toBeInTheDocument();
  expect(screen.getAllByRole('article')).toHaveLength(3);
  expect(screen.getByRole('link', {
    name: /Download resume/i
  })).toHaveAttribute('href', expect.stringContaining('AJITH_KUMAR_K_K.pdf'));
});
test('filters all 11 projects and navigates to complete case studies', () => {
  window.history.replaceState({}, '', '/portfolio');
  render(<App />);
  expect(screen.getAllByRole('article')).toHaveLength(11);
  fireEvent.click(screen.getByRole('button', {
    name: /Interactive & simulation/i
  }));
  expect(screen.getAllByRole('article')).toHaveLength(3);
  fireEvent.click(screen.getByRole('link', {
    name: /Facilig SafetyWhat Showcase/i
  }));
  expect(screen.getByRole('heading', {
    level: 1
  })).toHaveTextContent('Facilig SafetyWhat');
  expect(screen.getByText(/Sole programmer for the entire project/)).toBeInTheDocument();
  expect(screen.getByTitle(/demonstration/)).toHaveAttribute('src', expect.stringContaining('DTXcwd1cXgc'));
});
test('preserves every project with a unique address and correct console link', () => {
  expect(new Set(projects.map(p => projectSlug(p.title))).size).toBe(11);
  window.history.replaceState({}, '', '/portfolio/fast-gear');
  render(<App />);
  expect(screen.getByRole('link', {
    name: /PlayStation/i
  })).toHaveAttribute('href', expect.stringContaining('playstation.com'));
  expect(screen.getByText(/Designed and implemented the complete UI system/)).toBeInTheDocument();
});
test('contact explains that the visitor sends the email and handles clipboard failure', async () => {
  Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: {
      writeText: jest.fn().mockRejectedValue(new Error('denied'))
    }
  });
  window.history.replaceState({}, '', '/contact');
  render(<App />);
  expect(screen.getByRole('button', {
    name: /Open email draft/
  })).toBeInTheDocument();
  expect(screen.getByText(/Nothing is sent until/)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', {
    name: /Copy email/
  }));
  expect(await screen.findByText(/Couldn’t copy automatically/)).toBeInTheDocument();
});
test('unknown project routes give a route back to the collection', () => {
  window.history.replaceState({}, '', '/portfolio/missing-project');
  render(<App />);
  expect(screen.getByRole('heading', {
    name: 'Project not found.'
  })).toBeInTheDocument();
  expect(screen.getByRole('link', {
    name: /Browse projects/
  })).toHaveAttribute('href', '/portfolio');
});
