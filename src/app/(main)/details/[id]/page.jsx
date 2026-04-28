import MyContainer from "@/components/Container/MyContainer";
import LoginWith from "@/components/Home/LoginWith";
import React from "react";
const getNews = async (newsID) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${newsID}`,
  );
  const data = await res.json();
  return data.data[0];
};

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNews(id);
  console.log(news);
  return (
    <MyContainer className="mt-7.5">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-9">Details</div>
        <div className="col-span-3">
          <LoginWith />
        </div>
      </div>
    </MyContainer>
  );
};

export default DetailsPage;
