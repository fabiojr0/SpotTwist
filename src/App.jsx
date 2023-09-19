import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContent } from './routes/AppContent';

const App = () => {
  return (
    <Router basename="/SpotTwist">
      <AppContent />
    </Router>
  );
};

export default App;
