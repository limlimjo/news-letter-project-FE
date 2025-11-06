interface CardContentProps {
  title: string;
  date: string;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ title, date, className = "" }) => {
  return (
    <div className={`flex flex-col w-[320px] xl:w-[285px] ${className}`}>
      <img src="/public/test_image.png" alt="이미지" className="h-[251px] rounded-2xl overflow-hidden mb-3" />
      <p className="font-semibold text-gray-70 text-[18px] mb-5 line-clamp-2">{title}</p>
      <p className="text-gray-500 text-[13px]">{date}</p>
    </div>
  );
};

export default CardContent;
