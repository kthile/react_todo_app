class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }
  componentDidMount() {
    const json = localStorage.getItem("options");
    const options = JSON.parse(json);
    console.log("fetching data");
    try {
      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
      console.log(e);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.options.length !== prevState.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json); //save data to localstorage when data changes
      console.log("saving data");
    }
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }
  handleAddOption(option) {
    if (!option) {
      return "Enter valid value";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    } else {
      this.setState(prevState => ({
        options: prevState.options.concat([option])
      }));
    }
  }
  handlePick() {
    const rand = Math.floor(Math.random() * this.state.options.length);
    const decision = this.state.options[rand];
    return console.log(decision);
  }
  render() {
    const subTitle = "Put your life in the hands of a computer.";

    return (
      <div>
        <Header subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

/*stateless funcitonal component
advantages: faster than class-based, best used for simple presentation
class-based component
advantages: access to the state, better for complex tasks */
IndecisionApp.defaultProps = {
  //options: []
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subTitle ? props.subTitle : undefined}</h2>
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision App"
};

const Action = props => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions} //disable if it does not have an option
      >
        What should I do?
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length == 0 && <p>Please add an option to get started</p>}
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

const Option = props => {
  return (
    <div>
      {props.optionText}
      <button onClick={e => props.handleDeleteOption(props.optionText)}>
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.myOption.value.trim();
    //grab info from input field, set to var and trim whitespaces
    const error = this.props.handleAddOption(option);
    this.setState(() => ({
      error: error
    }));
    if(!error){
      e.target.elements.myOption.value = '';
    }else{

    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="myOption" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

//Class based components vs Stateless functional

/*class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}
class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions} //disable if it does not have an option
        >
          What should I do?
        </button>
      </div>
    );
  }
}
class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}*/

/*
const User = (props) => {
  return (
    <div>
      <p>Name: {props.name} </p>
      <p>Age: {props.age}</p>
    </div>
  );
};
*/

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
