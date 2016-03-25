import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as SearchActions from '../actions/SearchActions';
import { SearchBar, UserList } from '../components';
import { searchText } from '../actions/SearchActions';

class SearchApp extends Component {
  constructor(props) {
    super(props);
  }

  onKeyUp(value) {
    const store = this.props.store;
    store.dispatch(searchText(value));
  }

  render () {
    const store = this.props.store;
    const state = store.getState();

    return (
      <div className="container app">
        <SearchBar onKeyUp={this.onKeyUp.bind(this)} />
        <UserList isFetching={state.isFetching} userData={state.filteredData} />
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
