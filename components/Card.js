import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const designs = [
    {
        id: "01",
        title: "부산 연제구 JAK부동산중개법인 사무실",
        description: "사무실 디자인 및 시공",
        img: "/image/main/main01.webp",
    },
    {
        id: "02",
        title: "부산 영도구 아일랜드",
        description: "영도 스팟 컨셉 계획안 작업",
        img: "/image/main/main02.webp",
    },
    {
        id: "03",
        title: "안동 도청 크레센도 피아노교습소",
        description: "피아노 교습소 상가디자인 및 시공",
        img: "/image/main/main03.webp",
    },
    {
        id: "04",
        title: "인천 서구 CAFE",
        description:
            "인천 서구 가정로에 위치한 카페 내부 인테리어 계획안 3D 작업",
        img: "/image/main/main04.webp",
    },
    {
        id: "05",
        title: "거제도 연초면 죽토리 오피스텔",
        description: "거제도에 위치, 총 5타입으로 설계된 오피스텔",
        img: "/image/main/main05.webp",
    },
    {
        id: "06",
        title: "부산 일광읍 삼성리 A-6 블럭 주택",
        description: "삼성리 A-6 블럭 18번 컨셉 스케치",
        img: "/image/main/main06.webp",
    },
    {
        id: "07",
        title: "부산 일광읍 삼성리 A-6 블럭 내부 인테리어",
        description: "A1, A2 내부 디자인",
        img: "/image/main/main07.webp",
    },
    {
        id: "08",
        title: "부산 일광읍 삼성리 A-6 블럭",
        description:
            "부산 최초 주택주거단지 일광신도시에 위치한 삼성리 A-6 블럭의 첫번째 라인 상가주택 A1, A2 동",
        img: "/image/main/main08.webp",
    },
    {
        id: "09",
        title: "부산 온천동 개인주택",
        description: "온천동 개인주택 내부 1, 2층 기존 설계도면 3D 옮기기",
        img: "/image/main/main09.webp",
    },
    {
        id: "10",
        title: "부산 영선동 오피스텔",
        description:
            "부산의 섬 영도에 위치한 세가지 타입으로 설계된 더블리안오션 오피스텔",
        img: "/image/main/main10.webp",
    },
];

export default function Card() {
    const router = useRouter();
    console.log(router);

    return (
        <div className="card-box">
            {designs.map((design) => (
                <div className="card-detail-box" key={design.id}>
                    <Link
                        href={{
                            pathname: `/design/${design.id}`,
                            query: {
                                title: design.title,
                                description: design.description,
                                img: design.img,
                            },
                        }}
                        as={`/design/${design.id}`}
                    >
                        {/* <Link href={`/design/${design.id}`}> */}
                        <Image
                            className="card-img"
                            src={`/image/main/main${design.id}.webp`}
                            width={600}
                            height={350}
                            alt={`main${design.id}`}
                        />
                    </Link>
                    <div className="card-text-box">
                        <h3>{design.title}</h3>
                        <p>{design.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
