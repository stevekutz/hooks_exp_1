import React from 'react';
import logo from './logo.svg';
import './App.css';

import CounterClassComponent from './components/CounterClassComp';
import { CardContent } from 'semantic-ui-react';

export default function App() {
  return (
    <div className="App">
      <h1> Something </h1>
      <CounterClassComponent/>
    </div>
  );
}

// export default App;
