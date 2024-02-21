import { Grid, Skeleton } from "@mui/material";
import { PressCard } from "../PressCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
export const PressCardGrid = () => {
  const [pressData, setPressData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchPressData = async () => {
    try {
      axios.get("http://localhost:8000/api/press").then((res) => {
        console.log(res.data);
        setPressData(res.data);
        setIsLoading(true);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPressData();
  }, []);
  return (
    <Grid container spacing={2}>
      {isLoading
        ? pressData.map((article) => (
            <Grid item md={5} xs={12} xl={3} key={article.id}>
              <PressCard
                newsSource={article.news_source}
                articleTitle={article.article_title}
                articleUrl={article.article_url}
                image={"http://localhost:8000/storage/" + article.image}
              />
            </Grid>
          ))
        : Array.from({ length: 4 }).map((_, index) => (
            <Grid item key={index} md={5} xs={12} xl={3}>
              <Skeleton
                variant="rect"
                width={369.5}
                height={462}
                animation="wave"
              />
            </Grid>
          ))}
    </Grid>
  );
};
