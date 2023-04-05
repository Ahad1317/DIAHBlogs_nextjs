'use client'
import { Swiper,SwiperSlide } from "swiper/react"
import Link from "next/link"
import Image from "next/image"
import Author from "./child/author"

export default function popular() {
  return (
    <section className="container mx-auto md:px-20 py-16">
        <h1 className="font-bold text-4xl py-12 text-center">Most Popular..</h1>

            <Swiper
            slidesPerView={2}>
                <SwiperSlide><Post/></SwiperSlide>
                <SwiperSlide><Post/></SwiperSlide>
                <SwiperSlide><Post/></SwiperSlide>
                <SwiperSlide><Post/></SwiperSlide>
                <SwiperSlide><Post/></SwiperSlide>

            </Swiper>
        </section>
  )
}

function Post(){
    return(
        <div className="grid">
            <div className="images">
            <Link href="/">
                    <Image 
                    src = "/images/th3.jpeg" width={300} height={200}/>
                   </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
            <div className="cat">
                <Link href="/">
                    <div className="text-orange-600 hover:text-orange-800">Solution Challenge is ON !! </div>
                    <div className="text-gray-800 hover:text-gray-600"> &nbsp;- April 4, 2023</div>
                    </Link>
                    </div>
                    <div className="title">
                        <Link href ="/">
                            <div className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">Solution Challenge 2023: Use Google Technologies to Address UN Development Goals</div>
                        </Link>
                    </div>
                    <p className="text-gray-500 py-3">Each year, the Google Developer Student Clubs Solution Challenge invites university students to develop solutions for real-world problems using one or more Google products or platforms. How could you use your favorite Google technologies to promote employment for all, economic growth, and climate action?
                        Join us to build solutions for one or more of the United Nations 17 Sustainable Development Goals.
                        </p>
                        <Author></Author>
            </div>
        </div>
    )
}
