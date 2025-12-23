import { FormEvent, useEffect, useState } from "react";

import Button from "@/components/ui/Button";
import CommonInput from "@/components/ui/CommonInput";
import { useParams } from "react-router";

type Content = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  imgUrl: string;
};

const ContentDetail = () => {
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [contentData, setContentData] = useState<Content | null>(null);

  // api 호출
  const fetchData = async () => {
    try {
      const response = await fetch(`/api/contents/${id}`);
      const result = await response.json();
      setContentData(result);
    } catch (err) {
      console.error("요청 실패: ", err);
    }
  };

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

  // 무료 구독하기 버튼 클릭할 때
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

    // 구독하기 API 호출
    // try {
    //   // TODO: `${SERVER_URL}/api/v1/subscribe`로 수정 필요
    //   const res = await fetch('api/api/v1/subscribe', {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email }),
    //   });

    //   const data = await res.json();

    //   if (!res.ok) {
    //     setEmail("");
    //     setChecked(false);
    //     setErrorMsg(data.message);
    //     return;
    //   }
    //   setEmail("");
    //   setChecked(false);
    //   setErrorMsg("");
    //   alert(data.message);

    // } catch (err) {
    //   console.error("구독 요청 실패: ", err);
    //   setErrorMsg("구독 중 문제가 발생했어요. 다시 시도해주세요.");
    //   return;
    // }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-5 justify-center bg-white xl:px-[370px] px-6">
      <div className="flex flex-col mt-20">
        {/* 상세 컨텐츠 들어갈 자리 */}
        {contentData ? (
          <div>
            <img src={contentData.imgUrl} alt="이미지" className="w-full h-[320px] rounded-2xl overflow-hidden mb-3" />
            <div className="flex flex-col gap-2 mb-4">
              <p className="font-bold text-gray-900 text-[28px]">{contentData.title}</p>
              <p className="text-gray-500">{contentData.createdAt}</p>
            </div>
            <hr className="mb-8 border-gray-200" />
            <div className="prose" dangerouslySetInnerHTML={{ __html: contentData.content }} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="bg-white">
        <div className="mt-12 xl:mb-20 mb-28">
          <div className="flex flex-col justify-between bg-primary-50 xl:px-10 xl:py-10 px-5 py-6 rounded-3xl overflow-hidden">
            <div className="flex flex-col gap-3">
              <p className="font-bold xl:text-[32px] text-[24px] text-gray-900">호핑 뉴스레터 구독하기</p>
              <p className="text-gray-500 xl:text-[20px] text-[15px] mb-6">
                HOPPING, 프로덕트의 흐름을 읽는 가장 가벼운 방법
                <br />
                매주 금요일, 받은편지함으로 찾아갑니다.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex gap-3 mb-2">
                  <CommonInput
                    className={`w-full p-3 border text-gray-500 ${errorMsg ? "border-red-500" : "border-gray-300"}`}
                    value={email}
                    onChange={setEmail}
                    placeholder="이메일을 입력해주세요."
                  />
                  <Button
                    type="submit"
                    className="xl:w-[360px] xl:p-3 xl:bg-primary-500 xl:text-gray-90 xl:font-semibold xl:rounded xl:block xl:hover:bg-primary-600 hidden"
                  >
                    무료 구독하기
                  </Button>
                </div>
                {/* 에러 메시지 */}
                {errorMsg && <p className="text-red-500 text-sm mb-3">{errorMsg}</p>}
                {/* 체크박스 */}
                <div className="flex flex-col xl:flex-row xl:gap-2">
                  <div className="flex gap-1 mb-4">
                    <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                    <p className="text-gray-700">
                      <a href="#">개인정보 수집 이용 약관</a> 동의 (필수)
                    </p>
                  </div>
                  <Button className="p-3 bg-primary-500 text-gray-900 font-semibold rounded hover:bg-primary-600 xl:hidden">
                    무료 구독하기
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
