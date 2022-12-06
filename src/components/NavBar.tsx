import { AiFillPlusCircle, AiFillHome, AiFillGithub, AiFillAppstore, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="absolute inset-x-0 bottom-0 h-16 bg-white drop-shadow-navbar m-5 rounded-3xl flex items-center text-2xl text-primary">
            <Link to='' className='flex-auto flex'>
                <AiFillHome className='flex-auto'/>
            </Link>
            <Link to='' className='flex-auto flex'>
                <AiFillHeart className='flex-auto'/>
            </Link>
            <Link to='' className='flex-auto flex'>
                <AiFillPlusCircle className='flex-auto'/>
            </Link>
            <Link to='' className='flex-auto flex'>
                <AiFillAppstore className='flex-auto'/>
            </Link>
            <Link to='' className='flex-auto flex'>
                <AiFillGithub className='flex-auto'/>
            </Link>
        </div>
    );
}

export default NavBar