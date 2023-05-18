import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    // console.log(router);

    return (
        <nav>
            {/* <Link className="link" href="/"> */}
            <Link
                legacyBehavior
                className={router.pathname === "/" ? "active" : null}
                href="/"
            >
                Home
            </Link>
            <Link
                className={router.pathname === "/about" ? "active" : null}
                href="/about"
            >
                About
            </Link>
            <style jsx global>{`
                nav {
                    background-color: tomato;
                }
                /* .link {
                    text-decoration: none;
                } */
                nav a {
                    text-decoration: none;
                }
                .active {
                    color: yellow;
                    text-decoration: none;
                }
            `}</style>
        </nav>
    );
}
