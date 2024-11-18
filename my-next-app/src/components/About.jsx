"use client";
import React from "react";

export default function About() {
    const curriculum = [
        {
            head: ['Python', 'Neural Networks'],
            img: ["/python.svg", "/neural-networks.svg"],
            background: ['#705ded', '#f1644c']  // Red and yellow
        },
        {
            head: ['Deep Learning', 'Hugging Face'],
            img: ["/deep-learning.svg", "/hugging-face.png"],
            background: ['#d64b9e', '#2fa75f']  // Blue and pink
        },
        {
            head: ['Machine Learning', 'Prompt Engineering'],
            img: ["/machine-learning.svg", "/prompt.svg"],
            background: ['#705ded', '#fe9f11']  // Orange and green
        },
        {
            head: ['Computer Vision', 'NLP with Generative AI'],
            img: ["/computer-vision.svg", "/nlp.svg"],
            background: ['#f1644c', '#0f4089']  // Purple and yellow
        }
    ];

    const cardHead = ["50%", "3,300+"];
    const cardPara = ["Average salary hike", "Hiring Companies"];

    return (
        <div className="learning-ai-about-main flex flex-col justify-center items-center gap-14 mt-16">
            {/* Section Header */}
            <div className="flex flex-col gap-2 justify-center items-center">
                <h2
                    style={{
                        fontSize: 'var(--h2-size)',
                        lineHeight: 'var(--h2-line-height)',
                        fontWeight: 'var(--h2-font-weight)'
                    }}
                >
                    Get a 360° understanding of AI and Machine Learning
                </h2>
                <p
                    style={{
                        color: 'var(--para-color)',
                        fontSize: 'var(--p-small-size)',
                        lineHeight: 'var(--p-small-line-height)'
                    }}
                >
                    Masterclasses delivered by distinguished UT Austin faculty
                </p>
            </div>

            {/* Curriculum Section */}
            <div className="flex justify-center items-center gap-20">
                {curriculum.map((value, index) => (
                    <div key={index} className="learning-ai-about-subpart flex flex-col justify-start items-start gap-10">
                        {value.head.map((headItem, ind) => (
                            <div className="flex justify-center items-center gap-2" key={ind}>
                                <div
                                    style={{
                                        backgroundColor: value.background[ind]
                                    }}
                                    className="w-[50px] h-[50px] rounded-full p-2 flex items-center justify-center"
                                >
                                    <img
                                        src={value.img[ind]}
                                        alt={headItem}
                                        className="w-full h-full object-contain rounded-full"
                                    />
                                </div>
                                <h6
                                    style={{
                                        fontSize: 'var(--h6-size)',
                                        fontWeight: 'var(--h6-font-weight)',
                                        color: 'var(--para-color)'
                                    }}
                                    className="capitalize"
                                >
                                    {headItem}
                                </h6>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Download Button */}
            <button
                style={{
                    fontSize: 'var(--h6-size)',
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    padding: '14px 22px',
                    borderRadius: '8px'
                }}
            >
                Download Curriculum
            </button>

            {/* Career Stats Section */}
            <div className="flex flex-col justify-center items-center gap-6">
                <h1
                    style={{
                        fontSize: 'var(--h1-size)',
                        lineHeight: 'var(--h1-line-height)',
                        fontWeight: 'var(--h1-font-weight)'
                    }}
                >
                    Thousands of careers empowered
                </h1>
                <div className="learning-ai-about-card-cont flex justify-center gap-16">
                    {cardHead.map((value, index) => (
                        <div
                            style={{
                                borderLeft: `4px solid var(--primary-color)`,
                                backgroundColor: 'white',
                                padding: '8px 16px',
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                            }}
                            className="flex flex-col gap-2 rounded"
                            key={index}
                        >
                            <h1
                                style={{
                                    fontSize: 'var(--h6-size)',
                                    fontWeight: 'var(--h6-font-weight)'
                                }}
                            >
                                {value}
                            </h1>
                            <p
                                style={{
                                    fontSize: 'var(--p-size)',
                                    lineHeight: 'var(--p-line-height)'
                                }}
                            >
                                {cardPara[index]}
                            </p>
                        </div>
                    ))}
                </div>
                <p
                    style={{
                        color: 'var(--para-color)',
                        fontSize: 'var(--p-small-size)',
                        lineHeight: 'var(--p-small-line-height)'
                    }}
                >
                    *Across Great Learning programs
                </p>
            </div>
        </div>
    );
}
