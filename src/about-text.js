import nspm from './assets/nspm.png';
import nu from './assets/nu.png';
import olscience from './assets/olscience.png';
import americancorners from './assets/americancorners.png';
import beyond from './assets/beyond.png';
import fizmatacademy from './assets/fizmatacademy.png';
import { keyframes } from 'styled-components';



export const education = [
  {
    name: "РФМШ",
    date: "2021 - 2023",
    place: "Астана",
    points: ["Средний балл: 4.86/5.00"],
    coverImg: nspm,
    isSquareBlock: true
  },
  {
    name: "Nazarbayev University",
    date: "2023 - Now",
    place: "Астана",
    points: [
      "NUFYP | GPA: 80/100", 
      "BSc in Mathematics | GPA: 3.11/4"],
    coverImg: nu,
    isSquareBlock: true
  }
];

export const experience = [
  {
    name: "OLSCIENCE CIRCLES",
    date: "Май - Ноябрь 2023",
    place: "Гибридный Формат",
    points: [
      'Руководитель математического направления для 6-9 классов',
      "Управлял командой из 10 менторов",
      "более 30 уроков, 60+ часов онлайн-обучения для 50 учеников",
      "2 офлайн-олимпиадных лагеря по теории чисел и комбинаторике для 70+ учеников"
    ],
    coverImg: olscience,
  },
  {
    name: "Makerspace Astana Math Club",
    date: "Август - Октябрь 2022",
    place: "Онлайн",
    points: [
      "Сотрудничал с American Corner Astana",
      "12-недельная программа для 6–9 классов по олимпиадной математике",
      'Разработал учебную программу, материалы для курса и домашние задания',
      'Ученики прокачались с 0 до уровня Областной Олимпиады 9 класса.'
    ],
    coverImg: americancorners,
  },
  {
    name: "Beyond Curriculum Public Foundation",
    date: "Март 2024 - н.в.",
    place: "Гибридный Формат",
    points: [
      "Действующий Член Фонда",
      "Член оргкомитета в 4 конкурсах международного уровня",
      'Организационный менеджер мероприятий'
    ],
    coverImg: beyond,
  },
  {
    name: "Fizmat Academy",
    date: "Июнь 2023",
    place: "Оффлайн",
    points: [
      "Ментор, Волонтер",
      'Обучил ключевым математическим и логическим темам для вступительных в РФМШ, НИШ и БИЛ.',
      "Провел обучение  60+ учащихся 6-х классов в 4 группах",
      '48+ часов занятий за 2 недели',
      'Более 50% учеников добились желаемого результата'
    ],
    coverImg: fizmatacademy,
    text: [
      'Обучил ключевым математическим и логическим темам для вступительных в РФМШ, НИШ и БИЛ.',
      "Провел обучение  60+ учащихся 6-х классов в 4 группах",
      'negorgoasdfjaosdnvlsjdv',
    ]
  }
];

export const tests = [
  'SAT 1480',
  'IELTS 7.5',
  'NUET 181',
  'ЕНТ физ-мат 120',
  'ЕНТ инф-мат 118'
];

export const awards = [
  {
  name: 'Turkiye Burslari Scholarship',
  date: '2024',
  description: 'Won Turkiye Burslari Scholarship for 5 years',
  },

  {
    name: 'Республиканская олимпиада по математике',
    date: '2022',
    description: 'Диплом 2 степени на Облатсном этапе',
  },

  {
    name: 'Международная Жаутыковская олимпиада по математике',
    date: '2021-2023',
    description: 'Отбор и участие',
  },

  {
    name: 'International Yout Math Challenge',
    date: '2022',
    description: 'National Award - the best result from Kazakhstan. Silver Medal. Top 5% of all participants.Top 20% of finalists.',
  },

  {
    name: 'American Math Competition (AMC10)',
    date: '2021',
    description: 'Absolute First Place',
  },

  {
    name: 'Национальная Олимпиада по Математике, Кыргызстан',
    date: '2021',
    description: 'Абсолютное 2 место среди 9 классов',
  }
];

export const projects = [
  {
    name: 'Guide for Applicants',
    date: '2023',
    description: 'Создал систему статей по поступлению в ВУЗы зарубежных стран и СНГ. Полностью разработал сайт и систему управления контентом.',
    link: 'https://guideforapplicants.me',
  },

  {
    name: 'marytravel.kz',
    date: '2024',
    description: 'Разработал сайт для туристической компании MaryTravel',
    link: 'https://marytravel.kz',
  }
];
