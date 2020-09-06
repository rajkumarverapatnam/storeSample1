import React, { Component } from "react";
import { connect } from "react-redux";

class AgeCount extends Component {
  render() {
    return (
      <div>
        <h2>Age is {this.props.age}</h2>
        <button onClick={this.props.onAgeUp}>Age up</button>&nbsp;&nbsp;&nbsp;
        <button onClick={this.props.onAgeDown}>Age down</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispachToProps = (dispach) => {
  return {
    onAgeUp: () => dispach({ type: "AGE_UP" }),
    onAgeDown: () => dispach({ type: "AGE_DOWN" }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(AgeCount);
