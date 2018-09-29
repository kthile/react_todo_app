import React from "react";

class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = e => {
    e.preventDefault();
    const option = e.target.elements.myOption.value.trim();
    //grab info from input field, set to var and trim whitespaces
    const error = this.props.handleAddOption(option);
    this.setState(() => ({
      error: error
    }));
    if (!error) {
      e.target.elements.myOption.value = "";
    } else {
    }
  };
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

export { AddOption as default };
