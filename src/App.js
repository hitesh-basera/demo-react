import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
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
const styleCard= {
    backgroundColor: "#f0f0f0"
}
//Config driven data - data comes from backend based on configuration

const AppLayout =()=>{
return (
    <div className="app">
    <Header />
    <Body />
    </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);