import React from 'react';

import useTitle from "./customHooks/useTitle";
import VideoCarousel from "./containers/VideoCarousel";

import './App.css';

const App = () => {

  const artistName = "Ed Sheeran";

  useTitle(artistName);

  return (
    <div className="App">
      <h1>{artistName}</h1>
      <VideoCarousel />
    </div>
  );
}

export default App;