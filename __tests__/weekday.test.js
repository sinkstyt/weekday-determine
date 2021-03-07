import Weekday from './../src/weekday.js';

describe('Weekday', () => {

  test('should return a string asking for a valid number day of the month, given a day number that is greater than 31', () => {
    const userDate = new Weekday(32, 0, 2001);
    userDate.isValidDayNumber();
    const result = userDate.message;
    expect(result).toEqual("please enter a valid number day for this month");
  });

  test('should return a string asking for a valid number day of the month, given a day number that is less than 1', () => {
    const userDate = new Weekday(-5, 0, 2001);
    userDate.isValidDayNumber();
    const result = userDate.message;
    expect(result).toEqual("Please enter a valid day number for this month");
  });
});