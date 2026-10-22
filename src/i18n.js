import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      lang: { en: "EN", ru: "RU" },
      home: {
        now: "Now",
        education: "Education",
        awards: "Awards",
        skills: "Skills",
        experience: "Experience",
        research: "Research",
        publications: "Publications",
        certificates: "Certificates",
        projects: "Projects",
        tutoring: "Tutoring",
        writing: "Writing",
        selectedCoursework: "Selected coursework",
        hideCoursework: "Hide coursework",
        tests: "Tests",
        prep: "Prep",
        university: "University",
        myScores: "My scores",
        studentOutcomes: "Student outcomes",
        reviews: "Reviews",
        reviewsHint: "Click a review to open full size.",
        close: "Close",
        writingLine: "I occasionally write about math and education.",
        readBlog: "Read the blog",
      },
      nav: {
        backHome: "← Atay Kim",
      },
      blog: {
        title: "Blog",
        postNotFound: "Post not found.",
        backToBlog: "← Back to blog",
      },
      auth: {
        adminLoginTitle: "Admin login",
        username: "Username",
        password: "Password",
        signIn: "Sign in",
        invalidCredentials: "Invalid credentials",
      },
      admin: {
        title: "Admin panel",
        logout: "Log out",
        postCreated: "Post created!",
        postCreateError: "Error creating post",
        postTitle: "Title",
        coverUrl: "Cover URL",
        coverPlaceholder: "https://example.com/image.jpg",
        content: "Content",
        publish: "Publish",
      },
      common: {
        telegram: "telegram",
        github: "github",
        linkedin: "linkedin",
        cv: "cv",
        whatsapp: "WhatsApp",
      },
    },
  },
  ru: {
    translation: {
      lang: { en: "EN", ru: "RU" },
      home: {
        now: "Сейчас",
        education: "Образование",
        awards: "Награды",
        skills: "Навыки",
        experience: "Опыт",
        research: "Исследования",
        publications: "Публикации",
        certificates: "Сертификаты",
        projects: "Проекты",
        tutoring: "Репетиторство",
        writing: "Тексты",
        selectedCoursework: "Выбранные курсы",
        hideCoursework: "Скрыть курсы",
        tests: "Тесты",
        prep: "Подготовка",
        university: "Университет",
        myScores: "Мои результаты",
        studentOutcomes: "Результаты учеников",
        reviews: "Отзывы",
        reviewsHint: "Нажмите на отзыв, чтобы открыть полностью.",
        close: "Закрыть",
        writingLine: "Иногда пишу про математику и образование.",
        readBlog: "Читать блог",
      },
      nav: {
        backHome: "← Atay Kim",
      },
      blog: {
        title: "Блог",
        postNotFound: "Пост не найден.",
        backToBlog: "← Назад к блогу",
      },
      auth: {
        adminLoginTitle: "Вход для администраторов",
        username: "Имя пользователя",
        password: "Пароль",
        signIn: "Войти",
        invalidCredentials: "Неверные учетные данные",
      },
      admin: {
        title: "Панель администратора",
        logout: "Выйти",
        postCreated: "Пост успешно создан!",
        postCreateError: "Ошибка при создании поста",
        postTitle: "Заголовок",
        coverUrl: "URL обложки",
        coverPlaceholder: "https://example.com/image.jpg",
        content: "Содержание",
        publish: "Опубликовать",
      },
      common: {
        telegram: "telegram",
        github: "github",
        linkedin: "linkedin",
        cv: "cv",
        whatsapp: "WhatsApp",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "ru"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "lang",
    },
  });

export default i18n;
