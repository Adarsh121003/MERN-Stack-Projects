// Import the necessary React library and hooks
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import { useNavigate } from 'react-router-dom';

// Define the Top5sales component using a function declaration
function Top5sales() {
    // Define inline styles for the heading using Google Fonts
    const headingStyle = {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '26px',
        fontWeight: 700,
    };

    // Declare state variables to store top sales and user details
    const [sales, setSales] = useState([]);
    const [user, setUser] = useState('');

    // Initialize the navigate function from react-router-dom
    const navigate = useNavigate();

    // Create a configuration object for making authenticated requests
    const CONFIG_OBJ = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    };

    // Function to fetch top sales data using axios
    const fetchTopSales = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/top5sales`, CONFIG_OBJ);
            console.log(response.data);
            setSales(response.data.sales);
        } catch (error) {
            console.error(error.message);
        }
    };

    // useEffect to check if the user is logged in and fetch top sales data
    useEffect(() => {
        // Fetch top sales data
        fetchTopSales();

        // Check if user information is available in local storage
        let userInfo = JSON.parse(localStorage.getItem('user'));
        if (!userInfo) {
            // If user is not logged in, navigate to the login page
            navigate('/');
        }
        // Set the user state with user information
        setUser(userInfo);
    }, []);

    // Return the JSX structure for the Top5sales component
    return (
        <div>
            {/* Create a table to display top 5 sales */}
            <div className="row justify-content-center mt-3">
                {/* Display the heading with the specified inline style */}
                <div className="text-center mt-3" style={headingStyle}>
                    Top 5 Sales
                </div>
                <div className="col-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Sale ID</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {sales.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.salesId}</td>
                                    <td>{item.pname}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

// Export the Top5sales component as the default export
export default Top5sales;
