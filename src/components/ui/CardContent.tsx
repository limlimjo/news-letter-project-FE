interface CardContentProps {
  title: string;
  createdAt: string;
  imgUrl: string;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ title, createdAt, imgUrl, className = "" }) => {
  return (
    <div className={`flex flex-col w-[320px] xl:w-[285px] rounded-2xl overflow-hidden bg-content ${className}`}>
      <img src={imgUrl} alt="이미지" className="h-[251px] mb-3" />
      <div className="px-4 py-5 flex flex-col justify-between h-full">
        <p className="text-gray-100 font-semibold text-gray-70 text-[18px] mb-5 line-clamp-2">{title}</p>
        <p className="text-gray-400 text-[13px]">{createdAt}</p>
      </div>
    </div>
  );
};

export default CardContent;
