import React from "react";
import ReactDOM from "react-dom/client";

//JSX, html like syntax, transpiled before it reaches JS- Parcel - bable
// react element
// const heading = <h1 className="head">Hello world using jsx</h1>;

const Title = () => {
 return (<h1 className="head">
    Hello world, this is title
  </h1>)
}

const AnotherP = () => {
  return (
    <p>This is a paragraph</p>
  );
}



// React Components
// Class based components
// Functional components - NEWER way
// what is a react functional component, a JS function that returns some JSX

// Component composition
const HeadingComponent = () => {
 return (<div id="container">
      <Title/>
      <h1 className="heading">Hello React Functional Component</h1>
      <AnotherP/>
  </div>  
);
};

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent/>);

