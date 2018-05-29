import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { store = {}, onIncrement, onDecrement, onIncrementAsync } = this.props;
    console.log(store);
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

export default Counter;