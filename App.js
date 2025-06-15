import React, { useState, useEffect } from "react";
import NewsCard from "./components/NewsCard";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/news`)
      .then(res => res.json())
      .then(data => setNews(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Latest News</h1>
      {news.map(article => <NewsCard key={article._id} article={article} />)}
    </div>
  );
}

export default App;