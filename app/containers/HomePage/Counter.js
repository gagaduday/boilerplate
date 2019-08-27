import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from './actions';

const Counter = props => {
  console.log(props);
  return (
    <div>
      <button onClick={props.increase}>Increment</button>
      <button onClick={props.decrease}>Decrement</button>
      <p>Current count</p>
      {props.count}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    count: state.home ? state.home.count.count : 0,
  };
};

export default connect(
  mapStateToProps,
  { increase, decrease },
)(Counter);
