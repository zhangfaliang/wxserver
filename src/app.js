import React, { Component } from "react";
import styles from "./style.css";
import ButtonExample from "./components/example";
import { browserHistory } from "react-router";
class App extends Component {
  render() {
    return (
      <div>
        <ButtonExample />
      </div>
    );
  }
}

export default App;
