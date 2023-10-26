import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        Swal.fire({
            icon: 'success',
            title: 'User successfully logged out',
        });
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        dispatch({ type: 'LOGIN_ERROR' });
        navigate('/');
    };

    // Check if the user is logged in
    const isLoggedIn = !!localStorage.getItem('token');

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary " data-bs-theme="dark">
                <div className="container-fluid">
                    Sales App
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
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
                            {/* Conditionally render the Login and Register buttons */}
                            {!isLoggedIn && (
                                <React.Fragment>
                                    <li className="nav-item">
                                        <NavLink className='nav-link' to='/login'>
                                            Login
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className='nav-link' to='/signup'>
                                            Register
                                        </NavLink>
                                    </li>
                                </React.Fragment>
                            )}
                            {isLoggedIn && (
                                <li className="nav-item">
                                    <NavLink onClick={() => logout()} className='nav-link' to='/login'>
                                        Logout
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
