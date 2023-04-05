import Image from "next/image"
import Link from "next/link"

export default function author() {
  return (
    <div className="author flex py-2 ">
        <Image src = {"/images/mee.jpeg"} width = {60} height = {60} className="rounded-full"></Image>
        <div className="flex flex-col justify-center px-4">
            <Link href ={"/"}>
                <div className="text-md font-bold text-gray-800 hover:text-gray-600">Abdul Ahad</div>
                <span className="text-sm text-gray-500">Future CEO</span>
            </Link>
        </div>
    </div>
  )
}
