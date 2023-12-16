import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS) - parcel - babel (transpiler)
//JSX => React.createEelement => reactelement- JS Object => Html Element(render)
const jsxHeading = <h1 id="heading">Namaste React Using JSX 🚀</h1>
const Title = ()=>(
    <h1 className="head" tabIndex="5">
        Namaste React Using JSX
    </h1>
);
const HeadingComponent = ()=>(
    <div id="container">
        {Title()}
        <Title />
        <Title></Title>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);