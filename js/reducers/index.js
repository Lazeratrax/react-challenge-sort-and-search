import * as types from '../constants/ActionTypes';
import { INITIAL_STATE } from '../constants/InitialState';

export default function searchlist(state = INITIAL_STATE, action) {

  switch (action.type) {

    case types.ADD_FILTER:
      return {
        ...state
      }

    case types.SEARCH_TEXT:
      const filter = x => x.get('name').toLowerCase().includes(action.text.toLowerCase());
      const filteredData = state.data.filter(filter);
      return {
        ...state,
        filteredData,
        activeUser: filteredData.get(0)
      }

    case types.CHANGE_ACTIVE:
      return {
        ...state,
        activeUser: state.data.get(action.id)
      }

    case types.RECEIVE_USERS:
      return {
        ...state,
        filteredData: action.data,
        data: action.data,
        activeUser: action.data.get(0),
        isFetching: false
      }

    default:
      return state;
  }
}
