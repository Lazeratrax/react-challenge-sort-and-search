import React, { Component } from 'react';

export default class UserData extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const userData = this.props.user;

    return (
      <tr>
        <td>
          <img src={"images/"+userData.image+".svg"} className="user-image" />
        </td>
        <td>{userData.name}</td>
        <td>{userData.age}</td>
        <td>{userData.phone}</td>
      </tr>
    );
  }
}
