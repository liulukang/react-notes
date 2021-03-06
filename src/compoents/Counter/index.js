import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { store = {}, onIncrement, onDecrement, onIncrementAsync } = this.props;
    return (
      <div>
        <button onClick={onIncrement}>
          Increment
        </button>
        <button onClick={onDecrement}>
          Decrement
        </button>
        <button onClick={onIncrementAsync}>
          IncrementAsync
        </button>
        <p>{store.counter}</p>
      </div>
    )
  }
}

Counter.propTypes = {
  store: PropTypes.shape({
    counter: PropTypes.number
    // counter2: PropTypes.number.isRequired,
  }),
}

export default Counter;