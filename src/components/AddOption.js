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
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="myOption" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

export { AddOption as default };
