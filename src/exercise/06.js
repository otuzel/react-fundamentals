// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef();
  // Extra Credit 2:
  // const [error, setError] = React.useState();
  // Extra Credit 3:
  const [username, setUsername] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // console.log(event);
    console.dir(event.target);
    // console.dir(event.target);
    // onSubmitUsername(event.target.elements.usernameInput.value);
    // Extra Credit 1:
    //onSubmitUsername(inputRef.current.value);
    // Extra Credit 2:
    // if (!error) {
    //   onSubmitUsername(inputRef.current.value);
    // }
    // Extra Credit 3:
  };

  const handleChange = event => {
    // Extra Credit 2:
    // const isValid = event.target.value === event.target.value.toLowerCase();
    // setError(isValid ? null : 'Username must be lower case');

    // Extra Credit 3:
    setUsername(event.target.value.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={inputRef}
          id="usernameInput"
          name="usernameInput"
          onChange={handleChange}
          type="text"
          value={username}
        />
      </div>
      {/* <div style={{color: 'red'}} role="alert">
        {error}
      </div> */}
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
