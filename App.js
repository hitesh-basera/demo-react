import React from "react";
import ReactDOM from "react-dom/client";
import logoPhoto from './assets/logo_app.jpg';

/**
 * Header
 *  - Logo
 *  - Nav Items - Home, About
 * Body
 *  - Search Bar
 *  - Resteraunt Card Container
 *   - Restaurant Card
 * Footer
 *  - Copyright
 *  - Contact Us, links etc
 * 
 */
//function compononet a javascript function return a peice of JSX code
const Header = ()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img src={logoPhoto} className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
                </div>
        </div>
    );
    };
    
const AppLayout =()=>{
return (
    <div className="app">
    <Header />
    </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);