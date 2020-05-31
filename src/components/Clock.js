import React, { useState } from 'react';
import useInterval from './useInterval';

export default function Clock(p) {
  const [diff, setDiff] = useState(0);
  const [ms, setMs] = useState(p.wDur * 60000);

  useInterval(() => {
    if (p.cd === true) {
      if (p.br === true) {
        setMs(p.bDur * 60000);
      } else {
        setMs(p.wDur * 60000);
      }
      setDiff(Date.now() - p.was);
      if (diff === ms) {
        p.setBr((prev) => !prev);
        p.setCd((prev) => !prev);
      }
    }
  }, 1);

  return (
    <h1>
      {parseInt((ms - diff) / 60000)}:
      {parseInt(((ms - diff) / 1000) % 60)
        .toString()
        .padStart(2, 0)}:
      {parseInt(ms - diff).toString().substr(-2)}
    </h1>
  );
}
