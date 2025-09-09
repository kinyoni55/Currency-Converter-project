import { useLocation, useParams } from "react-router-dom";

const NewsDetails = () => {
  const { state } = useLocation();
  const { id } = useParams();

  const article = state?.article;

  if (!article) {
    return <p>No article found for ID {id}</p>;
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
      )}
      <p className="mb-2">{article.description}</p>
      <p className="text-sm text-gray-500">
        {new Date(article.publishedAt).toLocaleString()} • {article.source.name}
      </p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline mt-4 block"
      >
        Read full article
      </a>
    </main>
  );
};

export default NewsDetails;
