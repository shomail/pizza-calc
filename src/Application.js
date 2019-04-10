import React, { Component } from 'react';
import PizzaCalculator from './PizzaCalculator';

import calculatePizzasNeeded from './lib/calculate-pizzas-needed';

const initialState = {
  numberOfPeople: 10,
  slicesPerPerson: 2,
};

const WithPizzaCalculations = (WrappedComponent) => {
  return class extends Component {
    state = { ...initialState };

  updateNumberOfPeople = event => {
    const numberOfPeople = parseInt(event.target.value, 10);
    this.setState({ numberOfPeople });
  };

  updateSlicesPerPerson = event => {
    const slicesPerPerson = parseInt(event.target.value, 10);
    this.setState({ slicesPerPerson });
  };

  reset = event => {
    this.setState({ ...initialState });
  };

  render() {
    const { numberOfPeople, slicesPerPerson } = this.state;
    const numberOfPizzas = calculatePizzasNeeded(
      numberOfPeople,
      slicesPerPerson,
    );

    return (
      <WrappedComponent
        numberOfPeople={numberOfPeople}
        slicesPerPerson={slicesPerPerson}
        numberOfPizzas={numberOfPizzas}
        updateNumberOfPeople={this.updateNumberOfPeople}
        updateSlicesPerPerson={this.updateSlicesPerPerson}
        reset={this.reset}
      />
    );
  }
  }
}

const PizzaContainer = WithPizzaCalculations(PizzaCalculator);

export default class Application extends Component {
  render() {
    return (
      <PizzaContainer />
    )
  }
}