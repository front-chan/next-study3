import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ results }) {
    const router = useRouter();
    const onClick = (id, title, image) => {
        router.push(
            {
                pathname: `/movies/${id}`,
                query: {
                    title,
                    image,
                },
            },
            `/movies/${id}`
        );
    };

    return (
        <div className="container">
            <Seo title="Home" />
            {results?.map((movie) => (
                // <Link href={`movies/${movie.id}`} key={movie.id}>
                <div
                    onClick={() =>
                        onClick(
                            movie.id,
                            movie.original_title,
                            movie.poster_path
                        )
                    }
                    className="movie"
                    key={movie.id}
                >
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                    <Link
                        href={{
                            pathname: `/movies/${movie.id}`,
                            query: {
                                title: movie.original_title,
                                image: movie.poster_path,
                            },
                        }}
                        as={`/movies/${movie.id}`}
                    >
                        {/* <Link href={`movies/${movie.id}`}> */}
                        <h4>{movie.original_title}</h4>
                    </Link>
                </div>
                // </Link>
            ))}
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                .movie {
                    cursor: pointer;
                }
                .movie img {
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                    transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                    font-size: 18px;
                    text-align: center;
                }
            `}</style>
        </div>
    );
}

// server에서만 실행됨
export async function getServerSideProps() {
    const { results } = await (
        await fetch("http://localhost:3001/api/movies")
    )
        // server부분이라 localhost를 적어주어야 함
        .json();
    return {
        props: {
            results,
        },
    };
}
