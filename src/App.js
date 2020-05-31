import React, { useState } from 'react';
import './App.css';
import Clock from './components/Clock';
import Panel from './components/Panel';

export default function App() {
  const [global, setGlobal] = useState({
    started: false,
    paused: false,
    onBreak: false,
    workDur: 25,
    breakDur: 5,
    then: Date.now(),
  });

  return (
    <div>
      <Clock global={global} setGlobal={setGlobal} />
      <Panel global={global} setGlobal={setGlobal} />
    </div>
  );
}
