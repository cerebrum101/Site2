import React, { forwardRef } from 'react';
import { motion } from "framer-motion";
import CloseIcon from "../ui/CloseIcon";

const InfoModal = forwardRef(({ isOpen, onClose, title, data }, ref) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={handleBackdropClick}
      />
      <div 
        className="fixed inset-0 flex items-center justify-center z-50 p-4 md:p-6"
        onClick={handleBackdropClick}
      >
        <motion.div
          ref={ref}
          className="relative w-full max-w-[800px] bg-[#1a1a1a]/90 rounded-lg shadow-xl overflow-y-auto max-h-[85vh] md:max-h-[90vh]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <motion.button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CloseIcon />
          </motion.button>

          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">{title}</h2>
            <div className="space-y-6 md:space-y-8">
              {data.map((item, index) => (
                <div key={index} className="bg-black/30 rounded-xl p-6 hover:bg-black/40 transition-colors">
                  <div className="flex items-start gap-6">
                    <img 
                      src={item.coverImg || item.img} 
                      alt={item.name}
                      className="w-24 h-24 object-contain bg-white rounded-lg p-2"
                    />
                    <div className='flex flex-col items-end w-full'>
                      <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-gray-400 text-sm">
                        <span className="text-green-500">{item.date}</span>
                        {item.place && (
                          <>
                            <span className="mx-2">|</span>
                            <span>{item.place}</span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3 text-gray-300 text-sm">
                    {item.points && item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="opacity-90">{point}</span>
                      </li>
                    ))}
                    {item.description && (
                      <li className="flex items-start text-left">
                        <span>{item.description}</span>
                      </li>
                    )}
                  </ul>
                  {item.link && (
                    <div className="mt-6 flex justify-end">
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                      >
                        <span>Посетить сайт</span>
                        <svg 
                          className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M14 5l7 7m0 0l-7 7m7-7H3" 
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
});

InfoModal.displayName = 'InfoModal';

export default InfoModal; 