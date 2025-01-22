import React from "react";
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I'm h1 tag, hihi"),
      React.createElement("h2", {}, "I'm h2 tag"),
    ])
  );
  
  //  // Create a React element, created h1 tag
  //  const heading = React.createElement(
  //     "h1",
  //     {id:"heading"},
  //      "Hello World from react"
  //     );
  
  //     console.log(heading); // object
  console.log(parent); // object
  
  //creating a root, job of react dom
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  // Render the React element (heading) into the "root" div
  //  root.render(heading);
  root.render(parent);
  