// Import the necessary React library
import React from 'react';

// Define the Signup component using a function declaration
function Signup() {
  // Define inline styles for the heading using google fonts
  const headingStyle = {
    fontFamily: 'Oswald, sans-serif',
    fontSize: '28px',
    fontWeight: 700,
  };

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
          <form>
            {/* First name input */}
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input type="text" className="form-control" id="firstName" />
            </div>
            {/* Last name input */}
            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input type="text" className="form-control" id="lastName" />
            </div>
            {/* Email input */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            {/* Password input */}
            <div className="form-group mt-2 mb-3">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            {/* Submit button */}
            <div className='mt-3 d-grid'>
              <button type="submit" className="btn btn-primary xl btn-block">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Export the Signup component as the default export
export default Signup;
