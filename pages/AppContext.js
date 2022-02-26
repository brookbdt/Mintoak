import React, { createContext, Component } from "react";

export const AppContext = createContext();

export default class AppContextProvider extends Component {
  state = {};

  setStore = (value) => {
    this.setState(value);
  };

  render() {
    return <AppContext.Provider value={{ store: this.state, setStore: this.setStore }}>{this.props.children}</AppContext.Provider>;
  }
}
