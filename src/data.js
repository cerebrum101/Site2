const REVIEW_1_SRC = new URL("./assets/reviews/IMG_9326.jpg", import.meta.url).href;
const REVIEW_2_SRC = new URL("./assets/reviews/Screenshot 2026-04-17 at 22.02.30.png", import.meta.url).href;
const REVIEW_3_SRC = new URL("./assets/reviews/photo_5408960505986094813_y.jpg", import.meta.url).href;
const REVIEW_4_SRC = new URL("./assets/reviews/femo-bronze-2026.png", import.meta.url).href;

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
      "Research Assistant at INMET, working with Prof. Yanwei Wang on Fourier Neural Operators for engineering PDEs. " +
      "Recently presented this work at AIDME-2026 after a summer research visit to Ghent University. " +
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
        org: "Ghent Analysis & PDE Center, Ghent University",
        url: "https://www.ugent.be/en/research/research-groups/pde",
        date: "Jun – Jul 2026",
        line:
          "Worked with Bolys Sabitbek on PDEs and neural operators; trained a small FNO on synthetic 2D Navier–Stokes smoke-flow trajectories generated with PhiFlow. " +
          "The project explored rapid surrogate simulation while documenting limits from blur, periodic boundaries, and distribution shift.",
        links: [
          { label: "simulation", url: "https://fno.atay.top" },
          { label: "report", url: "/fno_report.pdf" },
        ],
      },
      {
        role: "Research Assistant",
        org: "INMET — Center of Digital Modelling and AI in Energy",
        date: "Jan 2026 – Present",
        line:
          "Continuing FNO research with Prof. Yanwei Wang for engineering PDEs. Presented “Fourier Neural Operators for Engineering PDEs” at AIDME-2026 on August 7, 2026. " +
          "The reproducible 1D heat-conduction study shows why low in-distribution field error alone is insufficient: derivative, balance, and structured out-of-distribution checks expose substantially larger errors.",
        links: [
          { label: "poster", url: "/aidme-2026-fno-poster.pdf" },
          { label: "detailed report", url: "/aidme-2026-fno-report.pdf" },
        ],
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
      "Real Analysis I",
      "Mathematical Statistics",
      "Partial Differential Equations",
      "Complex Analysis",
      "Game Theory and Economic Analysis",
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
        "Grade 1: bronze medal at the FEMO International Final (2026)",
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
      { src: REVIEW_4_SRC, alt: "Student bronze-medal result at the FEMO International Final" },
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
      "Research Assistant в INMET: вместе с Prof. Yanwei Wang исследую Fourier Neural Operators для инженерных PDE. " +
      "Недавно представил эту работу на AIDME-2026 после летней исследовательской стажировки в Ghent University. " +
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
        role: "Research Intern",
        org: "Ghent Analysis & PDE Center, Ghent University",
        url: "https://www.ugent.be/en/research/research-groups/pde",
        date: "июн – июл 2026",
        line:
          "Работал с Bolys Sabitbek над PDE и нейронными операторами; обучил небольшой FNO на синтетических траекториях 2D Navier–Stokes для потока дыма, сгенерированных в PhiFlow. " +
          "Проект исследовал быстрые surrogate-модели и ограничения, связанные с размытием, периодическими границами и distribution shift.",
        links: [
          { label: "демо", url: "https://fno.atay.top" },
          { label: "отчёт", url: "/fno_report.pdf" },
        ],
      },
      {
        role: "Research Assistant",
        org: "INMET — Center of Digital Modelling and AI in Energy",
        date: "янв 2026 – н.в.",
        line:
          "Продолжаю исследование FNO для инженерных PDE вместе с Prof. Yanwei Wang. 7 августа 2026 представил постер “Fourier Neural Operators for Engineering PDEs” на AIDME-2026. " +
          "Воспроизводимый 1D benchmark теплопроводности показывает, почему низкой in-distribution ошибки поля недостаточно: проверки производных, баланса и structured OOD выявляют значительно большие ошибки.",
        links: [
          { label: "постер", url: "/aidme-2026-fno-poster.pdf" },
          { label: "подробный отчёт", url: "/aidme-2026-fno-report.pdf" },
        ],
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
      "Вещественный анализ I",
      "Математическая статистика",
      "Уравнения в частных производных",
      "Комплексный анализ",
      "Теория игр и экономический анализ",
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
        "1 класс: бронза на международном финале FEMO (2026)",
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
      { src: REVIEW_4_SRC, alt: "Бронзовый результат ученика на международном финале FEMO" },
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
