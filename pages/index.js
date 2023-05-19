import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "1d8186699c23fc29e067120428c3bcd7";

export default function Home() {
    const [movies, setMovies] = useState();
    useEffect(() => {
        (async () => {
            const { results } = await (
                await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api=key=${API_KEY}`
                )
            ).json();
            console.log(results);
            setMovies(results);
        })();
    }, []);
    return (
        <div>
            <Seo title="Home" />
            {/* <h1 className="active">Hello</h1> */}
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie) => (
                <div key={movie.id}>
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
        </div>
    );
}
