import $ from 'jquery';
import './header.css';

console.log('Init header');

$(document).ready(function () {
  const header = $('<header></header>');
  const logo = $('<img src="./assets/holberton-logo.jpg" alt="Holberton Logo" width="200" height="200">');
  const title = $('<h1>Holberton Dashboard</h1>');

  header.append(logo);
  header.append(title);
  $('body').prepend(header);
});
