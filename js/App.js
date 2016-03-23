import React, { Component } from 'react';
import UserList from './components/UserList';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null
    };

    this.getData();
  }

  getData() {
    fetch('./data.json')
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({
          userData: json
        });
      }).catch((ex) => {
        console.log('parsing failed', ex)
      });
  }

  render() {
    return (
      <div className="container app">
        <UserList userData={this.state.userData} />
      </div>
    );
  }
}
