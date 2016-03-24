import React, { Component } from 'react';
import UserData from './UserData';

export default class UserList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const userData = this.props.userData;
    let userRows = [];

    if(userData) {
      userData.map((user) => {
        userRows.push(<UserData user={user} key={user.get('id')} />);
      });
    }

    const isDataLoaded = this.props.savedUserData;
    const loading = <span>Loading...</span>;

    return isDataLoaded? (
      <table className="user-list table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userRows}
        </tbody>
      </table>
    ) : (loading);
  }
}
