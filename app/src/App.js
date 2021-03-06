import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Card, Container, Component, Grid, 
  Icon, Image, Label, Menu, Message, 
  Segment} 
      from 'semantic-ui-react';

import CounterClassComponent from './components/CounterClassComp';
import CounterHooksBasic from './components/CounterHookBasic';
import CounterHooksEffects from './components/CounterHooksEffect_1';
import CounterLifeCycle from './components/CounterLIfeCycle';
import Counter_HooksEffect_2 from './components/Counter_HooksEffect_2';

import ArrayHooksEffect1 from './components/ArrayHooksEffect_1';
import ReactnHooks from './components/ReactnHooks';
import ReactnHooks1 from './components/ReactnHooks1';
import ReactnHooks2 from './components/ReactnHooks2';
import HooksFetchData_1 from './components/HooksFetchData_1';
import CheckboxGroupTry from './components/CheckboxRainbowComp_1';
import SemanticUIR_checkbox from './components/SemanticUIR_checkbox';
import DropdownExampleSearchDropdown from './components/SemanticUIR_DropDownSearch';
import SemanticUIR_RadioRemote from './components/SemanticUIR_RadioRemote';
import HooksRadioExampleRemoteControl from './components/Hooks_RadioRemote'; 

import { useGlobal, setGlobal } from 'reactn';
import avengerInfo from './data/avengerInfo';
import RadioExampleRemoteControl from './components/SemanticUIR_RadioRemote';
setGlobal({
  avengers: avengerInfo,    
})


export default function App() {
  return (
    <div>
      <Card.Group centered itemsPerRow = '5'>
          <SemanticUIR_checkbox />
          <CounterClassComponent/>
          <CounterHooksBasic/>
          <CounterHooksEffects/>
          <CounterLifeCycle />
          <Counter_HooksEffect_2 />
          <CheckboxGroupTry/>
          <DropdownExampleSearchDropdown/>
          <SemanticUIR_RadioRemote />
          <HooksRadioExampleRemoteControl />
          <HooksFetchData_1/>
          
          <ReactnHooks />
          <ReactnHooks1 />
          <ReactnHooks2 />

          <ArrayHooksEffect1/>
      </Card.Group>
    </div>
      
      
      

  
  );
}

// export default App;

/* 
    <div className="App" style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div>
          <CounterClassComponent/>
          <CounterHooksBasic/>
        </div>
    </div>
*/
