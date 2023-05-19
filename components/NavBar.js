import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    console.log(router.pathname);

    return (
        <nav>
            <Link
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
            <style jsx>{`
                a {
                    text-decoration: none;
                }
                .active {
                    color: tomato;
                    text-decoration: none;
                }
            `}</style>
        </nav>
    );
}
