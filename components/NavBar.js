import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    // console.log(router.pathname);

    return (
        <nav className={router.pathname === "/" ? "nav-home" : null}>
            {/* <img src="/vercel.svg" /> */}
            <div className="main-logo">
                <h1>글릭 Glik</h1>
                <p>인테리어 | 건축디자인</p>
            </div>
            {/* <div>
                <Link
                    href="/"
                    className={router.pathname === "/" ? "active" : ""}
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    className={router.pathname === "/about" ? "active" : ""}
                >
                    About
                </Link>
            </div> */}
            <div className="link">
                <Link
                    href="/"
                    className={router.pathname === "/" ? "active" : ""}
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    className={router.pathname === "/about" ? "active" : ""}
                >
                    About
                </Link>
                <Link
                    href="/design"
                    className={router.pathname === "/design" ? "active" : ""}
                >
                    Design
                </Link>
                <Link
                    href="/service"
                    className={router.pathname === "/service" ? "active" : ""}
                >
                    Sevice
                </Link>
                <Link
                    href="/magazine"
                    className={router.pathname === "/magazine" ? "active" : ""}
                >
                    Magazine
                </Link>
                {/* <Link
                    href="/contact"
                    className={router.pathname === "/contact" ? "active" : ""}
                >
                    Contact
                </Link> */}
            </div>
            {/* <style jsx global>{`
                nav {
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                }
                img {
                    max-width: 100px;
                    margin-bottom: 5px;
                }
                nav a {
                    font-weight: 600;
                    font-size: 18px;
                }
                .active {
                    color: tomato;
                }
                nav div {
                    display: flex;
                    gap: 10px;
                }
            `}</style> */}
        </nav>
    );
}
