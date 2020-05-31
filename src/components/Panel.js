import React from 'react';

export default function Panel(p) {
  const g = p.global;

  function onSubmit(e) {
    e.preventDefault();
    if (!g.started) {
      p.setGlobal({ ...g, started: !g.started, then: Date.now() });
    } else {
      p.setGlobal({ ...g, paused: !g.paused });
    }
  }

  function onChange(e) {
    e.target.name === 'workDur'
      ? p.setGlobal({ ...g, workDur: e.target.value })
      : p.setGlobal({ ...g, breakDur: e.target.value });
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='number'
        onChange={onChange}
        name='workDur'
        value={g.workDur}
      />
      <input
        type='number'
        onChange={onChange}
        name='breakDur'
        value={g.breakDur}
      />
      <button>
        {g.paused ? 'Resume' : g.started ? 'Pause' : 'Start Session'}
      </button>
    </form>
  );
}
