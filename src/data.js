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
      "Presented this work at AIDME-2026 and published an abstract in the CMAI 2026 Book of Abstracts. " +
      "Member of the AI Leadership Program community, a joint 01.AI, Q.AI, and Alem.ai initiative under Kai-Fu Lee's mentorship. " +
      "Education Consultant at BI Education, building AI-driven lessons for UNT preparation. " +
      "Organizing committee member at Beyond Curriculum, running international contests with 2000+ participants.",
    experience: [
      {
        id: "ai-leadership-program",
        role: "Community Member",
        org: "AI Leadership Program — 01.AI × Q.AI × Alem.ai",
        date: "2026 – Present",
        line: "Selected for a small AI leadership cohort launched at Digital Bridge and joined its continuing community under Kai-Fu Lee's mentorship.",
        details: [
          "Selected as one of approximately 30 participants from a pool of roughly 137 applicants.",
          "The program was introduced at Digital Bridge, where the cohort met Kai-Fu Lee and received signed certificates.",
        ],
        links: [{ label: "certificate", url: "/certificates/ai-leadership-program-kai-fu-lee-clean.jpg" }],
      },
      {
        id: "aitanym",
        role: "Education Consultant",
        org: "Aitanym.kz — a BI Education project",
        url: "https://aitanym.kz",
        date: "Jan 2026 – Present",
        line: "Developing AI-personalized learning content; created 1,500+ practice problems and 30+ lessons for UNT preparation.",
        details: [
          "Creates structured practice content and lessons for the Aitanym.kz learning product.",
          "Works on AI-personalized learning flows for UNT preparation.",
        ],
      },
      {
        id: "ghent-fno",
        role: "Organizing Committee Member",
        org: "Beyond Curriculum",
        url: "https://www.bc-pf.org",
        date: "Nov 2023 – Present",
        line: "Organized 5 international contests (2000+ participants, 4 countries). Managed $20k+ budgets, 130-person teams, and partner communications with Chevron, Air Astana, Nazarbayev Foundation.",
        details: ["Coordinated five international contests across four countries.", "Managed $20,000+ in budgets, 130-person delivery teams, and communications with major partners."],
      },
      {
        id: "inmet-fno",
        role: "Math Track Lead",
        org: "Olscience Circles",
        date: "May – Nov 2023",
        line: "Led 10 mentors, 30+ lessons, 100+ hours of instruction, and 2 olympiad camps reaching 60+ students across the CIS region.",
        details: ["Led a team of 10 mentors and built more than 30 lessons.", "Delivered 100+ instructional hours and two olympiad camps for 60+ students across the CIS."],
      },
      {
        role: "Private Tutor",
        org: "Self-employed",
        date: "2019 – Present",
        line: "25+ students raised their level from C to a confident A. Many entered the top 10% of their cohort in math and physics.",
        details: ["Taught mathematics and physics independently since 2019.", "Helped 25+ students improve from C-level performance to confident A grades; many reached the top 10% of their cohorts."],
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
        details: ["Built a compact Fourier Neural Operator surrogate from synthetic 2D Navier–Stokes smoke-flow trajectories generated with PhiFlow.", "Documented practical failure modes including blur, periodic-boundary artifacts, and distribution shift."],
      },
      {
        role: "Research Assistant",
        org: "INMET — Center of Digital Modelling and AI in Energy",
        date: "Jan 2026 – Present",
        line:
          "Continuing FNO research with Prof. Yanwei Wang for engineering PDEs. Presented the poster “Fourier Neural Operators for Engineering PDEs” at AIDME-2026, August 5–8, 2026. " +
          "The reproducible 1D heat-conduction study shows why low in-distribution field error alone is insufficient: derivative, balance, and structured out-of-distribution checks expose substantially larger errors.",
        links: [
          { label: "poster", url: "/aidme-2026-fno-poster.pdf" },
          { label: "detailed report", url: "/aidme-2026-fno-report.pdf" },
          { label: "certificate", url: "/certificates/aidme-2026-atay-kim.pdf" },
        ],
        details: [
          "Certificate no. AIDME-2026-PP20 records the successful poster presentation at Nazarbayev University.",
          "The benchmark evaluates field, derivative, balance, and structured out-of-distribution errors rather than relying on in-distribution field error alone.",
        ],
      },
    ],
    publications: [
      {
        id: "cmai-2026-abstract",
        title: "Fourier-Mode Allocation and Physical Error in a One-Dimensional Heat Problem",
        venue: "CMAI 2026 Book of Abstracts",
        date: "2026",
        line: "Published conference abstract, page 31. Book of Abstracts, 69 pages; ISBN 978-601-08-6470-2.",
        details: [
          "Published as Kim A. in the Book of Abstracts for the 1st International Conference and Workshop on Mathematics and Artificial Intelligence.",
          "Presented as a session talk at Nazarbayev University in Astana during September 9–11, 2026.",
        ],
        links: [
          { label: "abstract book", url: "https://drive.google.com/file/d/1_hBOrf6kElwsAeEzQRixVwAmL3TzuB2Q/view" },
          { label: "talk certificate", url: "/certificates/cmai-2026-talk-clean.jpg" },
        ],
      },
    ],
    projects: [
      {
        name: "Course Planner",
        url: "https://courseplan.app",
        line: "Mind-map visualizer for NU course prerequisites. 2000+ active users every semester — 30% of all undergrads.",
        details: ["Designed a visual prerequisite map to make university course planning faster.", "Used by 2,000+ active students each semester, approximately 30% of Nazarbayev University undergraduates."],
      },
      {
        name: "Guide for Applicants",
        url: "https://guideforapplicants.tech",
        line: "Article system about university admissions abroad and in CIS. 4000+ users. Built the site and CMS from scratch.",
        details: ["Designed and built both the public admissions guide and its publishing workflow from scratch.", "Reached more than 4,000 users looking for admissions information across the CIS and abroad."],
      },
      {
        name: "marytravel.kz",
        url: "https://marytravel.kz",
        line: "Website for a travel company. Designed and developed end-to-end.",
        details: ["Owned the full product process for a travel-company website, from visual design through implementation and launch."],
      },
    ],
    education: [
      { degree: "BSc Mathematics", school: "Nazarbayev University", date: "2023 – Present", line: "Undergraduate study in pure and applied mathematics.", details: ["Core study includes real and complex analysis, probability, statistics, differential equations, PDEs, numerical methods, algebra, and programming."] },
      { degree: "Data Analysis Fundamentals", school: "Astana Hub × Digital & AI Ministry × Udacity", date: "Apr – Aug 2025", line: "Applied data-analysis training delivered through a national technology initiative.", details: ["Completed the Data Analysis Fundamentals program run by Astana Hub, Kazakhstan's Digital & AI Ministry, and Udacity."] },
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
      { year: "2026", text: "Republican Student Subject Olympiad in Mathematics — Honorable Mention, Nazarbayev University", details: ["Recognized for commendable performance at the Republican Student Subject Olympiad in Mathematics, held April 11–12, 2026.", "Also received a formal letter of commendation from the Department of Mathematics."], links: [{ label: "diploma", url: "/certificates/republican-olympiad-honorable-mention-clean.jpg" }, { label: "commendation", url: "/certificates/republican-olympiad-commendation-clean.jpg" }] },
      { year: "2024", text: "City University of Hong Kong — USD 80,000+ full-tuition scholarship offer", details: ["Received an admission offer carrying more than USD 80,000 in full-tuition scholarship support."] },
      { year: "2024", text: "Türkiye Bursları — full-ride stipend to Yıldız Technical University, Istanbul", details: ["Selected for Türkiye Bursları with full tuition and stipend support at Yıldız Technical University in Istanbul."] },
      { year: "2022", text: "International Youth Math Contest — Silver Medal, best result from Kazakhstan", details: ["Earned a silver medal and the strongest result among participants from Kazakhstan."] },
      { year: "2021–23", text: "International Zhautykov Olympiad — selected participant", details: ["Selected to participate in the International Zhautykov Olympiad during the 2021–2023 period."] },
      { year: "2021", text: "National Math Olympiad, Kyrgyzstan — absolute 2nd place", details: ["Placed second overall at the National Mathematics Olympiad in Kyrgyzstan."] },
      { year: "2021", text: "American Math Competition (AMC 10) — 1st Place", details: ["Achieved first place in the AMC 10 competition result listed on the résumé."] },
    ],
    tests: ["SAT 1480 (Math 800)", "NUET 181", "UNT 120"],
    certificates: [
      { title: "AI Leadership Program", src: "/certificates/ai-leadership-program-kai-fu-lee-clean.jpg" },
      { title: "AIDME-2026 poster presentation", src: "/certificates/aidme-2026-atay-kim.pdf", pdf: true },
      { title: "CMAI 2026 session talk", src: "/certificates/cmai-2026-talk-clean.jpg" },
      { title: "Republican Olympiad — Honorable Mention", src: "/certificates/republican-olympiad-honorable-mention-clean.jpg" },
      { title: "Republican Olympiad — Letter of Commendation", src: "/certificates/republican-olympiad-commendation-clean.jpg" },
    ],
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
      "Представил эту работу на AIDME-2026 и опубликовал абстракт в сборнике CMAI 2026. " +
      "Участник сообщества AI Leadership Program — совместной инициативы 01.AI, Q.AI и Alem.ai под менторством Kai-Fu Lee. " +
      "Education Consultant в BI Education: делаю AI-уроки и задания для подготовки к ЕНТ. " +
      "Оргкомитет Beyond Curriculum: провожу международные контесты (2000+ участников).",
    experience: [
      {
        id: "ai-leadership-program",
        role: "Участник сообщества",
        org: "AI Leadership Program — 01.AI × Q.AI × Alem.ai",
        date: "2026 – н.в.",
        line: "Отобран в небольшую AI leadership-когорту, запущенную на Digital Bridge, и вошёл в постоянное сообщество под менторством Kai-Fu Lee.",
        details: ["Отобран примерно в число 30 участников из около 137 заявок.", "На Digital Bridge участники встретились с Kai-Fu Lee и получили подписанные сертификаты."],
        links: [{ label: "сертификат", url: "/certificates/ai-leadership-program-kai-fu-lee-clean.jpg" }],
      },
      {
        id: "aitanym",
        role: "Education Consultant",
        org: "Aitanym.kz — проект BI Education",
        url: "https://aitanym.kz",
        date: "янв 2026 – н.в.",
        line: "Разрабатываю AI-персонализированный учебный контент; создал 1500+ задач и 30+ уроков для подготовки к ЕНТ.",
        details: ["Создаю структурированные задания и уроки для продукта Aitanym.kz.", "Работаю над AI-персонализированными учебными сценариями для подготовки к ЕНТ."],
      },
      {
        id: "ghent-fno",
        role: "Член оргкомитета",
        org: "Beyond Curriculum",
        url: "https://www.bc-pf.org",
        date: "ноя 2023 – н.в.",
        line: "Организовал 5 международных контестов (2000+ участников, 4 страны). Управлял бюджетом $20k+, командами 130 человек и коммуникацией с партнёрами (Chevron, Air Astana, Nazarbayev Foundation).",
      },
      {
        id: "inmet-fno",
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
          "Продолжаю исследование FNO для инженерных PDE вместе с Prof. Yanwei Wang. Представил постер “Fourier Neural Operators for Engineering PDEs” на AIDME-2026, 5–8 августа 2026. " +
          "Воспроизводимый 1D benchmark теплопроводности показывает, почему низкой in-distribution ошибки поля недостаточно: проверки производных, баланса и structured OOD выявляют значительно большие ошибки.",
        links: [
          { label: "постер", url: "/aidme-2026-fno-poster.pdf" },
          { label: "подробный отчёт", url: "/aidme-2026-fno-report.pdf" },
          { label: "сертификат", url: "/certificates/aidme-2026-atay-kim.pdf" },
        ],
        details: ["Сертификат № AIDME-2026-PP20 подтверждает постерную презентацию в Nazarbayev University.", "Benchmark оценивает ошибки поля, производных, баланса и structured OOD, а не только in-distribution ошибку поля."],
      },
    ],
    publications: [
      {
        id: "cmai-2026-abstract",
        title: "Fourier-Mode Allocation and Physical Error in a One-Dimensional Heat Problem",
        venue: "Сборник абстрактов CMAI 2026",
        date: "2026",
        line: "Опубликованный конференционный абстракт, стр. 31. Сборник на 69 страниц; ISBN 978-601-08-6470-2.",
        details: ["Опубликован как Kim A. в сборнике 1st International Conference and Workshop on Mathematics and Artificial Intelligence.", "Представлен в формате доклада в Nazarbayev University, Астана, 9–11 сентября 2026."],
        links: [{ label: "сборник", url: "https://drive.google.com/file/d/1_hBOrf6kElwsAeEzQRixVwAmL3TzuB2Q/view" }, { label: "сертификат", url: "/certificates/cmai-2026-talk-clean.jpg" }],
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
      { year: "2026", text: "Республиканская студенческая предметная олимпиада по математике — Honorable Mention, Nazarbayev University" },
      { year: "2024", text: "City University of Hong Kong — оффер на полную оплату обучения (USD 80,000+)" },
      { year: "2024", text: "Türkiye Bursları — полное финансирование в Yıldız Technical University, Istanbul" },
      { year: "2022", text: "International Youth Math Contest — серебро, лучший результат из Казахстана" },
      { year: "2021–23", text: "International Zhautykov Olympiad — участник сборной" },
      { year: "2021", text: "National Math Olympiad, Kyrgyzstan — абсолютное 2 место" },
      { year: "2021", text: "American Math Competition (AMC 10) — 1 место" },
    ],
    tests: ["SAT 1480 (Math 800)", "NUET 181", "ЕНТ 120"],
    certificates: [
      { title: "AI Leadership Program", src: "/certificates/ai-leadership-program-kai-fu-lee-clean.jpg" },
      { title: "Постерная презентация AIDME-2026", src: "/certificates/aidme-2026-atay-kim.pdf", pdf: true },
      { title: "Доклад CMAI 2026", src: "/certificates/cmai-2026-talk-clean.jpg" },
      { title: "Республиканская олимпиада — Honorable Mention", src: "/certificates/republican-olympiad-honorable-mention-clean.jpg" },
      { title: "Республиканская олимпиада — рекомендательное письмо", src: "/certificates/republican-olympiad-commendation-clean.jpg" },
    ],
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
