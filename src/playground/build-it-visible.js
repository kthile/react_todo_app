console.log("build-it is running");
const appRoot = document.getElementById("app");

let details = "Some detail";
let visibility = false;

const isVisible = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={isVisible}>
        {visibility ? "Hide Details" : "Show Details"}
      </button>
      <p> {visibility ? details : ""} </p>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
render();
