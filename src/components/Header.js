import {GiPodiumWinner} from 'react-icons/gi';
import {FaUserAlt ,FaUserPlus, FaBookOpen} from 'react-icons/fa'
import Icon from "public/img/logo.png";

export default function Header() {
    return (
        <div className = "bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
           <div className="container mx-auto h-16 flex items-center justify-between">
            
            <nav className="flex items-center gap-x-4 text-sm font-semibold">
            <a href="!#">
                 <img className="h-12 w-25 opacity-80 hover:opacity-100" src={Icon} alt="Quiz It Logo" />
                 
            </a>
            <a href="!#" className="text-white text-opacity-80 transition-all hover:text-opacity-100 flex items-center gap-x-2">
                <GiPodiumWinner size='22'/>
                    Top 10 
                </a>
                <a href="!#" className="text-white text-opacity-80 transition-all hover:text-opacity-100 flex items-center gap-x-2">
                <FaBookOpen size='18'/>
                    Hakkında
                </a>
            </nav>
          
            <nav className="flex gap-x-4 text-sm font-semibold ">
                <a href="!#" className="text-white text-opacity-80 transition-all hover:text-opacity-100 flex items-center gap-x-2">
                <FaUserAlt size='14' />
                    Giriş Yap
                   
                </a>
                <a href="!#" className="text-white text-opacity-80 transition-all hover:text-opacity-100 flex items-center gap-x-2">
                <FaUserPlus size='18'/>
                    Kayıt Ol
                    
                </a>
            </nav>

           </div>
        </div>
    )
}