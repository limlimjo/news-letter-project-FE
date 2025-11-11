import { FormEvent, useState } from "react";

import Button from "@/components/ui/Button";
import CardContent from "@/components/ui/CardContent";
import CommonInput from "@/components/ui/CommonInput";

const ContentsList = () => {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // 이메일 정규식
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let msg = "";
    if (!value) {
      msg = "이메일을 입력해주세요.";
    } else if (!emailRegex.test(value)) {
      msg = "올바른 이메일 형태를 입력해주세요.";
    }
    return msg;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    // 이메일 유효성 검사
    const emailError = validateEmail(email);
    if (emailError) {
      setErrorMsg(emailError);
      return;
    }

    // 개인정보 수집 동의 체크 여부 확인
    if (!checked) {
      setErrorMsg("개인정보 및 수집 이용에 동의가 필요해요.");
      return;
    }

    // TODO: 구독 여부 확인 (API 호출)
  };

  return (
    <div className="flex flex-col gap-5 pt-14 justify-center">
      <div className="flex flex-col xl:flex-row pt-12 px-5 xl:px-10">
        <img
          src="/public/test_image.png"
          alt="이미지"
          className="xl:w-[520px] xl:h-[320px] w-[320px] h-[251px] rounded-2xl overflow-hidden mb-5"
        />
        <div className="flex flex-col gap-3 xl:p-10 w-[320px] xl:w-[512px]">
          <p className="font-bold text-gray-900 text-[28px] line-clamp-2">
            뉴스레터 제목은 최대 2줄입니다.뉴스레터 제목은 최대 2줄입니다.뉴스레터 제목은 최대 2줄입니다.뉴스레터 제목은
            최대 2줄입니다.뉴스레터 제목은 최대 2줄입니다.뉴스레터 제목은 최대 2줄입니다.
          </p>
          <p className="text-gray-700 text-[20px] line-clamp-3">
            뉴스레터 본문은 최대 3줄입니다.뉴스레터 본문은 최대 3줄입니다.뉴스레터 본문은 최대 3줄입니다.뉴스레터 본문은
            최대 3줄입니다.뉴스레터 본문은 최대 3줄입니다.뉴스레터 본문은 최대 3줄입니다.뉴스레터 본문은 최대
            3줄입니다.뉴스레터 본문은 최대 3줄입니다.뉴스레터 본문은 최대 3줄입니다.
          </p>
          <p className="text-gray-500">YYYY.MM.DD</p>
        </div>
      </div>
      <div className="bg-white px-4">
        <div>
          <div className="mt-12 xl:px-10">
            <p className="font-bold text-[24px] mb-5">최근 게시된 뉴스레터</p>
            {/* 카드 컴포넌트 */}
            <div className="flex flex-col xl:flex-row xl:gap-5 gap-2.5">
              <CardContent
                title="Title Title Title Title Title Title Title Title Title Title Title Title Title"
                date="YYYY.MM.DD"
              />
              <CardContent
                title="Title Title Title Title Title Title Title Title Title Title Title Title Title"
                date="YYYY.MM.DD"
              />
            </div>
            {/* 버튼 컴포넌트 */}
            <div className="xl:flex xl:justify-center xl:mt-15 xl:mb-5 hidden">
              <Button className="w-[256px] h-[52px] bg-violet-500 text-white border rounded">더 펼쳐보기</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 xl:mb-20 mb-28 xl:px-10">
          <div className="flex flex-col xl:flex-row justify-between bg-purple-100 xl:px-10 xl:py-30 px-5 py-6 rounded-3xl overflow-hidden">
            <div className="flex flex-col gap-3">
              <p className="font-bold xl:text-[32px] text-[24px] text-gray-900">Newsletter 구독하기</p>
              <p className="text-gray-500 xl:text-[20px] text-[15px] mb-6">
                매주 금요일, 무료 IT 인사이트를 받아보세요.
                <br />
                주간 뉴스레터, 최신 기술 트렌드와 인사이트를 제공합니다.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col xl:flex-row xl:gap-3 mb-3">
                  <CommonInput
                    className={`w-full p-3 border text-gray-500 ${errorMsg ? "border-red-500" : "border-gray-300"}`}
                    value={email}
                    onChange={setEmail}
                    placeholder="이메일을 입력해주세요."
                  />
                  <Button
                    type="submit"
                    className="p-3 bg-gray-200 text-gray-400 border border-gray-300 rounded w-full mt-3 xl:w-[360px] xl:mt-0 hover:bg-gray-100 cursor-pointer"
                  >
                    무료 구독하기
                  </Button>
                </div>
                {/* 에러 메시지 */}
                {errorMsg && <p className="text-red-500 text-sm mb-3">{errorMsg}</p>}
                {/* 체크박스 */}
                <div className="flex flex-col xl:flex-row xl:gap-2 items-start">
                  <div className="flex gap-1 mb-4">
                    <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                    <p className="text-gray-700">
                      <a href="#">개인정보 수집 이용 약관</a> 동의 (필수)
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentsList;
