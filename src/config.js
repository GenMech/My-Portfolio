module.exports = {
  siteTitle: 'Gitesh Pareek | Software Engineer',
  siteDescription: 'Gitesh Pareek is a software engineer specializing in full stack development.',
  siteKeywords: 'Gitesh Pareek, genmech, GenMech, software engineer, web developer, mait',
  siteUrl: 'https://apoorvdwivedi.live',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-CJZ4NM2JE1',
  googleVerification: 'todo',
  name: 'Gitesh Pareek',
  location: 'Delhi, India',
  email: 'pareekgitesh89@gmail.com',
  github: 'https://github.com/GenMech',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/GenMech',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/itsgitesh/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/PareeKGitesh89',
    },
    {
      name: 'Leetcode',
      url: 'https://leetcode.com/GenMech/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#53F79E',
    navy: '#151629',
    darkNavy: '#0C0D21',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
