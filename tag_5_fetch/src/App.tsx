import { useEffect, useState } from "react";
import NewsCard from "./components/NewsCard";

interface Article {
  author: string;
  title: string;
  content: string;
  description?: string;
}

interface APIResults {
  status: "ok" | "error";
  totalResults: number;
  articles: Article[];
}

function App() {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=616583e615d04444be55792846f82605"
    )
      .then((response) => response.json())
      .then((json: APIResults) => {
        setNews(json.articles);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const newsElements = news.map((singleNews) =>{
    return <NewsCard title={singleNews.title} author={singleNews.author} content={singleNews.content}/>
  })

  return <div>
    <h1 className="main-title">Breaking News</h1>
    {newsElements}
  </div>;
}

export default App;