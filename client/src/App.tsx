import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    response: ''
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({response: res.message}))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>{this.state.response}</p>
        </header>
      </div>
    );
  }

  callApi = async () => {
    console.log("start");
    const res = await fetch('/api');
    console.log(res);
    const body = await res.json();
    console.log(body);
    if (res.status !== 200)
      throw Error(body.message);
    return body;
  }
}

export default App;
