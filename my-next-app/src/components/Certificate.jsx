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
            <div className="learning-ai-certificate-main flex flex-col justify-center items-center gap-8 mt-20">
                <h1 className="text-[32px] leading-[40px] font-bold capitalize">Get A Certificate from Skillsyard</h1>
                    <div className="learning-ai-certificate-subpart-img flex flex-col justify-center items-center">
                        <img src="" alt='certificate' className="h-[400px] w-[800px] border border-black" />
                        <p className="text-[#444] text-[15px]">* Image for illustration only. Certificate subject to change.</p>
                        <div className="certificate-cont flex gap-3 ">
                            <img src="" alt="" className="h-[150px] w-[150px] border border-black" />
                            <img src="" alt="" className="h-[150px] w-[150px] border border-black" />
                        </div>
                    </div>
            </div>
        </>
    )
}