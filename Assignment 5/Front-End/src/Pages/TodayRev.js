import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import { useNavigate } from 'react-router-dom';

function TodayRev() {
    // Define inline styles for the heading
    const headingStyle = {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '36px',
        fontWeight: 700,
        color: '#333', // Dark text color
        marginBottom: '20px',
    };

    // State variables to store total revenue and user details
    const [TotalRevenue, setTotalRevenue] = useState(0);
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    // Configuration object for making authenticated requests
    const CONFIG_OBJ = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    };

    // Function to fetch total revenue data using axios
    const totalRevenue = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/todaysrevenue`, CONFIG_OBJ);
            setTotalRevenue(response.data.totalRevenue);
        } catch (err) {
            console.error(err.message);
        }
    };

    // useEffect to fetch total revenue data and check user login status
    useEffect(() => {
        totalRevenue();
        let userInfo = JSON.parse(localStorage.getItem('user'));
        if (!userInfo) {
            // If user is not logged in, navigate to the login page
            navigate('/');
        }
        // Set the user state with user information
        setUser(userInfo);
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-8 text-center">
                    {/* Display the heading with the specified inline style */}
                    <h1 style={headingStyle}>Today's Total Revenue is :</h1>
                    <div className="total-revenue">
                        <h2> ₹{TotalRevenue.toFixed(2)} </h2>{/* Format revenue as currency */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodayRev;
