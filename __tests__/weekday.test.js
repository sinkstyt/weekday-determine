import { Weekday } from './../src/weekday.js';

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

  test('should return a string asking for a valid year 3001 AD or earlier, given a value for year greater than 3000', () => {
    let newDate = new Weekday(3, 7, 3001);
    newDate.isValidYear();
    const result = newDate.message;
    expect(result).toEqual('please enter a valid year');
  });

  test("should return false for years that are not a leap year", () => {
    let newDate = new Weekday(3, 3, 2022);
    const thisBool = newDate.isLeapYear();
    expect(thisBool).toEqual(false);
  });

  test("should return true for years that are divisible by 4", () => {
    let newDate = new Weekday(3, 12, 2000);
    const thisBool = newDate.isLeapYear();
    expect(thisBool).toEqual(true);
  });

  test("should return false for years that are divisible by 100", () => {
    let newDate = new Weekday(1, 22, 2400);
    const thisBool = newDate.isLeapYear();
    expect(thisBool).toEqual(false);
  });

  test("should return true for years that are divisible by 400", () => {
    let newDate = new Weekday(1, 22, 2400);
    const thisBool = newDate.isLeapYear();
    expect(thisBool).toEqual(true);
  });

  test("should return the correct day of the week given a date(month, day, year)", () => {
    let newDate = new Weekday(8, 3, 2021);
    newDate.whichDay();
    const correctDay = newDate.dayOfWeek;
    expect(correctDay).toEqual("Monday");
  });
});