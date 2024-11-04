import Image from "next/image"
export default function Placements() {
    const name = ["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]
    const course = 'artificial intelligence & machine learning'
    const arrow = '/triple-arrow.svg'
    const post = ['senior data scientist(Engineer)', 'senior data scientist', 'data scientist specialist', 'data scientist', 'senior data scientist']
    const workplace = ['lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum',]
    const btn = '<'
    const user = './user-icon.svg'
    return (
        <>
            <div className="skillsyard-placements-main flex flex-col justify-center items-center gap-8 ">
                <div className="flex justify-center items-center relative">
                    <button className=" absolute -left-6 h-[50px] w-[50px] rounded-full bg-white text-black shadow-md text-2xl font-bold"> {btn} </button>
                    <div className="skillsyard-placement-slider flex gap-[10px] py-4 px-2  max-w-[1660px] overflow-hidden ">
                        {
                            name.map((value, index) => (
                                <div className="skillsyard-placement-card flex flex-col justify-center items-center text-center gap-6 min-w-[400px] min-h-[400px] py-2 rounded-md bg-white border border-gray shadow-lg" key={index}>
                                    <img src={user} alt="" className="w-[50px]" />
                                    <span className="flex flex-col gap-2">
                                        <h5 className="capitalize text-[20px] text-black ">{value}</h5>
                                        <p className="capitalize text-[16px] text-[#4A4A4A] ">{course}</p>
                                    </span>
                                    <img src={arrow} alt="" />
                                    <span className="flex flex-col gap-2">
                                        <h5 className="capitalize text-[20px] text-black">{post[index]}</h5>
                                        <p className="capitalize text-[16px] text-[#4A4A4A] font-bold">{workplace[index]}</p>
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                    <button className=" absolute -right-4 h-[50px] w-[50px] rounded-full bg-white text-black rotate-180 shadow-md text-2xl font-bold">{btn}
                    </button>
                </div>
                <button className="text-[18px] capitalize bg-[#068932] w-fit text-white leading-6 p-[14px_22px] rounded">download career transition report 2024</button>
            </div>
        </>
    )
}