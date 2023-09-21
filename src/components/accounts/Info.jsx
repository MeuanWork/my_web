import { useContext } from "react"
import { UseContext } from "../../Usecontext"


function Info() {
    const { user } = useContext(UseContext)
    return (
        <div>
            {user && (
                <div>
                    <h1 className="text-center text-xl font-bold">{user.name}</h1>
                    <p className="text-center py-2">Account email : {user.email}</p>
                    <p className="text-center">Account id : {user._id}</p>
                </div>
            )}
        </div>
    )
}

export default Info