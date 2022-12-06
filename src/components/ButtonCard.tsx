import { FiArrowRight } from 'react-icons/fi'
import { Link } from "react-router-dom";


function ButtonCard({title, desc, url_for}: {title:string, desc:string, url_for:string}) {
    return (
        <Link to={url_for}>
            <div className="h-40 w-auto bg-card drop-shadow-card hover:drop-shadow-card-selected p-5 rounded-md mb-10">
                <h1 className="text-primary-light font-bold text-3xl pb-5">
                    {title}
                </h1>
                <p className="text-gray-800 text-base">
                    {desc}
                </p>
                <p className="absolute bottom-4 right-5 text-primary-light text-2xl" >
                    <FiArrowRight/>
                </p>
            </div>
        </Link>
    )
}

export default ButtonCard