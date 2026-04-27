import MyContainer from "@/components/Container/MyContainer";
import Categories from "@/components/Home/Categories";
import LoginWith from "@/components/Home/LoginWith";

export default function Home() {
  return (
    <div>
      <main>
        <MyContainer className="grid grid-cols-1 mt-20 gap-6 md:grid-cols-12">
          <div className="md:col-span-3">
            <Categories />
          </div>
          <div className="border-2 md:col-span-6">
            <p>All Categories</p>
          </div>
          <div className="md:col-span-3">
            <LoginWith />
          </div>
        </MyContainer>
      </main>
    </div>
  );
}
