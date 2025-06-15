import React from "react";

const NewsCard = ({ article }) => (
  <div style={{ border: "1px solid #ccc", margin: 10, padding: 15 }}>
    <h2>{article.title}</h2>
    <p><em>{article.category}</em></p>
    {article.imageUrl && <img src={article.imageUrl} alt="" width="100%" />}
    <p>{article.content}</p>
  </div>
);

export default NewsCard;