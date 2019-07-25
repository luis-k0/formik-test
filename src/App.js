import React, { Component } from 'react';
import Form from './components/Form';
// import Basic from './components/Form';
import Message from './components/Message';

class App extends Component {
  state = {
    message: '',
    teste: 1
  };

  handleValidate = msg => {
    console.log('msg', msg);
    this.setState({ message: JSON.stringify(msg) });
    console.log('state', this.state);
  };

  render() {
    return (
      <div>
        <Form onValidate={this.handleValidate} />
        {/* <Basic /> */}
        <Message msg={this.state.message} />
      </div>
    );
  }
}

export default App;
