import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id: "parent"},
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I'm a dev h1 tag"),
    React.createElement("h2",{},"Hello I'm a h2 tag")
])
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);