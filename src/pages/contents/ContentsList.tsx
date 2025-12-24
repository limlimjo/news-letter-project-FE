import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";
import CardContent from "@/components/ui/CardContent";
import NewSubscriber from "../../components/ui/NewSubscriber";

type RandomContent = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  imgUrl: string;
};

type Content = {
  id: number;
  title: string;
  createdAt: string;
  imgUrl: string;
};

const ContentsList = () => {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [randomContentData, setRandomContentData] = useState<RandomContent[]>([]);
  const [contentData, setContentData] = useState<Content[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0); // 화살표 상태값

  // api 호출 (랜덤 데이터)
  const fetchRandomData = async () => {
    try {
      const response = await fetch("/api/contents/random");
      const result = await response.json();
      setRandomContentData(result);
    } catch (err) {
      console.error("요청 실패: ", err);
    }
  };

  // api 호출
  const fetchData = async () => {
    try {
      const response = await fetch("/api/contents");
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

  // 자세히 보기 버튼 클릭할 때
  const handleDetailShow = () => {
    console.log("자세히 보기 버튼 클릭할 때");
    // TODO: API 호출
  }

  // 더 펼쳐보기 버튼 클릭할 때
  const handleShowMore = () => {
    console.log("더 펼쳐보기 버튼 클릭할 때");
    // TODO: API 호출
  };

  // 무료 구독하기 버튼 클릭할 때
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
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
    fetchRandomData();
  }, []);

  useEffect(() => {
    if (randomContentData.length > 0) setCurrentIndex(0);
  }, [randomContentData]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col xl:gap-5 justify-center">
      <div className="flex flex-col xl:flex-row xl:gap-8 pt-12 px-5 xl:px-10">
        {randomContentData.length > 0 && (
          <>
            <img
              src={randomContentData[currentIndex].imgUrl}
              alt="이미지"
              className="xl:w-[520px] xl:h-[320px] md:w-[920px] md:h-[613px] w-[335px] h-[223px] rounded-2xl overflow-hidden mb-5"
            />
            <div className="flex flex-col gap-3 xl:w-[512px] h-[223px] xl:h-[320px]">
              <p className="text-gray-500">{randomContentData[currentIndex].createdAt}</p>
              <p className="font-bold text-gray-900 text-[28px] line-clamp-2">
                {randomContentData[currentIndex].title}
              </p>
              <p className="text-gray-700 text-[15px] line-clamp-3">{randomContentData[currentIndex].content}</p>
              <div className="mt-auto">
                {/* 자세히 보기 버튼 */}
                <div className="xl:flex xl:mt-4 xl:mb-5 hidden">
                  <Button
                    onClick={handleDetailShow}
                    className="w-[96px] h-[40px] bg-primary-500 text-gray-900 text-[14px] font-semibold rounded hover:bg-primary-600"
                  >
                    자세히 보기
                  </Button>
                </div>
                {/* 동그라미 버튼 */}
                <div className="flex gap-2 justify-center xl:justify-start">
                  {randomContentData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition ${
                        idx === currentIndex ? "bg-primary-600" : "bg-gray-200"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div>
        <div>
          <div className="mt-16 px-5 xl:px-10">
            <p className="font-bold text-[24px] mb-5">최근 게시된 뉴스레터</p>
            {/* 카드 컴포넌트 */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 xl:grid-cols-4 xl:gap-5">
              {contentData.map((item, index) => (
                <CardContent key={index} title={item.title} createdAt={item.createdAt} imgUrl={item.imgUrl} />
              ))}
            </div>
            {/* 버튼 컴포넌트 */}
            <div className="flex justify-center mt-15 xl:mb-5">
              <Button
                onClick={handleShowMore}
                className="w-[121px] h-[52px] bg-primary-500 text-gray-900 font-semibold rounded hover:bg-primary-600"
              >
                더 펼쳐보기
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-25">
          {/* 구독하기 컴포넌트 */}
          <NewSubscriber
            email={email}
            setEmail={setEmail}
            checked={checked}
            setChecked={setChecked}
            errorMsg={errorMsg}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentsList;
