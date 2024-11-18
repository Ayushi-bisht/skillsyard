'use client';
import { useState } from 'react';

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "What is Next.js?", answer: "Next.js is a React framework for building web applications with server-side rendering and static site generation." },
    { question: "What is Tailwind CSS?", answer: "Tailwind CSS is a utility-first CSS framework for quickly styling applications." },
    { question: "How do I use this FAQ component?", answer: "Simply pass an array of questions and answers as props to the FAQ Accordion component." },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      style={{
        padding: "var(--side-padding)",
        backgroundColor: "var(--light-bg-1)",
        minHeight: "100vh",
      }}
      className="faq-container"
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: "var(--h1-size)",
          lineHeight: "var(--h1-line-height)",
          fontWeight: "var(--h1-font-weight)",
          color: "var(--header-heading-color)",
        }}
        className="text-center mb-8"
      >
        Frequently Asked Questions
      </h1>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              borderRadius: "8px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
            className="faq-item overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleAccordion(index)}
              style={{
                padding: "1.5rem",
                fontSize: "var(--h6-size)",
                lineHeight: "var(--h6-line-height)",
                fontWeight: "var(--h6-font-weight)",
                color: "var(--heading-color)",
              }}
              className="w-full flex justify-between items-center text-left focus:outline-none"
            >
              <h6>{faq.question}</h6>
              <span
                style={{
                  fontSize: "2rem",
                  transition: "transform 0.3s",
                  transform: activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                }}
                className="font-bold"
              >
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>

            {/* Answer */}
            {activeIndex === index && (
              <div
                style={{
                  padding: "1.5rem",
                  backgroundColor: "var(--light-bg-1)",
                  color: "var(--para-color)",
                  fontSize: "var(--p-size)",
                  lineHeight: "var(--p-line-height)",
                }}
                className="faq-answer"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}





              