import React from 'react';
import logo from './logo.svg';
import './App.css';

import CounterClassComponent from './components/CounterClassComp';
import CounterHooksBasic from './components/CounterHookBasic';

export default function App() {
  return (
    <div className="App">
      <h1> Something </h1>
      <CounterClassComponent/>
      <CounterHooksBasic/>
    </div>
  );
}

// export default App;
