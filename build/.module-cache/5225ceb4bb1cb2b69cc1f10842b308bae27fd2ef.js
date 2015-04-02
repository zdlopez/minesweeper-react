/** @jsx React.DOM */

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

React.renderComponent(React.createElement(Board, null), document.getElementById('container'));