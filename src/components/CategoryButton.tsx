import { MdPets } from "react-icons/md"
import { Link } from "react-router-dom";

function CategoryButton({title}: {title:string}) {
    return (
        <Link to=''>
            <div className="flex items-center bg-card-secondary rounded-3xl m-1 h-16 drop-shadow-card hover:drop-shadow-card-selected">
                <div className="bg-white rounded-2xl p-3 ml-3 mr-2 flex items-center">
                    <MdPets/>
                </div>
                <span className="text-lg">{title}</span>
            </div>
        </Link>
    );
}

export default CategoryButton