import { useEffect, useState } from "react"
import PhotosUpload from "./PhotosUpload"
import axios from "axios"
import { Navigate, useParams } from "react-router-dom"
import Swal from 'sweetalert2'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';





function Myform() {
  const { id } = useParams()
  console.log(id)
  console.log(id)
  const [heading, setHeading] = useState('')
  const [author, setAuthor] = useState('')
  const [photos, setPhotos] = useState([])
  const [description, setDescription] = useState('')
  const [prices, setPrices] = useState('')
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    if (!id) {
      return
    }
    axios.put('/edite/' + id)
      .then((respone) => {
        const { data } = respone
        setHeading(data.heading)
        setAuthor(data.author)
        setPhotos(data.photos)
        setDescription(data.description)
        setPrices(data.prices)
      })
  }, [id])

  function saveForm(ev) {
    ev.preventDefault()
    const placeData = {
      heading, author, photos, description, prices
    }
    if (id) {
      axios.put('/edite/' + id, { id, ...placeData })
        .then(() => {
          Swal.fire(
            'Update Successfull!',
            'Your file has been Update!.',
            'success',

          )
          setRedirect(true)
        })
        .catch(err => alert('no' + err))
    } else {
      axios.post('/saveform', placeData)
      setRedirect(true)
    }

  }
  if (redirect) {
    return (<Navigate to={'/account'} />)
  }

  return (
    <div className="min-h-screen flex justify-around grow">
      <div className="mt-4 flex-col flex items-center lg:px-96 md:px-24 px-10">
        <h2 className="text-2xl mt-2">Form for add post and your information</h2>
        <form action="" onSubmit={saveForm}>
          <label htmlFor="">Heading</label>
          <input className="rounded" type="text" placeholder="inter your hearding..."
            value={heading} onChange={e => setHeading(e.target.value)} />
          <label htmlFor="">Author</label>
          <input type="text" placeholder="enter your author..."
            value={author} onChange={e => setAuthor(e.target.value)} />
          <label htmlFor="">Photos</label>
          <div className="my-1">
            <PhotosUpload addPhotos={photos} onChanges={setPhotos} />
          </div>
          <label htmlFor="">Description</label>
          {/* <textarea type="text" placeholder="enter your description...."
            value={description} onChange={e => setDescription(e.target.value)} /> */}

          <ReactQuill theme="snow" className="h-36 mb-16"
            value={description}
            onChange={setDescription}
            placeholder="enter your description...."
          />
          <label htmlFor="">Prices</label>
          <input type="number" name="" id="" placeholder="0"
            value={prices} onChange={e => setPrices(e.target.value)} />
          <input type="submit" value="Save" />
        </form>
      </div>
    </div>
  )
}

export default Myform