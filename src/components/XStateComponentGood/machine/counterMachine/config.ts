import { CounterStates, CounterEvents, CounterActions } from './types';

export const initialContext = {
  count: 0,
};

export const counterConfig = {
  initial: CounterStates.Active,
  context: initialContext,
  states: {
    [CounterStates.Active]: {
      on: {
        [CounterEvents.Increment]: { actions: CounterActions.Increment },
        [CounterEvents.Decrement]: { actions: CounterActions.Decrement },
      },
    },
  },
};
