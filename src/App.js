import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      data : null,
      newData : ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    database.ref().on("value", (snapshot) => {
      this.setState({
        data: snapshot.val()
      });
    });
  }

  handleChange(event){
    let newData = event.target.value;

    this.setState({newData});
  }

  handleSubmit(event){
    event.preventDefault();

    //database.ref().child("AmazingNewData").set(this.state.newData);
    database.ref().child("AmazingNewData").push(this.state.newData);
  }
 
  render() {
    return (
      <div className="App">
        <div className="App--header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App--data">
          {JSON.stringify(this.state.data, null, 2)}
        </pre>

        <form className="app--form" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;
