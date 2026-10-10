
/* =========================================================
   PROFILE LINKS
========================================================= */

const profileLinks = {
  linkedin: "#",
  leetcode: "#"};

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
{
    title: "AI-Powered Gmail Auto-Reply Automation",
    category: "Agentic AI | Workflow Automation",
    description:
      "Developed an AI-powered email automation workflow using n8n, Gmail, and AI. The workflow detects incoming emails, analyzes their content, generates context-aware professional replies, and sends automated responses through Gmail.",
    technologies: [
      "n8n",
      "Agentic AI",
      "Gmail",
      "AI Automation",
      "Workflow Automation"
    ],
    github: "",
    demo: ""
  },


  {
    title: "Student Performance Analysis",
    category: "DATA ANALYTICS",
    description:
      "Analyze student marks, subject-wise performance, and academic trends using Python data analysis and visualization techniques.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
    image: "projects/student-performance.svg",
    github: "#",
    demo: "#"
  },
  {
    title: "Smart Expenses Tracker",
    category: "FINTECH",
    description:
      "A personal expense tracking project designed to record expenses, organize spending by category, and monitor monthly budgets.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "projects/smart-expenses.svg",
    github: "#",
    demo: "https://smexpenses.vercel.app/"
  },
  {
    title: "E-Commerce Sales Analysis",
    category: "DATA ANALYTICS",
    description:
      "Analyze e-commerce sales data using Python and Power BI to identify sales patterns and create business dashboards.",
    technologies: ["Python", "Pandas", "Power BI"],
    image: "projects/ecommerce.svg",
    github: "#",
    demo: "#"
  },
  {
    title: "LoanEase",
    category: "FINTECH",
    description:
      "A loan eligibility and EMI calculator concept for estimating monthly repayments and exploring loan options.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "projects/loanease.svg",
    github: "#",
    demo: "#"
  }
];

/* =========================================================
   CERTIFICATES
========================================================= */

const certificates = [
  {
    title: "Data Analytics with Python and Power BI",
    issuer: "EduSkills",
    date: "2026",
    image: "assests/cer1.png",
    link: "#"
  },
  {
    title: "Java Full Stack Developer Virtual Internship",
    issuer: "EduSkills Academy",
    date: "October – December 2025",
    image: "assests/cer2.png",
    link: "#"
  },

{
  title: "Digital Edge 101 - Gold Certificate",
  issuer: "FutureSkills Prime - NASSCOM",
  date: "7 July 2026",
  image: "assests/cer11.png",
  link: ""
},


  {
  title: "Agentic AI Internship",
  issuer: "CodeCraft Learning-Hub Pvt. Ltd.",
  date: "30 July 2026",
  image: "assests/cer9.png",
  link: ""
},
  {
  title: "Microsoft Excel Using AI Workshop",
  issuer: "OfficeMaster",
  date: "17 June 2026",
  image: "assests/cer5.png",
  link: ""
}
,

{
  title: "Foundational Course on Applied Machine Learning and AI",
  issuer: "CII Centre for AI / IndiaAI",
  date: "26 June 2026",
  image: "assests/cer7.png",
  link: ""
},



{
  title: "Website Development",
  issuer: "ANITS - Department of CSE (DS)",
  date: "6 January 2026",
  image: "assests/cer6.png",
  link: ""
},

{
    title: "Digital Edge 101",
    issuer: "FutureSkills Prime - NASSCOM",
    date: "25 March 2026",
    image: "assests/cer4.png",
    link: ""
  },
  {
    title: "Python 3.4.3 Training",
    issuer: "Spoken Tutorial, IIT Bombay - EduPyramids",
    date: "6 December 2025",
    image: "assests/cer3.png",
    link: ""
  },


{
  title: "GenAI Powered Data Analytics Job Simulation",
  issuer: "Tata - Forage",
  date: "11 February 2026",
  image: "assests/cer8.png",
  link: ""
},

{
  title: "Essential SQL Skills for Data Beginners",
  issuer: "Analytics Vidhya",
  date: "8 September 2026",
  image: "assests/cer10.png",
  link: ""
},

];






