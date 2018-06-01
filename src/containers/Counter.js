import { connect } from 'react-redux';
import Counter from '../compoents/Counter';

function mapStateToProps(state) {
  console.log(state); // state
  return { store: state }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement() {
      dispatch({ type: 'INCREMENT' });
    },
    onDecrement() {
      dispatch({ type: 'DECREMENT' });
    },
    onIncrementAsync() {
      dispatch({ type: 'INCREMENT_ASYNC' });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);