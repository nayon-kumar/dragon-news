import Link from "next/link";
import React from "react";

const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  return res.json();
};

const Categories = async () => {
  const data = await getCategories();
  const categories = data.data.news_category;
  console.log(categories);
  return (
    <div>
      <h4 className="text-[#403F3F] font-semibold text-xl">All Caterogy</h4>
      <div className="flex flex-col gap-2 mt-5 ">
        {categories.map((categorie) => (
          <Link
            className="py-2 border border-gray-300 px-5 rounded-md"
            href="/"
            key={categorie.category_id}
          >
            {categorie.category_name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
