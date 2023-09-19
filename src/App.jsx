import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContent } from './routes/AppContent';

const App = () => {
  return (
    <Router >
      <AppContent />
    </Router>
  );
};

export default App;
