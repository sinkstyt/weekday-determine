export default function Weekday(day, month, year) {
  this.day = day;
  this.month = month;
  this.year = year;
  this.message = '';
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