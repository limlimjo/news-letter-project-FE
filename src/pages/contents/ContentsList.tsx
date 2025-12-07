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

  // 좌우 화살표 (이전 버튼 클릭할 때)
  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? randomContentData.length - 1 : prevIndex - 1));
  };

  // 좌우 화살표 (다음 버튼 클릭할 때)
  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === randomContentData.length - 1 ? 0 : prevIndex + 1));
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

    // TODO: 구독 여부 확인 (API 호출)
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
    <div className="flex flex-col xl:gap-5 gap-25 pt-14 justify-center">
      <div className="flex flex-col xl:flex-row xl:gap-15 pt-12 px-5 xl:px-10">
        {randomContentData.length > 0 && (
          <>
            <img
              src={randomContentData[currentIndex].imgUrl}
              alt="이미지"
              className="xl:w-[520px] xl:h-[320px] w-[320px] h-[251px] rounded-2xl overflow-hidden mb-5"
            />
            <div className="flex flex-col gap-3 xl:p-10 w-[320px] xl:w-[512px]">
              <p className="font-bold text-gray-900 text-[28px] line-clamp-2">
                {randomContentData[currentIndex].title}
              </p>
              <p className="text-gray-700 text-[20px] line-clamp-3">{randomContentData[currentIndex].content}</p>
              <p className="text-gray-500">{randomContentData[currentIndex].createdAt}</p>
              <div className="flex justify-center items-center gap-68 mt-auto">
                {/* 동그라미 버튼 */}
                <div className="flex gap-3">
                  {randomContentData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-3 h-3 rounded-full transition ${
                        idx === currentIndex ? "bg-primary-500" : "bg-primary-100"
                      }`}
                    ></button>
                  ))}
                </div>
                {/* 좌우 화살표 */}
                <div className="hidden xl:flex gap-4 text-xl text-gray-600">
                  <button 
                    onClick={prev} 
                    className="w-10 h-10 flex items-center justify-center border border-gray-400 text-gray-300 rounded-full bg-gray-800 transition"
                  >
                    &lt;
                  </button>
                  <button 
                    onClick={next} 
                    className="w-10 h-10 flex items-center justify-center border border-gray-400 text-gray-300 rounded-full bg-gray-800 transition"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="bg-gray-900 px-4 xl:px-0">
        <div className="text-white">
          <div className="mt-12 xl:px-10">
            <p className="font-bold text-[24px] mb-5">최근 게시된 뉴스레터</p>
            {/* 카드 컴포넌트 */}
            <div className="grid gird-cols-1 xl:grid-cols-4 xl:gap-5 gap-6">
              {contentData.map((item, index) => (
                <CardContent key={index} title={item.title} createdAt={item.createdAt} imgUrl={item.imgUrl} />
              ))}
            </div>
            {/* 버튼 컴포넌트 */}
            <div className="xl:flex xl:justify-center xl:mt-15 xl:mb-5 hidden">
              <Button
                onClick={handleShowMore}
                className="w-[121px] h-[52px] bg-primary-500 text-gray-900 font-semibold rounded hover:bg-primary-600"
              >
                더 펼쳐보기
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 xl:mb-0 mb-28">
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
