export const resumeUrl = `${process.env.PUBLIC_URL}/assets/docs/AJITH_KUMAR_K_K.pdf`;
export const email = 'ajithkumaran000@gmail.com';
export const socials = [{
  name: 'GitHub',
  url: 'https://github.com/AjithKumarkk'
}, {
  name: 'LinkedIn',
  url: 'https://linkedin.com/in/ajithkumarkk'
}, {
  name: 'itch.io',
  url: 'https://ajithkumarkk.itch.io/'
}];
export const categoryLabels = {
  industrial: 'Studio & commercial',
  interactive: 'Interactive & simulation',
  personal: 'Personal & indie'
};
export const projectSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
