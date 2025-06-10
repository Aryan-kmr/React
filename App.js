/**
 * <div id = "parent">
 *   <div id = "child">
 *     <h1>I'm an h1 tag</h1>
 *     <h2>I'm an h2 tag</h2>
 * </div>
 * </div>
 * 
 * ReactElement(objebct) => HTML(Browser understands)
*/

// This is a simple React application that renders a heading element
// using React.createElement and ReactDOM.createRoot.


const parent = React.createElement("div",{ id: "parent" },
        React.createElement("div",
                { id: "child" }, [
                React.createElement("h1", {}, "I'm an h1 tag"),
                React.createElement("h2", {}, "I'm an h2 tag"),
        ]),
        React.createElement("div",
                { id: "child2" }, [
                React.createElement("h1", {}, "I'm an h1 tag"),
                React.createElement("h2", {}, "I'm an h2 tag"),
        ])
);

//for multiple childs like multiple head use Array[].

//JSX



/**  const heading = React.createElement("h1", 
        {id: "heading", xyz: "xyz"}, 
        "Hello World from React!");*/



console.log(parent); //return Object not h1 tag.in bracket id mentioned.

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);

