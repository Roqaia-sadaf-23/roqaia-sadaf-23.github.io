"use strict";

const translations = {
  en: {
    pageTitle: "Roqaia Sadaf | Flutter & ASP.NET Core Developer",
    metaDescription:
      "Portfolio of Roqaia Sadaf, a Flutter and ASP.NET Core developer in Al Madinah, Saudi Arabia.",
    skipLink: "Skip to main content",
    brandLabel: "Roqaia Sadaf — home",
    primaryNav: "Primary navigation",
    mobileNav: "Mobile navigation",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navExperience: "Experience",
    navContact: "Contact",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    switchArabic: "Switch to Arabic",
    switchEnglish: "Switch to English",
    switchDark: "Switch to dark theme",
    switchLight: "Switch to light theme",
    socialProfiles: "Social profiles",
    githubProfile: "GitHub profile",
    linkedinProfile: "LinkedIn profile",
    availability: "Available for junior developer opportunities",
    heroGreeting: "Hi, I’m Roqaia Sadaf",
    heroRole: "Flutter & ASP.NET Core Developer",
    heroIntro:
      "I build thoughtful Flutter experiences and reliable ASP.NET Core APIs, with a focus on clear architecture, secure integration, and maintainable code.",
    viewProjects: "View My Projects",
    downloadCv: "Download CV",
    aboutKicker: "About me",
    aboutTitle: "Building both sides of the experience.",
    aboutLead:
      "I’m a developer based in Al Madinah, focused on Flutter mobile development and ASP.NET Core backend systems.",
    aboutBody:
      "I enjoy turning product ideas into responsive interfaces backed by well-structured APIs. My work is guided by clean architecture, maintainable code, thoughtful user experience, and continuous learning.",
    principleArchitecture: "Clean architecture",
    principleUx: "User experience",
    principleIntegration: "API integration",
    principleLearning: "Continuous learning",
    skillsKicker: "Core toolkit",
    skillsTitle: "Technologies I work with",
    skillsIntro:
      "A practical stack for building mobile products, backend services, and the web experiences around them.",
    mobileTitle: "Mobile Development",
    responsiveUi: "Responsive UI",
    stateIntegration: "API integration",
    backendTitle: "Backend Development",
    databaseTitle: "Databases",
    dataModeling: "Data modeling",
    webTitle: "Web Fundamentals",
    accessibility: "Accessibility",
    toolsTitle: "Tools & Workflow",
    apiTesting: "API testing",
    projectsKicker: "Selected work",
    projectsTitle: "Featured projects",
    projectsIntro:
      "A closer look at the mobile and backend systems I’m developing through hands-on project work.",
    featuredLabel: "Primary project",
    fullStackProject: "Full-stack mobile & web system",
    shifaaDescription:
      "A bilingual clinic platform connecting patients, doctors, and administrators through a Flutter application, secure ASP.NET Core API, and admin dashboard.",
    technologiesUsed: "Technologies used",
    shifaaFeature1: "Patient and doctor mobile experiences",
    shifaaFeature2: "Appointment booking and available time slots",
    shifaaFeature3: "Medical records, prescriptions, and payments",
    shifaaFeature4: "Arabic and English with full RTL support",
    viewDetails: "View project details",
    viewSource: "View source",
    shifaaAlt: "Shifaa admin dashboard showing clinic operations overview",
    ecommerceAlt: "E-commerce Flutter app product discovery screen",
    ozzoAlt: "Ozzoma Flutter app Arabic onboarding screen",
    applicationProject: "Application project",
    ecommerceTitle: "E-commerce Project",
    ecommerceDescription:
      "A Flutter storefront with onboarding, product discovery, category browsing, product details, and cart management.",
    mobileProject: "Mobile project",
    ozzoTitle: "Ozzoma Mobile Project",
    ozzoDescription:
      "An Arabic Flutter experience with onboarding, account subscription, form validation, and verification flows.",
    approachKicker: "How I build",
    approachTitle: "A thoughtful development approach",
    approachCleanTitle: "Clean & maintainable",
    approachCleanText:
      "Clear boundaries, readable code, and structures that can evolve.",
    approachUiTitle: "Responsive interfaces",
    approachUiText: "Experiences designed to feel natural across screen sizes.",
    approachApiTitle: "Secure integration",
    approachApiText: "Reliable API communication with authentication in mind.",
    approachGitTitle: "Structured workflow",
    approachGitText: "Focused changes and a clear, trackable Git history.",
    approachLearnTitle: "Continuous learning",
    approachLearnText: "Improving through practice, feedback, and curiosity.",
    experienceKicker: "My journey",
    experienceTitle: "Experience & learning",
    experienceIntro:
      "I’m building professional readiness through practical projects and a consistent focus on modern mobile and backend development.",
    freelancePeriod: "Sep 2024 — Jul 2026",
    freelanceTitle: "Junior Flutter Developer / Freelance",
    freelanceText:
      "Built and improved Flutter interfaces and API integrations through independent, portfolio, and client-oriented projects.",
    currentFocus: "Current focus",
    portfolioDevelopment: "Full-stack development",
    portfolioDevelopmentText:
      "Designing end-to-end projects that connect Flutter applications with structured ASP.NET Core services and SQL Server databases.",
    educationYear: "2021",
    educationTitle: "Bachelor’s Degree",
    educationText:
      "E-Commerce — University of the Holy Quran and Islamic Sciences.",
    ongoing: "Ongoing",
    independentLearning: "Independent learning",
    independentLearningText:
      "Deepening my understanding of clean architecture, API security, relational data, and accessible interface design.",
    contactKicker: "Let’s connect",
    contactTitle: "Looking for a developer with a mobile-and-backend mindset?",
    contactText:
      "I’m open to junior developer opportunities and conversations with recruiters or collaborators. The best way to reach me is through LinkedIn or GitHub.",
    location: "Al Madinah, Saudi Arabia",
    connectLinkedin: "Connect on LinkedIn",
    visitGithub: "Visit GitHub profile",
    footerText: "Built with care and curiosity.",
    backToTop: "Back to top",
    closeDetails: "Close project details",
    shifaaDialogIntro:
      "Shifaa brings patient, doctor, and clinic administration workflows into one bilingual system.",
    productSurfaces: "Product surfaces",
    patientDoctorApp: "Flutter app for patients and doctors",
    adminDashboard: "Admin web dashboard",
    secureApi: "ASP.NET Core Web API",
    sqlDatabase: "SQL Server database",
    coreCapabilities: "Core capabilities",
    profilesRecords: "Doctor and patient profiles, medical records",
    bookingPrescriptions: "Booking, time slots, prescriptions, payments",
    authTokens: "JWT authentication and refresh tokens",
    cqrsArchitecture: "CQRS and MediatR architecture",
    bilingualRtl: "Arabic, English, and RTL support",
    viewCombinedRepo: "View combined repository",
    viewAdminRepo: "View admin dashboard",
    viewFlutterRepo: "View Flutter repository",
    viewBackendRepo: "View backend repository",
    ecommerceDialogText:
      "A Flutter shopping experience covering onboarding, catalog discovery, categories, product details, and quantity management in the cart.",
    ozzoDialogText:
      "An Arabic Flutter application demonstrating a guided onboarding journey, subscription data entry, success feedback, and verification-code flows.",
  },
  ar: {
    pageTitle: "رقية صداف | مطورة Flutter وASP.NET Core",
    metaDescription:
      "الملف الشخصي لرقية صداف، مطورة Flutter وASP.NET Core في المدينة المنورة، المملكة العربية السعودية.",
    skipLink: "تخطي إلى المحتوى الرئيسي",
    brandLabel: "رقية صداف — الرئيسية",
    primaryNav: "التنقل الرئيسي",
    mobileNav: "قائمة التنقل للجوال",
    navAbout: "نبذة",
    navSkills: "المهارات",
    navProjects: "المشاريع",
    navExperience: "الخبرة",
    navContact: "التواصل",
    openMenu: "فتح قائمة التنقل",
    closeMenu: "إغلاق قائمة التنقل",
    switchArabic: "التبديل إلى العربية",
    switchEnglish: "التبديل إلى الإنجليزية",
    switchDark: "التبديل إلى الوضع الداكن",
    switchLight: "التبديل إلى الوضع الفاتح",
    socialProfiles: "الملفات المهنية",
    githubProfile: "ملف GitHub",
    linkedinProfile: "ملف LinkedIn",
    availability: "متاحة لفرص مطورة مبتدئة",
    heroGreeting: "مرحباً، أنا رقية صداف",
    heroRole: "مطورة Flutter وASP.NET Core",
    heroIntro:
      "أبني تجارب مدروسة باستخدام Flutter وواجهات API موثوقة باستخدام ASP.NET Core، مع اهتمام بالهندسة الواضحة والتكامل الآمن وسهولة صيانة الكود.",
    viewProjects: "استعرض مشاريعي",
    downloadCv: "تحميل السيرة الذاتية",
    aboutKicker: "نبذة عني",
    aboutTitle: "أبني التجربة من الواجهة إلى الخادم.",
    aboutLead:
      "أنا مطورة من المدينة المنورة، أركز على تطوير تطبيقات Flutter وأنظمة الخلفية باستخدام ASP.NET Core.",
    aboutBody:
      "أستمتع بتحويل أفكار المنتجات إلى واجهات متجاوبة تدعمها واجهات API منظمة. أسترشد في عملي بالهندسة النظيفة والكود القابل للصيانة وتجربة المستخدم المدروسة والتعلم المستمر.",
    principleArchitecture: "الهندسة النظيفة",
    principleUx: "تجربة المستخدم",
    principleIntegration: "تكامل API",
    principleLearning: "التعلم المستمر",
    skillsKicker: "أدواتي الأساسية",
    skillsTitle: "التقنيات التي أعمل بها",
    skillsIntro:
      "حزمة عملية لبناء منتجات الجوال وخدمات الخلفية وتجارب الويب المحيطة بها.",
    mobileTitle: "تطوير الجوال",
    responsiveUi: "واجهات متجاوبة",
    stateIntegration: "تكامل API",
    backendTitle: "تطوير الخلفية",
    databaseTitle: "قواعد البيانات",
    dataModeling: "نمذجة البيانات",
    webTitle: "أساسيات الويب",
    accessibility: "سهولة الوصول",
    toolsTitle: "الأدوات وسير العمل",
    apiTesting: "اختبار API",
    projectsKicker: "أعمال مختارة",
    projectsTitle: "المشاريع المميزة",
    projectsIntro:
      "نظرة أقرب على أنظمة الجوال والخلفية التي أطورها من خلال العمل العملي على المشاريع.",
    featuredLabel: "المشروع الرئيسي",
    fullStackProject: "نظام متكامل للجوال والويب",
    shifaaDescription:
      "منصة عيادات ثنائية اللغة تربط المرضى والأطباء والإدارة عبر تطبيق Flutter وواجهة ASP.NET Core آمنة ولوحة تحكم إدارية.",
    technologiesUsed: "التقنيات المستخدمة",
    shifaaFeature1: "تجارب جوال للمرضى والأطباء",
    shifaaFeature2: "حجز المواعيد والأوقات المتاحة",
    shifaaFeature3: "السجلات الطبية والوصفات والمدفوعات",
    shifaaFeature4: "العربية والإنجليزية مع دعم كامل لـ RTL",
    viewDetails: "عرض تفاصيل المشروع",
    viewSource: "عرض الكود",
    shifaaAlt: "لوحة تحكم شفاء تعرض نظرة عامة على عمليات العيادة",
    ecommerceAlt: "شاشة استكشاف المنتجات في تطبيق المتجر المبني بـ Flutter",
    ozzoAlt: "شاشة تعريفية عربية في تطبيق أزوما المبني بـ Flutter",
    applicationProject: "مشروع تطبيقي",
    ecommerceTitle: "مشروع التجارة الإلكترونية",
    ecommerceDescription:
      "متجر مبني بـ Flutter يضم شاشات تعريفية واستكشاف المنتجات والتصنيفات وتفاصيل المنتج وإدارة السلة.",
    mobileProject: "مشروع جوال",
    ozzoTitle: "مشروع أزوما للجوال",
    ozzoDescription:
      "تجربة Flutter عربية تشمل الشاشات التعريفية والاشتراك والتحقق من البيانات ورمز التأكيد.",
    approachKicker: "أسلوبي في البناء",
    approachTitle: "منهج تطوير مدروس",
    approachCleanTitle: "نظيف وقابل للصيانة",
    approachCleanText: "حدود واضحة وكود مقروء وبنية قابلة للتطور.",
    approachUiTitle: "واجهات متجاوبة",
    approachUiText: "تجارب مصممة لتكون طبيعية على مختلف أحجام الشاشات.",
    approachApiTitle: "تكامل آمن",
    approachApiText: "تواصل موثوق مع واجهات API يراعي المصادقة.",
    approachGitTitle: "سير عمل منظم",
    approachGitText: "تغييرات مركزة وسجل Git واضح وقابل للتتبع.",
    approachLearnTitle: "تعلم مستمر",
    approachLearnText: "تطور من خلال الممارسة والملاحظات والفضول.",
    experienceKicker: "رحلتي",
    experienceTitle: "الخبرة والتعلم",
    experienceIntro:
      "أبني جاهزيتي المهنية من خلال مشاريع عملية وتركيز مستمر على تطوير تطبيقات الجوال وأنظمة الخلفية الحديثة.",
    freelancePeriod: "سبتمبر 2024 — يوليو 2026",
    freelanceTitle: "مطورة Flutter مبتدئة / عمل حر",
    freelanceText:
      "بنيت وطورت واجهات Flutter وعمليات التكامل مع واجهات API من خلال مشاريع مستقلة ومشاريع ملف أعمال ومشاريع موجهة للعملاء.",
    currentFocus: "التركيز الحالي",
    portfolioDevelopment: "التطوير المتكامل",
    portfolioDevelopmentText:
      "تصميم مشاريع متكاملة تربط تطبيقات Flutter بخدمات ASP.NET Core منظمة وقواعد بيانات SQL Server.",
    educationYear: "2021",
    educationTitle: "درجة البكالوريوس",
    educationText:
      "التجارة الإلكترونية — جامعة القرآن الكريم والعلوم الإسلامية.",
    ongoing: "مستمر",
    independentLearning: "التعلم المستقل",
    independentLearningText:
      "تعميق فهمي للهندسة النظيفة وأمن واجهات API والبيانات العلائقية وتصميم الواجهات سهلة الوصول.",
    contactKicker: "لنتواصل",
    contactTitle: "هل تبحثون عن مطورة تجمع بين الجوال والخلفية؟",
    contactText:
      "أنا منفتحة على فرص المطورين المبتدئين والتواصل مع مسؤولي التوظيف والمتعاونين. أفضل طريقة للوصول إليّ هي عبر LinkedIn أو GitHub.",
    location: "المدينة المنورة، المملكة العربية السعودية",
    connectLinkedin: "تواصل عبر LinkedIn",
    visitGithub: "زيارة ملف GitHub",
    footerText: "بُني بعناية وفضول.",
    backToTop: "العودة إلى الأعلى",
    closeDetails: "إغلاق تفاصيل المشروع",
    shifaaDialogIntro:
      "يجمع شفاء مسارات عمل المرضى والأطباء وإدارة العيادة في نظام واحد ثنائي اللغة.",
    productSurfaces: "واجهات المنتج",
    patientDoctorApp: "تطبيق Flutter للمرضى والأطباء",
    adminDashboard: "لوحة تحكم ويب للإدارة",
    secureApi: "واجهة ASP.NET Core Web API",
    sqlDatabase: "قاعدة بيانات SQL Server",
    coreCapabilities: "الإمكانات الأساسية",
    profilesRecords: "ملفات الأطباء والمرضى والسجلات الطبية",
    bookingPrescriptions: "الحجز والأوقات والوصفات والمدفوعات",
    authTokens: "مصادقة JWT ورموز التحديث",
    cqrsArchitecture: "بنية CQRS وMediatR",
    bilingualRtl: "العربية والإنجليزية ودعم RTL",
    viewCombinedRepo: "عرض المستودع الموحّد",
    viewAdminRepo: "عرض لوحة تحكم الإدارة",
    viewFlutterRepo: "عرض مستودع Flutter",
    viewBackendRepo: "عرض مستودع الـ Backend",
    ecommerceDialogText:
      "تجربة تسوق مبنية بـ Flutter تشمل الشاشات التعريفية واستكشاف الكتالوج والتصنيفات وتفاصيل المنتجات وإدارة الكميات في السلة.",
    ozzoDialogText:
      "تطبيق Flutter عربي يعرض رحلة تعريفية موجهة وإدخال بيانات الاشتراك ورسائل نجاح ورمز تحقق.",
  },
};

