console.log("running");

class Counter extends React.Component {
  constructor(props) {
    super(props);
    //bind the methods
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    //setting the state
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    console.log("component did mount");
    const json = localStorage.getItem("count"); //grab count from localstorage
    const count = parseInt(json, 10); //parse it to an int
    try {
      if (!isNaN(count)) {
        // if count is a number then run update to count
        this.setState(() => ({ count: count }));
      }
    } catch (e) {
      console.log(e);
    }
    console.log(count);
  }

  componentDidUpdate(prevState, prevProps) {
    console.log("component did update");
    if (prevState.count !== this.state.count) {
      const json = JSON.stringify(this.state.count); //convert to JSON
      localStorage.setItem("count", json); //save data to localstorage when data changes
    }
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
    console.log(this.state);
  }
  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
    console.log(this.state);
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  //count: 0
};

ReactDOM.render(<Counter />, document.getElementById("app"));

/*let count = 0;
const addOne = () => {
  count++;
  renderCounterApp(); //technique to re-render for every click
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const renderCounterApp = () => {
  //function that wraps in order to re-render
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();*/
