// components/Slider.js
'use client'
// components/Slider.js
import { useState } from 'react';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      name: 'Senthil Mohan',
      role: 'Designer Project Lead, Schneider Electric',
      image: '/path-to-senthil-image.jpg',
      testimonial:
        'I found the curriculum to be extremely precise and structured to the topics discussed.',
    },
    {
      name: 'Jai Arora',
      role: 'Director of Engineering, Adidas',
      image: '/path-to-jai-image.jpg',
      testimonial:
        'With the course and the projects that we undertook, it brought in a lot of discipline in me to continue working and upskilling at the same time.',
    },
    // Add more slides as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full py-10">
      <h2 className="text-center text-2xl font-semibold mb-6">Learner Testimonials</h2>
      <div className="relative w-full overflow-hidden border ">
        {/* Slider Container */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 border border-black" style={{ width: '632px', height: '100%' }}>
              <div className="bg-white shadow-md rounded-lg p-6" style={{ width: '632px', height: '600px' }}>
                {/* Video Div */}
                <div className="relative mb-4">
                  <div className="w-full h-[360px] bg-blue-900 rounded-lg flex items-center justify-center">
                    {/* Play Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M5 3v18l15-9L5 3z" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">{slide.name}</h3>
                    <p className="text-sm text-gray-500">{slide.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{slide.testimonial}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
          style={{ borderRadius: '50%' }}
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center"
          style={{ borderRadius: '50%' }} 
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}