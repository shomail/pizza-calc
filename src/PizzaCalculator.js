import React from 'react';
import Title from './Title';
import Input from './Input';
import Result from './Result';

const PizzaCalculator = ({numberOfPeople, slicesPerPerson, numberOfPizzas, updateNumberOfPeople, updateSlicesPerPerson, reset}) => (
  <div className="Application">
    <Title />
    <Input
      label="Number of Guests"
      type="number"
      min={0}
      value={numberOfPeople}
      onChange={updateNumberOfPeople}
    />
    <Input
      label="Slices Per Person"
      type="number"
      min={0}
      value={slicesPerPerson}
      onChange={updateSlicesPerPerson}
    />
    <Result amount={numberOfPizzas} />
    <button className="full-width" onClick={reset}>
      Reset
    </button>
  </div>
);

export default PizzaCalculator;