const root = document.documentElement;
const header = document.getElementById("site-header");
const languageButton = document.getElementById("language-toggle");
const themeButton = document.getElementById("theme-toggle");
const menuButton = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const backToTop = document.getElementById("back-to-top");
const metaDescription = document.querySelector('meta[name="description"]');
const metaThemeColor = document.querySelector('meta[name="theme-color"]');

function readPreference(key) {
  try {
    return localStorage.getItem(key);
  } catch (_) {
    return null;
  }
}

function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (_) {
    /* Preferences remain session-only if storage is unavailable. */
  }
}

let currentLanguage =
  readPreference("portfolio-language") === "ar" ? "ar" : "en";
const savedTheme = readPreference("portfolio-theme");
let currentTheme =
  savedTheme === "dark" || savedTheme === "light"
    ? savedTheme
    : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

function translatePage(language) {
  const copy = translations[language];
  root.lang = language;
  root.dir = language === "ar" ? "rtl" : "ltr";
  document.title = copy.pageTitle;
  metaDescription.setAttribute("content", copy.metaDescription);
  document
    .querySelector('meta[property="og:locale"]')
    .setAttribute("content", language === "ar" ? "ar_SA" : "en_US");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = copy[element.dataset.i18nAria];
    if (value) element.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const value = copy[element.dataset.i18nTitle];
    if (value) element.title = value;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = copy[element.dataset.i18nAlt];
    if (value) element.alt = value;
  });

  languageButton.querySelector(".language-current").textContent =
    language === "en" ? "AR" : "EN";
  languageButton.setAttribute(
    "aria-label",
    language === "en" ? copy.switchArabic : copy.switchEnglish,
  );
  languageButton.title =
    language === "en" ? copy.switchArabic : copy.switchEnglish;
  menuButton.setAttribute(
    "aria-label",
    menuButton.getAttribute("aria-expanded") === "true"
      ? copy.closeMenu
      : copy.openMenu,
  );
  currentLanguage = language;
  savePreference("portfolio-language", language);
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  currentTheme = theme;
  const copy = translations[currentLanguage];
  const isDark = theme === "dark";
  themeButton.setAttribute(
    "aria-label",
    isDark ? copy.switchLight : copy.switchDark,
  );
  themeButton.title = isDark ? copy.switchLight : copy.switchDark;
  metaThemeColor.setAttribute("content", isDark ? "#09172a" : "#f7f9fc");
  savePreference("portfolio-theme", theme);
}

