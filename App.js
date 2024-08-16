import React from "react";
import ReactDOM from "react-dom/client";


// React Element

const heading = React.createElement("h1",{id: "heading"},"Namaste React 🚀");

const elem = <span>React Element</span>;

const jsxHeading = (<h1 className="head">
    {elem}
    Namaste React using JSX</h1>);

const HeadingComponent = () => {
    return <h1>First Functional Component</h1>;
};

const number = 10000;
const HeadingComponent2 = () => (
    <div id="container">
        <HeadingComponent/>
        {number}
        {jsxHeading}
        {HeadingComponent()}
        <h2>{100+200}</h2>
     <h1 className="heading">Second Functional Component</h1>
     </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);