// components/Slider.js
'use client';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css'; // Import default styles for Splide
import Image from 'next/image';

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

export default function Slider() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 mt-1">
      {/* Heading */}
      <h1
        style={{
          fontSize: 'var(--h1-size)',
          lineHeight: 'var(--h1-line-height)',
          fontWeight: 'var(--h1-font-weight)',
        }}
      >
        Faculty and Mentors
      </h1>
      {/* Subheading */}
      <p
        style={{
          color: 'var(--para-color)',
          fontSize: 'var(--p-size)',
          lineHeight: 'var(--p-line-height)',
          textAlign: 'center',
          maxWidth: '900px',
        }}
      >
        Learn from leading academicians in the field of Artificial Intelligence and Machine Learning and several experienced industry practitioners from top organisations.
      </p>
      {/* Carousel */}
      <div className="w-full max-w-4xl">
        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '1rem',
            breakpoints: {
              1024: { perPage: 2 },
              768: { perPage: 1 },
            },
            pagination: false,
            arrows: true,
          }}
          aria-label="Faculty and Mentors Carousel"
        >
          {cardData.map((card, index) => (
            <SplideSlide key={index}>
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  padding: '20px',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                }}
                className="min-h-60 flex flex-col justify-between"
              >
                {/* Card Header */}
                <div className="flex justify-start items-center gap-7 mb-4">
                  <Image src={card.image} alt={card.title} width={56} height={56} className="object-cover" />
                  <h3
                    style={{
                      fontSize: 'var(--h5-size)',
                      fontWeight: 'var(--h5-font-weight)',
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
                {/* Description */}
                <div className="flex flex-col justify-start items-start mb-auto">
                  <p
                    style={{
                      color: 'var(--para-color)',
                      fontSize: 'var(--p-small-size)',
                      lineHeight: 'var(--p-small-line-height)',
                    }}
                  >
                    {card.description}
                  </p>
                </div>
                {/* Company Logo */}
                <div className="relative mt-4">
                  <Image
                    src={card.image2}
                    alt="Company Logo"
                    width={100}
                    height={40}
                    className="mentors-description-images absolute bottom-0 left-0 right-0"
                  />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

