import logo from './logo.svg';
import './App.css';
import { USER_OPTIONS } from './mockData/users';
import Select from './components/Select';
import { useState } from 'react';

function App() {
  const [selectedUser, setSelectedUser] = useState()
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <main className="main">
        <div className="select">
          <p className="selected-text">{selectedUser ? `${selectedUser.label} is selected!` : ''}</p>
          <Select options={USER_OPTIONS} onChange={(value) => setSelectedUser(value)}/>
        </div>
    </main>
    </div>
  );
}

export default App;
