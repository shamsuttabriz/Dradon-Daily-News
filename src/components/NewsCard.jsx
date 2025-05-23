import React from "react";
import { Bookmark, Share2, Eye } from "lucide-react";
import { Link } from "react-router";
// import { Link, useLocation, useNavigate } from "react-router";
 
const NewsCard = ({ news }) => {
  const {id, title, total_view, author, thumbnail_url, details } = news;
  const date = new Date(author.published_date).toLocaleDateString()

  // const location = useLocation();
  // const navigate = useNavigate();

  // const handleNavigate = () => {
  //   if(location.state) {
  //     navigate(location.state);
  //   }
  // }


  return (
    <div className="max-w-lg mx-auto my-5 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center space-x-3">
          <img
            src={author.img}
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              {author.name}
            </h3>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-gray-500">
          <Bookmark className="w-5 h-5 cursor-pointer" />
          <Share2 className="w-5 h-5 cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 pt-3 text-lg font-semibold text-gray-800 leading-snug">
        {title}
      </h2>

      {/* Image */}
      <div className="mt-4">
        <img
          src={thumbnail_url}
          alt="news"
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Description */}
      <div className="px-4 py-3">
        <p className="text-sm text-gray-600">{details.slice(0, 270)}...</p>
        <Link  to={`/news-details/${id}`} className="text-orange-600 text-sm mt-2 font-semibold hover:underline">
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200">
        <div className="flex items-center space-x-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
        <div className="flex items-center text-gray-500 text-sm space-x-1">
          <span>4.9</span>
          <Eye className="w-4 h-4" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
