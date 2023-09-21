import Info from "./Info"
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Information from "./infonmationForndatabase/Information";



function Profile() {

    return (
        <div className="bg-gray-200 mt-4 mx-4">
            <div className="flex justify-center mt-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10∫ h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

            </div>
            <div className="py-2">
                <Info />
            </div>
            <div className="flex justify-center items-center gap-2 py-3">
                <p className="text-blue-600"> <FacebookIcon /></p>
                <p className="text-green-600 "> <WhatsAppIcon /></p>
                <p className="text-blue-800 "> <LinkedInIcon /></p>
                <p className="text-red-500 "><YouTubeIcon /></p>
                <p className="text-rose-300 "><InstagramIcon /></p>
                <p className="text-red-500 "><EmailOutlinedIcon /></p>
            </div>
            <div className="flex justify-center items-center pt-10">
                <h3 className="border-indigo-500 border-b-2 w-96 text-center text-2xl font-sans font-medium py-4">My Courses</h3>
            </div>
            <div>
                <Information/>
            </div>
        </div>
    )
}

export default Profile