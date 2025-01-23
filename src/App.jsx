import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [selectedCategory1, setSelectedCategory1] = useState(""); // State for the first menu
  const [selectedCategory2, setSelectedCategory2] = useState(""); // State for the second menu

  
  const subjects1 = [
    "ЕНТ",
    "СОР/СОЧ",
    "Олимпиады",
    "Вступительный экзамен",
    "Для себя",
    "SAT", 
    "NUET"
    
  ];
  const subjects2 = ["Математика", "Физика", "Информатика", "Другое" ];

  const handleSelect1 = (category) => {
    setSelectedCategory1(category);
  };

  const handleSelect2 = (category) => {
    setSelectedCategory2(category);
  };
  
  let text_message = `${selectedCategory1} ${selectedCategory2}`;

  return (
    <>
      <h1>Записаться на занятия</h1>
      <p>Выбрано: {text_message}</p>
      <FilterMenu title="Выберите предмет" categories={subjects2}  onSelecet={handleSelect1}/>
      <FilterMenu title="Выберите категорию" categories={subjects1} onSelecet={handleSelect2} />

      <div className="home-buttons">
        <TelegramButton message={text_message} />
        <WhatsAppButton message={text_message} />
      </div>
    </>
  )
}



function Button({ url, name }) {
  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer" className="button">
        Написать на {name}
      </a>
    </>
  );
}

function TelegramButton({ message }) {
  const telegramUrl = "https://t.me/ataywork"; // Telegram share URL
  const preGeneratedMessage = `Здравствуйте, я заинтересован в подготовке по теме ${message}`; // Pre-generated message
  const url = `${telegramUrl}?text=${encodeURIComponent(preGeneratedMessage)}`; // Corrected URL structure

  return (
    <Button url={url} name="Telegram" className="button telegram-button" />
  );
}

function WhatsAppButton({ message }) {
  const phoneNumber = "77781892640"; // Replace with the actual number
  const WhatsMessage = `Здравствуйте, я заинтересован в подготовке по теме ${message}`; // Pre-generated 
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(WhatsMessage)}`;

  return (
    <Button url={url} name="WhatsApp" className="button whatsapp-button" />
  );
}

const FilterMenu = ({ title, categories, onSelecet}) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelecet(category);
  };

  return (
    <div className="filter-group">
      <h2 className="filter-title">{title}</h2>
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${selectedCategory === category ? "active" : ""
              }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App
