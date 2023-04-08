'use client'
import Image from "next/image"
import Link from "next/link"
import Author from "./child/author" 
import 'swiper/swiper.min.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import SwiperCore from 'swiper'

export default function trending() {

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
                <SwiperSlide><Slide/></SwiperSlide>
                <SwiperSlide><Slide/></SwiperSlide>

      ...
    </Swiper>
            
        </div>
    </section>
  )
}
function Slide(){
    return (
        <div className = "grid md:grid-cols-2">
            <div className="image">
            <Link href="/">
                    <Image 
                    src = "/images/a2.png" width={600} height={600} className="pr-6" style={{ width: "100%", height: "auto" }}/>
                   </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                <Link href="/">
                    <div className="text-orange-600 hover:text-orange-800">Solution Challenge is ON !!</div>
                    <div className="text-gray-800 hover:text-gray-600 pb-2">- April 4, 2023</div>
                    </Link>
                    </div>
                    <div className="title">
                        <Link href ="/">
                            <div className="text-3xl md:text-5xl font-bold text-gray-800 hover:text-gray-600">Solution Challenge 2023: Use Google Technologies to Address UN Development Goals</div>
                        </Link>
                    </div>
                        <p className="text-gray-500 py-3 text-justify">Each year, the Google Developer Student Clubs Solution Challenge invites university students to develop solutions for real-world problems using one or more Google products or platforms. How could you use your favorite Google technologies to promote employment for all, economic growth, and climate action?
                        Join us to build solutions for one or more of the United Nations 17 Sustainable Development Goals.
                        </p>
                        <Author></Author>
            </div>
        </div>
    )
}

