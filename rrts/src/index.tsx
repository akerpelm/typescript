import React, { Component } from 'react';

import ReactDom from 'react-dom';

class App extends Component {
  render() {
    return <div>Hi There</div>;
  }
}

ReactDom.render(<App />, document.querySelector('#root'));
