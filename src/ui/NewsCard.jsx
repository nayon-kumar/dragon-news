import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import { IoEye } from "react-icons/io5";
import { MdStar, MdStarBorder } from "react-icons/md";

const NewsCard = ({ singleNews }) => {
  const rating = Math.ceil(singleNews.rating.number);
  return (
    <div className="border rounded-md border-[#E7E7E7]">
      <div className="bg-[#F3F3F3] px-5 py-5">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src={singleNews.author.img}
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h4 className="font-semibold text-[#403F3F] capitalize">
                {singleNews.author.name}
              </h4>
              <p className="text-[#706F6F]">
                {singleNews.author?.published_date?.split(" ")[0]}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <FaRegBookmark size={24} className="cursor-pointer" />
            <GoShareAndroid size={24} className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="px-5">
        <Link href={`/details/${singleNews._id}`}>
          <h3 className="font-bold text-xl mt-3.5">{singleNews.title}</h3>
          <Image
            src={singleNews.image_url}
            alt={singleNews.title}
            width={518}
            height={200}
            className="w-full h-65.5 mt-5 rounded-md"
          />
          <p className="mt-8 line-clamp-3">{singleNews.details}</p>
          <p className="bg-linear-to-r from-[#FF8C47] to-[#F75B5F] text-transparent bg-clip-text mt-2 border-b-2">
            Read More
          </p>
        </Link>
        <div className="border-t-2 pt-5 border-[#E7E7E7] my-5 flex items-center justify-between">
          <div className="flex items-center gap2">
            {[1, 2, 3, 4, 5].map((ratingNum) => (
              <span key={ratingNum}>
                {ratingNum <= rating ? (
                  <MdStar size={24} className="text-[#FF8C47]" />
                ) : (
                  <MdStarBorder size={24} className="text-gray-400" />
                )}
              </span>
            ))}
            <p className="ml-3">{singleNews.rating.number}</p>
          </div>
          <div className="text-[#706F6F] flex items-center gap-2.5">
            <IoEye size={24} />
            <p className="font-medium">{singleNews.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
