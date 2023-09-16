import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './routes/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Auth from './routes/Auth.jsx';
import TopTracks from './routes/TopTracks.jsx';

const App = () => {

  return (
    <Router basename="/SpotTwist">
      <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/TopTracks" element={<TopTracks />} />
        </Routes>

    </Router>
  );
};

export default App;
