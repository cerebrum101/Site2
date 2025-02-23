import React, { useState } from 'react';  
import './styles/Home.css';

function Tutoring() {
  const [selectedCategory1, setSelectedCategory1] = useState("");
  const [selectedCategory2, setSelectedCategory2] = useState("");

  const subjects1 = [
    "ЕНТ",
    "СОР/СОЧ гос. школы",
    'СОР/СОЧ спец. школы',
    "Олимпиады",
    "Вступительный экзамен",
    "Для себя",
    "SAT", 
    "NUET"
  ];

  const prices = {
    "ЕНТ": "4000", 
    "СОР/СОЧ гос. школы": "4000",
    "СОР/СОЧ спец. школы": '5000',
    "Олимпиады": "5000",
    "Вступительный экзамен": "4500",
    "Для себя": "4500",
    "SAT": "5000",
    "NUET": "5000",
  };

  const subjects2 = ["Математика", "Физика", "Информатика", "Другое"];

  const handleSelect1 = (category) => {
    setSelectedCategory1(category);
  };

  const handleSelect2 = (category) => {
    setSelectedCategory2(category);
  };
  
  const text_message = `${selectedCategory1} ${selectedCategory2}`;
  const priceDisplay = selectedCategory2 ? prices[selectedCategory2] : "Не выбрано";

  return (
    <div>
      <h1>Записаться на занятия</h1>
      <p>Выбрано: {text_message}</p>
      <p>Цена: {priceDisplay} ₸/ час</p>              
      <FilterMenu 
        title="Выберите предмет" 
        categories={subjects2}  
        onSelecet={handleSelect1}
      />
      <FilterMenu 
        title="Выберите категорию" 
        categories={subjects1} 
        onSelecet={handleSelect2} 
      />

      <iframe 
        src="https://calendar.google.com/calendar/embed?height=800&wkst=2&ctz=Asia%2FAlmaty&showPrint=0&mode=WEEK&hl=ru&showDate=0&showNav=0&showTitle=0&showCalendars=0&showTabs=0&title=Atay%20Public%20Cal&src=YXRheWtpbXdvcmtAZ21haWwuY29t&color=%23039BE5" 
        style={{ borderWidth: 0 }} 
        className='calendar' 
        frameBorder="0"
      />
      <div className="home-buttons">
        <TelegramButton message={text_message} />
        <WhatsAppButton message={text_message} />
      </div>
    </div>
  );
}

function Button({ url, name }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="button">
      Написать на {name}
    </a>
  );
}

function TelegramButton({ message }) {
  const telegramUrl = "https://t.me/ataywork";
  const preGeneratedMessage = `Здравствуйте, я заинтересован в подготовке по теме ${message}`;
  const url = `${telegramUrl}?text=${encodeURIComponent(preGeneratedMessage)}`;

  return <Button url={url} name="Telegram" className="button telegram-button" />;
}

function WhatsAppButton({ message }) {
  const phoneNumber = "77781892640";
  const WhatsMessage = `Здравствуйте, я заинтересован в подготовке по теме ${message}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(WhatsMessage)}`;

  return <Button url={url} name="WhatsApp" className="button whatsapp-button" />;
}

const FilterMenu = ({ title, categories, onSelecet }) => {
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
            className={`filter-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tutoring;