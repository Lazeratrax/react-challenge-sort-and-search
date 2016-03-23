import React, { Component } from 'react';
import Button from './components/Button';
import UserList from './components/UserList';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: []
    };

    this.getData();
  }

  getData() {
    $.ajax({
      url: '/data.json',
			type: 'GET',
			contentType: 'application/json',
			json: true,
			success: (data) => {
        this.setState({
          userData: data
        });
			},
			error: (error) => {
				console.error(error);
			}
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
