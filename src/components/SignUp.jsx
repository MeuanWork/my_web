import { useState } from 'react'
import './../App.css'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
const SignUp = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [redirect, setRedirect] =useState(false)

    function CreateAccount (e){
        e.preventDefault();
        axios.post('/signup',{name,email,password})
        .then(()=>{
            Swal.fire(
              'Create Account success!',
              'You clicked the button!',
              'success'
            )
           setRedirect(true)
           setEmail('')
           setName("")
           setPassword('')
        })
        .catch(er => console.log(er))
       
    }
    if(redirect){
      return <Navigate to={'/login'}/>
    }
   
    return (
       
        <div className='min-h-screen flex justify-around grow'>
        <div className='mt-28 flex-col flex items-center'>
          <h2 className='text-center text-4xl mb-4 font-normal'>Register Accout</h2>
          <form action="" onSubmit={CreateAccount}>
            <label className='block my-1' htmlFor="">name</label>
            <input className='rounded-2xl' value={name} onChange={e => setName(e.target.value)} type="text" placeholder='your name....' />
            <label htmlFor="">email</label>
            <input className='rounded-2xl' type="email" name="" id="" value={email} onChange={e => setEmail(e.target.value)} />
            <label className='block my-1' htmlFor="">password</label>
            <input className='rounded-2xl' value={password} onChange={e => setPassword(e.target.value)} type="password" name="" id="" placeholder='your password' />
            <button className='sky my-6'>Create Account</button>
            <p className='text-center'>Already a member? <Link to={'/login'} className='text-red-400'>Log In</Link> </p>
          </form>
        </div>
  
      </div>
    )
}

export default SignUp