function closeMobileMenu(restoreFocus = false) {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", translations[currentLanguage].openMenu);
  mobileNav.hidden = true;
  header.classList.remove("menu-open");
  document.body.style.overflow = "";
  if (restoreFocus) menuButton.focus();
}

function openMobileMenu() {
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute(
    "aria-label",
    translations[currentLanguage].closeMenu,
  );
  mobileNav.hidden = false;
  header.classList.add("menu-open");
  document.body.style.overflow = "hidden";
  mobileNav.querySelector("a").focus();
}

languageButton.addEventListener("click", () => {
  translatePage(currentLanguage === "en" ? "ar" : "en");
  applyTheme(currentTheme);
});
themeButton.addEventListener("click", () =>
  applyTheme(currentTheme === "light" ? "dark" : "light"),
);
menuButton.addEventListener("click", () =>
  menuButton.getAttribute("aria-expanded") === "true"
    ? closeMobileMenu()
    : openMobileMenu(),
);
mobileNav
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", () => closeMobileMenu()));

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  )
    closeMobileMenu(true);
});

window.addEventListener("resize", () => {
  if (
    window.innerWidth > 860 &&
    menuButton.getAttribute("aria-expanded") === "true"
  )
    closeMobileMenu();
});

function updateScrollUi() {
  const scrolled = window.scrollY > 18;
  header.classList.toggle("scrolled", scrolled);
  backToTop.classList.toggle("visible", window.scrollY > 650);
}
window.addEventListener("scroll", updateScrollUi, { passive: true });
backToTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" }),
);

const sections = [...document.querySelectorAll("main section[id]")].filter(
  (section) => section.id !== "home",
);
const navLinks = document.querySelectorAll("[data-section]");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      const active = link.dataset.section === visible.target.id;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  },
  { rootMargin: "-25% 0px -55%", threshold: [0.05, 0.2, 0.5] },
);
sections.forEach((section) => sectionObserver.observe(section));

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -35px" },
  );
  document
    .querySelectorAll(".reveal")
    .forEach((element) => revealObserver.observe(element));
} else {
  document
    .querySelectorAll(".reveal")
    .forEach((element) => element.classList.add("is-visible"));
}

document.querySelectorAll(".project-details").forEach((button) => {
  button.addEventListener("click", () =>
    document.getElementById(button.dataset.dialog).showModal(),
  );
});
document.querySelectorAll(".project-dialog").forEach((dialog) => {
  dialog
    .querySelector(".dialog-close")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const outside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;
    if (outside) dialog.close();
  });
});

document.getElementById("current-year").textContent = new Date().getFullYear();
translatePage(currentLanguage);
applyTheme(currentTheme);
updateScrollUi();
