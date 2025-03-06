import React, { useState } from 'react';  

function Tutoring() {
  const [selectedCategory1, setSelectedCategory1] = useState("Математика");
  const [selectedCategory2, setSelectedCategory2] = useState("");

  const subjects2 = ["Математика", "Физика", "Информатика", "Другое"];

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

  const handleSelect1 = (category) => {
    setSelectedCategory1(category);
  };

  const handleSelect2 = (category) => {
    setSelectedCategory2(category);
  };
  
  const text_message = `${selectedCategory1} ${selectedCategory2}`;
  const priceDisplay = selectedCategory2 ? prices[selectedCategory2] : "Не выбрано";

  return (
    <div className='min-h-screen bg-black'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-16 lg:py-14'>
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Записаться на занятия
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Выберите предмет и категорию для начала обучения. Индивидуальный подход и гибкий график.
          </p>
        </div>

        {/* Selection Card */}
        <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Filters */}
            <div className="space-y-6">
              <FilterMenu 
                title="Выберите предмет" 
                categories={subjects2}  
                onSelecet={handleSelect1}
                defaultSelected="Математика"
              />
              <FilterMenu 
                title="Выберите категорию" 
                categories={subjects1} 
                onSelecet={handleSelect2} 
              />
            </div>

            {/* Right Column - Summary & Actions */}
            <div className="space-y-6">
              {/* Selection Summary */}
              <div className="bg-black rounded-xl p-6 border border-zinc-800">
                <h3 className="text-lg font-medium text-zinc-200 mb-4">Ваш выбор</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Предмет:</span>
                    <span className="text-white font-medium">{selectedCategory1}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Категория:</span>
                    <span className="text-white font-medium">{selectedCategory2 || "Не выбрано"}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-zinc-800">
                    <span className="text-zinc-400">Стоимость:</span>
                    <span className="text-emerald-400 font-bold text-lg">{priceDisplay} ₸/час</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                {/* Calendar Button */}
                <a
                  href="https://calendar.google.com/calendar/embed?src=YXRheWtpbXdvcmtAZ21haWwuY29t&mode=WEEK&showPrint=0&showTabs=0&showCalendars=0&showTz=0&showNav=0&showDate=0&showTitle=0&bgcolor=%23000000&ctz=Asia%2FAlmaty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full px-6 py-4 text-base font-medium
                    bg-white text-black hover:bg-zinc-100
                    rounded-xl transition-all duration-300 shadow-lg
                    transform hover:-translate-y-1"
                >
                  <svg 
                    className="w-5 h-5 transition-transform group-hover:rotate-12" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                  </svg>
                  Посмотреть график занятости
                </a>

                {/* Contact Buttons */}
                <div className="grid grid-cols-1 gap-4">
                  <TelegramButton message={text_message} />
                  <WhatsAppButton message={text_message} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({ url, name }) {
  const buttonStyles = {
    base: "flex items-center justify-center gap-3 px-6 py-4 text-base font-medium rounded-xl transition-all duration-300 text-center border border-zinc-800 group hover:-translate-y-1",
    telegram: "bg-black hover:bg-zinc-900 text-white hover:shadow-lg hover:border-zinc-700",
    whatsapp: "bg-black hover:bg-zinc-900 text-white hover:shadow-lg hover:border-zinc-700"
  };

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`${buttonStyles.base} ${name === "Telegram" ? buttonStyles.telegram : buttonStyles.whatsapp}`}
    >
      <span className="flex items-center justify-center gap-3">
        {name === "Telegram" ? (
          <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.38-.49 1.07-.75 4.19-1.82 6.98-3.03 8.37-3.61 3.98-1.67 4.81-1.96 5.35-1.97.12 0 .37.03.54.18.14.12.18.28.2.45-.02.05-.02.31-.02.31z"/>
          </svg>
        ) : (
          <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
          </svg>
        )}
        Написать на {name}
      </span>
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



const FilterMenu = ({ title, categories, onSelecet, defaultSelected }) => {
  const [selectedCategory, setSelectedCategory] = useState(defaultSelected || categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelecet(category);
  };

  return (
    <div className="bg-black rounded-xl p-6 border border-zinc-800">
      <h2 className="text-lg font-medium text-white mb-6 text-center">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`
              px-4 py-2
              text-sm font-medium
              rounded-lg
              transition-all duration-300
              transform hover:-translate-y-0.5
              ${selectedCategory === category 
                ? 'bg-white text-black' 
                : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white'}
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