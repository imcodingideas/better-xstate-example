import { assign } from 'xstate';
import { CounterActions } from './types';

const increment = (context: { count: number }) => context.count + 1;
const decrement = (context: { count: number }) => context.count - 1;

const incrementByTwo = (context: { count: number }) => context.count + 2;
const decrementByTwo = (context: { count: number }) => context.count - 2;

export const counterActions = {
  [CounterActions.Increment]: assign({ count: increment }),
  [CounterActions.Decrement]: assign({ count: decrement }),
};

export const counterActionsByTwo = {
  [CounterActions.Increment]: assign({ count: incrementByTwo }),
  [CounterActions.Decrement]: assign({ count: decrementByTwo }),
};
