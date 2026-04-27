import MyContainer from "@/components/Container/MyContainer";
import Categories from "@/components/Home/Categories";
import LoginWith from "@/components/Home/LoginWith";
import News from "@/components/Home/News";

export default function Home() {
  return (
    <div>
      <main>
        <MyContainer className="grid grid-cols-1 mt-20 gap-6 md:grid-cols-12">
          <div className="md:col-span-3">
            <Categories id="01" />
          </div>
          <div className="md:col-span-6">
            <News id="01" />
          </div>
          <div className="md:col-span-3">
            <LoginWith />
          </div>
        </MyContainer>
      </main>
    </div>
  );
}
