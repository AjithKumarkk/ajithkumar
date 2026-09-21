import React, { useState } from 'react';
import { email, socials, resumeUrl } from '../data/site';
export default function Contact() {
  const [status, setStatus] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus('Email address copied.');
    } catch {
      setStatus('Couldn’t copy automatically. You can select the email address above.');
    }
  }
  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setStatus('Please enter your name and message.');
      return;
    }
    const body = `${form.message.trim()}\n\nFrom: ${form.name.trim()}\nEmail: ${form.email.trim()}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(form.subject.trim() || `Portfolio inquiry from ${form.name.trim()}`)}&body=${encodeURIComponent(body)}`;
    setStatus('Your email app has been requested. Review and send your message there. If it didn’t open, use the email address above.');
  }
  return <section className="page-shell section contact-page"><div className="page-intro"><p className="eyebrow">LET’S CONNECT</p><h1>Great games start<br /><span>with a conversation.</span></h1><p>Have a project in mind or a role that could be a good fit? I’d love to hear about it.</p></div><div className="contact-grid"><div><span className="availability"><i /> Open for contracts & full-time roles</span><div className="contact-email"><p className="tiny-label">DROP ME A LINE</p><a href={`mailto:${email}`}>{email}</a><button className="text-button" onClick={copyEmail}>Copy email ⧉</button></div><dl className="contact-facts"><div><dt>Based in</dt><dd>Kerala, India · UTC+5:30</dd></div><div><dt>Relocation</dt><dd>Open to India and international opportunities</dd></div><div><dt>Response time</dt><dd>Usually within 24 hours</dd></div></dl><div className="social-links">{socials.map(s => <a href={s.url} key={s.name} target="_blank" rel="noreferrer">{s.name} ↗</a>)}</div><a className="text-link resume-contact" href={resumeUrl} download>Download my resume ↓</a></div>
    <form className="contact-form" onSubmit={submit}><h2>Tell me about it.</h2><p>Prepare a message to send through your email app.</p><div className="form-row"><label>Your name<input name="name" autoComplete="name" required value={form.name} onChange={e => setForm({
              ...form,
              name: e.target.value
            })} /></label><label>Email address<input type="email" name="email" autoComplete="email" required value={form.email} onChange={e => setForm({
              ...form,
              email: e.target.value
            })} /></label></div><label>Subject <span className="optional">(optional)</span><input name="subject" value={form.subject} onChange={e => setForm({
            ...form,
            subject: e.target.value
          })} /></label><label>Message<textarea name="message" required rows={5} value={form.message} onChange={e => setForm({
            ...form,
            message: e.target.value
          })} /></label><button className="button primary" type="submit">Open email draft ↗</button><small>Nothing is sent until you send it in your email app.</small></form></div><p role="status" className="contact-status">{status}</p></section>;
}
