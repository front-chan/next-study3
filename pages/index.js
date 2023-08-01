import Seo from "../components/Seo";
import Link from "next/link";
// import { useRouter } from "next/router";

export default function Home({ results }) {
    // const router = useRouter();
    // const onClick = (id, title) => {
    //     router.push(`/movies/${title}/${id}`);
    // };

    return (
        <div className="home_image">
            <Seo title="Home" />
            <div className="text-box">
                <h1>
                    우리는 <strong>디자인을</strong> 사용하여
                    <br />더 나은 세상을 만듭니다.
                </h1>
                <span>
                    고객님의 독창성과 라이프 스타일에 대해 <br />
                    마음을 공유하는 것이 가장 중요합니다.
                </span>
                <p>
                    We design for a better world.
                    <br />
                    Quality Home & Life Style
                </p>
                <h4>
                    by <span>Glik</span>
                </h4>
                <div className="btn-box">
                    <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeq7hdtyqDniL4URkykplzU8ej5UcLeKC0EZjNDsvsDhkkTPA/viewform"
                        target="_blank"
                    >
                        견적/상담신청
                    </Link>
                    <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfNmWCi-PRHj09HeEbIYPsUQXRj7ukTBk0n3x3pl19X9dwUsQ/viewform"
                        target="_blank"
                    >
                        협업문의
                    </Link>
                </div>
            </div>
            {/* <Image src="/image/glik.png" alt="glik" width={1000} height={600} /> */}
            {/* <img className="main-img" src="/image/glik.png" alt="glik" /> */}
            {/* {results?.map((movie) => (
                // <Link href={`movies/${movie.id}`} key={movie.id}>
                <div
                    onClick={() => onClick(movie.id, movie.original_title)}
                    className="movie"
                    key={movie.id}
                >
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                    <Link href={`/movies/${movie.original_title}/${movie.id}`}>
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
            `}</style> */}
        </div>
    );
}

// server에서만 실행됨
// export async function getServerSideProps() {
//     const { results } = await (
//         await fetch("http://localhost:3001/api/movies")
//     )
//         // server부분이라 localhost를 적어주어야 함
//         .json();
//     return {
//         props: {
//             results,
//         },
//     };
// }
