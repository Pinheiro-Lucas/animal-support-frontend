import { FiArrowRight } from 'react-icons/fi'
import { Link } from "react-router-dom";


function ButtonCard({title, desc, url_for}: {title:string, desc:string, url_for:string}) {
    return (
        <Link to={url_for}>
            <div className="h-40 w-auto bg-card drop-shadow-card hover:drop-shadow-card-selected p-5 rounded-md mb-10 flex flex-col">
                <h1 className="text-primary-light font-bold text-3xl flex-auto">
                    {title}
                </h1>
                <div className='flex'>
                    <span className="text-gray-800 text-base flex-auto">
                        {desc}
                    </span>
                    <span className="text-primary-light text-2xl" >
                        <FiArrowRight/>
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default ButtonCard