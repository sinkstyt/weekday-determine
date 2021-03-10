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
  console.log(`inputYear is : ${inputYear}`);
  let inputMonth = parseInt($("#month").val());
  console.log(`inputMonth is : ${inputMonth}`);
  let inputDay = parseInt($("#day-number").val());
  let newWeekday = new Weekday(inputDay, inputMonth, inputYear);
  newWeekday.whichDay();
  // $("div#result span").innerHTML(newWeekday);
  document.getElementById("day").innerHTML = newWeekday.dayOfWeek;
});