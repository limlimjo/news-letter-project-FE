import bang from "@/assets/icons/bang.svg";
import world from "@/assets/icons/world.svg";
import invest from "@/assets/icons/invest.svg";
import balance from "@/assets/icons/balance.svg";
import hoppingText from "@/assets/icons/hoppingText.svg";
import airplane from "@/assets/icons/airplane.svg";
import news from "@/assets/icons/news.svg";
import news_new from "@/assets/icons/news_new.svg";
import { useState } from "react";
import NewSubscriber from "@/components/ui/NewSubscriber";

const Intro = () => {

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

  return (
    <div className="w-full max-w-[1280px] xl:mx-auto bg-white">
        <div className="flex flex-col justify-center items-center">
            <div className="mt-20 px-4 py-1.5 bg-gray-800 rounded-4xl text-white">매주 금요일, 새로운 시선</div>
            <div className="mt-5 flex flex-col items-center gap-2 text-5xl font-bold">
                <p>트렌드가 아닌,</p>
                <p className="mt-5">프로덕트의 이유를 전합니다.</p>
            </div>
            <div className="mt-6 flex flex-col items-center gap-0.5 text-[18px] text-gray-700">
                <p>Hopping은 국내 IT 씬의 새로운 실험과 전략을 이야기처럼 풀어드려요.</p>
                <p>스타트업의 신사업, 프로덕트 출시, 그리고 그 안의 '왜'를 가볍게 읽어보세요.</p>
            </div>   
            <a
              href="#newSubscribe"
              className="mt-6 mb-20 flex items-center gap-2 px-7 py-3 bg-primary-500 text-gray-900 font-semibold rounded-xl hover:bg-primary-600 cursor-pointer"
            >
              Hopping 무료로 받아보기
            </a>
        </div>
        <div className="flex flex-col justify-content items-center bg-gray-50">
          <div className="mt-20 flex flex-col items-center gap-1.5 text-5xl font-bold">
            <p>요즘 IT 소식,</p>
            <p className="mt-5">이렇게 답답하지 않나요?</p>
          </div>
          <div className="mt-16 mb-24 grid grid-cols-2 gap-6 px-10">
            <div className="flex flex-col gap-5 px-10 py-10 bg-white border rounded-2xl border-gray-200">
              <img className="w-[38.5px] h-[38.5px]" src={bang} alt="아이콘" />
              <p className="text-[18px] font-semibold">뉴스는 너무 '결과만' 말해요</p>
              <div className="text-[15px] text-gray-500">
                <p>'기능 출시', '신사업 발표'와 같은 결과 설명만 가득해요.</p>
                <p>정작 중요한 '왜 이런 결정을 했는지'는 잘 보이지 않아요.</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 px-10 py-10 bg-white border rounded-2xl border-gray-200">
              <img className="w-[38.5px] h-[38.5px]" src={world} alt="아이콘" />
              <p className="text-[18px] font-semibold">해외·빅테크 중심이라 국내 실무와 거리가 있어요</p>
              <div className="text-[15px] text-gray-500">
                <p>많은 뉴스레터가 글로벌 트렌드를 위주로 다루기에, 국내 IT 회사나 스타트업 실무에 직접적인 도움을 받기 어려워요.</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 px-10 py-10 bg-white border rounded-2xl border-gray-200">
              <img className="w-[38.5px] h-[38.5px]" src={invest} alt="아이콘" />
              <p className="text-[18px] font-semibold">투자·재무 위주라 프로덕트 흐름이 안 보여요</p>
              <div className="text-[15px] text-gray-500">
                <p>라운드, 매출, 실적 관려 뉴스는 많은데 정작 국내 서비스가 어떻게 바뀌고 있는지는 빠르게 파악하기 어려워요.</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 px-10 py-10 bg-white border rounded-2xl border-gray-200">
              <img className="w-[38.5px] h-[38.5px]" src={balance} alt="아이콘" />
              <p className="text-[18px] font-semibold">깊이 있는 분석은 너무 무겁고, 요약은 너무 가벼워요</p>
              <div className="text-[15px] text-gray-500">
                <p>리포트는 읽기 부담스럽고, 뉴스 요약은 디테일이 부족해요.</p>
                <p>실무에 바로 쓰는 '적당한 깊이의 분석'을 찾기 어려워요.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-conetent items-center bg-gray-100 pb-30">
          <div className="flex text-5xl font-bold pt-30 pb-13">
            <img className="w-40 mr-2" src={hoppingText} alt="텍스트" />이 뭐에요?
          </div>
          <div className="flex flex-col gap-10 px-10 py-10 bg-white border rounded-2xl border-gray-300">
            <div className="flex items-center justify-center gap-2 py-4 bg-gray-900 text-primary-500 font-semibold rounded-xl">
              <img className="w-4" src={airplane} alt="아이콘" />
              국내 IT 프로덕트의 맥락을 가장 빠르게 파악하는 방법.
            </div>
            <div className="flex flex-col gap-3 text-center text-gray-700">
              <p>Hopping은 IT 업계의 신사업 전략, 서비스 출시, 프로덕트 변화를 <span className="text-primary-700">가볍게 유쾌하게 읽는</span> 뉴스레터예요.</p>
              <p>어렵고 무거운 산업 분석 대신, <span className="text-primary-700">"이 회사가 왜 이걸 만들었을까?"</span>를 중심으로 이야기해요.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-content items-center bg-gray-900 pt-30 pb-30">
          <div className="flex flex-col items-center text-5xl font-bold text-white">
            <p>같은 소식도,</p>
            <p className="mt-5">관점에 따라 이렇게 달라져요</p>
          </div>
          <div className="mt-6 text-gray-300 text-[18px]">
            <p>뉴스는 사실을 전하고, Hopping은 이유를 설명합니다.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-10 px-10">
            <div className="bg-gray-700 px-10 py-10 rounded-2xl">
              <div className="flex items-center gap-2 text-[28px] text-white">
                <div className="p-2 bg-gray-50 rounded">
                  <img className="w-6" src={news} alt="아이콘" />
                </div>
                <p className="font-bold">일반 뉴스가 전하는 방식</p>
              </div>
              <div className="flex flex-col gap-6 mt-6 px-4 py-5 bg-white rounded">
                <p className="text-[20px] text-gray-700 font-semibold">"신사업 발표... 시장 공략 본격화"</p>
                <div className="flex flex-col gap-2 text-[15px] text-gray-500">
                  <p>· A사가 신사업 B를 발표했다</p>
                  <p>· C 기능을 새롭게 추가했다</p>
                  <p>· 업계는 시장 공략 목적이라고 설명했다</p>
                </div>
              </div>
              <div className="mt-11 flex gap-4">
                <div className="px-2.5 py-1 text-[14px] text-center bg-gray-50 rounded text-gray-700 font-semibold">사실요약</div>
                <div className="px-2.5 py-1 text-[14px] text-center bg-gray-50 rounded text-gray-700 font-semibold">발표정리</div>
                <div className="px-2.5 py-1 text-[14px] text-center bg-gray-50 rounded text-gray-700 font-semibold">표면적내용</div>
              </div>
            </div>
            <div className="bg-gray-700 px-10 py-10 rounded-2xl border-1 border-primary-600">
              <div className="flex items-center gap-2 text-[28px] text-primary-500">
                <div className="p-2 bg-primary-700 rounded">
                  <img className="w-6" src={news_new} alt="아이콘" />
                </div>
                <p className="font-semibold">Hopping은 이렇게 전해드려요</p>
              </div>
              <div className="flex flex-col gap-6 mt-6 px-4 py-5 bg-white rounded">
                <p className="text-[20px] text-gray-700 font-semibold">"왜 지금 이 기능일까? 무엇을 바꾸려는 걸까?"</p>
                <div className="flex flex-col gap-2 text-[15px] text-gray-700">
                  <p>· 이번 업데이트는 OO 지표(잔존·전환 등)를 개선하려는 전략적 선택</p>
                  <p>· 최근 사용자 행동 변화 + 경쟁사 움직임이 이번 결정과 연결됨</p>
                  <p>· 앞으로 서비스 운영이 어떻게 달라질지까지 전망</p>
                </div>
              </div>
              <div className="mt-11 flex gap-4">
                <div className="px-2.5 py-1 text-[14px] text-center bg-primary-500 rounded text-gray-900 font-semibold">프로덕트전략</div>
                <div className="px-2.5 py-1 text-[14px] text-center bg-primary-500 rounded text-gray-900 font-semibold">맥락해석</div>
                <div className="px-2.5 py-1 text-[14px] text-center bg-primary-500 rounded text-gray-900 font-semibold">이유중심</div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:mb-0 mb-28">
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
  )
}

export default Intro;