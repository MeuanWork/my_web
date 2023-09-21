import axios from "axios"
import { useEffect, useState } from "react"
import Image from "./Image"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"


function Information() {
  const [places, setPlaces] = useState([])
  function showinfo(){
    axios.get('/places')
      .then(({ data }) => setPlaces(data))
  }
  useEffect(() => {
    showinfo()
  },[])
  function ComfirmDelet(_id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Delete this information!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
          Delet(_id)
        )
      }
    })
  }
  function Delet(_id) {
    axios.delete('/places/' + _id)
      .then(() => {
        showinfo()
      })
      .catch(err => alert('err:' + err))

  }
  return (
    <div>
      {places.length > 0 &&places.map((item, index) => {
        return (
          <div key={index} className="bg-white m-2 px-3 py-2 relative">
            <div className="flex gap-2 w-full">
              <div>
                <Image places={item} />
              </div>
              <div>
                <h1 className="mt-2 text-2xl">{item.heading}</h1>
                <div>
                 <p dangerouslySetInnerHTML={{__html:item.description.substring(0,170)}}/>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500 ml-32">Author : {item.author}</span>
              <span className="text-blue-500 "> {new Date(item.createdAt).toLocaleString()}</span>
            </div>
            <div>price course <span className="text-red-400">{item.prices}</span> $</div>
            <div className="absolute right-10 bottom-5 flex gap-2">
              <Link to={'/form/'+item._id}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </Link>
              <button onClick={() => ComfirmDelet(item._id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>

            </div>
          </div>

        )
      })}
    </div>
  )
}

export default Information
