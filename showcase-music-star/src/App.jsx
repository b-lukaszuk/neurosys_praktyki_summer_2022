import React from 'react';

import Hero from "./containers/Hero";
import useTitle from "./customHooks/useTitle";
import VideoCarousel from "./containers/VideoCarousel";

import "./App.css";

const App = () => {

  const artistName = "Ed Sheeran";

  useTitle(artistName);

  return (
    <div className="App">
      <Hero artistName={artistName} />
      <VideoCarousel />
    </div>
  );
}

export default App;
