'use client'
import { useState } from "react";

export default function CaseStudiesAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const caseStudies = [
    {
      title: "Food and Beverage",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      domain: "Customer Sentiment Analysis",
    },
    {
      title: "Media",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      domain: "News Categorization",
    },
    {
      title: "Airline",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      domain: "Customer Review Sentiment Analysis",
    },
  ];

  return (
    <div className="flex flex-col gap-5 items-center py-10">
      <h2 className="text-2xl font-bold mb-6">Hands-On Case Studies</h2>
      <div className="flex gap-32 mb-8">
        <div className="bg-red-100 rounded-lg border-b-4 border-red-400 px-6 py-4">
          <p className="text-red-600 text-lg font-bold">11</p>
          <p className="text-sm">Hands-on projects</p>
        </div>
        <div className="bg-purple-100 rounded-lg border-b-4 border-purple-400 px-6 py-4">
          <p className="text-purple-600 text-lg font-bold">40+</p>
          <p className="text-sm">Case studies</p>
        </div>
        <div className="bg-yellow-100 rounded-lg border-b-4 border-yellow-400 px-6 py-4">
          <p className="text-yellow-600 text-lg font-bold">22+</p>
          <p className="text-sm">Domains</p>
        </div>
      </div>
      <div className="w-full max-w-3xl">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="mb-4 border rounded-lg shadow-md mx-auto w-[980px] sm:w-3/6 md:w-8/12"
          >
            <button
              className="w-full flex justify-between items-center p-4 bg-white rounded-t-lg focus:outline-none transition-all"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-bold">{study.title}</span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 ">
                <p className="mb-2">{study.description}</p>
                <p className="text-sm text-gray-600">Domain: {study.domain}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}