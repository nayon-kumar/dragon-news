import MyContainer from "@/components/Container/MyContainer";
import NewsDetails from "@/components/Details/NewsDetails";
import LoginWith from "@/components/Home/LoginWith";

const getNews = async (newsID) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${newsID}`,
  );
  const data = await res.json();
  return data.data[0];
};

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const news = await getNews(id);
  return {
    title: news.title,
    description: news.details,
  };
};

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNews(id);
  return (
    <MyContainer className="mt-7.5">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-9">
          <NewsDetails news={news} />
        </div>
        <div className="col-span-3">
          <LoginWith />
        </div>
      </div>
    </MyContainer>
  );
};

export default DetailsPage;
