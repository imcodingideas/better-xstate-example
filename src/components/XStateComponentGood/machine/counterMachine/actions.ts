import { assign } from 'xstate';
import { CounterActions } from './types';

const increment = (context: { count: number }) => context.count + 1;
const decrement = (context: { count: number }) => context.count - 1;

export const counterActions = {
  [CounterActions.Increment]: assign({ count: increment }),
  [CounterActions.Decrement]: assign({ count: decrement }),
};
