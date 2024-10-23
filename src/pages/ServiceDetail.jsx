import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();

    const serviceDetails = {
        design: 'We offer innovative and user-centric design solutions.',
        development: 'Our development team builds robust web and mobile applications.',
        'ai-solutions': 'We provided AI-powered solutions to automate and optimize your business processes.'
    };

    return (
        <div>
            <h2>{serviceId.charAt(0).toUpperCase() + serviceId.slice(1)} Service</h2>
            <p>{serviceDetails[serviceId]}</p>
        </div>
    );
};

export default ServiceDetail;