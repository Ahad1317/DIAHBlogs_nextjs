import Link from "next/link"
import Image from "next/image"
import Author from "./child/author"
import getPost from "../lib/helper"
export default function latest() {

    getPost(4).then(res=>console.log(res))
  return (
    <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center">Latest Posts..</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>
    </section>        
  )
}

function Post(){
    return(
        <div className="item">
            <div className="images">
            <Link href="/">
                    <Image 
                    src = "/images/th4.jpeg" className="rounded"  width={350} height={150}/>
                   </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
            <div className="cat">
                <Link href="/">
                   <div className="flex">
                    <div className="text-orange-600 hover:text-orange-800">Solution Challenge is ON !! </div>
                    <div className="text-gray-800 hover:text-gray-600"> &nbsp;- April 4, 2023</div>
                    </div>
                    </Link>
                    </div>
                    <div className="title">
                        <Link href ="/">
                            <div className="text-xl font-bold text-gray-800 hover:text-gray-600">Solution Challenge 2023: Use Google Technologies to Address UN Development Goals</div>
                        </Link>
                    </div>
                    <p className="text-gray-500 py-3 text-justify">Each year, the Google Developer Solution Challenge invites university students to develop solutions for real-world problems using Google products or platforms. How could you use your favorite Google technologies to promote employment for all, economic growth, and climate action?
                        Join us to build solutions for one or more of the UN Sustainable Development Goals.
                        </p>
                        <Author></Author>
            </div>
        </div>
    )
}
