import React, { Suspense, use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

function Category() {
  const categories = use(categoryPromise);
  // console.log(categories);
  return (
    <div>
      <h2 className="font-semibold">All Categories {categories.length}</h2>
      <div className="grid gird-cols-1 mt-5 space-y-2">
        {
          categories.map(category => <NavLink to={`/category/${category.id}`} className="btn btn-base-100 font-semibold text-center border-0 rounded" key={category.id}>{category.name}</NavLink>)
        }
      </div>
    </div>
  );
}

export default Category;
