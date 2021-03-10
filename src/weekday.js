export function Weekday(day, month, year) {
  this.day = day;
  this.month = month;
  this.year = year;
  this.message = '';
  this.dayOfWeek = '';
}

Weekday.prototype.isValidDayNumber = function() {
  if(this.day > 31 || this.day < 1) {
    this.message += "please enter a valid number day for this month";
  }
};

Weekday.prototype.isValidMonth = function() {
  if (this.month > 12 || this.month < 1) {
    this.message += "please enter a valid month number";
  }
};

Weekday.prototype.isValidYear = function() {
  if (this.year < 1800 || this.year > 3000) {
    this.message += 'please enter a valid year';
  }
};

Weekday.prototype.isLeapYear = function() {
  if ((this.year % 4 == 0) && (this.year % 100 !== 0) || (this.year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

Weekday.prototype.whichDay = function() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const userDate = new Date(this.year, this.month - 1, this.day);
  this.dayOfWeek = daysOfWeek[userDate.getDay()];
};

Weekday.prototype.writeMonth = function() {
  // array that lists each month
  const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // use the key called "month" to pick the right month Name
  this.month = allMonths[this.month];
};

export function getLastDayOfMonth (year, month) {
  let yearMonth = new Date();
  let lastDay = new Date(yearMonth.setFullYear(year, month +1, 0));
  return lastDay.getDate();
}