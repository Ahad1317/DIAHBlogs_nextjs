import Link from "next/link"
import Image from "next/image"
import Author from "./child/author"
import fetcher from "../lib/fetcher"
import Spinner from "./child/spinner"
import Error from "./child/error"
export default function latest() {
     const {data,isLoading,isError} = fetcher('api/posts/post')
     if(isLoading)return<Spinner></Spinner>
    if(isError)return<Error></Error>
  return (
    <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center">Latest Posts..</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
           {
            data.map((value, index)=>(
                <Post data ={value} key ={index}></Post>
            ))
           }
        </div>
    </section>        
  )
}

function Post({data}){
     const {id, title, category, img, published, author} =data
    return(
        <div className="item">
            <div className="images">
            <Link href={`/posts/${id}`}>
                    <Image 
                    src = {img || "/"} className="rounded"  width={350} height={150}/>
                   </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
            <div className="cat">
                <Link href={`/posts/${id}`}>
                    <div className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</div></Link>
                    <Link href={`/posts/${id}`}>
                    <div className="text-gray-800 hover:text-gray-600"> &nbsp;- {published || "Unknown"}</div>
                    </Link>
                    </div>
                    <div className="title">
                        <Link href ={`/posts/${id}`}>
                            <div className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</div>
                        </Link>
                    </div>
                    <p className="text-gray-500 py-3 text-justify">Each year, the Google Developer Solution Challenge invites university students to develop solutions for real-world problems using Google products or platforms. How could you use your favorite Google technologies to promote employment for all, economic growth, and climate action?
                        Join us to build solutions for one or more of the UN Sustainable Development Goals.
                        </p>
                        {author ? <Author></Author> : <></>}
            </div>
        </div>
    )
}
