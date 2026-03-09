const profileData = {
  name: 'Imtihan Ahmed',
  headline:
    'Building production ML and LLM systems that are efficient, reliable, and aligned with real product outcomes.',
  summary:
    'I work at the intersection of machine learning engineering, LLM systems, and product impact. My recent work spans multilingual extraction, recommendation quality, evaluation frameworks for RAG, and scalable model deployment.',
  linkedin: 'https://www.linkedin.com',
  github: 'https://github.com/imtiahmed',
  profileImage: 'https://github.com/imtiahmed.png',
  focusAreas: [
    {
      title: 'Production LLM Systems',
      description:
        'Designed end-to-end LLM workflows for extraction and generation use cases, including inference optimization and human-in-the-loop validation.',
    },
    {
      title: 'Recommendation & Ranking',
      description:
        'Improved candidate generation and model quality for large-scale recommendation systems with measurable engagement gains.',
    },
    {
      title: 'Evaluation & Reliability',
      description:
        'Built robust quality pipelines using framework-based evaluation and tighter offline/online alignment to improve model trustworthiness.',
    },
  ],
  experience: [
    {
      type: 'Industry',
      role: 'Senior Machine Learning Engineer',
      company: 'Pinterest',
      period: 'Aug 2024 – Present',
      highlights: [
        'Developed multilingual content extraction pipelines with integrated LLM/SLM workflows for international crawling and pin metadata generation.',
        'Enhanced human-in-the-loop validation with LLM-based flows to scale data processing for labeling and quality control.',
        'Unified inference endpoints and deployed Ray-based pipelines for large-scale, automated web-crawled extraction systems.',
        'Improved product attribute detection by unifying training data across XGBoost extraction models to better align offline/online behavior.',
      ],
    },
    {
      type: 'Industry',
      role: 'Senior Machine Learning Engineer',
      company: 'Mozilla.ai',
      period: 'Aug 2023 – Aug 2024',
      highlights: [
        'Tailored GPT, LLAMA, and Mistral models for domain-specific generation using fine-tuning, LoRA adaptation, and quantization.',
        'Integrated the Ragas framework with LLM-as-a-judge evaluation workflows for improved RAG quality assessment.',
        'Worked across Python, SQL, HF Transformers, Ragas, vLLM, and LangChain to operationalize LLM development.',
      ],
    },
    {
      type: 'Industry',
      role: 'Machine Learning Engineer',
      company: 'Meta',
      period: 'May 2022 – Jul 2023',
      highlights: [
        'Trained new creator recommendation models and improved offline model performance against prior baselines.',
        'Built data pipelines generating recommendation candidates from large-scale user interaction datasets.',
        'Introduced new candidate sources that improved recommendation quality and product engagement.',
      ],
    },
    {
      type: 'Industry',
      role: 'Software Engineer',
      company: 'Wish',
      period: 'Jan 2022 – May 2022',
      highlights: [
        'Migrated data pipelines from Treasure Data to in-house Presto for faster and more cost-effective querying.',
        'Owned merchant policy and violations feature updates to support local regulatory compliance needs.',
      ],
    },
    {
      type: 'Research',
      role: 'Graduate Machine Learning Researcher',
      company: 'University of Toronto',
      period: 'Jan 2020 – Dec 2021',
      highlights: [
        'Designed and evaluated LLM-based conversation therapy systems and generated high-quality therapeutic dialogue datasets.',
        'Built and deployed an LLM-powered smoking cessation chatbot on AWS SageMaker, Elastic Beanstalk, and Amplify.',
        'Taught C/C++, Python, ML, and project management across graduate-level courses.',
      ],
    },
    {
      type: 'Industry',
      role: 'Software Engineer',
      company: 'IBM',
      period: 'Mar 2019 – Jan 2020',
      highlights: [
        'Extracted sentiment metrics from IBM internal Slack channels using Watson Analytics for engagement insights.',
        'Built an urban flood detection system using Watson ML to support emergency response operations.',
      ],
    },
    {
      type: 'Industry',
      role: 'Software Engineer',
      company: 'Cisco Systems',
      period: 'May 2018 – Dec 2018',
      highlights: [
        'Developed throughput measurement tooling and dashboards to accelerate production infrastructure debugging.',
        'Built a query generator for simulating varied workloads with minimal code for faster feature testing.',
      ],
    },
  ],
  projects: [
    {
      title: 'Cross-Domain Web Information Extraction at Pinterest (2025)',
      description: 'ACM publication on scalable extraction systems.',
      link: 'https://dl.acm.org/doi/10.1145/3711896.3737207',
      linkLabel: 'Read publication',
    },
    {
      title: 'Working with Llama 3 (2024)',
      description: 'Course on running local LLMs, fine-tuning, RAG systems, and deployment patterns.',
      link: 'https://github.com/imtiahmed',
      linkLabel: 'See GitHub profile',
    },
    {
      title: 'Chatbot for Smoking Cessation (2020–2022)',
      description: 'LLM-powered therapeutic conversation system for smoking cessation support.',
      link: 'https://doi.org/10.2196/49132',
      linkLabel: 'View DOI',
    },
  ],
  skillsSummary: [
    {
      title: 'End-to-End ML Ownership',
      description:
        'From data pipelines and candidate generation to model training, evaluation, and deployment, with repeated delivery in high-scale consumer environments.',
    },
    {
      title: 'LLM Engineering',
      description:
        'Hands-on with fine-tuning, adaptation (LoRA/QLoRA), quantization, distillation, and serving stacks for production-oriented LLM applications.',
    },
    {
      title: 'Platform & Infrastructure Depth',
      description:
        'Strong systems experience with distributed compute, orchestration, and streaming/data tooling that supports robust ML operations.',
    },
  ],
  techStack: [
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/FFFFFF' },
    { name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus/00599C' },
    { name: 'SQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'PyTorch', icon: 'https://cdn.simpleicons.org/pytorch/EE4C2C' },
    { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
    { name: 'JAX', icon: 'https://cdn.simpleicons.org/google/4285F4' },
    { name: 'scikit-learn', icon: 'https://cdn.simpleicons.org/scikitlearn/F7931E' },
    { name: 'Transformers', icon: 'https://cdn.simpleicons.org/huggingface/FFD21E' },
    { name: 'XGBoost', icon: 'https://xgboost.ai/images/logo/xgboost-logo.png' },
    { name: 'Ray', icon: 'https://cdn.simpleicons.org/ray/028CF0' },
    { name: 'Kubernetes', icon: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
    { name: 'Spark', icon: 'https://cdn.simpleicons.org/apachespark/E25A1C' },
    { name: 'Airflow', icon: 'https://cdn.simpleicons.org/apacheairflow/017CEE' },
    { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
    { name: 'Kafka', icon: 'https://cdn.simpleicons.org/apachekafka/FFFFFF' },
  ],
  education: [
    {
      title: 'University of Toronto',
      description: 'Master of Applied Sciences (M.A.Sc), Electrical & Computer Engineering',
    },
    {
      title: 'University of Alberta',
      description: 'Bachelor of Science (B.Sc), Specialization in Computer Science and Mathematics',
    },
  ],
};

const el = {
  name: document.getElementById('name'),
  headline: document.getElementById('headline'),
  summary: document.getElementById('summary'),
  linkedinLink: document.getElementById('linkedinLink'),
  githubLink: document.getElementById('githubLink'),
  profileImage: document.getElementById('profileImage'),
  focusGrid: document.getElementById('focusGrid'),
  timeline: document.getElementById('timeline'),
  tabs: document.getElementById('timelineTabs'),
  projects: document.getElementById('projects'),
  skillsSummary: document.getElementById('skillsSummary'),
  techIcons: document.getElementById('techIcons'),
  education: document.getElementById('education'),
  themeToggle: document.getElementById('themeToggle'),
};

function renderTopSection() {
  el.name.textContent = profileData.name;
  el.headline.textContent = profileData.headline;
  el.summary.textContent = profileData.summary;
  el.linkedinLink.href = profileData.linkedin;
  el.githubLink.href = profileData.github;
  el.profileImage.src = profileData.profileImage;
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
          <p class="meta"><strong>${item.company}</strong> · ${item.period}</p>
          <ul>${item.highlights.map((highlight) => `<li>${highlight}</li>`).join('')}</ul>
        </article>
      `
    )
    .join('');
}

function renderTabs() {
  const tabs = ['All', ...new Set(profileData.experience.map((item) => item.type))];
  el.tabs.innerHTML = tabs
    .map((tab, index) => `<button class="tab ${index === 0 ? 'active' : ''}" data-tab="${tab}">${tab}</button>`)
    .join('');

  el.tabs.querySelectorAll('.tab').forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      el.tabs.querySelectorAll('.tab').forEach((btn) => btn.classList.remove('active'));
      tabBtn.classList.add('active');
      renderTimeline(tabBtn.dataset.tab);
    });
  });
}

function renderCards(container, items) {
  container.innerHTML = items
    .map((item) => {
      const link = item.link
        ? `<a class="card-link" href="${item.link}" target="_blank" rel="noreferrer">${item.linkLabel || 'Open'}</a>`
        : '';
      return `<article class="card"><h4>${item.title}</h4><p>${item.description}</p>${link}</article>`;
    })
    .join('');
}

function renderTechIcons() {
  el.techIcons.innerHTML = profileData.techStack
    .map(
      (tech) => `
      <article class="tech-item">
        <img src="${tech.icon}" alt="${tech.name} logo" loading="lazy" />
        <span>${tech.name}</span>
      </article>
    `
    )
    .join('');
}

function updateThemeButtonText() {
  el.themeToggle.textContent = document.body.classList.contains('dark') ? '☀️ Light' : '🌙 Dark';
}

function initTheme() {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'light') {
    document.body.classList.remove('dark');
  } else {
    document.body.classList.add('dark');
  }
  updateThemeButtonText();

  el.themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    updateThemeButtonText();
  });
}

renderTopSection();
renderCards(el.focusGrid, profileData.focusAreas);
renderTabs();
renderTimeline();
renderCards(el.projects, profileData.projects);
renderCards(el.skillsSummary, profileData.skillsSummary);
renderTechIcons();
renderCards(el.education, profileData.education);
initTheme();
