import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Weekday, getLastDayOfMonth } from '../src/weekday.js';

$("form#date").submit(function(event) {
  event.preventDefault();
  let userYear = parseInt($("#year").val());
  let userMonth = parseInt($("#month").val());
  const userDaysMax = getLastDayOfMonth(userYear, userMonth);
  console.log(userDaysMax);
  $("input#day-number").attr("max", userDaysMax);
});

$("form#pick-day-number").submit(function(event) {
  event.preventDefault();
  let inputYear = parseInt($("#year").val());
  let inputMonth = parseInt($("#month").val());
  let inputDay = parseInt($("#day-number").val());
  let newWeekday = new Weekday(inputDay, inputMonth, inputYear);
  newWeekday.whichDay();
  newWeekday.writeMonth();
  let newHtmlP = `<p class="some-result">${newWeekday.dayOfWeek}, ${newWeekday.month} ${newWeekday.day}, ${newWeekday.year}</p>`;
  $(".history-days").prepend(newHtmlP);
});