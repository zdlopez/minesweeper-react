/** @jsx React.DOM */

var Board = React.createClass({
  getInitialState: function(){
    //var board = createBoard();

    return {
      board: myboard
    }
  }, 

  render: function(){
    return (
      <h1>lalal{this.state.board}</h1>
    )
  }
});

React.render(<Board />, document.getElementById('container'));

var myboard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];