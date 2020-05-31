import React from 'react';

export default function Panel(p) {
  function onSubmit(e) {
    e.preventDefault();
    p.setCd(prev => !prev);
    p.setWas(Date.now());
  }

  function onChange(e) {
    e.target.name === 'wDur'
      ? p.setWDur(e.target.value)
      : p.setBDur(e.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} name='wDur' value={p.wDur} />
      <input onChange={onChange} name='bDur' value={p.bDur} />
      <button>{p.cd ? 'Pause' : 'Start Session'}</button>
    </form>
  );
}
