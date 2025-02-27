import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Teachers from "./teachers";
import Students from "./students";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap/nav";




function App() {
    return (
        
        <Router>
            <nav className="bg-body-tertiary">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/teachers">Teachers</Link></li>
                    <li><Link to="/students">Students</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/students" element={<Students />} />
            </Routes>
        </Router>
    );
    
}


export default App;
