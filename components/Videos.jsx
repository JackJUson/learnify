'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=fullstack%20project&type=video&key=${API_KEY}`
      );
      setVideos(response.data.items);
    };
    fetchVideos();
  }, []);

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id.videoId}>
          <h3>{video.snippet.title}</h3>
          <iframe
            width='560'
            height='315'
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
