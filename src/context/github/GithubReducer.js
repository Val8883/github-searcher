import {actionTypes} from './GithubContext';

const githubReducer = (state, {type, payload}) => {
  switch (type) {
    case actionTypes.SET_USERS:
      return {...state, users: payload, loading: false};
    case actionTypes.SET_LOADING:
      return {...state, loading: true}
    case actionTypes.CLEAR_USERS:
      return {...state, users: []}
    default:
      return state;
  }
};

export default githubReducer;