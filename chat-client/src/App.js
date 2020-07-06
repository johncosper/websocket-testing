import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    }

    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {

    this.socket = io('http://localhost:5000')
    this.socket.on('message', (message) => {
      this.setState({ messages : [message, ...this.state.messages] })
    })
  }

  sendMessage(event) {

    const body = event.target.value;

    if (event.keyCode === 13 && body) {
      event.preventDefault();
      event.currentTarget.value = "";
      let message = {
        body: body,
        from: 'me'
      }

      console.log('here', message)
      this.setState({ messages : [message, ...this.state.messages] })
      this.socket.emit('message', message)
    }
  }

  render() {
    return (
      <div className='App'>
              <input type="text" placeholder="enter a message" onKeyUp={this.sendMessage} className="form-control"></input>
                {this.state.messages.map((message) => {
                  return (<p>{message.from} : {message.body}</p>)
                })}
      </div>
    );
  };

}

export default App;
