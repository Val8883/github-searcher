import React, {useState, useContext, useReducer} from 'react';
import GithubContext, {actionTypes} from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';


function UserSearch() {
  const [text, setText] = useState('');
  const {users, searchUsers, clearUsers} = useContext(GithubContext);
  const {setAlert} = useContext(AlertContext);

  const handleChange = ({target: {value}}) => setText(value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      setAlert('Please enter something', 'error');
    } else {
      searchUsers(text);
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 ld:grid-cols-2 md: grid-cols-1 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                onChange={handleChange}
                value={text}
              />
              <button className="absolute top-0 right-0 rounded-l-none w-15 btn btn-lg" type="submit">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users?.length > 0 &&
        <div>
          <button className="btn btn-ghost btn-large" onClick={clearUsers}>
            Clear
          </button>
        </div>}


    </div>
  );
}

export default UserSearch;