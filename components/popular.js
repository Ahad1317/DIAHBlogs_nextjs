'use client'
import { Swiper,SwiperSlide } from "swiper/react"
import Link from "next/link"
import Image from "next/image"
import Author from "./child/author"
import fetcher from "../lib/fetcher"
import Spinner from "./child/spinner"
import Error from "./child/error"
export default function popular() {
    const {data,isLoading,isError} = fetcher('api/popular')
    if(isLoading)return<Spinner></Spinner>
   if(isError)return<Error></Error>
  return (
    <section className="container mx-auto md:px-20 py-16">
        <h1 className="font-bold text-4xl py-12 text-center">Most Popular..</h1>

            <Swiper
            slidesPerView={2}>
               {
                data.map((value,index)=>(
                    <SwiperSlide key = {index}><Post data={value}></Post></SwiperSlide>
                ))
               }
            </Swiper>
        </section>
  )
}

function Post({data}){
    const {id, title, category, img, published, description, author} =data 
    return(
        <div className="grid">
            <div className="images">
            <Link href="/">
                    <Image 
                    src = {img || ""} width={550} height={200}/>
                   </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
            <div className="cat">
                <Link href="/">
                    <div className="text-orange-600 hover:text-orange-800 ">{category || "No category"}</div>
                    <div className="text-gray-800 hover:text-gray-600"> &nbsp;- {published || "No publishing"}</div>
                    </Link>
                    </div>
                    <div className="title">
                        <Link href ="/">
                            <div className="text-2xl md:text-4xl font-bold text-gray-800 hover:text-gray-600 py-3">{title || "No title"}</div>
                        </Link>
                    </div>
                    <p className="text-gray-500 py-3 text-start">
                        {description || "description"}
                        </p>
                        {author ? <Author></Author> : <></>}
            </div>
        </div>
    )
}
