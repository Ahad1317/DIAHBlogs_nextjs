import Image from "next/image"
import Link from "next/link"
import Author from "./author"

export default function Related() {
    return(
        <div>
            <section className="pt-20">
            <h1 className="font-bold text-3xl py-10">Related</h1> 
            <div className="flex flex-col gap-10">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
            </section>
        </div>
    )
}

function Post(){
    return(
        <div className="flex gap-5">
               <div className="image flex flex-col justify-start">
            <Link href="/">
                    <Image 
                    src = "/images/th1.jpeg" className="rounded" width={300} height={200}/>
                   </Link>
            </div>
            <div className="info flex justify-center flex-col ">
            <div className="cat">
                <Link href="/">
                    <div className="text-blue-800 hover:text-orange-800">Solution Challenge is ON !! </div>
                    <div className="text-gray-800 hover:text-gray-600"> &nbsp;- April 4, 2023</div>
                    </Link>
                    </div>
                    <div className="title">
                        <Link href ="/">
                            <div className="text-xl font-bold text-gray-800 hover:text-gray-600">Solution Challenge 2023: Use Google Technologies to Address UN Goals</div>
                        </Link>
                    </div>
                    <Author></Author>
            </div>
        </div>
    )
}