import axios from 'axios';
import { useCallback, useState } from 'react';

function App() {
  const [response, setResponse] = useState();
  const handleClick = useCallback(() => {
    axios.get('/profile').then(setResponse)
  }, []);
  return (
    <div className="App">
      <h1>Minimal test app for Cypress</h1>
      <p>Click button to load stuff from server</p>
      <button onClick={handleClick}>Click me</button>
      <h2>Response</h2>
      <pre>
        {response ? JSON.stringify(response, null, 2) : ''}
      </pre>
    </div>
  );
}

export default App;
