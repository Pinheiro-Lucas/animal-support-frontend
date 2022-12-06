import ButtonCard from "../components/ButtonCard";
import CategoryButton from "../components/CategoryButton";

function Home() {
    return (
        <div className="w-screen h-screen p-5 content-center text-text font-montserrat bg-zinc-100">
            <ButtonCard title='Encontre seu novo PET conosco' desc='Clique aqui' url_for='/#'/>
                <div className="grid grid-cols-2 gap-4 place-content-center">
                    <CategoryButton title='Adoção'/>
                    <CategoryButton title='Adoção'/>
                    <CategoryButton title='Adoção'/>
                    <CategoryButton title='Adoção'/>
                    <CategoryButton title='Adoção'/>
                    <CategoryButton title='Adoção'/>
                </div>
        </div>
    );
}

export default Home