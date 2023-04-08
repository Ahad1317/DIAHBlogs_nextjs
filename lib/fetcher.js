import useSWR from 'swr'

const response = (...args) => fetch(...args).then(res=>res.json())

export default function fetcher(){

}