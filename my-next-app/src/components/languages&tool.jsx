import Image from "next/image"
export default function Languages(){
    const languages=[
        {
            images:['/python_circle.png','/sql.png','/numpy.png','/pandas.png'],
            name:['Python','SQL','NumPy','Pandas'],
        },
        {
            images:['/seaborn.png','learn.png','/keras.png','/tensorflow.png'],
            name:['Seaborn','Skitlearn','Keras','Tensorflow']
        },
        {
            images:['/tranformers.png','matplotlib.png','/opencv.png','/spacy.png'],
        }

    ]
    return(
        <>
        <div className="skillsyard-languages-main ">
            <h1>Languages and Tools covered</h1>

        </div>
        </>
    )
}