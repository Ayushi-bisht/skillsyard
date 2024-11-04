import React from "react";
import Image from "next/image";
export default function Certificate() {
    const certificateCard = [
        {
            images: ['/ranking_3.jpg', '/ranking_6.jpg'],
            head: ["MS - Business Analytics", "Executive Education"],
            para: ["QS World University rankings, 2022", "Custom Programs by Financial Times, 2022"]
        }
    ]
    return (
        <>
            <div className="learning-ai-certificate-main flex flex-col justify-center items-center gap-8">
                <h1 className="text-[32px] leading-[40px] font-bold capitalize">Get Dual Certificate from UT Austin & Great Lakes</h1>
                <div className="learning-ai-certificate-subpart flex justify-center items-start gap-8">
                    <div className="learning-ai-certificate-subpart-img">
                        <img src="" alt='certificate' className="h-[400px] w-[400px] border border-black" />
                        <p>* Image for illustration only. Certificate subject to change.</p>
                        <div className="certificate-cont flex ">
                            <img src="" alt="" className="h-[150px] w-[150px] border border-black" />
                            <img src="" alt="" className="h-[150px] w-[150px] border border-black" />
                        </div>
                    </div>

                    {
                        certificateCard.map((value, index) => (
                            <div className="learning-ai-certificate-card-cont flex flex-col justify-center gap-10" key={index}>
                                {
                                    value.head.map((item, ind) => (
                                        <div className="learning-ai-certificate-card flex items-center gap-5 border border-gray-400 rounded-md p-4" key={ind} >
                                            <img src={value.images[ind]} alt="" />
                                            <div className="certificate-card-text">
                                                <h2 className="text-[22px] leading-[30px] w-[150px] font-[600] capitalize">{item}</h2>
                                                <p className="text-[#444] text-[12px] capitalize">{value.para[ind]}</p>
                                            </div>
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