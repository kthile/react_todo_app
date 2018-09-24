"use strict";

//uncompiled by babel
console.log("app.js is running");
var appRoot = document.getElementById("app");

var app = {
  title: "Indecision App",
  subTitle: "Let the app decide for you",
  options: []
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault(); //prevents full page refresh
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = " "; // sets textfield to empty
    renderTemplate();
  }
};
var onReset = function onReset() {
  app.options = [];
  renderTemplate();
};

var renderTemplate = function renderTemplate() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subTitle && React.createElement(
      "p",
      null,
      "Subtitle: ",
      app.subTitle
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Here are your options" : "No Options"
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: onReset },
      "Remove All"
    ),
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        "test"
      ),
      React.createElement(
        "li",
        null,
        "test"
      ),
      React.createElement(
        "li",
        null,
        "test"
      )
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  ReactDOM.render(template, appRoot); //what are we rendering? where are we rendering?
};
renderTemplate();
