import React, {createContext, useReducer} from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext(null);

const GITHUB_TOKEN = process.env.REACT_APP_GH_TOKEN;
const GITHUB_URL = process.env.REACT_APP_GH_URL;

export const actionTypes = {
  SET_USERS: 'SET_USERS',
  SET_LOADING: 'SET_LOADING',
  CLEAR_USERS: 'CLEAR_USERS',
};

export const GithubProvider = ({children}) => {
  const initialState = {
    users: [], loading: true,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const {items} = await res.json();

    dispatch({
      type: actionTypes.SET_USERS,
      payload: items,
    });
  };

  const setLoading = () => dispatch({type: actionTypes.SET_LOADING});
  const clearUsers = () => dispatch({type: actionTypes.CLEAR_USERS});
  const {loading, users} = state;
  return (<GithubContext.Provider value={{users, loading, searchUsers, clearUsers}}>
    {children}
  </GithubContext.Provider>);
};

export default GithubContext;


