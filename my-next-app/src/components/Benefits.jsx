export function Benefits() {
    const cardImg = ["/learn-anytime.jpg", "/mentorship.jpg", "/people-network.jpg", "/prog-support.jpg"]
    const cardHead = ["Learn anytime,anywhere", "Weekly online mentorship by experts", "Network with people of similar interests", "Dedicated Program Support"]
    const cardPara = ["Learn through online videos by world class faculty", "Get assistance on projects and reinforce concepts through weekly sessions", "Interact with peers to grow your professional network", "Dedicated Program Manager to solve your queries"]
    return (
        <>
            <div className="learning-ai-benefits-main">
                <h1>designed for professionals like you</h1>
                <div className="learning-ai-benefits-card-cont ">
                    {
                        cardHead.map((value, index) => (
                            <div className="learning-ai-benefits-card" key={index}>
                                <div className="learning-ai-benefits-card-text ">
                                    <h1>{value}</h1>
                                    <p>{cardPara[index]}</p>
                                </div>
                                <img src={cardImg[index]} alt="" />
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
};