const Footer = () => {
  return (
    <footer className="bg-gray-800 text-[14px]">
      <div className="flex flex-col gap-3 px-5 xl:px-20 pt-16 xl:pt-12 pb-16">
        <div className="flex gap-1.25">
          <p className="text-gray-200">개인정보 처리방침</p>
          <p className="text-gray-600">|</p>
          <p className="text-gray-200">이용약관</p>
        </div>
        <div className="flex gap-2 text-gray-500">
          <p>상호명: 뉴스레터</p>
          <p>이메일: contact@newsletter.com</p>
        </div>
        <p className="text-gray-500">@2025 Newsletter. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
