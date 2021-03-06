import { connect } from 'react-redux';
import Page3 from '../compoents/Page3';

function mapStateToProps(state) {
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

export default connect(mapStateToProps, mapDispatchToProps)(Page3);