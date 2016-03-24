import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null
    };
  }

  componentWillMount() {
    fetch('./data.json')
      .then((response) => {
        return response.json();
      }).then((json) => {
        this.setState({
          userData: json
        });
      }).catch((ex) => {
        console.log('parsing failed', ex);
      });
  }

  render() {
    return (
      <div className="container app">
        <SearchBar />
        <UserList userData={this.state.userData} />
      </div>
    );
  }
}
