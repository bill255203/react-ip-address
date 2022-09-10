import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };
  return (
    <div className='App'>
      <h1 className='title'>IP address tracker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter IP:
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type='submit' value='submit' />
      </form>
      <div className='information'>
        <div className='info'></div>
        <div className='info'></div>
        <div className='info'></div>
        <div className='info'></div>
      </div>
    </div>
  );
}

export default App;
