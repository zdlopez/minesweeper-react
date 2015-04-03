/** @jsx React.DOM */

var Board = require('./components/board.jsx');
//var React = require('React');

$(document).ready(function(){
  console.log("we ready");
  React.renderComponent(<Board />, document.getElementById('container'));
});