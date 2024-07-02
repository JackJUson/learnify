'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
      const searchQuery = 'fullstack project course';
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(searchQuery)}&type=video&key=${API_KEY}`
      );
      const filteredVideos = response.data.items.filter(video =>
        /coding|tutorial|project|build|step by step/.test(video.snippet.title.toLowerCase())
      );
      setVideos(filteredVideos);
    };
    fetchVideos();
  }, []);

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id.videoId}>
          <h3>{video.snippet.title}</h3>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoList;