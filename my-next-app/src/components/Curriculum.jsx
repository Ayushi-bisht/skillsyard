"use client"
import React, { useState } from "react";
import Image from "next/image";
export default function Curriculum() {
    const cardImg = '/hugging-face-img.png'
    const cardList = ['Hugging Face is a platform where the machine learning community collaborates on models, datasets, and applications. It allows users to build, train, and deploy machine learning and AI models by leveraging the models and datasets that are shared by the community, and also test and share their work openly.', 'One of the key components of the Hugging Face platform is the Transformers library, an open-source Python library that provides access to thousands of pre-trained transformers and large language models (LLMs) for natural language processing (NLP) and computer vision (CV).', 'In this program, you’ll be using the Transformers library to access and use state-of-the-art LLMs for a variety of tasks like text classification, question-answering, summarization, text generation, sentence similarity, and more.']
    const rightArr = '/right-arrow.svg'
    const accordianData = [
        {
            unit: 'Unit 1',
            title: 'Introduction to Web Development',
            about: ['Introduces the basics of web development, including an overview of frontend, backend, and full stack roles and how they interact to create dynamic applications.','Covers setting up a development environment using essential tools like VS Code for coding and Git/GitHub for version control, ensuring students are equipped to manage and share their projects.','Explains the fundamentals of the web, including how HTTP, URLs, and web servers work together to allow communication between clients and servers.','Prepares students with foundational knowledge of the web, setting them up for hands-on coding skills in upcoming units.']
        },
        {
            unit: 'Unit 2',
            title: 'HTML and CSS Fundamentals',
            about: ['Teaches HTML, the language used to structure web content, covering essential elements, forms, and the basics of accessibility to ensure inclusive design.','Introduces CSS for styling, focusing on selectors, the box model, and layout techniques to create visually appealing web pages.','Covers responsive design principles, including media queries and a mobile-first approach, enabling students to build layouts that work seamlessly across devices.','Equips students with the skills to create static web pages that are both functional and visually engaging, laying a solid foundation for more complex development.'],
        },
    {
        unit:'Unit 3',
        title:'JavaScript Programming (Frontend)',
        children:[
            {
                title:' Core JavaScript',
                list:['Variables','data types','functions','control flow','ES6+ syntax']
            },
            {
                title:'DOM Manipulation',
                list:['Selecting and modifying elements','event handling','basic animations'],
            },
            {
                title:'Asynchronous JavaScript',
                list:['Callbacks','promises','async/await']
            }
        ]
    },
    {
        unit:'Unit 4',
        title:'Frontend Frameworks and Libraries',
        children:[
            {
                title:'React Essentials',
                list:'Covers the fundamentals of React, including components, props, state, and lifecycle methods, as well as advanced concepts like hooks, context API, and React Router.',
            },
            {
                title:'Styling in React',
                list:' Explores various styling options in React, including CSS modules, styled-components, and Tailwind CSS basics.',
            }
        ]
    },
    {
        unit:'Unit 5',
        title:'Backend Development',
        children:[
            {
                title:'Server Fundamentals with Node.js',
                list:['Setting up a server', 'working with modules','handling requests and responses'],
            },
            {
                title:'Express Framework',
                list:['Building RESTful APIs','routing,middleware'],
            },
            {
                title:'Database Integration',
                list:['Basics of MongoDB','creating and querying data','MongoDB Atlas']
            }
        ]
    },
    {
        unit:'Unit 6',
        title:' Deployment and Project Management',
        children:[
            {
                title:'Version Control with Git',
                list:['Branching','merging','pull requests'],
            },
            {
                title:'Deployment Basics',
                list:['Deploying with platforms like Vercel','Netlify (frontend)','Heroku (backend)'],
            },
            {
                title:'Project Management and Best Practices',
                title:['Agile methodology basics','code reviews',' collaboration tools']
            }
        ]
    },
    ];
    const [openParent,setOpenParent]=useState(null);
    const [openChild,setOpenChild]=useState(null);
    const toggleParent=(index)=>{
        setOpenParent(openParent === index ? null : index);
        setOpenChild(null);
    }

    const toggleChild=(index)=>{
        setOpenChild(openChild === index ? null : index);
    }
    return (
        <>
            <div className="skillsyard-curriculum-main flex flex-col justify-center items-center mt-20">
                <div className="skillsyard-curriculum-main-sub ">
                        <div className="skillsyard-curriculum-sub-accordian">
                       {
                       accordianData.map((value,index)=>(
                             <div className="skillsyard-curriculum-accordian-card">
                               {
                                
                                }
                             </div>
                       ))
                       }
                        </div>
                </div>
                <div className="skillsyard-curriculum-card flex flex-col justify-center items-center border border-[#e69000] max-w-3xl rounded-md gap-5 p-6">
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
                </div>
            </div>
        </>
    )
}