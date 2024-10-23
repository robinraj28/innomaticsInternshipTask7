import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />}>
                        <Route path=":serviceId" element={<ServiceDetail />} />
                    </Route>
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;