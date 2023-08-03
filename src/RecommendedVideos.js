import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
  return (
    <div className='recommended_videos'>
      <h2>Recommended</h2>
      <div className="recommendedVideos_video">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
      </div>
    </div>
  )
}

export default RecommendedVideos
