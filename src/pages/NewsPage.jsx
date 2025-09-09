import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/everything?q=forex+currency&language=en&sortBy=publishedAt&pageSize=10&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        );
        setArticles(res.data.articles.slice(0, 10));
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen bg-zinc-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Currency & Forex News</h1>

      {loading ? (
        <p className="text-gray-500">Loading news...</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
          {articles.map((article, i) => (
            <Link
              key={i}
              to={`/news/${i}`}
              state={{ article }}   
              className="bg-white rounded-xl shadow p-4 flex flex-col hover:shadow-lg transition"
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
              )}
              <h2 className="font-semibold text-lg mb-2">{article.title}</h2>
              <p className="text-sm text-gray-600 flex-grow">
                {article.description}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(article.publishedAt).toLocaleDateString()} •{" "}
                {article.source.name}
              </p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};

export default NewsPage;
