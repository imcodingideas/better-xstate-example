import { useMachine } from '@xstate/react';
import CounterMachine from './machine/counterMachine';

const XStateComponentBad = () => {
  const [current, send] = useMachine(CounterMachine);

  const increment = () => send('INC');
  const decrement = () => send('DEC');

  return (
    <div style={{ backgroundColor: '#9D9D9D', padding: '2em' }}>
      <h1>XState Component Old Way</h1>
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

export default XStateComponentBad;
