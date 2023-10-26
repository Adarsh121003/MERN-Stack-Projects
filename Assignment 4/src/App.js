// Import necessary styles and components
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Navbar from './components/Navbar';
import Signup from './Pages/Signup';
import AddSales from './Pages/AddSales';
import Top5sales from './Pages/Top5sales';
import TodayRev from './Pages/TodayRev';

// Main App component
function App() {
  return (
    <div>
      {/* Set up the router for navigation */}
      <Router>
        {/* Display the Navbar component */}
        <Navbar />

        {/* Define routes and their corresponding components */}
        <Routes>
          {/* Route for the Login page */}
          <Route exact path='/' element={<Login />} />

          {/* Route for the Login page (alternative path) */}
          <Route exact path='/login' element={<Login />} />

          {/* Route for the Signup page */}
          <Route exact path='/signup' element={<Signup />} />

          {/* Route for the AddSales page */}
          <Route exact path='/AddSales' element={<AddSales />} />

          {/* Route for the Top5sales page */}
          <Route exact path='/Top5sales' element={<Top5sales />} />

          {/* Route for the TodayRev page */}
          <Route exact path='/TodayRev' element={<TodayRev />} />
        </Routes>
      </Router>
    </div>
  );
}

// Export the App component as the default export
export default App;
