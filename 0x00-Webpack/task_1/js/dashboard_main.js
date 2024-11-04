import $ from 'jquery';
import debounce from 'lodash/debounce';

$(document).ready(function() {
  // Create and append elements
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="clickButton">Click here to get started</button>');
  $('body').append('<p id="count">0 clicks on the button</p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  let count = 0;

  function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
  }

  // Bind the debounce function to the click event
   $('#clickButton').on('click', _.debounce(updateCounter, 500));
});
