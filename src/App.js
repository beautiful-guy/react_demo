import React, { Component } from 'react';
import {Button} from 'antd';
import './test.less';
class App extends Component {
  render() {
    return (
      <div className="App">
          {this.props.children}
      </div>
    );
  }
}
export default App;
