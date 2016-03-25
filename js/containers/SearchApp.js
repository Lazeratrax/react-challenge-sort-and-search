import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as SearchActions from '../actions/SearchActions';
import { SearchBar, UserTable, UserDetail } from '../components';
import { searchText, changeActive } from '../actions/SearchActions';

class SearchApp extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  onKeyUp(value) {
    this.store.dispatch(searchText(value));
  }

  activeUserChanged(id) {
    this.store.dispatch(changeActive(id));
  }

  render () {
    const state = this.store.getState();

    return (
      <div className="app container-fluid">
        <SearchBar onKeyUp={this.onKeyUp.bind(this)} />

        <div className="row">
          <div className="col-sm-4 col-md-3 col-lg-2">
            <UserDetail isFetching={state.isFetching} activeUser={state.activeUser} />
          </div>
          <div className="col-sm-8 col-md-9 col-lg-10">
            <UserTable
              isFetching={state.isFetching}
              userData={state.filteredData}
              activeUserChanged={this.activeUserChanged.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}



function mapState(state) {
  return state;
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(SearchActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(SearchApp);
