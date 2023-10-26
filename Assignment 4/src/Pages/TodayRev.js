// Import the necessary React library
import React from 'react';

// Define the TodayRev component using a function declaration
function TodayRev() {
    // Define inline styles for the heading using google fonts
    const headingStyle = {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '26px',
        fontWeight: 700,
    };

    // Return the JSX structure for the TodayRev component
    return (
        <div>
            {/* Display the heading with the specified inline style */}
            <div className='text-center mt-5' style={headingStyle}>
                Today's Revenue Is 175000
            </div>
        </div>
    );
}

// Export the TodayRev component as the default export
export default TodayRev;
