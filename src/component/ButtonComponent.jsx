import React from 'react';
import { useDispatch } from 'react-redux';

const ButtonComponent = ({ sign }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (sign === '+') {
      dispatch({ type: 'INCREMENT' });
    } else if (sign === '-') {
      dispatch({ type: 'DECREMENT' });
    }
  };

  return <button onClick={handleClick}>{sign}</button>;
};

export default ButtonComponent;