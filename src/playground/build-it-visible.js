console.log("running");

class Visible extends React.Component {
  constructor(props) {
    super(props);
    //bind methods
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    //set state
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility == false ? "Show Details" : "Hide Details"}
        </button>
        <p>{this.state.visibility == true ? "I'm the details" : ""} </p>
      </div>
    );
  }
}

ReactDOM.render(<Visible />, document.getElementById("app"));

/*console.log("build-it is running");
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
render();*/
