import MyContainer from "@/components/Container/MyContainer";
import Categories from "@/components/Home/Categories";
import LoginWith from "@/components/Home/LoginWith";
import News from "@/components/Home/News";
import React from "react";

const Category = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  return (
    <div>
      <MyContainer className="grid grid-cols-1 mt-20 gap-6 md:grid-cols-12">
        <div className="md:col-span-3">
          <Categories id={id} />
        </div>
        <div className="md:col-span-6">
          <News id={id} />
        </div>
        <div className="md:col-span-3">
          <LoginWith />
        </div>
      </MyContainer>
    </div>
  );
};

export default Category;
