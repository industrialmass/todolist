const dateToString = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const now = new Date();
  const nowMonth = now.getMonth();
  const nowDay = now.getDate();
  const nowYear = now.getFullYear();

  if (month === nowMonth && day === nowDay && year === nowYear) {
    return "Today";
  } else if (month === nowMonth && day - nowDay === 1 && year === nowYear) {
    return "Tomorrow";
  } else {
    return `${_getMonthName(month)} ${day}`;
  }
};

export { dateToString };

function _getMonthName(month) {
  switch (month) {
    case 0:
      return "Jan";

    case 1:
      return "Feb";

    case 2:
      return "Mar";

    case 3:
      return "Apr";

    case 4:
      return "May";

    case 5:
      return "Jun";

    case 6:
      return "Jul";

    case 7:
      return "Aug";

    case 8:
      return "Sep";

    case 9:
      return "Oct";

    case 10:
      return "Nov";

    case 11:
      return "Dec";
  }
}
