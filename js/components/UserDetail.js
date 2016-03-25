import React, { Component } from 'react';

export default class UserDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const UserDetail = this.props.activeUser;

    const detailMarkup = !UserDetail? (
      <h3>Nothing found :(</h3>
    ) : (
      <div className="thumbnail">
        <img src={`images/${UserDetail.get('image')}.svg`} />
        <div className="thumbnail-caption">
          <h3>{UserDetail.get('name')}</h3>
          <table className="user-info table table-responsive">
            <tbody>
              <tr>
                <td>Age:</td>
                <td>{UserDetail.get('age')}</td>
              </tr>
              <tr>
                <td>Favorite animal:</td>
                <td>{UserDetail.get('image')}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{UserDetail.get('phone')}</td>
              </tr>
            </tbody>
          </table>
          <p>
            <b>Favorite phrase:</b><br />
            {UserDetail.get('phrase')}
          </p>
        </div>
      </div>
    );

    const loading = <span></span>;

    return this.props.isFetching? loading: detailMarkup;
  }
}
