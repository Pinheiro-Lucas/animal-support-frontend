import { MdPets } from "react-icons/md"

function Post({title, desc}: {title:string, desc:string}) {
    return (
        <div className="flex items-center mx-4 mb-3 h-36 text-2xl bg-card-secondary rounded-md">
            <div className="mx-8 flex items-center">
                <MdPets/>
            </div>
            <div className="flex flex-col">
                <span className="text-lg">{title}</span>
                <span className="text-lg">{desc}</span>
            </div>
        </div>
    );
}

export default Post