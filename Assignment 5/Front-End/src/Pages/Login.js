// Import the necessary React library
import React, { useState } from 'react';
import axios from 'axios'
import { API_BASE_URL } from '../../src/config'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// Define the Login component using an arrow function
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // Define inline styles for the heading using google fonts
    const headingStyle = {
        fontFamily: 'Oswald, sans-serif',
        fontSize: '28px',
        fontWeight: 700,
    };
    // ========================
    const login = (event) => {
        event.preventDefault();
        setLoading(true);
        const requestData = { email, password }
        axios.post(`${API_BASE_URL}/login`, requestData)
            .then((result) => {

                if (result.status === 200) {
                    setLoading(false);
                    // For data stoage of logged in values
                    localStorage.setItem("token", result.data.result.token);
                    localStorage.setItem('user', JSON.stringify(result.data.result.user));

                    // =============================
                    dispatch({ type: 'LOGIN_SUCCESS', payload: result.data.result.user })
                    // 
                    setLoading(false);
                    navigate('/AddSales');
                    Swal.fire({
                        icon: 'success',
                        title: 'Login Successfully'
                    })
                }

                setEmail('');
                setPassword('');
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: error.response.data.error
                })
            })
        setLoading(true);
    }

    // Return the JSX structure for the Login component
    return (
        <div>

            {/* Create a form with input fields */}
            <div className='row justify-content-center mt-3'>
                {/* Display the heading with the specified inline style */}
                <div className='text-center' style={headingStyle}>
                    Login Form
                </div>
                <div className='col-6'>
                    <form onSubmit={(e) => login(e)}>
                        {/* Email input */}
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" value={email} onChange={(ev) => setEmail(ev.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        {/* Password input */}
                        <div className="form-group mt-2 mb-3">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} className="form-control" id="exampleInputPassword1" />
                        </div>
                        {/* Submit button */}
                        <div className='mt-3 d-grid'>
                            <button type="submit" className="btn btn-primary xl btn-block">Login</button>
                        </div>
                        {/* Loading Icon */}
                        {loading ? <div className=' col-md-12 mt-3 text-center'>
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> : ''}
                    </form>
                </div>
            </div>
        </div>
    )
}

// Export the Login component as the default export
export default Login;
