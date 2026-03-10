const profileData = {
  name: 'Imtihan Ahmed',
  headline:
    'Building production ML and LLM systems that are efficient, reliable, and aligned with real product outcomes.',
  summary:
    'I build machine learning systems from idea to production. My work includes multilingual LLM extraction, recommendation ranking at scale, and practical evaluation pipelines that improve model quality, reliability, and business impact.',
  linkedin: 'https://www.linkedin.com',
  github: 'https://github.com/imtiahmed',
  profileImage: 'assets/profile-photo.jpg',
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
      tags: ['Multilingual LLM extraction', 'Ray inference pipelines', 'XGBoost modeling'],
      subTags: ['Product ML', 'LLM Systems', 'MLOps'],
      role: 'Senior Machine Learning Engineer',
      company: 'Pinterest',
      period: 'Aug 2024 – Present',
      highlights: [
        'Built multilingual extraction pipelines that combine LLM and SLM models to produce clean, structured product metadata from global web crawl data.',
        'Expanded human-in-the-loop labeling and QA workflows using LLM-assisted review so model feedback cycles became faster and more consistent.',
        'Deployed unified inference services with Ray so distributed extraction jobs could run reliably at scale with better throughput.',
        'Improved XGBoost product-attribute models by unifying training data, which helped offline metrics better match online behavior.',
      ],
    },
    {
      type: 'Industry',
      tags: ['LLM fine-tuning (LoRA/QLoRA)', 'RAG evaluation (Ragas)', 'Transformers + vLLM'],
      subTags: ['GenAI', 'LLM Evaluation', 'Applied Research'],
      role: 'Senior Machine Learning Engineer',
      company: 'Mozilla.ai',
      period: 'Aug 2023 – Aug 2024',
      highlights: [
        'Fine-tuned GPT, Llama, and Mistral models for domain-specific generation with LoRA/QLoRA and quantization to improve efficiency and quality.',
        'Built RAG evaluation pipelines with Ragas and LLM-as-a-judge scoring to track groundedness, relevance, and answer quality in a clear way.',
        'Used Python, SQL, Hugging Face Transformers, vLLM, and LangChain to move LLM experiments into repeatable production-style evaluation cycles.',
      ],
    },
    {
      type: 'Industry',
      tags: ['Recommendation ranking models', 'Candidate generation pipelines', 'Large-scale user signals'],
      subTags: ['Recommender Systems', 'Product ML', 'Data Pipelines'],
      role: 'Machine Learning Engineer',
      company: 'Meta',
      period: 'May 2022 – Jul 2023',
      highlights: [
        'Trained creator recommendation and ranking models on large behavioral datasets, improving offline quality over production baselines.',
        'Built candidate generation pipelines from large-scale user interaction signals to supply strong inputs to ranking models.',
        'Launched new retrieval sources that improved recommendation relevance and produced measurable engagement lift.',
      ],
    },
    {
      type: 'Industry',
      tags: ['Presto SQL optimization', 'Production data pipelines', 'Policy systems'],
      subTags: ['Data Engineering', 'Platform', 'Product Infrastructure'],
      role: 'Software Engineer',
      company: 'Wish',
      period: 'Jan 2022 – May 2022',
      highlights: [
        'Migrated production data pipelines from Treasure Data to Presto, reducing query latency and improving reliability for downstream ML and product systems.',
        'Delivered merchant policy and violations system updates that improved rule-based enforcement in regulated markets.',
      ],
    },
    {
      type: 'Research',
      tags: ['Conversational AI research', 'AWS ML deployment', 'NLP dataset creation'],
      subTags: ['Applied Research', 'NLP', 'Academic Lab'],
      role: 'Graduate Machine Learning Researcher',
      company: 'University of Toronto',
      period: 'Jan 2020 – Dec 2021',
      highlights: [
        'Researched conversational AI for therapy use cases, designed LLM-driven dialogue systems, and created high-quality therapeutic datasets.',
        'Built and deployed an LLM-powered smoking-cessation assistant on AWS SageMaker, Elastic Beanstalk, and Amplify for end-to-end experiments and iteration.',
        'Taught C/C++, Python, and machine learning at the graduate level while mentoring students on applied ML project delivery.',
      ],
    },
    {
      type: 'Industry',
      tags: ['Sentiment NLP', 'Watson ML', 'Disaster response modeling'],
      subTags: ['Applied AI', 'Analytics', 'Enterprise ML'],
      role: 'Software Engineer',
      company: 'IBM',
      period: 'Mar 2019 – Jan 2020',
      highlights: [
        'Built NLP pipelines with Watson Analytics to extract sentiment trends from enterprise communication data and surface actionable insights.',
        'Developed an urban flood detection model with Watson ML to support faster, time-sensitive emergency response decisions.',
      ],
    },
    {
      type: 'Industry',
      tags: ['Performance instrumentation', 'Workload simulation', 'Backend tooling'],
      subTags: ['Backend Engineering', 'Developer Tooling', 'Systems'],
      role: 'Software Engineer',
      company: 'Cisco Systems',
      period: 'May 2018 – Dec 2018',
      highlights: [
        'Built backend instrumentation and throughput dashboards that made it easier to diagnose performance bottlenecks in production systems.',
        'Built workload simulation tooling that generated realistic query traffic patterns and sped up backend feature validation.',
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

function renderTimeline() {
  el.timeline.className = 'timeline';

  el.timeline.innerHTML = profileData.experience
    .map((item) => {
      const tags = (item.tags || [])
        .map((tag) => `<span class="role-tag">${tag}</span>`)
        .join('');

      return `
        <article class="timeline-item interactive-box">
          <div class="experience-header-row">
            <h4>${item.role}</h4>
            <div class="role-tags">${tags}</div>
          </div>
          <p class="meta"><strong>${item.company}</strong> · ${item.period}</p>
          <ul>${item.highlights.map((highlight) => `<li>${highlight}</li>`).join('')}</ul>
        </article>
      `;
    })
    .join('');
}

function renderCards(container, items) {
  container.innerHTML = items
    .map((item) => {
      const link = item.link
        ? `<a class="card-link" href="${item.link}" target="_blank" rel="noreferrer">${item.linkLabel || 'Open'}</a>`
        : '';
      return `<article class="card interactive-box"><h4>${item.title}</h4><p>${item.description}</p>${link}</article>`;
    })
    .join('');
}

function renderTechIcons() {
  el.techIcons.innerHTML = profileData.techStack
    .map(
      (tech) => `
      <article class="tech-item interactive-box">
        <img src="${tech.icon}" alt="${tech.name} logo" loading="lazy" />
        <span>${tech.name}</span>
      </article>
    `
    )
    .join('');
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.section, .hero-content, .footer');
  revealElements.forEach((section) => section.classList.add('reveal'));

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach((section) => section.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      });
    },
    {
      threshold: 0.16,
      rootMargin: '-4% 0px -4% 0px',
    }
  );

  revealElements.forEach((section) => observer.observe(section));
}

function updateThemeButtonText() {
  el.themeToggle.textContent = document.body.classList.contains('dark') ? '☀️ Light' : '🌙 Dark';
}

function initTheme() {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
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
renderTimeline();
renderCards(el.projects, profileData.projects);
renderCards(el.skillsSummary, profileData.skillsSummary);
renderTechIcons();
renderCards(el.education, profileData.education);
initTheme();
initScrollReveal();
