interface CardContentProps {
  title: string;
  createdAt: string;
  imgUrl: string;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ title, createdAt, imgUrl, className = "" }) => {
  return (
    <div className={`flex flex-col w-[320px] xl:w-[276px] xl:h-[294px] ${className}`}>
      <img src={imgUrl} alt="이미지" className="rounded-2xl h-[184px]" />
      <div className="mt-4 flex flex-col h-full">
        <p className="text-gray-800 font-semibold text-gray-70 text-[18px] mb-4 line-clamp-2">{title}</p>
        <p className="text-gray-500 text-[13px] mt-auto">{createdAt}</p>
      </div>
    </div>
  );
};

export default CardContent;
