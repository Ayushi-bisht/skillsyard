export default function Benefits() {
    const card=[
        {
            head:["Learn anytime, anywhere", "Weekly online mentorship by experts"],
            para:["Learn through online videos by world class faculty", "Get assistance on projects and reinforce concepts through weekly sessions"],
            img:["/learn-anytime.jpg", "/mentorship.jpg"]
        },
        {
            head:["Network with people of similar interests", "Dedicated Program Support"],
            para:[ "Interact with peers to grow your professional network", "Dedicated Program Manager to solve your queries"],
            img:[ "/people-network.jpg", "/prog-support.jpg"]
        }
        
    ]
    return (
        <>
            <div className="learning-ai-benefits-main flex flex-col justify-center items-center gap-8">
                <h1 className="text-[32px] leading-[40px] font-bold capitalize">designed for professionals like you</h1>
                <div className="learning-ai-benefits-card-cont flex flex-col justify-center items-center gap-10">
                {
                    card.map((value,index)=>(
                        <div className="learning-ai-benefits-card flex  w-fit gap-8" key={index}>
                            {
                                value.head.map((items,indes)=>(
                                    <div className="flex border border-gray-300 rounded-md gap-12 w-fit p-7" key={indes}>
                                    <div className="learning-ai-benefits-card-text flex flex-col w-[400px] gap-4" key={indes}>
                                        <h1 className="text-[24px] leading-[30px] w-[250px] font-[400] capitalize">{items}</h1>
                                        <p className="text-[#444] text-[15px] capitalize">{value.para[indes]}</p>
                                    </div>
                                    <img src={value.img[indes]} alt={items} className="w-28 rounded " />
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
};