import React from "react";
import Marquee from "react-fast-marquee";
import MyContainer from "../Container/MyContainer";

const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News: Sports Team Wins Championship",
  },
];

const BreakingNews = () => {
  return (
    <MyContainer className="mt-7.5">
      <div className="flex bg-[#F3F3F3] rounded-lg p-4">
        <div className="bg-[#D72050] px-6 py-2.25 rounded-l-lg text-white font-medium text-xl">
          Latest
        </div>
        <Marquee pauseOnHover={true}>
          {news.map((n) => (
            <span key={n._id}>{n.title}</span>
          ))}
        </Marquee>
      </div>
    </MyContainer>
  );
};

export default BreakingNews;
