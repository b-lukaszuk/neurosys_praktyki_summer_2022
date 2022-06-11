import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import AboutMe from "./containers/AboutMe";
import ContactPage from "./containers/ContactPage";
import Hero from "./containers/Hero";
import HomePage from "./containers/HomePage";
import PageNotFound from './containers/PageNotFound';
import useTitle from "./customHooks/useTitle";

import "./App.css";

const App = () => {

  const artistName = "Ed Sheeran";
  const validRoutes = [
    { id: 0, name: "Home", path: "/home" },
    { id: 1, name: "O mnie", path: "/about-me" },
    { id: 2, name: "Kontakt", path: "/contact" },
  ];

  useTitle(artistName);

  return (
    <div className="App">
      <Hero artistName={artistName} validRoutes={validRoutes} />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
