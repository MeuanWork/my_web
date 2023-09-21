import { useContext, useState } from 'react'
import './../App.css'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { UseContext } from '../Usecontext'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const { setUser } = useContext(UseContext)

  async function loginForm(ev) {
    ev.preventDefault();
    try {
      const { data } = await axios.post("/login",{email, password})
      setUser(data)

      Swal.fire(
        'Login Account success!',
        'You clicked the button!',
        'success'
      )
      setRedirect(true)
    } catch (e) {
      alert('login fail' + e)
    }
  }
  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <div className='min-h-screen flex justify-around grow'>
      <div className='mt-28 flex-col flex items-center'>
        <h2 className='text-center text-4xl mb-4 font-normal'>Login Accout</h2>
        <form action="" onSubmit={loginForm}>
          <label className='block my-1' htmlFor="">email</label>
          <input className='rounded-2xl' value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='your@gmail.com' />
          <label className='block my-1' htmlFor="">password</label>
          <input className='rounded-2xl' value={password} onChange={e => setPassword(e.target.value)} type="password" name="" id="" placeholder='your password' />
          <button className='sky my-6'>Login</button>
          <p>Not an Education.com member yet? <Link to={'/sig'} className='text-red-400'>Create an Account</Link> </p>
        </form>
      </div>

    </div>
  )
}

export default Login