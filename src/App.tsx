import XStateComponentBad from './components/XStateComponentBad';
import XStateComponentGood from './components/XStateComponentGood';
import XStateComponentGoodWithDifferentImplementation from './components/XStateComponentGoodWithDifferentImplementation';

const App = () => {
  return (
    <div>
      <XStateComponentGood />
      <XStateComponentBad />
      <XStateComponentGoodWithDifferentImplementation />
    </div>
  );
};

export default App;
