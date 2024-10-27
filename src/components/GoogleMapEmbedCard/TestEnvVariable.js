import React, { useEffect } from 'react';

const TestEnvVariable = () => {
    useEffect(() => {
        console.log("Google API Key:", process.env.REACT_APP_GOOGLE_KEY);
    }, []);

    return (
        <div>
            <h1>Check the Console for the Google API Key</h1>
        </div>
    );
};

export default TestEnvVariable;
