import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('Web programming');
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div>
      <div className='ui container'>
        <SearchBar onFormSubmit={search} />

        <div className='ui grid'>
          <div className='ui row'>
            <div className='ten wide column'>
              <VideoDetail video={selectedVideo} />
            </div>
            <div className='six wide column'>
              <VideoList
                onVideoSelect={(video) => setSelectedVideo(video)}
                videos={videos}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
