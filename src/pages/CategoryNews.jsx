import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";
import NotFoundNews from "../components/NotFoundNews";

function CategoryNews() {
  const [categoriesNews, setCategoriesNews] = useState([]);

  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    if (id == "0") {
      setCategoriesNews(data);
      return;
    } else if (id == "1") {
      const filterCategory = data.filter(
        (category) => category.others.is_today_pick == true
      );
      setCategoriesNews(filterCategory);
    } else {
      const filterCategory = data.filter(
        (category) => category.category_id == id
      );
      setCategoriesNews(filterCategory);
    }
  }, [data, id]);

  return (
    <div>
      <h2 className="font-semibold">
        Total - <span className="text-red-500">{categoriesNews.length}</span>{" "}
        News Found
      </h2>
      <div>{categoriesNews.length == 0 ? <NotFoundNews /> : ""}</div>
      <div>
        {categoriesNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
}

export default CategoryNews;
