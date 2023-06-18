import Seo from "../components/Seo";

const magazines = [
    {
        id: 1,
        category: "LIFE STYLE",
        title: "이곳은 제목입니다.",
        sub_title: "이곳은 서브 타이틀입니다.",
    },
    {
        id: 2,
        category: "LIFE STYLE",
        title: "이곳은 제목입니다.",
        sub_title: "이곳은 서브 타이틀입니다.",
    },
    {
        id: 3,
        category: "LIFE STYLE",
        title: "이곳은 제목입니다.",
        sub_title: "이곳은 서브 타이틀입니다.",
    },
    {
        id: 4,
        category: "EVENT",
        title: "이곳은 제목입니다.",
        sub_title: "이곳은 서브 타이틀입니다.",
    },
    {
        id: 5,
        category: "LIFE STYLE",
        title: "이곳은 제목입니다.",
        sub_title: "이곳은 서브 타이틀입니다.",
    },
    {
        id: 6,
        category: "LIFE STYLE",
        title: "이곳은 제목입니다.",
        sub_title: "이곳은 서브 타이틀입니다.",
    },
    {
        id: 7,
        category: "LIFE STYLE",
        title: "이곳은 제목입니다.",
        sub_title: "이곳은 서브 타이틀입니다.",
    },
    {
        id: 8,
        category: "LIFE STYLE",
        title: "이곳은 제목입니다.",
        sub_title: "이곳은 서브 타이틀입니다.",
    },
    {
        id: 9,
        category: "LIFE STYLE",
        title: "이곳은 제목입니다.",
        sub_title: "이곳은 서브 타이틀입니다.",
    },
    {
        id: 10,
        category: "EVENT",
        title: "이곳은 제목입니다.",
        sub_title: "이곳은 서브 타이틀입니다.",
    },
    {
        id: 11,
        category: "LIFE STYLE",
        title: "이곳은 제목입니다.",
        sub_title: "이곳은 서브 타이틀입니다.",
    },
    {
        id: 12,
        category: "CARE",
        title: "이곳은 제목입니다.",
        sub_title: "이곳은 서브 타이틀입니다.",
    },
];

export default function Magazine() {
    return (
        <div>
            <Seo title="Magazine" />
            <h1 className="magazine-box-title">Magazine</h1>
            <hr />
            {magazines.map((magazine) => (
                <div key={magazine.id}>
                    <div className="magazine-text-box">
                        <p>{magazine.category}</p>
                        <div>
                            <p className="text-title">{magazine.title}</p>
                            <p className="text-sub-title">
                                {magazine.sub_title}
                            </p>
                        </div>
                        <p>Today 2023.05.30</p>
                    </div>
                    <hr />
                </div>
            ))}
            <hr />
        </div>
    );
}
