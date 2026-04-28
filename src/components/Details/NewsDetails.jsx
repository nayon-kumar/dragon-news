import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = ({ news }) => {
  return (
    <div>
      <p className="font-semibold text-[#403F3F] text-xl">Details News</p>
      <div className="border-2 border-[#E7E7E7] p-7.5 rounded-md mt-5">
        <Image
          src={news.image_url}
          alt={news.title}
          height={411}
          width={789}
          className="h-102 w-full rounded-md"
        />
        <h3 className="font-bold text-xl mt-5 text-[#403F3F] capitalize md:text-2xl">
          {news.title}
        </h3>
        <p className="text-[#706F6F] mt-2">{news.details}</p>
        <Link
          href={`/category/${news.category_id}`}
          className="btn bg-[#D72050] text-white mt-8"
        >
          <FaArrowLeft />
          <p>All news in this category</p>
        </Link>
      </div>
    </div>
  );
};

export default NewsDetails;
