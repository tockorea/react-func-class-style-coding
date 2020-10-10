import React, { Component } from 'react';

export default class ClassComp extends Component {
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }
  componentDidMount() {
    console.log('%cclass => componentDidMount', 'color:red');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cclass => shouldComponentUpdate', 'color:red');
    return true;
  }
  componentDidUpdate(nextProps, nextState) {
    console.log('%cclass => componentDidUpdate', 'color:red');
  }
  componentWillUnmount() {
    console.log('%cclass => componentWillUnMount', 'color:red');
  }
  render() {
    console.log('%cclass => render', 'color:red');
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input type="button" value="random" onClick={
          function () {
            this.setState({ number: Math.random() });
          }.bind(this)
        } />
        <input type="button" value="date" onClick={
          function () {
            this.setState({ date: (new Date()).toString() });
          }.bind(this)
        } />
      </div>
    )
  }
};