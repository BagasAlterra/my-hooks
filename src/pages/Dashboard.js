import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import axios from "axios";

const baseUrl = "https://newsapi.org/v2/";
const urlHeadline =
  baseUrl +
  "top-headlines?" +
  "country=id&" +
  `apiKey=${process.env.REACT_APP_API_KEY}`;

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [news, setNews] = useState([]);

  const getNews = async () => {
    await axios
      .get(urlHeadline)
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = (item) => {
    console.log(item.title);
    navigate(`/detailPage/${item.description}`, {
      state: {
        image: item.urlToImage,
        description: item.description,
        title: item.title,
      },
    });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <h1>Dashboard Page</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {news.map((item) => {
          return (
            <NewsCard
              src={item.urlToImage}
              title={item.title}
              description={item.description}
              onClick={() => handleClick(item)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
