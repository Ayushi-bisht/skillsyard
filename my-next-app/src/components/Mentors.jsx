// components/Slider.js
'use client'
import { useState } from 'react';

const cardData = [
  {
    image: '/user-icon.svg',
    title: 'Person 1',
    description: 'Faculty Director - Centre for Research and Analytics 20+ Years Work Experience',
    image2: '/texas-company.png',
  },
  {
    image: '/user-icon.svg',
    title: 'Person 2',
    description: 'Faculty Director, Great Learning',
    image2: '/texas-company.png',
  },
  {
    image: '/user-icon.svg',
    title: 'Person 3',
    description: 'Professor, Artificial Intelligence and Machine Learning, Great Learning',
    image2: '/texas-company.png',
  },
  {
    image: '/user-icon.svg',
    title: 'Card 4',
    description: 'Faculty Director - Centre for Research and Analytics 20+ Years Work Experience',
    image2: '/texas-company.png',
  },
  {
    image: '/user-icon.svg',
    title: 'Card 5',
    description: 'Faculty Director, Great Learning',
    image2: '/texas-company.png',
  },
];

export default function Mentors() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < cardData.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-[32px] leading-[40px] font-bold">Faculty and Mentors</h1>
        <p className="text-[#444] text-[20px] max-w-[900px] text-center">
          Learn from leading academicians in the field of Artificial Intelligence and Machine Learning and several experienced industry practitioners from top organisations.
        </p>
        <div className="w-full flex flex-col items-center">
          <div className="relative w-full max-w-4xl overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }}
            >
              {cardData.map((card, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-4">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden px-4 py-5 min-h-60 flex flex-col justify-between">
                    <div className="flex justify-start items-center gap-7 mb-4">
                      <img src={card.image} alt={card.title} className="w-14 h-14 object-cover" />
                      <h3 className="text-xl font-semibold">{card.title}</h3>
                    </div>
                    <div className="flex flex-col justify-start items-start mb-auto">
                      <p className="mentors-description text-gray-500">{card.description}</p>
                    </div>
                    {/* Positioning image at the bottom with varying gap */}
                    <div className="relative mt-4">
                      <img
                        src={card.image2}
                        alt=""
                        className="mentors-description-images absolute bottom-0 left-0 right-0"
                        style={{
                          marginTop: `${(index + 1) * 10}px`, // Adjust gap for each card
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between w-full max-w-4xl mt-4">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600"
              disabled={currentIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600"
              disabled={currentIndex >= cardData.length - 3}
            >
              Next
            </button>
          </div>
        </div>
      </div>

    </>

  );
}
