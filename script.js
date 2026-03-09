const profileData = {
  name: 'Your Name',
  headline: 'Product-minded professional focused on impact, growth, and continuous learning.',
  summary:
    'This page is a clean web adaptation of your LinkedIn profile. Replace the sample data below with details from your PDF and keep it version-controlled for easy updates.',
  linkedin: 'https://www.linkedin.com/in/your-linkedin-id',
  stats: [
    { value: '5+', label: 'Years Experience' },
    { value: '12', label: 'Projects Delivered' },
    { value: '4', label: 'Domains Worked In' },
    { value: '10+', label: 'Tools & Platforms' },
  ],
  skills: ['Leadership', 'Project Management', 'Communication', 'Data Analysis', 'Problem Solving', 'Mentorship'],
  experience: [
    {
      type: 'Work',
      role: 'Senior Role Title',
      company: 'Company Name',
      period: '2022 – Present',
      details: 'Led cross-functional initiatives, improved delivery timelines, and drove measurable business impact.',
    },
    {
      type: 'Work',
      role: 'Role Title',
      company: 'Company Name',
      period: '2019 – 2022',
      details: 'Executed strategic projects, collaborated with stakeholders, and optimized core workflows.',
    },
    {
      type: 'Education',
      role: 'Degree / Program',
      company: 'University or Institution',
      period: '2015 – 2019',
      details: 'Built strong foundations in analytics, teamwork, and applied problem-solving.',
    },
  ],
  projects: [
    { title: 'Project Highlight', description: 'A concise, impact-first summary of what you built and why it mattered.' },
    { title: 'Portfolio Initiative', description: 'An example project showcasing technical depth and practical execution.' },
    { title: 'Community Contribution', description: 'Work that reflects leadership, collaboration, or social impact.' },
  ],
  interests: [
    { title: 'AI & Emerging Tech', description: 'Exploring practical AI use-cases and responsible innovation.' },
    { title: 'Career Development', description: 'Helping others grow through mentorship and shared learning.' },
    { title: 'Productivity Systems', description: 'Designing better workflows for teams and personal growth.' },
  ],
};

const el = {
  name: document.getElementById('name'),
  headline: document.getElementById('headline'),
  summary: document.getElementById('summary'),
  linkedinLink: document.getElementById('linkedinLink'),
  statsGrid: document.getElementById('statsGrid'),
  skills: document.getElementById('skills'),
  timeline: document.getElementById('timeline'),
  tabs: document.getElementById('timelineTabs'),
  projects: document.getElementById('projects'),
  interests: document.getElementById('interests'),
  themeToggle: document.getElementById('themeToggle'),
};

function renderTopSection() {
  el.name.textContent = profileData.name;
  el.headline.textContent = profileData.headline;
  el.summary.textContent = profileData.summary;
  el.linkedinLink.href = profileData.linkedin;

  el.statsGrid.innerHTML = profileData.stats
    .map((s) => `<article class="stat-card"><strong>${s.value}</strong><span>${s.label}</span></article>`)
    .join('');

  el.skills.innerHTML = profileData.skills.map((skill) => `<span class="chip">${skill}</span>`).join('');
}

function renderTimeline(selectedType = 'All') {
  const items =
    selectedType === 'All'
      ? profileData.experience
      : profileData.experience.filter((item) => item.type === selectedType);

  el.timeline.innerHTML = items
    .map(
      (item) => `
        <article class="timeline-item">
          <h4>${item.role}</h4>
          <strong>${item.company}</strong> · <span>${item.period}</span>
          <p>${item.details}</p>
        </article>
      `
    )
    .join('');
}

function renderTabs() {
  const tabNames = ['All', ...new Set(profileData.experience.map((item) => item.type))];
  el.tabs.innerHTML = tabNames
    .map((tab, idx) => `<button class="tab ${idx === 0 ? 'active' : ''}" data-tab="${tab}">${tab}</button>`)
    .join('');

  el.tabs.querySelectorAll('.tab').forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      el.tabs.querySelectorAll('.tab').forEach((btn) => btn.classList.remove('active'));
      tabBtn.classList.add('active');
      renderTimeline(tabBtn.dataset.tab);
    });
  });
}

function renderCards(container, cards) {
  container.innerHTML = cards
    .map(
      (card) => `<article class="card"><h4>${card.title}</h4><p>${card.description}</p></article>`
    )
    .join('');
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') document.body.classList.add('dark');

  el.themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  });
}

document.getElementById('scrollToExperience').addEventListener('click', () => {
  document.getElementById('experienceSection').scrollIntoView({ behavior: 'smooth' });
});

renderTopSection();
renderTabs();
renderTimeline();
renderCards(el.projects, profileData.projects);
renderCards(el.interests, profileData.interests);
initTheme();
