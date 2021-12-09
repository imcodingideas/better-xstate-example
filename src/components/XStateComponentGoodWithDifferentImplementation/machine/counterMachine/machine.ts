import { createMachine } from 'xstate';
import { counterActions, counterActionsByTwo } from './actions';
import { initialContext, counterConfig } from './config';

const CounterMachine = createMachine(counterConfig);

export default CounterMachine.withContext(initialContext).withConfig({
  actions: counterActions,
});

export const CounterMachineByTwo = CounterMachine.withContext(
  initialContext
).withConfig({
  actions: counterActionsByTwo,
});
