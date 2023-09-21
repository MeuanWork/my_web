


import { Outlet } from 'react-router-dom'
import './../App.css'
import NavAccount from './accounts/NavAccount'

const Account = () => {
    return (
        <div>
            <NavAccount/>
            <Outlet/>
        </div>
    )
}

export default Account
