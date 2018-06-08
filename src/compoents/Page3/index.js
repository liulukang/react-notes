import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  static defaultProps= {
  }
  
  constructor(props) {
    super(props)
    console.log("constructor");
    this.state = {}
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;        // 记得要返回true
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
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