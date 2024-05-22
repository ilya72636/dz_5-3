import React from 'react';
import { useSelector } from 'react-redux';

const CounterComponent = () => {
  const count = useSelector((state) => state.count);

  return <span>{count}</span>;
};

export default CounterComponent;