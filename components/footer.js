import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'
import Newsletter from "./child/newsletter";

export default function footer() {
      const bg ={
        backgroundImage: "url('/images/footer.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "bottom left"
      }
      return (
    <footer className="bg-gray-50" style={bg}>
      <Newsletter></Newsletter>
      <div className="container mx-auto flx justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
          <Link href="/">
                     <ImFacebook color = "#3b5998"/>
                </Link>
                <Link href="/"> 
                     <ImTwitter color = "#1DA1F2"/>
                </Link>
                <Link href="/"> 
                     <ImYoutube color = "#FF0000"/>
                </Link>
          </div>

          <p className="py-5 text-gray-400 text-center">Copyright ©2023 All rights reserved | This is made by Ahad and Disha</p>
          <p className="text-gray-400 text-center">Terms & Condition</p>
          </div>
      </div>
    </footer>
  )
}
