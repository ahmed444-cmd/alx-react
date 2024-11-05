import $ from 'jquery';
import './footer.css';

$(document).ready(function () {
  const footer = $('<footer></footer>');
  const paragraph = $('<p>Copyright - Holberton School</p>');

  footer.append(paragraph);
  $('body').append(footer);
});