/* =========================================================
   LINK BUTTON
========================================================= */

function linkButton(url, text) {
  if (!url || url === "#") return "";

  return `
    <a href="${url}"
       target="_blank"
       rel="noopener noreferrer">
      ${text} ↗
    </a>
  `;
}

/* =========================================================
   RENDER PROJECTS
========================================================= */

function renderProjects() {
  const grid = document.getElementById("projectGrid");

  if (!grid) return;

  grid.innerHTML = projects.map((project, index) => `
    <article class="project ${index === 0 ? "featured" : ""}">
      <div class="project-top">
        <span>${project.category}</span>
        <span>${String(index + 1).padStart(2, "0")}</span>
      </div>

      <h3>${project.title}</h3>
      <p>${project.description}</p>

      <div class="chips">
        ${project.technologies
          .map(technology => `<span>${technology}</span>`)
          .join("")}
      </div>

      <div class="project-links">
        ${linkButton(project.github, "GitHub")}
        ${linkButton(project.demo, "Live Demo")}
      </div>
    </article>
  `).join("");
}

/* =========================================================
   RENDER CERTIFICATES
========================================================= */

function renderCertificates() {
  const grid = document.getElementById("certificateGrid");

  if (!grid) return;

  grid.innerHTML = certificates.map(certificate => `
    <article class="certificate">
      <div class="cert-img">
        <img
          src="${certificate.image}"
          alt="${certificate.title}"
          loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"
        >
        <div class="placeholder" style="display:none">🏆</div>
      </div>

      <div class="cert-body">
        <h3>${certificate.title}</h3>
        <p>${certificate.issuer} • ${certificate.date}</p>
        ${linkButton(certificate.link, "View certificate")}
      </div>
    </article>
  `).join("");
}

/* =========================================================
   SOCIAL PROFILE LINKS
========================================================= */

function setProfile(id, url) {
  const element = document.getElementById(id);

  if (!element) return;

  if (url && url !== "#") {
    element.href = url;
    element.target = "_blank";
    element.rel = "noopener noreferrer";
  }
}

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function setupMobileMenu() {
  const menu = document.querySelector(".menu");
  const navLinks = document.querySelector(".navlinks");

  if (!menu || !navLinks) return;

  menu.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(isOpen));
    menu.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

/* =========================================================
   SCROLL ANIMATION
========================================================= */

function setupScrollAnimations() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach(element => element.classList.add("show"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => observer.observe(element));
}

/* =========================================================
   LIGHT / DARK MODE
   Only one theme handler — no duplicate declarations
========================================================= */

function setupThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");

  if (!themeToggle) return;

  function applyTheme(theme) {
    const selectedTheme = theme === "light" ? "light" : "dark";

    document.body.dataset.theme = selectedTheme;

    themeToggle.textContent =
      selectedTheme === "light" ? "🌙 Dark" : "☀️ Light";

    themeToggle.setAttribute(
      "aria-label",
      selectedTheme === "light"
        ? "Switch to dark mode"
        : "Switch to light mode"
    );

    themeToggle.setAttribute("aria-pressed", String(selectedTheme === "light"));

    try {
      localStorage.setItem("portfolio-theme", selectedTheme);
    } catch (error) {
      // Theme still works if browser storage is unavailable.
    }
  }

  let savedTheme = "dark";

  try {
    savedTheme = localStorage.getItem("portfolio-theme") || "dark";
  } catch (error) {
    // Use dark mode when browser storage is unavailable.
  }

  applyTheme(savedTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.dataset.theme;
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

renderProjects();
renderCertificates();

setProfile("linkedinTop", profileLinks.linkedin);
setProfile("linkedinCard", profileLinks.linkedin);
setProfile("leetcodeTop", profileLinks.leetcode);
setProfile("leetcodeCard", profileLinks.leetcode);

setupMobileMenu();
setupScrollAnimations();
setupThemeToggle();
