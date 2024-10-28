"use client"
import React from "react";
import Image from "next/image";
export default function Curriculum() {
    const curriculum = [{
        head: ['python', 'Neural Networks'],
        img: ["/python.svg", "/neural-networks.svg"]
    },
    {
        head: ['Deep Learning', 'Hugging Face'],
        img: ["/deep-learning.svg", "/hugging-face.png"]
    },
    {
        head: ['Machine Learning', 'Prompt Engineering'],
        img: ["/machine-learning.svg", "/prompt.svg"]
    },
    {
        head: ['Computer Vision', 'NLP with Generative AI'],
        img: ["/computer-vision.svg", "NLP.svg"]
    }

    ]
    const cardHead = ["50%", "3,300+"]
    const cardPara = ["Average salary hike", "Hiring Companies"]
    return (
        <>
            <div className="learning-ai-about-main flex flex-col justify-center items-center gap-14">
                <div className="flex flex-col gap-2 justify-center items-center">
                    <h1 className="text-[32px] leading-[40px] font-bold">Get a 360° understanding of AI and Machine Learning</h1>
                    <p className="text-[#444] text-[15px] ">Masterclasses delivered by distinguished UT Austin faculty</p>
                </div>
                <div className="flex justify-center items-center gap-20">
                    {
                        curriculum.map((value, index) => (
                            <div key={index} className="learning-ai-about-subpart flex flex-col justify-center items-center gap-10">
                                {
                                    value.head.map((headItem, ind) => (
                                        <div className="flex justify-center items-center gap-2" key={ind}>
                                            <img src={value.img[ind]} alt={headItem} className="bg-[#068932] w-[50px] rounded-full p-2" />
                                            <h5 className="font-[600] text-[16px] text-[#444] capitalize">{headItem}</h5>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <button className="text-[18px] capitalize bg-[#068932] w-fit text-white leading-6 p-[14px_22px] rounded">download curriculum</button>
                <div className="flex flex-col justify-center items-center gap-6 ">
                    <h1 className="text-[32px] leading-[40px] font-bold">Thousands of careers empowered</h1>
                    <div className="learning-ai-about-card-cont flex justify-center gap-16">
                        {
                            cardHead.map((value, index) => (
                                <div className="flex flex-col gap-2 border-[#1fa92f] border-l-4 bg-white rounded shadow-lg shadow-gray-400 pl-2 *: py-2 pr-28" key={index}>
                                    <h1 className="font-[700] text-[16px] ">{value}</h1>
                                    <p>{cardPara[index]}</p>
                                </div>
                            ))
                        }
                    </div>
                    <p className="text-[#444] text-[15px]">*Across Great Learning programs</p>
                </div>
            </div>
        </>
    )
}