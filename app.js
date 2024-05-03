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

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

//JSX --> It is not HTML in JS(It is a HTML like Syntax)!
const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
