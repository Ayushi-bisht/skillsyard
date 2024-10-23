"use client"
import React from "react";
export default function Curriculum() {
    const curriculumImg = ["/python.svg", "/deep-learning.svg", "/machine-learning.svg", "/computer-vision.svg", "/neural-networks.svg", "/hugging-face.png", "/prompt.svg", "NLP.svg"]
    const curriculumHead = ['python', 'Deep Learning', 'Machine Learning', 'Computer Vision', 'Neural Networks', 'Hugging Face', 'Prompt Engineering', 'NLP with Generative AI']
    const cardHead = ["50%", "3,300+"]
    const cardPara = ["Average salary hike", "Hiring Companies"]
    return (
        <>
            <div className="learning-ai-about-main flex flex-col justify-center gap-4">
                <h1 className="text-[32px] leading-[40px] font-bold">Get a 360° understanding of AI and Machine Learning</h1>
                <p className="text-[#444] text-[15px] ">Masterclasses delivered by distinguished UT Austin faculty</p>
                <div className="learning-ai-about-part flex flex-wrap">
                    {
                        curriculumHead.map((value, index) => (
                            <div className="learning-ai-about-subpart flex justify-center gap-4 items-center" key={index}>
                                <img src={curriculumImg[index]} alt="" />
                                <h5>{value}</h5>
                            </div>
                        ))
                    }
                </div>
                <button className="text-[14px] bg-[#196ae5] text-white leading-6 p-[16px_24px]">download curriculum</button>
                <div>
                    <h1 className="text-[32px] leading-[40px] font-bold">Thousands of careers empowered</h1>
                    <div className="learning-ai-about-card-cont flex justify-center gap-4">
                        {
                            cardHead.map((value, index) => (
                                <div className="flex flex-col gap-2 border-[#1fa92f] border-l-4" key={index}>
                                    <h1>{value}</h1>
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