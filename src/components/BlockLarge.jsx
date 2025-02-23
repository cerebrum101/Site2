import React, { useState , useEffect} from 'react';

const BlockLarge = ({ title, date, place, text, image, onClose }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      {/* Backdrop with click handler to close */}
      <div 
        className="absolute inset-0 cursor-pointer" 
        onClick={onClose}
      />
      
      {/* Content container */}
      <div 
        className="relative w-[60%] max-h-[80vh] bg-[#1a1a1a]/90 rounded-lg shadow-xl" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[80vh]">
          {/* Header with image */}
          <div className="flex items-start gap-6 mb-6">
            {image && (
              <img 
                src={image} 
                alt={title} 
                className="w-32 h-32 object-contain"
              />
            )}
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
              <p className="text-gray-400">
                <span className="text-gray-300">{date}</span>
                {place && (
                  <>
                    <span className="mx-2">|</span>
                    <span>{place}</span>
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Points */}
          <div className="block-large-text text-gray-300 text-sm text-left">
            {text}
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlockLarge;