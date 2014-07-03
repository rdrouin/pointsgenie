/** @jsx React.DOM */
"use strict";
var React = require("react");
var request = require("../middlewares/request");

module.exports = React.createClass({
  getInitialState: function () {
    return { count : this.props.initialCount || 0 };
  },
  componentWillMount: function () {
    request.get("/value", function (res) {
      this.setState({count: res.body.count});
    }.bind(this));
  },
  onClickInc: function (event) {
    event.preventDefault();
    request.get("/inc", function (res) {
      this.setState({count: res.body.count});
    }.bind(this));
  },
  onClickDec: function (event) {
    event.preventDefault();
    request.get("/dec", function (res) {
      this.setState({count: res.body.count});
    }.bind(this));
  },
  render: function () {
    return (
      <div className={this.props.className}>
        <h3>Counter</h3>
        <div className="counter">Count&nbsp;
          <a href="#" onClick={this.onClickInc}>(Click to increment)</a>&nbsp;
          <a href="#" onClick={this.onClickDec}>(Click to decrement)</a>&nbsp;
          <span>{this.state.count}</span>
        </div>
      </div>
    );
  }
});

