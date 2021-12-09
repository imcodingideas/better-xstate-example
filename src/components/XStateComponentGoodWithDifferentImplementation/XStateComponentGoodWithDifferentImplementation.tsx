import { useMachine } from '@xstate/react';
import { CounterEvents, CounterMachineByTwo } from './machine/counterMachine';

const XStateComponentGoodWithDifferentImplementation = () => {
  const [current, send] = useMachine(CounterMachineByTwo);

  const increment = () => send(CounterEvents.Increment);
  const decrement = () => send(CounterEvents.Decrement);

  return (
    <div style={{ backgroundColor: '#79B4B7', padding: '2em' }}>
      <h1>XState Component New Way With Different Implementation</h1>
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

export default XStateComponentGoodWithDifferentImplementation;
