'use client'
import Image from "next/image"
import Link from "next/link"
import Author from "./child/author" 
import 'swiper/swiper.min.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import SwiperCore from 'swiper'
import fetcher from "../lib/fetcher"
import Spinner from "./child/spinner"
import Error from "./child/error"

export default function trending() {
    const {data,isLoading,isError} = fetcher('api/trending')
    if(isLoading)return<Spinner></Spinner>
   if(isError)return<Error></Error>

    SwiperCore.use([Autoplay])
  const bg = {
    background: "url('/images/banner6.jpg') no-repeat ",
    backgroundPosition:"right",
    backgroundSize: "contain"
  }
    return (  
    <section className="py-16" style ={bg}>
        <div className="container mx-auto md:px-10">
            <h1 className="font-bold text-4xl pb-12 text-center">What's Trending ?</h1>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay ={{
                    delay:2000,
                }}
                modules={[Autoplay]}
                className="mySwiper"
                >
               {
                data.map((value,index)=>(
                    <SwiperSlide key = {index}><Slide data = {value}></Slide></SwiperSlide>
                ))
               }

      ...
    </Swiper>
            
        </div>
    </section>
  )
}
function Slide({data}){
    const {id, title, category, img, published, description, author} =data
    return (
        <div className = "grid md:grid-cols-2">
            <div className="image">
            <Link href="/">
                    <Image 
                    src = {img || "/"} width={600} height={580} className="pr-6" style={{ width: "100%", height: "auto" }}/>
                   </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                <Link href="/">
                    <div className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</div>
                    <div className="text-gray-800 hover:text-gray-600 pb-2">- {published || "Unknown"}</div>
                    </Link>
                    </div>
                    <div className="title">
                        <Link href ="/">
                            <div className="text-3xl md:text-5xl font-bold text-gray-800 hover:text-gray-600">{title || "Unknown"}</div>
                        </Link>
                    </div>
                        <p className="text-gray-500 py-3 text-justify">
                            {description || "description"}
                        </p>
                        {author ? <Author></Author> : <></>}
            </div>
        </div>
    )
}

