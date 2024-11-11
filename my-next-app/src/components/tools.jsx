"use client"
import React from "react";
import Image from "next/image";
export default function Tools() {
    const languages= [{
        head: ['python','Seaborn','Transformers','LangChain','ML Flow'],
        img: ['/python_circle.png','/seaborn.png','/langchain.png','/ml-flow.png',]
    },
    {
        head: ['SQL',  'Sklearn', 'Matplotlib', 'Docker','Github'],
        img: ['/sql.png','/learn.png','/matplotlib.png', '/docker.png', '/github.png']
    },
    {
        head: [ 'NumPy', 'Keras','OpenCV', 'Flask','Gemini'],
        img: ['/numpy.png','/keras.png','/opencv.png','/flask.png', '/gemini.png']
    },
    {
        head: ['Pandas', 'TensorFlow', 'SpaCy','Whisper','Dall.E'],
        img: [ '/pandas.png','/tensorflow.png', '/spacy.png','/whisper.png','/dall-e.png']
    } ]
    return (
        <>
            <div className=" flex flex-col justify-center items-center gap-14">
                <div className="flex flex-col gap-2 justify-center items-center">
                    <h1 className="text-[32px] leading-[40px] font-bold">Get a 360° understanding of AI and Machine Learning</h1>
                    <p className="text-[#444] text-[15px] ">Masterclasses delivered by distinguished UT Austin faculty</p>
                </div>
                <div className="flex justify-start items-start gap-20">
                    {
                        languages.map((value, index) => (
                            <div key={index} className="skillsyard-tools-subpart flex flex-col justify-start items-start gap-10">
                                {
                                    value.head.map((headItem, ind) => (
                                        <div className="flex justify-start items-center gap-2 min-w-[200px]" key={ind}>
                                            <img src={value.img[ind]} alt={headItem} className={`bg-[#f9faf9] shadow-xl w-[50px] h-[50px] rounded-full p-2` } />
                                            <h5 className="font-[600] text-[16px] text-[#444] capitalize">{headItem}</h5>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}