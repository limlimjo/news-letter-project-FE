import { useState } from "react";

import Button from "@/components/ui/Button";
import CommonInput from "@/components/ui/CommonInput";

const ContentDetail = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col gap-5 justify-center bg-white">
      <div className="flex flex-col px-5 xl:px-10 xl:mt-6 mt-8 ">
        {/* 상세 컨텐츠 들어갈 자리 */}
        <p>상세 컨텐츠 들어갈 자리</p>
        <p>상세 컨텐츠 들어갈 자리</p>
        <p>상세 컨텐츠 들어갈 자리</p>
        <p>상세 컨텐츠 들어갈 자리</p>
        <p>상세 컨텐츠 들어갈 자리</p>
        <p>상세 컨텐츠 들어갈 자리</p>
        <p>상세 컨텐츠 들어갈 자리</p>
      </div>
      <div className="bg-white px-4">
        <div className="mt-12 xl:mb-20 mb-28">
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
              <div className="flex gap-3 mb-[38px]">
                <CommonInput
                  className="w-full p-3 border border-gray-300 text-gray-500"
                  value={email}
                  onChange={setEmail}
                  placeholder="이메일을 입력해주세요."
                />
                <Button className="xl:w-[360px] xl:p-3 xl:bg-gray-200 xl:text-gray-400 xl:border xl:border-gray-300 xl:rounded xl:block hidden">
                  무료 구독하기
                </Button>
              </div>
              <div className="flex flex-col xl:flex-row xl:gap-2">
                <div className="flex gap-1 mb-4">
                  <input type="checkbox" />
                  <p className="text-gray-700">
                    <a href="#">개인정보 수집 이용 약관</a> 동의 (필수)
                  </p>
                </div>
                <Button className="p-3 bg-gray-200 text-gray-400 border border-gray-300 rounded xl:hidden">
                  무료 구독하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
