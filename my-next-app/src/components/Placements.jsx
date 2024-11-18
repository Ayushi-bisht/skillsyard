'use client';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import Image from 'next/image';
import { useRef } from 'react';

export default function Placements() {
  const name = ['lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum'];
  const course = 'artificial intelligence & machine learning';
  const arrow = '/triple-arrow.svg';
  const post = [
    'senior data scientist(Engineer)',
    'senior data scientist',
    'data scientist specialist',
    'data scientist',
    'senior data scientist',
  ];
  const workplace = ['lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum'];
  const user = './user-icon.svg';

  // Ref to access Splide instance
  const splideRef = useRef(null);

  return (
    <div className="skillsyard-placements-main flex flex-col justify-center items-center gap-8 mt-16 relative">
      <div className="w-full max-w-[1110px] relative overflow-visible">
        {/* Splide Slider */}
        <Splide
          ref={splideRef}
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '1rem',
            pagination: false,
            arrows: false,
            breakpoints: {
              1024: { perPage: 2 },
              768: { perPage: 1 },
            },
          }}
        >
          {name.map((value, index) => (
            <SplideSlide key={index}>
              <div className="skillsyard-placement-card flex flex-col justify-center items-center text-center gap-6 min-w-[350px] min-h-[400px] py-2 rounded-md bg-white border border-gray shadow-lg">
                <Image src={user} alt="User Icon" width={50} height={50} className="object-cover" />
                <span className="flex flex-col gap-2">
                  <h5 className="capitalize text-[20px] text-black">{value}</h5>
                  <p className="capitalize text-[16px] text-[#4A4A4A]">{course}</p>
                </span>
                <Image src={arrow} alt="Arrow Icon" width={30} height={30} />
                <span className="flex flex-col gap-2">
                  <h5 className="capitalize text-[20px] text-black">{post[index]}</h5>
                  <p className="capitalize text-[16px] text-[#4A4A4A] font-bold">{workplace[index]}</p>
                </span>
              </div>
            </SplideSlide>
          ))}
        </Splide>

        {/* Left Arrow */}
        <button
          className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full h-12 w-12 flex items-center justify-center shadow-md z-10"
          onClick={() => splideRef.current?.splide.go('<')}
        >
          &lt;
        </button>

        {/* Right Arrow */}
        <button
          className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full h-12 w-12 flex items-center justify-center shadow-lg z-10"
          onClick={() => splideRef.current?.splide.go('>')}
        >
          &gt;
        </button>
      </div>

      {/* Download Button */}
      <button className="text-[18px] capitalize bg-[#068932] w-fit text-white leading-6 px-6 py-3 rounded">
        download career transition report 2024
      </button>
    </div>
  );
}

