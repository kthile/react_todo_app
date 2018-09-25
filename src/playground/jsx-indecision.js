//uncompiled by babel
console.log("app.js is running");
const appRoot = document.getElementById("app"); // <div id="app">

let app = {
  title: "Indecision App",
  subTitle: "Let the app decide for you",
  options: []
};
const onFormSubmit = e => {
  e.preventDefault(); //prevents full page refresh
  const option = e.target.elements.myOption.value; // grabs value from myOption input field
  if (option) {
    app.options.push(option); //push value from myOption to app.options array
    e.target.elements.myOption.value = ""; // sets textfield to empty
    renderTemplate();
  }
};
const onReset = () => {
  app.options = [];
  renderTemplate();
};
const onMakeDecision = () => {
  const rand = Math.floor(Math.random() * app.options.length);
  const decision = app.options[rand];
  alert(decision);
};

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>Subtitle: {app.subTitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
      <button
        disabled={app.options.length > 0 ? false : true}
        onClick={onMakeDecision}
      >
        What Should I Do?
      </button>
      <button onClick={onReset}>Remove All</button>
      <ol>
        {/*Map over app.options to return a list of options*/}
        {app.options.map(option => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="myOption" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot); //what are we rendering? where are we rendering?
};
renderTemplate();
