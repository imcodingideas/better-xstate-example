import { createMachine, assign } from 'xstate';

const increment = (context: { count: number; }) => context.count + 1;
const decrement = (context: { count: number; }) => context.count - 1;

const CounterMachine = createMachine(
  {
    initial: 'active',
    context: {
      count: 0,
    },
    states: {
      active: {
        on: {
          INC: { actions: 'increment' },
          DEC: { actions: 'decrement' },
        },
      },
    },
  },
  {
    actions: {
      increment: assign({ count: increment }),
      decrement: assign({ count: decrement }),
    },
  }
);

export default CounterMachine;
