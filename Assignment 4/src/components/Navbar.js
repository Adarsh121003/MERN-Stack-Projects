// Import the necessary React and NavLink components from 'react-router-dom'
import React from 'react';
import { NavLink } from 'react-router-dom';

// Define the Navbar component using a function declaration
function Navbar() {
    // Return the JSX structure for the Navbar component
    return (
        <div>
            {/* Define the navigation bar with Bootstrap styles */}
            <nav className="navbar navbar-expand-lg bg-primary " data-bs-theme="dark">
                <div className="container-fluid">
                    {/* Display the title of the app */}
                    Sales App

                    {/* Toggle button for mobile navigation */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Collapsible navigation menu */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* Navigation links using NavLink */}
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/AddSales'>
                                    Add Sales
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/Top5sales'>
                                    Top 5 Sales
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/TodayRev'>
                                    Today's Total Revenue
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link ' to='/login'>
                                    Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/signup'>
                                    Register
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/login'>
                                    Logout
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

// Export the Navbar component as the default export
export default Navbar;
