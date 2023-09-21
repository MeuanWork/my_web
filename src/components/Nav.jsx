
function Nav({items,index=0}) {



  return (
    <div className='w-full h-52'>
      <img className="w-full h-full object-cover" src={'http://localhost:2000/upload/'+items.photos[index]} alt="" />
    </div>
  )
}

export default Nav