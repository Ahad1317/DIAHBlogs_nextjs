import Author from "./child/author"
import Link from "next/link"
import Image from "next/image"

export default function section() {
  return (
    <section className="container mx-auto md:px-20 py-16">
        <div className="grid lg:grid-cols-2">
        <div className="item">
        <h1 className="font-bold text-4xl py-12">Buisness</h1>
        <div className="flex flex-col gap-6">

            <Post/>
            <Post/>
            <Post/>
            <Post/>        </div>
        </div>
        <div className="item">
        <h1 className="font-bold text-4xl py-12">Sports</h1> 
            <div className="flex flex-col gap-6">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            </div>
        </div>
        </div>

    </section>
  )
}

function Post(){
    return(
        <div className="flex gap-5 ">
            <div className="image flex flex-col justify-start">
            <Link href="/">
                    <Image 
                    src = "/images/th1.jpeg" className="rounded" width={300} height={250}/>
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