import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Content stays visible if animation APIs are unavailable or motion is disabled.
export default function ScrollEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    const main = document.getElementById('main');
    if (!main || !window.matchMedia || !window.IntersectionObserver || !Element.prototype.animate) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const seen = new WeakSet<Element>();
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (preference.matches) return;
        const animation = entry.target.animate([
          { opacity: 0, transform: 'translateY(22px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 650, delay: Math.min(index * 65, 195), easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.08 });
    const observe = () => {
      main.querySelectorAll('.section-heading, .project-card, .toolkit-heading, .toolkit-primary, .toolkit-group, .contact-banner, .resume-section, .detail-section, .project-sidebar, .contact-form').forEach(element => {
        if (!seen.has(element)) {
          seen.add(element);
          observer.observe(element);
        }
      });
    };
    observe();
    const mutations = new MutationObserver(observe);
    mutations.observe(main, { childList: true, subtree: true });
    const stopMotion = () => {
      if (preference.matches) animations.forEach(animation => animation.cancel());
    };
    preference.addEventListener('change', stopMotion);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      animations.forEach(animation => animation.cancel());
      preference.removeEventListener('change', stopMotion);
    };
  }, [pathname]);
  return null;
}
