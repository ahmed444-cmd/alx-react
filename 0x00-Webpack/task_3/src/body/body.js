import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;

$(document).ready(function () {
  const button = $('<button>Click me!</button>');
  const counterText = $('<p>Button clicked: <span id="counter">0</span> times</p>');

  button.on('click', function () {
    count++;
    $('#counter').text(count);
  });

  $('body').append(button);
  $('body').append(counterText);
});
