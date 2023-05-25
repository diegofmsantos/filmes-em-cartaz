import { useState, useEffect } from "react";
import { api } from "../api";
import { Movie } from "../types/Movie";

export const Main = () => {

    const [movie, setMovie] = useState<Movie[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadMovies()
    }, [])

    const loadMovies = async () => {
        let json = await api.getAllMovies()
        setMovie(json)
    }



    return (
        <main className="max-w-[1100px] m-auto flex justify-start items-baseline flex-wrap gap-x-9 pl-6 mt-[73px] max-[1024px]:pl-32 max-[500px]:pl-0 max-[500px]:justify-center">
            {movie?.map((item, index) => (
                <div className="w-60 p-4 flex flex-col justify-start cursor-pointer scale-90 duration-300 hover:scale-100" key={index}>
                    <img className="w-60 " src={item.avatar} />
                    <div className="text-gray-200 text-center">{item.titulo}</div>
                </div>
            ))}
            
            {movie.length <= 0 &&
                <div>
                    <img className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0" src="https://i.pinimg.com/originals/32/e4/d4/32e4d4a60395d0e30b61f313a4e7401c.gif" alt="" />
                </div>
            }
        </main>
    )
}