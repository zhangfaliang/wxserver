import React, { Component } from 'react'
import styles from "./style.css";
import ButtonExample from './components/example';
class App extends Component { 
  render() { 
    console.log(styles,'555555555');
    
    return (
      <div>
        <h5 className={styles.hello}>jksjrg</h5>
       <ButtonExample></ButtonExample>
      </div>
    )
  }
}

export default App;