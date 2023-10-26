// Import the necessary React library
import React, { useState } from 'react';
import { API_BASE_URL } from '../../src/config';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// Define the Signup component using a function declaration
function Signup() {

  // Define inline styles for the heading using google fonts
  const headingStyle = {
    fontFamily: 'Oswald, sans-serif',
    fontSize: '28px',
    fontWeight: 700,
  };
  // Sigup use states=================
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Render Loading Icon while User click on signup button

  const [loading, setLoading] = useState(false);

  // Onclick events for signup buttons and stop debugger
  const navigate = useNavigate();

  // backend connection========
  const signup = (event) => {
    event.preventDefault();
    const requestData = { firstName: firstName, lastName, email, password }
    axios.post(`${API_BASE_URL}/register`, requestData)
      .then((result) => {

        if (result.status === 201) {
          setLoading(false);
          Swal.fire({
            icon: 'success',
            title: 'User Succefully Registered'
          })
          navigate('/')
        }
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Oops...Something Went Wrong!'
        })
      })
    setLoading(true);
  }
  // Return the JSX structure for the Signup component
  return (
    <div>

      {/* Create a form with input fields */}
      <div className='row justify-content-center mt-3'>
        {/* Display the heading with the specified inline style */}
        <div className='text-center ' style={headingStyle}>
          Registration Form
        </div>
        <div className='col-6'>
          <form onSubmit={(e) => signup(e)} >
            {/* First name input */}
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input type="text" value={firstName} onChange={(ev) => setFirstName(ev.target.value)} className="form-control" id="firstName" />
            </div>
            {/* Last name input */}
            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input type="text" value={lastName} onChange={(ev) => setLastName(ev.target.value)} className="form-control" id="lastName" />
            </div>
            {/* Email input */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" value={email} onChange={(ev) => setEmail(ev.target.value)} className="form-control" id="email" />
            </div>
            {/* Password input */}
            <div className="form-group mt-2 mb-3">
              <label htmlFor="password">Password</label>
              <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} className="form-control" id="password" />
            </div>
            {/* Submit button */}
            <div className='mt-3 d-grid'>
              <button type="submit" className="btn btn-primary xl btn-block">Submit</button>
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
  );
}

// Export the Signup component as the default export
export default Signup;
