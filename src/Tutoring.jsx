import React, { useState, useRef, useEffect } from 'react';  

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
    <div className='flex flex-col items-center justify-center w-full max-w-[95vw] mx-auto'>
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Записаться на занятия</h1>
      <p className="text-sm md:text-base mb-2">Выбрано: {text_message}</p>
      <p className="text-sm md:text-base mb-6">Цена: {priceDisplay} ₸/ час</p>              
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
        style={{ border: 0 }}
        className='w-full max-w-full aspect-[4/3] md:aspect-[16/9] mb-6 rounded-lg shadow-md' 
      />
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <TelegramButton message={text_message} />
        <WhatsAppButton message={text_message} />
      </div>
    </div>
  );
}

function Button({ url, name }) {
  const buttonStyles = {
    base: "w-full sm:w-auto text-center px-4 py-2 text-sm md:text-base rounded-md transition-colors duration-300",
    telegram: "bg-[#007bff] hover:bg-[#0056b3] text-white",
    whatsapp: "bg-[#25D366] hover:bg-[#128C7E] text-white"
  };

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`${buttonStyles.base} ${name === "Telegram" ? buttonStyles.telegram : buttonStyles.whatsapp}`}
    >
      Написать на {name}
    </a>
  );
}

function TelegramButton({ message }) {
  const telegramUrl = "https://t.me/ataywork";
  const preGeneratedMessage = `Здравствуйте, я заинтересован в подготовке по теме ${message}`;
  const url = `${telegramUrl}?text=${encodeURIComponent(preGeneratedMessage)}`;

  return <Button url={url} name="Telegram" />;
}

function WhatsAppButton({ message }) {
  const phoneNumber = "77781892640";
  const WhatsMessage = `Здравствуйте, я заинтересован в подготовке по теме ${message}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(WhatsMessage)}`;

  return <Button url={url} name="WhatsApp" />;
}

const FilterMenu = ({ title, categories, onSelecet }) => {
  const containerRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Log container and buttons dimensions
    if (containerRef.current && buttonsRef.current) {
      console.log('Filter Container Width:', containerRef.current.offsetWidth);
      console.log('Window Width:', window.innerWidth);
      console.log('Buttons Container Width:', buttonsRef.current.offsetWidth);
      console.log('Individual Button Widths:', 
        Array.from(buttonsRef.current.children).map(btn => btn.offsetWidth)
      );
    }
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelecet(category);
  };

  return (
    <div ref={containerRef} className="w-full max-w-full md:max-w-3xl mx-auto p-3 md:p-5 bg-[#f4f7fa] dark:bg-[#1a1a1a] rounded-lg shadow-md mb-6 font-[Arial]">
      <h2 className="text-[#2d3a45] dark:text-gray-200 text-xl md:text-2xl font-bold mb-4 text-center">
        {title}
      </h2>
      <div ref={buttonsRef} className="flex flex-wrap justify-center gap-2 md:gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`
              px-3 md:px-5 
              py-1.5 md:py-2.5 
              text-xs md:text-sm 
              font-medium 
              rounded-full 
              border-2 
              transition-all 
              duration-300 
              shadow-sm
              flex-shrink-0
              ${selectedCategory === category 
                ? 'bg-[#2d3a45] text-white border-[#2d3a45] shadow-lg' 
                : 'bg-white text-[#2d3a45] border-[#e3e9ef] hover:bg-[#eaf1f7] hover:border-[#c5d3e0]'}
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tutoring;