// Edit this file to change content. Nothing else needs touching.
export const profile = {
  name: 'Simon Aiahadjei Danquah',
  photo: '/images/simon.jpg', // file lives in public/images/
  email: 'stamic681@gmail.com',
  github: 'https://github.com/s75233681-dot',
}

export const skills = [
  { title: 'Cybersecurity', items: [
    ['Kali Linux', 'Hands-on, still learning'],
    ['Network security', 'Concepts and fundamentals'],
    ['Linux', 'Command line and file system'],
    ['System troubleshooting', 'One change at a time'],
  ]},
  { title: 'Development', items: [
    ['Web development', 'School Connect, Sedek Farms, 3D Blocks'],
    ['App development', 'The School Connect app'],
    ['AI projects', 'AutoKeys AI'],
    ['Programming', 'Learning by shipping'],
  ]},
  { title: 'Systems', items: [
    ['OS installation', 'Including multi-boot setups'],
    ['Disk management', 'Windows terminal tools'],
    ['Boot troubleshooting', 'Fixing machines that won’t start'],
  ]},
  { title: 'Creative', items: [
    ['Keyboard', 'I play and practise regularly'],
    ['Robotics', 'An interest I’m growing'],
  ]},
]

// `art` picks the visual identity in styles.css (.v-grid, .v-lens, ...)
export const projects = [
  { name: 'School Connect', art: 'grid', span: 'w7', status: 'Live',
    text: 'A school communication platform. I finished it, deployed the website, and built an app version of it too.',
    tags: ['Website', 'Mobile app', 'Deployed'] },
  { name: 'FixIt Lens', art: 'lens', span: 'w5', status: 'Built',
    text: 'A project about spotting a problem and working out the fix, using technology as the magnifying glass.',
    tags: ['App', 'Problem solving'] },
  { name: 'Stamic Music GH', art: 'keys', span: 'w5', status: 'Built',
    text: 'A music application. It comes straight from playing keyboard and wanting software to meet music halfway.',
    tags: ['Music', 'App'] },
  { name: 'AutoKeys AI', art: 'bits', span: 'w7', status: 'Built',
    text: 'An artificial intelligence project, and my way of learning how AI works by building with it.',
    tags: ['AI', 'Experiment'] },
  { name: 'Sedek Farms', art: 'rows', span: 'w4', status: 'Client',
    text: 'A professional website I built for my robotics coach, designed around someone else’s brand.',
    tags: ['Website', 'Client work'] },
  { name: '3D Blocks', art: 'cube', span: 'w4', status: 'Built',
    text: 'A 3D design and building experience on the web, about turning space and structure into a screen.',
    tags: ['3D', 'Website'] },
  { name: 'Motor Game', art: 'road', span: 'w4', status: 'Built',
    text: 'A game built around vehicles, which is a subject I never get tired of.',
    tags: ['Game', 'Vehicles'] },
]

// Lines the hero types out and erases, one after the other
export const phrases = [
  'Developer',
  'Cybersecurity learner',
  'Student at Wesley Grammar SHS',
  'Keyboard player',
]
