import logo from "../assets/movie-time.png";
import config from "../assets/config.png";
import lupa from "../assets/lupa.png";

export const Header = () => {

    return (
        <header className="w-full h-[75px] bg-neutral-950 py-2 px-8 flex justify-between  border-b fixed top-0 z-50">
            <div className="flex flex-1 justify-center items-center gap-8">
                <img className="w-30 h-14 border border-gray-200 mr-auto" src={logo} alt="Logo" />
                <h1 className="font-pangolin text-gray-200 text-5xl tracking-widest mr-auto max-[1090px]:hidden">Filmes em Cartaz</h1>
            </div>
            <div className="flex flex-2 justify-end items-center gap-4">
                <input className="w-64 h-8 rounded-lg p-2 outline-none max-[530px]:hidden" type="text" placeholder="Procure um filme"/>
                <img className="w-6 h-6 absolute top-6 right-20 cursor-pointer max-[530px]:hidden" src={lupa} />
                <img className="w-6 h-6 cursor-pointer transition-all hover:rotate-45" src={config} />
            </div>
        </header>
    )
}