import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <h1>Our Services</h1>
            <ul>
                <li><Link to="design">Design</Link></li>
                <li><Link to="development">Development</Link></li>
                <li><Link to="ai-solutions">AI Solutions</Link></li>
            </ul>
            {/* Nested route will render here */}
            <Outlet />
        </div>
    );
};

export default Services;