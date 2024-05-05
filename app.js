import React from "react";
import ReactDOM from "react-dom/client";

//----------------------Igniting Our App------------------------

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "This is NamasteReact 🚀"),
//     React.createElement("h2", {}, "hello jii"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm h1 tag"),
//     React.createElement("h2", {}, "I'm h2 tag"),
//   ]),
// ]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React!"
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

//-------------------Laying the foundation--------------------

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );

//JSX --> It is not HTML in JS(It is a HTML like Syntax)!

//JSX => transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

// const jsxHeading = (
//   <h1 className="head" tabIndex="5">
//     Namaste React using JSX 🚀
//   </h1>
// );

//React Component

// 1-> React Functional Components

// const HeadingComponent = () => {
//   return <h1 className="heading">Namaste React Functional Components</h1>;
// };

//Without Using Return Statement

// const Title = () => (
//   <h1 className="head" tabIndex="5">
//     Namaste React using JSX 🚀
//   </h1>
// );

//Component Compostion

// const HeadingComponent = () => (
//   <div id="container">
//     <Title/>
//     <h1 className="heading">Namaste React Functional Components 😍</h1>
//   </div>
// );

//Putting React element inside React Component

// const title = (
//   <h1 className="head" tabIndex="5">
//     Namaste React using JSX 🚀
//   </h1>
// );

// const HeadingComponent = () => (
//   <div id="container">
//     {title}
//     <h1 className="heading">Namaste React Functional Components 😍</h1>
//   </div>
// );

// Putting React element inside React element

// const ele = <span>React Element</span>;

// const title = (
//   <h1 className="head" tabIndex="5">
//     {ele}
//     Namaste React using JSX 🚀
//   </h1>
// );

// const HeadingComponent = () => (
//   <div id="container">
//     {title}
//     <h1 className="heading">Namaste React Functional Components 😍</h1>
//   </div>
// );

// Putting React Component inside React element

const ele = <span>React Element</span>;

const HeadingComponent = () => (
  <h1 className="heading">Namaste React Functional Components 😍</h1>
);

const title = (
  <h1 className="head" tabIndex="5">
    {ele}
    Namaste React using JSX 🚀
    <HeadingComponent />
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// root.render(<HeadingComponent />);

root.render(title);
