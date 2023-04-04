import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Format from '../../layout/format'
//components
import Trending from "../../components/trending"

export default function Home() {
  return (
    <Format>
      <Trending></Trending>
    </Format>     
  )
}