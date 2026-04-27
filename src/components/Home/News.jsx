import NewsCard from "@/ui/NewsCard";
import { GiNewspaper } from "react-icons/gi";

const getNews = async (catId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${catId}`,
  );
  const data = await res.json();
  return data.data;
};

const News = async ({ id }) => {
  const news = await getNews(id);
  return (
    <>
      {news.length > 0 ? (
        <>
          <div>
            <h4 className="text-[#403F3F] font-semibold text-xl">
              Latest News
            </h4>
            <div className="mt-5 flex flex-col gap-7.5">
              {news.map((singleNews) => (
                <NewsCard key={singleNews._id} singleNews={singleNews} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="text-gray-400 mt-20 pb-20 text-center">
            <GiNewspaper size={150} className="mx-auto" />
            <p className="mt-4">
              No news found from this category. Select another category.
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default News;
