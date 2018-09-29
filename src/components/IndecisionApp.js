import React from "react";
import AddOption from "./AddOption.js";
import Options from "./Options.js";
import Header from "./Header.js";
import Action from "./Action.js";
import OptionModal from "./OptionModal.js";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };
  handleCloseModal = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };
  handleAddOption = option => {
    if (!option) {
      return "Enter valid value";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    } else {
      this.setState(prevState => ({
        options: prevState.options.concat([option])
      }));
    }
  };
  handlePick = () => {
    const rand = Math.floor(Math.random() * this.state.options.length);
    const decision = this.state.options[rand];
    this.setState(() => ({
      selectedOption: decision
    }));
  };
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
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}
