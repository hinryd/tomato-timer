import React, { useState } from 'react';
import './App.css';
import Clock from './components/Clock';
import Panel from './components/Panel';

export default function App() {
  const [cd, setCd] = useState(false);
  const [br, setBr] = useState(false);
  const [wDur, setWDur] = useState(25);
  const [bDur, setBDur] = useState(5);
  const [was, setWas] = useState(Date.now());

  return (
    <div>
      <Clock
        cd={cd}
        br={br}
        setCd={setCd}
        setBr={setBr}
        wDur={wDur}
        bDur={bDur}
        was={was}
      />
      <Panel
        cd={cd}
        setCd={setCd}
        setWDur={setWDur}
        setBDur={setBDur}
        wDur={wDur}
        bDur={bDur}
        setWas={setWas}
      />
    </div>
  );
}
