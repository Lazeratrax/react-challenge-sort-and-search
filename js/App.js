import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredData: null,
      data: null
    };
  }

  componentWillMount() {
    fetch('./data.json')
      .then((response) => {
        return response.json();
      }).then((json) => {
        this.setState({
          filteredData: Immutable.fromJS(json),
          data: Immutable.fromJS(json)
        });
      }).catch((ex) => {
        console.log('parsing failed', ex);
      });
  }

  onKeyUp(value) {
    const filter = x => x.get('name').toLowerCase().includes(value.toLowerCase());
    this.setState({
      filteredData: this.state.data.filter(filter)
    });
  }

  render() {
    return (
      <div className="container app">
        <SearchBar onKeyUp={this.onKeyUp.bind(this)} />
        <UserList isDataLoaded={!!this.state.data} userData={this.state.filteredData} />
      </div>
    );
  }
}
