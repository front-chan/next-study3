import Seo from "../components/Seo";

export default function Contact() {
    return (
        <div className="contact-box">
            <Seo title="Contact" />
            <h1>견적 문의</h1>
            <form className="form-box">
                <div>
                    <label htmlFor="name">고객명 : </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="고객명을 입력해주세요"
                    />
                </div>
                <div>
                    <label htmlFor="phone">연락처 : </label>
                    <input
                        type="text"
                        id="phone"
                        placeholder="연락처를 입력해주세요"
                    />
                </div>
                <div className="check-box">
                    <div>
                        <input type="checkbox" id="check1" />
                        <label htmlFor="check1">
                            개인정보 수집 및 이용약관 동의(필수)
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" id="check2" />
                        <label htmlFor="check2">개인정보처리방침(필수)</label>
                    </div>
                </div>
                <button>제출하기</button>
            </form>
        </div>
    );
}
