"use client"
// pages/index.js
import { useState } from 'react';

export default function Home() {
  // Sample dynamic data for the accordion
  const accordionData = [
    {
      unit: 'Unit 1',
      title: 'Introduction to Web Development',
      about: [
        'Introduces the basics of web development, including an overview of frontend, backend, and full stack roles and how they interact to create dynamic applications.',
        'Covers setting up a development environment using essential tools like VS Code for coding and Git/GitHub for version control, ensuring students are equipped to manage and share their projects.',
        'Explains the fundamentals of the web, including how HTTP, URLs, and web servers work together to allow communication between clients and servers.',
        'Prepares students with foundational knowledge of the web, setting them up for hands-on coding skills in upcoming units.',
      ],
    },
    {
      unit: 'Unit 2',
      title: 'HTML and CSS Fundamentals',
      about: [
        'Teaches HTML, the language used to structure web content, covering essential elements, forms, and the basics of accessibility to ensure inclusive design.',
        'Introduces CSS for styling, focusing on selectors, the box model, and layout techniques to create visually appealing web pages.',
        'Covers responsive design principles, including media queries and a mobile-first approach, enabling students to build layouts that work seamlessly across devices.',
        'Equips students with the skills to create static web pages that are both functional and visually engaging, laying a solid foundation for more complex development.',
      ],
    },
    {
      unit: 'Unit 3',
      title: 'JavaScript Programming (Frontend)',
      children: [
        {
          title: 'Core JavaScript',
          list: ['Variables', 'data types', 'functions', 'control flow', 'ES6+ syntax'],
        },
        {
          title: 'DOM Manipulation',
          list: ['Selecting and modifying elements', 'event handling', 'basic animations'],
        },
        {
          title: 'Asynchronous JavaScript',
          list: ['Callbacks', 'promises', 'async/await'],
        },
      ],
    },
    {
      unit: 'Unit 4',
      title: 'Frontend Frameworks and Libraries',
      children: [
        {
          title: 'React Essentials',
          list: 'Covers the fundamentals of React, including components, props, state, and lifecycle methods, as well as advanced concepts like hooks, context API, and React Router.',
        },
        {
          title: 'Styling in React',
          list: 'Explores various styling options in React, including CSS modules, styled-components, and Tailwind CSS basics.',
        },
      ],
    },
    {
      unit: 'Unit 5',
      title: 'Backend Development',
      children: [
        {
          title: 'Server Fundamentals with Node.js',
          list: ['Setting up a server', 'working with modules', 'handling requests and responses'],
        },
        {
          title: 'Express Framework',
          list: ['Building RESTful APIs', 'routing, middleware'],
        },
        {
          title: 'Database Integration',
          list: ['Basics of MongoDB', 'creating and querying data', 'MongoDB Atlas'],
        },
      ],
    },
    {
      unit: 'Unit 6',
      title: 'Deployment and Project Management',
      children: [
        {
          title: 'Version Control with Git',
          list: ['Branching', 'merging', 'pull requests'],
        },
        {
          title: 'Deployment Basics',
          list: ['Deploying with platforms like Vercel', 'Netlify (frontend)', 'Heroku (backend)'],
        },
        {
          title: 'Project Management and Best Practices',
          list: ['Agile methodology basics', 'code reviews', 'collaboration tools'],
        },
      ],
    },
  ];

  // State to handle which panel is expanded
  const [expanded, setExpanded] = useState(null);

  // Function to toggle the expanded state for each panel
  const handleChange = (panel) => {
    setExpanded(expanded === panel ? null : panel); // Toggle the panel
  };

  // Recursive AccordionItem component for rendering both top-level and nested items
  const AccordionItem = ({ item, unitId }) => (
    <div className="border border-gray-300 rounded-lg">
      <div
        onClick={() => handleChange(unitId)}
        className="flex items-center justify-between p-4 bg-gray-100 cursor-pointer"
      >
        <span className="text-lg font-semibold">{item.title}</span>
        <span
          className={`transform transition-transform ${expanded === unitId ? 'rotate-90' : ''}`}
        >
          &#8594;
        </span>
      </div>
      {expanded === unitId && (
        <div className="p-4 border-t border-gray-200">
          {/* Render top-level description (about) */}
          {item.about && (
            <ul className="list-disc pl-6">
              {item.about.map((text, index) => (
                <li key={index} className="mb-2">{text}</li>
              ))}
            </ul>
          )}
          
          {/* Render nested items if any */}
          {item.children && item.children.length > 0 && (
            <div className="space-y-4 pl-4">
              {item.children.map((child, index) => (
                <AccordionItem
                  key={`${unitId}-child-${index}`} // Unique key for each child
                  item={child}
                  unitId={`${unitId}-child-${index}`} // Unique unitId for nested items
                />
              ))}
            </div>
          )}

          {/* Render description for each nested child (list) */}
          {item.list && (
            <div className="mt-4">
              {Array.isArray(item.list) ? (
                <ul className="list-disc pl-6">
                  {item.list.map((text, index) => (
                    <li key={index} className="mb-2">{text}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.list}</p> // Render as plain text if it's a string
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Nested Accordion Example</h1>
      <div className="space-y-4">
        {accordionData.map((item, index) => (
          <AccordionItem key={item.unit} item={item} unitId={item.unit} />
        ))}
      </div>
    </div>
  );
}



{/* <div className="skillsyard-curriculum-card flex flex-col justify-center items-center border border-[#e69000] max-w-3xl rounded-md gap-5 p-6">
                    <h1 className="text-[32px] leading-[40px] font-[700]">Learn Generative AI with Hugging Face</h1>
                    <img src={cardImg} className="w-[150px]" alt="" />
                    {
                        cardList.map((value, index) => (
                            <ul className="flex justify-start items-start gap-3">
                                <img src={rightArr} alt="" />
                                <li key={index} className="text-[#444] text-[15px]">{value}</li>
                            </ul>
                        ))
                    }
                </div> */}

              