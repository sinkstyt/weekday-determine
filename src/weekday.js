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
  if (this.month > 12) {
    this.message += "please enter a valid month number";
  }
};


// export default function Triangle(side1, side2, side3) {
//   this.side1 = side1;
//   this.side2 = side2;
//   this.side3 = side3;
// }