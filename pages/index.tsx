import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Body from "../components/Body";
import Header from "../components/Header";
import youtube from "../apis/youtube";
import styles from "../styles/Home.module.css";
import axios from "axios";

const Home: NextPage = () => {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);

  const handleSubmit = async (e: any) => {
    if (e.key == "Enter") {
      e.preventDefault();
      setQuery(e.target.value);
      let response = await youtube.get("/search", {
        params: {
          q: e.target.value,
        },
      });
      let output = [...response.data.items];
      console.log(e.target.value);
      console.log(response);
      response.data.items.map(async (vid: any, index: Number) => {
        const stats = await axios.get(
          "https://www.googleapis.com/youtube/v3/videos",
          {
            params: {
              part: "statistics",
              id: vid.id.videoId,
              key: process.env.NEXT_PUBLIC_REACT_APP_KEY,
            },
          }
        );
        console.log(stats);
        output[index]["stats"] = stats.data.items[0].statistics;
      });
      setVideos(output);
      console.log(output);
    }
  };
  return (
    <div>
      <Header handleSubmit={handleSubmit} />
      <Body query={query} videos={videos} />
    </div>
  );
};

export default Home;
