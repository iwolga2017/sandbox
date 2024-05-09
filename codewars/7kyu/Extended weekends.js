// If the first day of the month is a Friday, it is likely that the month will have an Extended Weekend. 
// That is, it could have five Fridays, five Saturdays and five Sundays.
// In this Kata, you will be given a start year and an end year. Your task will be to find months that have 
// extended weekends and return:
// - The first and last month in the range that has an extended weekend
// - The number of months that have extended weekends in the range, inclusive of start year and end year.
// For example:
// solve(2016,2020) = ["Jan","May",5]. //The months are: Jan 2016, Jul 2016, Dec 2017, Mar 2019 and May 2020

function solve(startYear, endYear) {
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let extendedWeekendMonths = [];
  let count = 0;

  for (let year = startYear; year <= endYear; year++) {
    for (let month = 0; month < 12; month ++) {
      const firstDayOfMonth = new Date(year, month, 1).getDay();

      if (firstDayOfMonth === 5) { // Friday
        const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
        const lastDayOfWeek = new Date(year, month, lastDayOfMonth).getDay();

        if (lastDayOfWeek === 0) { //Sanday
          extendedWeekendMonths.push(months[month]);
          count++;
        }
      }
    }
  }
  return [extendedWeekendMonths[0], extendedWeekendMonths[extendedWeekendMonths.length - 1], count];
}
