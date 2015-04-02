/** @jsx React.DOM */
var React = require("react");

var Board = React.createClass({displayName: "Board",
  getInitialState: function(){
    //var board = createBoard();

    return {
      board: 5
    }
  }, 

  render: function(){
    return (
      React.createElement("h1", null, "lalal", this.state.board)
    )
  }
});

module.exports = Board;

React.renderComponent(React.createElement(Board, null), document.getElementById('container'));