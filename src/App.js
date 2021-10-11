import React from 'react'
import io from 'socket.io-client'


// const socket = io(`http://localhost:9999`)


function App() {
    const connectSocket = ()=> {
        io(`http://localhost:9000`);
    }

  return (
    <div className="App">
      <button onClick={connectSocket}>connect</button>
    </div>
  );
}

export default App;
