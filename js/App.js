import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null,
      savedUserData: null
    };
  }

  componentWillMount() {
    fetch('./data.json')
      .then((response) => {
        return response.json();
      }).then((json) => {
        this.setState({
          savedUserData: Immutable.fromJS(json),
          userData: Immutable.fromJS(json)
        });
      }).catch((ex) => {
        console.log('parsing failed', ex);
      });
  }

  onKeyUp(value) {
    const filter = x => x.get('name').toLowerCase().includes(value.toLowerCase());
    this.setState({
      userData: this.state.savedUserData.filter(filter)
    });
  }

  render() {
    return (
      <div className="container app">
        <SearchBar onKeyUp={this.onKeyUp.bind(this)} />
        <UserList savedUserData={this.state.savedUserData} userData={this.state.userData} />
      </div>
    );
  }
}
