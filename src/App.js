import { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('');
  const [ip, setIp] = useState('');
  const [location, setLocation] = useState([]);
  const [isp, setIsp] = useState('');
  useEffect(() => {
    const url = `https://geo.ipify.org/api/v2/country?apiKey=at_KZyspMc5zCFbRiv8DcQ4ZLu9nRFrY&ipAddress=${ip}`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setIp(json.ip);
        setLocation(json.location);
        setIsp(json.isp);
      })
      .catch((rejected) => {
        console.log(rejected);
      });
  }, [ip]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const newIP = event.target[0].value;
    console.log(newIP);
    setIp(newIP);
  };
  return (
    <div className='App'>
      <h1 className='title'>IP address tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type='submit' value='>' />
      </form>
      <div className='information'>
        <div className='info'>
          <div className='title'>IP:</div>
          <p>{ip}</p>
        </div>
        <div className='info'>
          <div className='title'>LOCATION:</div>
          <p>
            {location.country}, {location.region}
          </p>
        </div>
        <div className='info'>
          <div className='title'>TIME:</div>
          <p>{location.timezone}</p>
        </div>
        <div className='info'>
          <div className='title'>ISP:</div>
          <p>{isp}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
