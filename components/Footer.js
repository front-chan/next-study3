import Link from "next/link";

export default function Footer() {
    return (
        <div className="copyright-box">
            {/* <p className="copyright">Copyright 2023 — Glik.</p> */}
            {/* <div>
                <h1>글릭 Glik</h1>
            </div> */}
            <div className="main-logo">
                <h1>글릭 Glik</h1>
                <p>인테리어 | 건축디자인</p>
            </div>
            <div className="links-box">
                <div>
                    <h1>Quick Links</h1>
                    <div className="quick-links">
                        <Link href="/about">About</Link>
                        <Link href="/design">Design</Link>
                        <Link href="/service">Sevice</Link>
                        <Link href="/magazine">Magazine</Link>
                    </div>
                </div>
                <div>
                    <h1>SNS Links</h1>
                    <div className="quick-links">
                        <Link href="/about">인스타그램</Link>
                        <Link href="/design">네이버 블로그</Link>
                        <Link href="/service">유튜브</Link>
                        <Link href="/magazine">페이스북</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
