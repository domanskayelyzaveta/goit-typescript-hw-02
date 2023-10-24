/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

const today = {
day : Days.MONDAY,
}


const isWeekend = (day: Days): boolean => {
  return day === Days.SATURDAY || day === Days.SUNDAY;
};



