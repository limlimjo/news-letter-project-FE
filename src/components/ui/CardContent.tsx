interface CardContentProps {
  title: string;
  createdAt: string;
  imgUrl: string;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ title, createdAt, imgUrl, className = "" }) => {
  return (
    <div className={`flex flex-col w-full h-full ${className}`}>
      <img src={imgUrl} alt="이미지" className="rounded-2xl w-full h-[223px] md:h-[298px] xl:h-[188px] object-cover" />
      <div className="mt-4 flex flex-col flex-1">
        <p className="text-gray-800 font-semibold text-[18px] mb-4 line-clamp-2">
          {title}
        </p>
        <p className="text-gray-500 text-[13px] mt-auto">
          {createdAt}
        </p>
      </div>
    </div>
  );
};

export default CardContent;
