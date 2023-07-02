import Seo from "../components/Seo";

export default function About() {
    return (
        <div>
            <Seo title="About" />
            <div className="about_box">
                <div className="about_text_description">
                    <h1>About Glik</h1>
                    <p>
                        글릭은 건축 및 인테리어 디자인 분야의 회사입니다. 고객과
                        함께 계획, 연구, 건설 인테리어 및 내부 아이템 선정과
                        같은 모든 단계의 프로세스를 진행합니다.
                    </p>
                    <p>
                        글릭은 고객의 요구에 맞춰 폭 넓은 범위의 디자인을 실현할
                        수 있도록 고민하며 혁신적이고 고품질의 환경을 구현하기
                        위해 모든 팀원의 전문성을 함께합니다.
                    </p>
                </div>
                <div className="about_section">
                    <p className="about_title_text">
                        <span>디자이너</span> | INTERIOR DESIGNER
                    </p>
                    <img
                        src="/image/glik_about/designer.webp"
                        className="about_img"
                    />
                    <p>
                        <span>고 혜 림</span> | HYELIM KO
                    </p>
                </div>
                <div className="about_section">
                    <p className="about_title_text">
                        <span>전략기획</span> | STRATEGIC PLANNING
                    </p>
                    <img
                        src="/image/glik_about/planning.webp"
                        className="about_img"
                    />
                    <p>
                        <span>오 가 경</span> | GAGYEONG OH
                    </p>
                </div>
                <div className="about_section">
                    <p className="about_title_text">
                        <span>건축사</span> | ARCHITECT
                    </p>
                    <img
                        src="/image/glik_about/architect.webp"
                        className="about_img"
                    />
                    <p>
                        <span>오 지 연</span> | JIYEON OH
                    </p>
                </div>
                <div className="about_section top_margin">
                    <p className="about_title_text">
                        <span>현장팀장</span> | FIELD TEAM LEADER
                    </p>
                    <img
                        src="/image/glik_about/field.webp"
                        className="about_img"
                    />
                    <p>
                        <span>이 영 민</span> | YOUNGMIN LEE
                    </p>
                </div>
                <div className="about_section top_margin">
                    <p className="about_title_text">
                        <span>IT 개발</span> | WEB DEVELOPER
                    </p>
                    <img
                        src="/image/glik_about/it-front.webp"
                        className="about_img"
                    />
                    <p>
                        <span>최 신 영</span> | SINYOUNG CHOI
                    </p>
                </div>
                <div className="about_section top_margin">
                    <p className="about_title_text">
                        <span>IT 개발</span> | WEB DEVELOPER
                    </p>
                    <img
                        src="/image/glik_about/it-back.webp"
                        className="about_img"
                    />
                    <p>
                        <span>오 연 주</span> | YEONJU OH
                    </p>
                </div>
            </div>
        </div>
    );
}
