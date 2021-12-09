import { createMachine } from 'xstate';
import { counterActions } from './actions';
import { initialContext, counterConfig } from './config';

const CounterMachine = createMachine(counterConfig);

export default CounterMachine.withContext(initialContext).withConfig({
  actions: counterActions,
});
