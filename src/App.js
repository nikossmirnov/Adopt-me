const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "brand" }, "adopt me"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "hucky",
    }),
    React.createElement(Pet, {
      name: "Muna",
      animal: "dog",
      breed: "hucky",
    }),
    React.createElement(Pet, {
      name: "Puna",
      animal: "dog",
      breed: "hucky",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
