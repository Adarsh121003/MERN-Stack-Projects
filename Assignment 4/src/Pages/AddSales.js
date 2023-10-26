// Import the necessary React library
import React from 'react';

// Define the AddSales component using a function declaration
function AddSales() {
    // Define inline styles for the heading
    const headingStyle = {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '26px',
        fontWeight: 700,
    };

    // Return the JSX structure for the AddSales component
    return (
        <div>

            {/* Create a form with input fields */}
            <div className='row justify-content-center mt-3'>
                {/* Display the heading with the specified inline style */}
                <div className=' text-center' style={headingStyle}>
                    Add Sale Entry
                </div>
                <div className='col-6'>
                    <form>
                        {/* Product Name input */}
                        <div className="form-group">
                            <label htmlFor="productName">Product Name</label>
                            <input type="text" className="form-control" id="productName" />
                        </div>
                        {/* Quantity input */}
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" className="form-control" id="quantity" />
                            {/* For Quantity and Amount, allow numbers only */}
                        </div>
                        {/* Amount input */}
                        <div className="form-group">
                            <label htmlFor="amount">Amount</label>
                            <input type="number" className="form-control" id="amount" />
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

// Export the AddSales component as the default export
export default AddSales;
