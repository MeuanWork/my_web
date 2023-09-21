
import axios from 'axios';
import { createContext,  useEffect,  useState } from 'react'

export const UseContext  = createContext({});

const UsecontextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    useEffect(()=>{
      if(!user){
        
        axios.get('/profile')
        .then(({data})=>{
           setUser(data)
        })
      }
    },[])
  return (
    <div>
      <UseContext.Provider value = {{user, setUser}}>
        {children}
      </UseContext.Provider>
    </div>
  )
}

export default UsecontextProvider
