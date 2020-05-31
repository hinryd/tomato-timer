import React, { useState } from 'react';
import useInterval from './useInterval';

export default function Clock(p) {
  const g = p.global;
  const ms = (g.onBreak ? g.breakDur : g.workDur) * 60000;
  const [diff, setDiff] = useState(0);

  useInterval(() => {
    if (g.started && !g.paused) {
      setDiff(Date.now() - g.then);
      if (diff >= ms) {
        p.setGlobal({ ...g, started: !g.started, onBreak: !g.onBreak });
        setDiff(0);
      }
    }
  }, 1);

  return (
    <h1>
      {parseInt((ms - diff) / 60000)
        .toString()
        .padStart(2, 0)}
      :
      {parseInt(((ms - diff) / 1000) % 60)
        .toString()
        .padStart(2, 0)}
      :
      {parseInt(ms - diff)
        .toString()
        .padStart(2, 0)
        .substr(-2)}
    </h1>
  );
}
