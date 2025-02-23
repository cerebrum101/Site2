import React from 'react';
import {
  IconBrandTelegram,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandSpotify,
  IconMail
} from "@tabler/icons-react";

const ContactPage = () => {
  const contacts = [
    {
      name: "Telegram",
      icon: <IconBrandTelegram className="h-8 w-8" />,
      link: "https://t.me/ataywork",
      color: "hover:text-[#229ED9]"
    },
    {
      name: "GitHub",
      icon: <IconBrandGithub className="h-8 w-8" />,
      link: "https://github.com/cerebrum101",
      color: "hover:text-[#2DBA4E]"
    },
    {
      name: "Instagram",
      icon: <IconBrandInstagram className="h-8 w-8" />,
      link: "https://www.instagram.com/cerebrumactio",
      color: "hover:text-[#E4405F]"
    },
    {
      name: "Spotify",
      icon: <IconBrandSpotify className="h-8 w-8" />,
      link: "https://open.spotify.com/user/4sx1rm86gxbpkx7usfvhkojin?si=9bc4627a51e64426",
      color: "hover:text-[#1DB954]"
    },
    {
      name: "Mail",
      icon: <IconMail className="h-8 w-8" />,
      link: "mailto:ataykimwork@gmail.com",
      color: "hover:text-[#EA4335]"
    },

  ];

  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center text-white mb-12 mt-12">
        Socials
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col items-center justify-center p-8 bg-[#1a1a1a] rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl ${contact.color}`}
          >
            <div className="mb-4 transition-colors duration-300">
              {contact.icon}
            </div>
            <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
              {contact.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
