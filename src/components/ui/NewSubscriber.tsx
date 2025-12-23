import Button from "@/components/ui/Button";
import CommonInput from "@/components/ui/CommonInput";
import bgImage from "@/assets/image/subscribe.png";

interface NewSubscriberProps {
  email: string;
  setEmail: (value: string) => void;
  checked: boolean;
  setChecked: (value: boolean) => void;
  errorMsg: string;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const NewSubscriber = ({
  email,
  setEmail,
  checked,
  setChecked,
  errorMsg,
  handleSubmit,
}: NewSubscriberProps
) => {
  return (
    <div
      id="newSubscribe"
      style={{ backgroundImage: `url(${bgImage})` }} 
      className="flex flex-col xl:flex-row justify-between bg-cover bg-center bg-no-repeat xl:bg-gray-50 bg-primary-50 xl:px-20 xl:py-20 px-5 py-6 xl:rounded-none rounded-3xl overflow-hidden">
      <div className="flex flex-col gap-3 xl:justify-center">
        <p className="font-bold xl:text-[32px] text-[24px] text-gray-900">호핑 뉴스레터 구독하기</p>
        <p className="text-gray-700 xl:text-[20px] text-[15px] mb-6">
          HOPPING, 프로덕트의 흐름을 읽는 가장 가벼운 방법
          <br />
          매주 금요일, 받은편지함으로 찾아갑니다.
        </p>
      </div>
      <div className="xl:bg-white xl:p-10 xl:rounded-2xl xl:shadow-sm">
          <div className="flex flex-col xl:flex-row xl:gap-3 mb-3">
            <CommonInput
              className={`xl:w-[316px] p-3 border text-gray-500 ${
                errorMsg ? "border-red-500" : "border-gray-300"
              }`}
              value={email}
              onChange={setEmail}
              placeholder="이메일을 입력해주세요."
            />
            <Button
              type="button"
              className="p-3 bg-primary-500 text-gray-900 font-semibold rounded xl:w-[140px] w-full mt-3 xl:mt-0 hover:bg-primary-600 cursor-pointer"
              onClick={handleSubmit}
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
                <a className="underline" href="#">개인정보 수집 이용 약관</a> 동의 (필수)
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default NewSubscriber;
