

function Image({places,index=0}) {
  return (
    <div className="w-32 h-20 object-cover bg-gray-50 rounded overflow-hidden">
      <img className="w-full h-full" src={'http://localhost:2000/upload/'+places.photos[index]} alt="" />
    </div>
  )
}

export default Image
