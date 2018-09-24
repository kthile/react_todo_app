//uncompiled by babel
console.log("app.js is running");
const appRoot = document.getElementById("app");

let app = {
  title: "Indecision App",
  subTitle: "Let the app decide for you",
  options: []
};
const onFormSubmit = e => {
  e.preventDefault(); //prevents full page refresh
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = " "; // sets textfield to empty
    renderTemplate();
  }
};
const onReset = () => {
  app.options = [];
  renderTemplate();
};

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>Subtitle: {app.subTitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
      <p>{app.options.length}</p>
      <button onClick={onReset}>Remove All</button>
      <ul>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot); //what are we rendering? where are we rendering?
};
renderTemplate();
