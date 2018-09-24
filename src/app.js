//uncompiled by babel
console.log("app.js is running");

let app = {
  title: "Indecision App",
  subTitle: "Let the app decide for you",
  options: ["Option One", "Option Two"]
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>Subtitle: {app.subTitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
    <ul>
      <li>test</li>
      <li>test</li>
      <li>test</li>
    </ul>
  </div>
);

let user = {
  name: "Andrew",
  age: "26",
  location: "New York"
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } else {
    return undefined;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : "No name"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");

//render(JSX, Element)
ReactDOM.render(template, appRoot);
//ReactDOM.render(templateTwo, appRoot);
