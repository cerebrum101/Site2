const REVIEW_1_SRC = new URL("./assets/reviews/IMG_9326.jpg", import.meta.url).href;
const REVIEW_2_SRC = new URL("./assets/reviews/Screenshot 2026-04-17 at 22.02.30.png", import.meta.url).href;
const REVIEW_3_SRC = new URL("./assets/reviews/photo_5408960505986094813_y.jpg", import.meta.url).href;

const DATA = {
  en: {
    meta: {
      name: "Atay Kim",
      title: "Mathematics student and tutor.",
      email: "ataykimwork@gmail.com",
      telegram: "https://t.me/ataywork",
      github: "https://github.com/cerebrum101",
      linkedin: "https://linkedin.com/in/ataykim",
    },
    now:
      "Research Assistant at INMET, studying mathematical optimization of energy systems in Kazakhstan. " +
      "Education Consultant at BI Education, building AI-driven lessons for UNT preparation. " +
      "Organizing committee member at Beyond Curriculum, running international contests with 2000+ participants.",
    experience: [
      {
        role: "Education Consultant",
        org: "BI Education",
        url: "https://aitanym.kz",
        date: "Jan 2026 – Present",
        line: "Tuning AI personalized learning algorithms; created 500+ practice problems and 10+ adaptive lessons for UNT prep.",
      },
      {
        role: "Organizing Committee Member",
        org: "Beyond Curriculum",
        url: "https://www.bc-pf.org",
        date: "Nov 2023 – Present",
        line: "Organized 5 international contests (2000+ participants, 4 countries). Managed $20k+ budgets, 130-person teams, and partner communications with Chevron, Air Astana, Nazarbayev Foundation.",
      },
      {
        role: "Math Track Lead",
        org: "Olscience Circles",
        date: "May – Nov 2023",
        line: "Led 10 mentors, 30+ lessons, 100+ hours of instruction, and 2 olympiad camps reaching 60+ students across the CIS region.",
      },
      {
        role: "Private Tutor",
        org: "Self-employed",
        date: "2019 – Present",
        line: "25+ students raised their level from C to a confident A. Many entered the top 10% of their cohort in math and physics.",
      },
    ],
    research: [
      {
        role: "Research Intern",
        org: "PDE Center, Ghent University",
        url: "https://www.ugent.be/en/research/research-groups/pde",
        date: "Jun – Jul 2026",
        line:
          "Under Bolys Saiatbek (PDE Center): Fourier Neural Operators for interactive fluid simulation. " +
          "Cornerstone — trained an FNO to advance a 64×64 smoke/velocity field one timestep, matching a classical solver, so sources and sinks update in milliseconds instead of re-solving the full PDE. " +
          "Report covers FNO theory (spectral mixing, discretization invariance) and limits (blur, periodic box, training distribution).",
        links: [
          { label: "simulation", url: "https://fno.atay.top" },
          { label: "report", url: "/fno_report.pdf" },
        ],
      },
      {
        role: "Research Assistant",
        org: "INMET — Center of Digital Modelling and AI in Energy",
        date: "Jan 2026 – Present",
        line: "Gathered data on high-tech energy companies in Kazakhstan (wind, solar, hydrogen, nuclear). Applied mathematical optimization methods to assess financial risks, potentials, and benefits.",
      },
    ],
    projects: [
      {
        name: "Course Planner",
        url: "https://courseplan.app",
        line: "Mind-map visualizer for NU course prerequisites. 2000+ active users every semester — 30% of all undergrads.",
      },
      {
        name: "Guide for Applicants",
        url: "https://guideforapplicants.tech",
        line: "Article system about university admissions abroad and in CIS. 4000+ users. Built the site and CMS from scratch.",
      },
      {
        name: "marytravel.kz",
        url: "https://marytravel.kz",
        line: "Website for a travel company. Designed and developed end-to-end.",
      },
    ],
    education: [
      { degree: "BSc Mathematics", school: "Nazarbayev University", date: "2023 – Present" },
      { degree: "Data Analysis Fundamentals", school: "Astana Hub × Digital & AI Ministry × Udacity", date: "Apr – Aug 2025" },
    ],
    coursework: [
      "Calculus I–III",
      "Differential Equations",
      "Linear Algebra",
      "Discrete Mathematics",
      "Abstract Algebra",
      "Probability",
      "Numerical Methods",
      "Research Methods",
      "Physics I & II",
      "Programming Fundamentals",
    ],
    awards: [
      { year: "2024", text: "City University of Hong Kong — USD 80,000+ full-tuition scholarship offer" },
      { year: "2024", text: "Türkiye Bursları — full-ride stipend to Yıldız Technical University, Istanbul" },
      { year: "2022", text: "International Youth Math Contest — Silver Medal, best result from Kazakhstan" },
      { year: "2021–23", text: "International Zhautykov Olympiad — selected participant" },
      { year: "2021", text: "National Math Olympiad, Kyrgyzstan — absolute 2nd place" },
      { year: "2021", text: "American Math Competition (AMC 10) — 1st Place" },
    ],
    tests: ["SAT 1480 (Math 800)", "NUET 181", "UNT 120"],
    skills: {
      stack: "Python, JavaScript, React, TypeScript, Next.js, HTML/CSS",
      tools: "Figma, Photoshop, Illustrator, LaTeX, MATLAB, Office 365",
      languages: "English (C1 – IELTS 7.5), Russian (native), Kazakh, Kyrgyz",
    },
    tutoring: {
      tagline: "Tutor · Math · Physics · Computer Science",
      prep: [
        "UNT / ЕНТ (math, physics, CS)",
        "SOR/SOCh — state schools, NIS (НИШ), RPMS (РФМШ), BIL",
        "SAT Math · NUET (Math + Critical Thinking)",
        "A-Level · IGCSE · Advanced Placement",
        "Math olympiads (junior & middle grades)",
      ],
      uniCourses: ["Calculus I–III", "Linear Algebra", "Discrete Math", "Physics I & II"],
      myScores: ["SAT 1480", "UNT / ЕНТ 120/140 (phys-math / inf-math)", "NUET 181 (Math 103 + Critical Thinking 78)"],
      studentResults: [
        "SAT Math: 590 → 750 in 6 weeks",
        "SAT Math: 780 in 8 weeks (first attempt)",
        "NUET: 177 in 9 weeks",
        "Admissions: NU, NYUSH, MIPT, MSU, MAI",
        "From struggling → top-1 in class",
      ],
      note: "More details (student results, diplomas, and achievements) — in DMs.",
      contacts: {
        telegramHandle: "@ataywork",
        telegramUrl: "https://t.me/ataywork",
        phone: "+7 (778) 189-26-40",
        whatsappUrl: "https://wa.me/77781892640",
      },
    },
    reviewImages: [
      { src: REVIEW_1_SRC, alt: "Student review 1" },
      { src: REVIEW_2_SRC, alt: "Student review 2" },
      { src: REVIEW_3_SRC, alt: "Student review 3" },
    ],
  },
  ru: {
    meta: {
      name: "Atay Kim",
      title: "Студент-математик и репетитор.",
      email: "ataykimwork@gmail.com",
      telegram: "https://t.me/ataywork",
      github: "https://github.com/cerebrum101",
      linkedin: "https://linkedin.com/in/ataykim",
    },
    now:
      "Research Assistant в INMET: занимаюсь математической оптимизацией энергетических систем в Казахстане. " +
      "Education Consultant в BI Education: делаю AI-уроки и задания для подготовки к ЕНТ. " +
      "Оргкомитет Beyond Curriculum: провожу международные контесты (2000+ участников).",
    experience: [
      {
        role: "Education Consultant",
        org: "BI Education",
        url: "https://aitanym.kz",
        date: "янв 2026 – н.в.",
        line: "Настраиваю алгоритмы персонализированного обучения; сделал 500+ задач и 10+ адаптивных уроков для подготовки к ЕНТ.",
      },
      {
        role: "Член оргкомитета",
        org: "Beyond Curriculum",
        url: "https://www.bc-pf.org",
        date: "ноя 2023 – н.в.",
        line: "Организовал 5 международных контестов (2000+ участников, 4 страны). Управлял бюджетом $20k+, командами 130 человек и коммуникацией с партнёрами (Chevron, Air Astana, Nazarbayev Foundation).",
      },
      {
        role: "Лид направления по математике",
        org: "Olscience Circles",
        date: "май – ноя 2023",
        line: "Вёл 10 менторов, 30+ занятий, 100+ часов преподавания и 2 олимпиадных лагеря для 60+ учеников по СНГ.",
      },
      {
        role: "Частный репетитор",
        org: "Самозанятый",
        date: "2019 – н.в.",
        line: "25+ учеников поднялись с уровня C до уверенного A. Многие вошли в топ‑10% потока по математике и физике.",
      },
    ],
    research: [
      {
        role: "Research Assistant",
        org: "INMET — Center of Digital Modelling and AI in Energy",
        date: "янв 2026 – н.в.",
        line: "Собрал данные по high-tech энергокомпаниям Казахстана (ветер, солнце, водород, атом). Применял методы оптимизации для оценки рисков, потенциала и выгод.",
      },
    ],
    projects: [
      {
        name: "Course Planner",
        url: "https://courseplan.app",
        line: "Mind-map для пререквизитов курсов NU. 2000+ активных пользователей каждый семестр — ~30% всех студентов бакалавриата.",
      },
      {
        name: "Guide for Applicants",
        url: "https://guideforapplicants.tech",
        line: "Система статей про поступление за рубеж и в СНГ. 4000+ пользователей. С нуля сделал сайт и CMS.",
      },
      {
        name: "marytravel.kz",
        url: "https://marytravel.kz",
        line: "Сайт для тревел-компании. Дизайн и разработка под ключ.",
      },
    ],
    education: [
      { degree: "Бакалавриат: математика", school: "Nazarbayev University", date: "2023 – н.в." },
      { degree: "Основы анализа данных", school: "Astana Hub × Digital & AI Ministry × Udacity", date: "апр – авг 2025" },
    ],
    coursework: [
      "Матанализ I–III",
      "Дифференциальные уравнения",
      "Линейная алгебра",
      "Дискретная математика",
      "Абстрактная алгебра",
      "Теория вероятностей",
      "Численные методы",
      "Методы исследования",
      "Физика I & II",
      "Основы программирования",
    ],
    awards: [
      { year: "2024", text: "City University of Hong Kong — оффер на полную оплату обучения (USD 80,000+)" },
      { year: "2024", text: "Türkiye Bursları — полное финансирование в Yıldız Technical University, Istanbul" },
      { year: "2022", text: "International Youth Math Contest — серебро, лучший результат из Казахстана" },
      { year: "2021–23", text: "International Zhautykov Olympiad — участник сборной" },
      { year: "2021", text: "National Math Olympiad, Kyrgyzstan — абсолютное 2 место" },
      { year: "2021", text: "American Math Competition (AMC 10) — 1 место" },
    ],
    tests: ["SAT 1480 (Math 800)", "NUET 181", "ЕНТ 120"],
    skills: {
      stack: "Python, JavaScript, React, TypeScript, Next.js, HTML/CSS",
      tools: "Figma, Photoshop, Illustrator, LaTeX, MATLAB, Office 365",
      languages: "Английский (C1 – IELTS 7.5), русский (родной), казахский, кыргызский",
    },
    tutoring: {
      tagline: "Репетитор · Математика · Физика · Информатика",
      prep: [
        "ЕНТ (математика, физика, информатика)",
        "СОР/СОЧ — госшколы, НИШ, РФМШ, BIL",
        "SAT Math · NUET (Math + Critical Thinking)",
        "A-Level · IGCSE · Advanced Placement",
        "Олимпиадная математика (младшие и средние классы)",
      ],
      uniCourses: ["Calculus I–III", "Linear Algebra", "Discrete Math", "Physics I & II"],
      myScores: ["SAT 1480", "ЕНТ 120/140 (физ-мат / инф-мат)", "NUET 181 (Math 103 + Critical Thinking 78)"],
      studentResults: [
        "SAT Math: 590 → 750 за 6 недель",
        "SAT Math: 780 за 8 недель (с первой попытки)",
        "NUET: 177 за 9 недель",
        "Поступления: NU, NYUSH, МФТИ, МГУ, МАИ",
        "От «не получается» → топ‑1 в классе",
      ],
      note: "Детали (результаты учеников, дипломы и достижения) — в личке.",
      contacts: {
        telegramHandle: "@ataywork",
        telegramUrl: "https://t.me/ataywork",
        phone: "+7 (778) 189-26-40",
        whatsappUrl: "https://wa.me/77781892640",
      },
    },
    reviewImages: [
      { src: REVIEW_1_SRC, alt: "Отзыв 1" },
      { src: REVIEW_2_SRC, alt: "Отзыв 2" },
      { src: REVIEW_3_SRC, alt: "Отзыв 3" },
    ],
  },
};

export function getSiteData(lang) {
  return DATA[lang] || DATA.en;
}

// Backward-compatible named exports (default to English).
export const meta = DATA.en.meta;
export const now = DATA.en.now;
export const experience = DATA.en.experience;
export const research = DATA.en.research;
export const projects = DATA.en.projects;
export const education = DATA.en.education;
export const coursework = DATA.en.coursework;
export const awards = DATA.en.awards;
export const tests = DATA.en.tests;
export const skills = DATA.en.skills;
export const tutoring = DATA.en.tutoring;
export const reviewImages = DATA.en.reviewImages;
