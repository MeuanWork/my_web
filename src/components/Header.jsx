import { useState, useContext } from "react"
import { Link, Navigate } from "react-router-dom"
import { UseContext } from "../Usecontext"
import axios from "axios"


function Header() {

  const { user } = useContext(UseContext)
  const [redirect, setRedirect] = useState(false)
  function LogOut(ev) {
    ev.preventDefault()
    axios.post('/logout')
      .then(() => {
        setRedirect(true)
      })
  }
  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <div>
      <div className='py-4'>
        <div className="flex justify-between items-center">
          <div className="gl:pl-10 md:pl-5 sm:pl-1 flex justify-between items-center">
            <Link to={'/'}>
              <div className="flex items-center gap-1 font-bold  text-sky">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-8 h-8, md:w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
                <h3 className='lg:text-3xl md:text-2xl ms:text-xl'>Education.com</h3>
              </div>
            </Link>
          </div>
          <div className="flex justify-center items-center ">
            <div className="flex justify-center items-center relative">
              <input className='p-2 m-1 border rounded-xl lg:w-96 md:w-56 ms:w-40' type="text" placeholder='search our library' />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 bg-sky text-white p-1 cursor-pointer rounded-xl absolute right-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <div className='grid ms:grid-cols-1 md:grid-cols-3 gap-1'>
              <Link to={'/'} className='font-medium'>Learning </Link>
              <Link className='font-medium'>Library</Link>
              <Link className='font-medium'>Online</Link>
            </div>
          </div>
          <div className="">
            {
              user ?
                <div className='grid md:grid-cols-2 ms:grid-cols-1 gap-2 items-center'>
                  <Link to={'/account'} className='flex gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <div>
                      {user.name}
                    </div>
                  </Link>
                  <Link className='cursor-pointer w-24 py-2 bg-sky text-white rounded-3xl text-center' onClick={LogOut}>Log Out</Link>
                </div>
                :
                <div className='grid md:grid-cols-2 ms:grid-cols-1 gap-2 items-center'>
                  <Link to={'/login'} className='cursor-pointer p-1'>Log In</Link>
                  <Link to={'/sig'} className='cursor-pointer px-3 py-2 bg-sky text-white rounded-3xl '>Sign Up</Link>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header