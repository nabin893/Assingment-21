import React from 'react';
import { Link } from 'react-router-dom';

const Error1 = () => {
    return (
        <div>
            <h1>this error page</h1>
            <h1>go back <Link to='/'>Home</Link></h1>
        </div>
    );
};

export default Error1;