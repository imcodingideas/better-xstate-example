import { useMachine } from '@xstate/react';
import CounterMachine, { CounterEvents } from './machine/counterMachine';

const XStateComponentGood = () => {
  const [current, send] = useMachine(CounterMachine);

  const increment = () => send(CounterEvents.Increment);
  const decrement = () => send(CounterEvents.Decrement);

  return (
    <div style={{ backgroundColor: '#79B4B7', padding: '2em' }}>
      <h1>XState Component New Way</h1>
      <div style={{ display: 'flex' }}>
        <p style={{ margin: 'auto', fontSize: '2em' }}>
          {current.context.count}
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '2em',
        }}
      >
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default XStateComponentGood;
