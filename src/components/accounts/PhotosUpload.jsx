/* eslint-disable react/jsx-key */
import axios from "axios"
import { useState } from "react"


function PhotosUpload({ addPhotos, onChanges }) {
    const [photosLink, setPhotoLink] = useState('')

    async function AddPhotoBylink(ev) {
        ev.preventDefault()
        const { data: filename } = await axios.post('/upload-by-link', { link: photosLink })
        onChanges(prev => {
            return [...prev, filename]
        })
        setPhotoLink('')

    }
    async function UploadPhotofile (ev){
        const files = ev.target.files;
        
        console.log({files})
        const data = new FormData;

        for (let i = 0; i < files.length; i++){
            data.append('photo',files[i])
        }
        await axios.post('/uploadphotofile',data ,{
            headers: { 'Content-Type ' : 'multipart/form-data'}
        })
        .then(respone => {
            const { data : filename } = respone
            
            onChanges(pre =>{
                return [...pre,...filename]
            })
        })

       

    }


    return (
        <div>
            <div className="flex gap-2 items-center cursor-pointer">
                <input type="text" placeholder="enter your link..."
                    value={photosLink} onChange={e => setPhotoLink(e.target.value)} />
                <button onClick={AddPhotoBylink} className="text-center px-2 h-10 bg-gray-600 text-white">Add&nbsp;photo</button>
            </div>
            <div>
                <div className="grid gap-1 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {addPhotos.length > 0 && addPhotos.map((item,index)=> (
                        <div className=" h-24" key={index}>
                            <img className="rounded w-full h-full object-cover" src={'http://localhost:2000/upload/' + item} alt="" />
                        </div>
                    ))}
                    <label className="flex  bg-gray-600 cursor-pointer px-2 text-center text-white  gap-1 items-center h-16 ">
                        <input type="file" multiple className="hidden" onChange={UploadPhotofile} />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                        </svg>
                        upload Photos

                    </label>

                </div>


            </div>
        </div>
    )
}

export default PhotosUpload