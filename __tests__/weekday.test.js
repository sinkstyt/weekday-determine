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
    expect(result).toEqual("please enter a valid number day for this month");
  });

  test('should return a string asking for a valid number for month, given a value that is greater than 12', () => {
    let userDateTest = new Weekday(3, 14, 2034);
    userDateTest.isValidMonth();
    const result = userDateTest.message;
    expect(result).toEqual("please enter a valid month number");
  });
  test('should return a string asking for a valid number for month, given a value that is less than 1', () => {
    let userDateTest = new Weekday(3, -5, 2034);
    userDateTest.isValidMonth();
    const result = userDateTest.message;
    expect(result).toEqual("please enter a valid month number");
  });

  test('should return a string asking for a valid year 1800 AD or later, given a value for year less than 1800', () => {
    let newDate = new Weekday(3, 7, 1721);
    newDate.isValidYear();
    const result = newDate.message;
    expect(result).toEqual('please enter a valid year');
  });
});