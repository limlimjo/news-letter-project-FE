import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import mail from "@/assets/icons/mail.svg";
import bang from "@/assets/icons/bang.svg";
import world from "@/assets/icons/world.svg";
import invest from "@/assets/icons/invest.svg";
import balance from "@/assets/icons/balance.svg";
import hoppingText from "@/assets/icons/hoppingText.svg";
import sparkle from "@/assets/icons/sparkle.svg";
import CommonInput from "@/components/ui/CommonInput";
import { useState } from "react";

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
    try {
      // TODO: `${SERVER_URL}/api/v1/subscribe`로 수정 필요
      const res = await fetch('api/api/v1/subscribe', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setEmail("");
        setChecked(false);
        setErrorMsg(data.message);
        return;
      }
      setEmail("");
      setChecked(false);
      setErrorMsg("");
      alert(data.message);

    } catch (err) {
      console.error("구독 요청 실패: ", err);
      setErrorMsg("구독 중 문제가 발생했어요. 다시 시도해주세요.");
      return;
    }
  };

  return (
    <div className="w-full max-w-[1280px] xl:mx-auto bg-white">
        <div className="flex flex-col justify-center items-center bg-gray-100 bg-gradient-to-b">
            <div className="mt-20 px-4 py-1.5 bg-black rounded-4xl text-primary-500">매주 금요일, 새로운 시선</div>
            <div className="mt-10 flex flex-col items-center gap-2 text-5xl font-bold">
                <p>트렌드가 아닌,</p>
                <p>프로덕트의 이유를</p>
                <p>전합니다.</p>
            </div>
            <div className="mt-6 flex flex-col items-center gap-3 text-[20px]">
                <p>HOPPING은 국내 IT 씬의 새로운 실험과 전략을 이야기처럼 풀어드려요.</p>
                <p>스타트업의 신사업, 프로덕트 출시, 그리고 그 안의 '왜'를 가볍게 읽어보세요.</p>
            </div>   
            <Button
              type="button"
              className="mt-10 mb-20 flex items-center gap-2 px-7 py-3 bg-primary-500 text-[20px] text-gray-900 font-semibold rounded-4xl hover:bg-primary-600 cursor-pointer"
            >
              <img className="w-4" src={mail} alt="아이콘" />
              HOPPING 무료로 받아보기
            </Button>
        </div>
        <div className="flex flex-col justify-content items-center bg-gray-50">
          <div className="mt-20 flex flex-col items-center gap-1.5 text-4xl font-bold">
            <p>요즘 IT 소식,</p>
            <p>이렇게 답답하지 않나요?</p>
          </div>
          <div className="mt-16 mb-24 grid grid-cols-2 gap-6 items-stretch">
            <div className="flex flex-col gap-4 px-8 pb-10 min-h-[214px] bg-white border rounded-2xl border-gray-200">
              <div className="mt-8 flex items-center gap-2">
                <div className="p-2 bg-gray-200 rounded-2xl">
                  <img src={bang} alt="아이콘" />
                </div>
                <p className="text-[18px] font-bold">뉴스는 너무 '결과만' 말해요</p>
              </div>
              <div className="ml-12 text-slate-700">
                <p>'기능 출시', '신사업 발표'와 같은 결과 설명만 가득해요.</p>
                <p>정작 중요한 '왜 이런 결정을 했는지'는 잘 보이지 않아요.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 px-8 pb-10 min-h-[214px] bg-white border rounded-2xl border-gray-200">
              <div className="mt-8 flex items-center gap-2">
                <div className="p-2 bg-gray-200 rounded-2xl">
                  <img src={world} alt="아이콘" />
                </div>
                <p className="text-[18px] font-bold">해외·빅테크 중심이라 국내 실무와 거리가 있어요</p>
              </div>
              <div className="ml-12 text-slate-700">
                <p>많은 뉴스레터가 글로벌 트렌드를 위주로 다루기에,</p>
                <p>국내 IT 회사나 스타트업 실무에 직접적인 도움을 받기</p>
                <p>어려워요.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 px-8 pb-10 min-h-[214px] bg-white border rounded-2xl border-gray-200">
              <div className="mt-8 flex items-center gap-2">
                <div className="p-2 bg-gray-200 rounded-2xl">
                  <img src={invest} alt="아이콘" />
                </div>
                <p className="text-[18px] font-bold">투자·재무 위주라 프로덕트 흐름이 안 보여요</p>
              </div>
              <div className="ml-12 text-slate-700">
                <p>라운드, 매출, 실적 관려 뉴스는 많은데 정작 국내 서비스가</p>
                <p>어떻게 바뀌고 있는지는 빠르게 파악하기 어려워요.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 px-8 pb-10 min-h-[214px] bg-white border rounded-2xl border-gray-200">
              <div className="mt-8 flex items-center gap-2">
                <div className="p-2 bg-gray-200 rounded-2xl">
                  <img src={balance} alt="아이콘" />
                </div>
                <p className="text-[18px] font-bold">깊이 있는 분석은 너무 무겁고, 요약은 너무 가벼워요</p>
              </div>
              <div className="ml-12 text-slate-700">
                <p>리포트는 읽기 부담스럽고, 뉴스 요약은 디테일이 부족해요.</p>
                <p>실무에 바로 쓰는 '적당한 깊이의 분석'을 찾기 어려워요.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 flex flex-col justify-conetent items-center">
          <div className="flex text-4xl font-bold">
            <img className="w-30" src={hoppingText} alt="텍스트" />이 뭐예요?
          </div>
          <div className="w-[600px] mt-8 mb-24 flex flex-col bg-gray-100 px-10 pb-12 rounded-2xl">
            <div className="w-full mt-10 flex gap-2 pl-3 py-3 bg-primary-500 font-semibold rounded-2xl">
              <img className="w-4" src={sparkle} alt="아이콘" />
              국내 IT 프로덕트의 맥락을 가장 빠르게 파악하는 방법.
            </div>
            <div>
              <div className="mt-6">
                <p>HOPPING은 IT 업계의 신사업 전략, 서비스 출시, 프로덕트 변화를</p>
                <p>가볍게 유쾌하게 읽는 뉴스레터예요.</p>
              </div>
              <div className="mt-6">
                <p>어렵고 무거운 산업 분석 대신,</p>
                <p>"이 회사가 왜 이걸 만들었을까?"를 중심으로 이야기해요.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 flex flex-col justify-content items-center">
          <div className="flex flex-col items-center text-4xl font-bold">
            <p>같은 소식도,</p>
            <p>관점에 따라 이렇게 달라져요</p>
          </div>
          <div className="mt-6">
            <p>뉴스는 사실을 전하고, HOPPING은 이유를 설명합니다.</p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-6">
            {/* 비교 카드 컴포넌트 넣을 예정 */}
            <div className="w-[480px] bg-gray-100 px-6 py-8 rounded-2xl border-2 border-gray-200">
              <div className="flex items-center gap-2 text-[20px]">
                <p>📰</p>
                <p className="font-bold">일반 뉴스가 전하는 방식</p>
              </div>
              <div className="mt-6 p-4 bg-white font-semibold rounded-2xl">
                <p>"신사업 발표... 시장 공략 본격화"</p>
              </div>
              <div className="flex flex-col gap-4 mt-10 text-slate-700">
                <p>· A사가 신사업 B를 발표했다</p>
                <p>· C 기능을 새롭게 추가했다</p>
                <p>· 업계는 시장 공략 목적이라고 설명했다</p>
              </div>
              <div className="mt-6 flex gap-4">
                <div className="px-1.5 py-1 text-[14px] text-center bg-gray-200 rounded-4xl text-gray-600">#사실요약</div>
                <div className="px-1.5 py-1 text-[14px] text-center bg-gray-200 rounded-4xl text-gray-600">#발표정리</div>
                <div className="px-1.5 py-1 text-[14px] text-center bg-gray-200 rounded-4xl text-gray-600">#표면적내용</div>
              </div>
            </div>
            <div className="w-[480px] bg-primary-100 px-6 py-8 rounded-2xl border-2 border-primary-500">
              <div className="flex items-center gap-2 text-[20px]">
                <p>💚</p>
                <p className="font-bold">HOPPING은 이렇게 전해드려요</p>
              </div>
              <div className="mt-6 p-4 bg-primary-500 font-semibold rounded-2xl">
                <p>"왜 지금 이 기능일까? 무엇을 바꾸려는 걸까?"</p>
              </div>
              <div className="flex flex-col gap-4 mt-10 text-slate-700">
                <p>· 이번 업데이트는 OO 지표(잔존·전환 등)를 개선하려는 전략적 선택</p>
                <p>· 최근 사용자 행동 변화 + 경쟁사 움직임이 이번 결정과 연결됨</p>
                <p>· 앞으로 서비스 운영이 어떻게 달라질지까지 전망</p>
              </div>
              <div className="mt-6 flex gap-4">
                <div className="px-1.5 py-1 text-[14px] text-center bg-black rounded-4xl text-primary-500">#프로덕트전략</div>
                <div className="px-1.5 py-1 text-[14px] text-center bg-black rounded-4xl text-primary-500">#맥락해석</div>
                <div className="px-1.5 py-1 text-[14px] text-center bg-black rounded-4xl text-primary-500">#이유중심</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-24 flex flex-col justify-content items-center bg-gray-50">
          <div className="flex flex-col items-center text-4xl font-bold">
            <p>한 주의 프로덕트 이슈,</p>
            <p>놓치지 마세요!</p>
          </div>
          <div className="mt-4 flex flex-col items-center gap-1.5">
            <p>취준생, 현직자, 트렌드 러버 모두를 위한</p>
            <p className="font-semibold">국내 IT 뉴스레터 HOPPING.</p>
          </div>
          <div className="mb-24 w-[700px] flex flex-col gap-3 mt-10 bg-white px-10 py-7 rounded-2xl border-2 border-gray-200 shadow-[-4px_4px_10px_rgba(0,0,0,0.2)]">
            <div className="flex gap-3">
              <CommonInput
                className="w-full px-4 py-3 border text-gray-500 border-gray-200 rounded-3xl"
                value={email}
                onChange={setEmail}
                placeholder="이메일을 입력해주세요."
              />
              <Button
              type="button"
              className="p-3 bg-primary-500 text-gray-900 font-semibold rounded-3xl xl:w-[140px] w-full mt-3 xl:mt-0 hover:bg-primary-600 cursor-pointer"
              onClick={handleSubmit}
              >
                무료 구독하기
              </Button>
            </div>
            {/* 에러 메시지 */}
            {errorMsg && <p className="text-red-500 text-sm mb-3">{errorMsg}</p>}
            {/* 체크박스 */}
            <div className="flex gap-1 mb-4">
              <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
              <p className="text-gray-700">
                <a className="underline" href="#">개인정보 수집 이용 약관</a> 동의 (필수)
              </p>
            </div>
            <p className="text-center text-slate-500">매주 금요일 아침, 받은편지함으로 찾아갑니다 ✉️</p>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Intro;