import axios from "axios"
import { useEffect, useState } from "react"
import Nav from "./Nav"
import Contente from "./Contente"
import { Link } from "react-router-dom"


function Home() {
    const [info, setInfo] = useState([])
    useEffect(() => {
        axios.get('/places')
            .then(({ data }) => {
                setInfo(data)
            })
    }, [])

    return (
        <div className="p-6">
            <div>
                <Contente />
            </div>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-3 my-2'>
                {info.length > 0 && info.map((item, index) => {
                    return (
                        <div key={index} className="my-2 border border-gray-400 ">
                            <div className="">
                                <Link to={'/'+item._id}>
                                    <Nav items={item} />
                                </Link>
                            </div>
                            <div className="p-1">
                                <Link to={'/'+item._id}>
                                    <h1 className="text-center py-2 text-2xl">{item.heading}</h1>
                                </Link>
                                <p dangerouslySetInnerHTML={{__html:item.description.substring(0,100)}}></p>
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-gray-400">author : {item.author}</p>
                                        {/* <p className="text-gray-400">{new Date(item.createdAt).toLocaleString()}</p> */}
                                    </div>
                                    <p className="text-red-700 text-xl">{item.prices} $</p>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button className="bg-sky py-2 px-4 my-2 text-white cursor-pointer">BUY NOW</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home