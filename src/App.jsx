import React from 'react';
import CounterComponent from './component/CounterComponent';
import ButtonComponent from './component/ButtonComponent';

const ContainerComponent = () => {
  return (
    <div>
      <CounterComponent />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ButtonComponent sign="-" />
      <ContainerComponent />
      <ButtonComponent sign="+" />
    </div>
  );
};

export default App;