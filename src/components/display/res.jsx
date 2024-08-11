import React from 'react';

const DisplayObject = ({ data }) => {
    // Recursive function to display nested objects, arrays, and primitive types
    const renderObject = (value) => {
        if (typeof value === 'object' && value !== null) {
            if (Array.isArray(value)) {
                // Handle array by mapping over its elements
                return (
                    <div style={{ marginLeft: '20px' }}>
                        <strong>Array:</strong>
                        {value.map((item, index) => (
                            <div key={index} style={{ marginLeft: '20px' }}>
                                {renderObject(item)}
                            </div>
                        ))}
                    </div>
                );
            } else {
                // Handle object by iterating over its key-value pairs
                return Object.entries(value).map(([key, val]) => (
                    <div key={key} style={{ marginLeft: '20px' }}>
                        <strong>{key}:</strong>
                        {renderObject(val)}
                    </div>
                ));
            }
        } else if (typeof value === 'string') {
            // Handle string
            return <div style={{ marginLeft: '20px' }}>"{value}"</div>;
        } else if (typeof value === 'number' || typeof value === 'boolean') {
            // Handle numbers and booleans
            return <div style={{ marginLeft: '20px' }}>{value.toString()}</div>;
        } else {
            // Handle other primitive types (null, undefined, etc.)
            return <div style={{ marginLeft: '20px' }}>{String(value)}</div>;
        }
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h3>Data Details</h3>
            {renderObject(data)}
        </div>
    );
};

export default DisplayObject;
