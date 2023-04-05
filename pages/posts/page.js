import Format from "../../layout/format"
import Author from "../../components/child/author"
import Image from "next/image"
export default function Page(){
    return(
        <Format>
            <section className="container mx-auto md:px-2 py-16 w-1/2">
                <div className="flex justify-center">
                    <Author></Author>
                </div>

                <div className="post py-10">
                    <h1 className="font-bold text-4xl text-center pb-5">hey there everyone thiss is the first blog post</h1>
                <p className="text-gray-500 text-xl text-center">this is about the blog post</p>
                <div className="py-10">
                    <image src={"/images/banner1.jpg"} width={900} height={600}>

                    </image>
                    <div className="content text-gray-600 text-lg flex flex-col gap-4">
                        <p>
                            heyeeeee
                        </p>
                        <p>
                            heyeeeee
                        </p>
                        <p>
                            heyeeeee
                        </p>
                        <p>
                            heyeeeee
                        </p>
                    </div>
                </div>
                </div>
            </section>
        </Format>
    )
}