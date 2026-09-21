import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Prologue from './pages/Prologue';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import './App.css';
function ScrollToTop() {
  const {
    pathname
  } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export default function App() {
  const basename = process.env.NODE_ENV === 'production' || /^\/ajithkumar(?:\/|$)/.test(window.location.pathname) ? '/ajithkumar' : '/';
  return <BrowserRouter basename={basename}>
    <ScrollToTop /><Layout><Routes>
      <Route path="/" element={<Prologue />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:slug" element={<ProjectDetail />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<section className="page-shell empty-page"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>A little off course.</h1><p>This page doesn’t exist.</p><Link className="button primary" to="/">Back to home ↗</Link></section>} />
    </Routes></Layout>
  </BrowserRouter>;
}
