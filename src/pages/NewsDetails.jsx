import { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/homelayout/RightAside";
import { Link, useLoaderData, useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

function NewsDetails() {
  const [news, setNews] = useState({});

  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const findNews = data.find((news) => news.id == id) || {};
    setNews(findNews);
  }, [data, id]);

  console.log(news, id);
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="max-w-6xl mx-auto mt-5 grid grid-cols-12 gap-10">
        <section className="col-span-9">
          <h3 className="font-bold mb-4">News Details</h3>
          <div>
            <img
              className="w-full h-[400px] object-cover rounded"
              src={news.image_url}
              alt={news.title}
            />
            <h3 className="text-4xl font-medium my-4 text-justify">
              {news.title}
            </h3>
            <p className="text-justify text-accent">{news.details}</p>

            <Link to={`/category/${news.category_id}`} className="btn btn-secondary px-4 rounded-xs mt-5">
              <FaArrowLeft/> all news in this category
            </Link>
          </div>
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
}

export default NewsDetails;
