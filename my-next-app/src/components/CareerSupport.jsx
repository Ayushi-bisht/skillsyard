import next  from "next"
import Image from "next/image"
export default function CareerSupport(){
    const careerSup = ['Exclusive access to Great Learning job board', 'Live career mentorship with industry experts', 'Personalised Resume & Linkedin Review']
    const careerImg = ['/job-posting.jpg', '/industry-experts.jpg', '/resume.jpg']
    return(
        <div className="skillsyard-career-support">
        {
            careerSup.map((items,index) => {
                <div key={index}>
                    <img src={careerImg[index]} alt="" />
                    <p>{items}</p>
                </div>
            })
        }
    </div>
    )
}