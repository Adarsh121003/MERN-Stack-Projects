// Import the necessary React library
import React from 'react';

// Define the Top5sales component using a function declaration
function Top5sales() {
    // Define inline styles for the heading using google fonts
    const headingStyle = {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '26px',
        fontWeight: 700,
    };

    // Return the JSX structure for the Top5sales component
    return (
        <div>


            {/* Create a table to display top 5 sales */}
            <div className='row justify-content-center mt-3 '>
                {/* Display the heading with the specified inline style */}
                <div className='text-center mt-3 ' style={headingStyle}>
                    Top 5 Sales
                </div>
                <div className='col-8'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Sale id:</th>
                                <th scope="col">Product Name:</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {/* Row 1 */}
                            <tr>
                                <th scope="row">1</th>
                                <td>S1212</td>
                                <td>Laptop</td>
                                <td>3</td>
                                <td>9500</td>
                            </tr>
                            {/* Row 2 */}
                            <tr>
                                <th scope="row">2</th>
                                <td>S1313</td>
                                <td>Mobile</td>
                                <td>2</td>
                                <td>8000</td>
                            </tr>

                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

// Export the Top5sales component as the default export
export default Top5sales;
