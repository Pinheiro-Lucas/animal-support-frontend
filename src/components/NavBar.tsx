import { AiFillPlusCircle, AiFillHome, AiFillGithub, AiFillAppstore, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="absolute sticky inset-x-0 bottom-3 h-16 bg-white drop-shadow-navbar m-5 rounded-3xl flex items-center text-2xl text-primary">
            <Link to='/' className='flex-auto flex'>
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
            <a href='https://github.com/Pinheiro-Lucas/animal-support-project' target='_blank' className='flex-auto flex'>
                <AiFillGithub className='flex-auto'/>
            </a>
        </div>
    );
}

export default NavBar