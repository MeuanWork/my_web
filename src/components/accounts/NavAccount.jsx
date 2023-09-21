
import { Link, useLocation, } from 'react-router-dom'

function NavAccount() {
    let {pathname} = useLocation()
    // console.log(pathname)
    let subpage = pathname.split('/')?.[1]
    // console.log(subpage)

    const Linkness = (type = null) =>{
        if(subpage === undefined){
            subpage = 'account'
        }

        let classes = 'inline-flex gap-1 py-2 px-3 mx-2'
        if (type === subpage) {
            classes += ' border-indigo-500 border-b-2'
        } else {
            classes += ''
        }
        return classes
    }
    return (
        <div className='flex justify-center items-center'>
            <Link className={Linkness("account")} to={'/account'} >my accout</Link>
            <Link className={Linkness("form")} to={'/form'} >add new post</Link>
        </div>
    )
}

export default NavAccount