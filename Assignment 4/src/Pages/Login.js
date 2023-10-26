// Import the necessary React library
import React from 'react';

// Define the Login component using an arrow function
const Login = () => {
    // Define inline styles for the heading using google fonts
    const headingStyle = {
        fontFamily: 'Oswald, sans-serif',
        fontSize: '28px',
        fontWeight: 700,
    };

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
                    <form>
                        {/* Email input */}
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        {/* Password input */}
                        <div className="form-group mt-2 mb-3">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        {/* Submit button */}
                        <div className='mt-3 d-grid'>
                            <button type="submit" className="btn btn-primary xl btn-block">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

// Export the Login component as the default export
export default Login;
