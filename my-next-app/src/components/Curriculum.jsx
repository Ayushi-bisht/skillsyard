"use client"
import React from "react";
import Image from "next/image";
export default function Curriculum() {
    const cardImg = '/hugging-face-img.png'
    const cardList = ['Hugging Face is a platform where the machine learning community collaborates on models, datasets, and applications. It allows users to build, train, and deploy machine learning and AI models by leveraging the models and datasets that are shared by the community, and also test and share their work openly.', 'One of the key components of the Hugging Face platform is the Transformers library, an open-source Python library that provides access to thousands of pre-trained transformers and large language models (LLMs) for natural language processing (NLP) and computer vision (CV).', 'In this program, you’ll be using the Transformers library to access and use state-of-the-art LLMs for a variety of tasks like text classification, question-answering, summarization, text generation, sentence similarity, and more.']
    const rightArr = '/right-arrow.svg'
    const accordianData = [
        {
            unit: 'Unit 1',
            title: 'Python Bootcamp for Non-Programmers',
            about: 'This boot camp serves as a training module for learners with limited or no programming exposure. It enables them to be at par with those learners who have prior programming knowledge before the program commences. This is an optional but open-to-all module. More than 1000 learners have successfully leveraged it to create a strong foundation of programming knowledge necessary to succeed as an AI/ML professional.'
        },
        {
            unit: 'Unit 2',
            title: 'Generative AI Pre-Work',
            about: [
                {
                    para: 'Get an overview of Generative AI, ChatGPT, and how it works. Delve into the business applications of ChatGPT, and an overview of other generative AI models/tools via demonstrations.',
                    list: ['ChatGPT and Generative AI- Overview', 'ChatGPT- Applications & Business', 'Breaking Down ChatGPT','Limitations and Beyond ChatGPT','Generative AI Demonstrations']
                }
            ],
        },
    {
        unit:'Unit 3',
        title:'Foundation Courses',
        children:[
            {
                title:''
            }
        ]
    }
    ]
    return (
        <>
            <div className="skillsyard-curriculum-main flex flex-col justify-center items-center mt-20">
                <div className="skillsyard-curriculum-main-sub ">
                    {
                        <div className="skillsyard-curriculum-sub-accordian">
                       
                        </div>
                        }
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