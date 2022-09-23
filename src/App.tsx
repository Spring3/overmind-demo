import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useOvermindActions, useOvermindState } from './store';

function App() {
  const state = useOvermindState();
  const actions = useOvermindActions();

  useEffect(() => {
    const releases = actions.release.getMany({ status: 'active' });
  }, [])

  console.log(state.release.list);
  console.log(state.release.byId);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
