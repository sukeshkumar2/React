
const parent = newFunction()


const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);
root.render(parent);

function newFunction() {
    return React.createElement("div", { id: "parent" },
            [
                React.createElement("div", { id: "child1" },
                [
                    React.createElement("h1", { id: "heading" }, "Hello from React h1"),React.createElement("h2", { id: "heading2" }, "Hello from React h2")]),
            React.createElement("div", { id: "child2" },[React.createElement("h1", { id: "heading" }, "Hello from React h1"),React.createElement("h2", { id: "heading2" }, "Hello from React h2")])])
}
