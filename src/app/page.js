import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Format from '../../layout/format'
//components
import Trending from "../../components/trending"
import Latest from "../../components/latest"
import Popular from '../../components/popular'

export default function Home() {
  return (
    <Format>
      <Trending></Trending>
      <Latest></Latest>
      <Popular></Popular>
    </Format>     
  )
}