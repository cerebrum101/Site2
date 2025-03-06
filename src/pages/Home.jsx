import React from "react";
import { BentoGrid, BentoGridItem } from "../components/bento-grid";
import { education, projects } from "../about-text";
import { useState, useId, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";
import CloseIcon from "../ui/CloseIcon";
import InfoModal from '../components/InfoModal';
import { Link } from "react-router-dom";

import {
  IconSchool,
  IconUserCircle,
  IconBriefcase,
  IconTrophy,
  IconFileDownload,
  IconArticle,
  IconRocket,
  IconMessage,
  IconCalendar
} from "@tabler/icons-react";

// Skeleton component with icon
const Skeleton = ({ icon }) => (
  <div className="flex flex-1 w-full h-full justify-center items-center min-h-[6rem] rounded-xl 
    bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-200">
    {React.cloneElement(icon, { className: "h-24 w-24 text-zinc-400" })}
  </div>
);

export default function Grid() {
  const [activeEducation, setActiveEducation] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    if (activeEducation) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeEducation]);

  useOutsideClick(ref, () => setActiveEducation(null));

  // Move items array inside the component
  const items = [
    {
      title: "Образование",
      description: "",
      header: <Skeleton icon={<IconSchool />} />,
      className: "md:col-span-1",
      handleClick: () => setActiveEducation(education)
    },
    {
      title: "Записаться на занятия",
      description: "Математика, Физика, Информатика. ЕНТ, СОР/СОЧ, Олимпиады, Программа НИШ, РФМШ, БИЛ, A-level",
      header: <Skeleton icon={<IconCalendar />} />,
      className: "col-span-2 order-first md:order-none",
      routeLink: "/tutoring"
    },
    {
      title: "Обо мне", 
      description: "",
      header: <Skeleton icon={<IconUserCircle />} />,
      className: "md:col-span-1",
      routeLink: "/about"
    },
    {
      title: "Опыт",
      description: "",
      header: <Skeleton icon={<IconBriefcase />} />,
      className: "md:col-span-1",
      routeLink: "/experience"
    },
    {
      title: "Достижения",
      description: "",
      header: <Skeleton icon={<IconTrophy />} />,
      className: "md:col-span-1",
      routeLink: "/awards"
    },
    {
      title: "Скачать резюме",
      description: "",
      header: <Skeleton icon={<IconFileDownload />} />,
      className: "md:col-span-1",
      handleClick: () => {
        // This will trigger download
        window.open('/resume_ru.pdf', '_blank');
      }
    },
    {
      title: "Блог",
      description: "",
      header: <Skeleton icon={<IconArticle />} />,
      className: "md:col-span-1",
      routeLink: "/blog"
    },
    {
      title: "Связаться со мной",
      description: "",
      header: <Skeleton icon={<IconMessage />} />,
      className: "md:col-span-1",
      routeLink: "/contact"
    },
    {
      title: "Проекты",
      description: "",
      header: <Skeleton icon={<IconSchool />} />,
      className: "md:col-span-1",
      handleClick: () => setActiveEducation(projects)
    }
  ];

  return (
    <div className="bg-black min-h-screen py-8">
      <BentoGrid className="max-w-7xl xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-auto md:auto-rows-[20rem] pt-3">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            {...item}
          />
        ))}
      </BentoGrid>

      <AnimatePresence>
        <InfoModal 
          isOpen={!!activeEducation}
          onClose={() => setActiveEducation(null)}
          title={activeEducation === education ? "Образование" : "Проекты"}
          data={activeEducation || []}
          ref={ref}
        />
      </AnimatePresence>
    </div>
  );
}  
