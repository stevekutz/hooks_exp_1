import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Button, Card, Container, Grid, 
  Icon, Image, Label, Menu, Message, 
  Segment} 
      from 'semantic-ui-react';

import CounterClassComponent from './components/CounterClassComp';
import CounterHooksBasic from './components/CounterHookBasic';

export default function App() {
  return (
    <div className="App" style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div>
          <CounterClassComponent/>
          <CounterHooksBasic/>
        </div>
    </div>
  
  );
}

// export default App;
