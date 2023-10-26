import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import React from 'react';

function App() {
  return (
    <div>
      {/* Define the main application router */}
      <Router>
        <div>
          {/* Define routes within the application */}
          <Routes>
            {/* Define a route for the home page */}
            <Route exact path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

// Export the App component for use in other parts of the application
export default App;
