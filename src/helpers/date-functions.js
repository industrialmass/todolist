const dateToString = (date) => {
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  if (isToday(date)) {
    return "Today";
  } else if (isTomorrow(date)) {
    return "Tomorrow";
  } else {
    return _isCurrentYear(date)
      ? `${_getMonthName(month)} ${day}`
      : `${_getMonthName(month)} ${day} ${year}`;
  }
};

const isToday = (date) => {
  const today = new Date();
  return (
    today.getMonth() === date.getMonth() &&
    today.getDate() === date.getDate() &&
    today.getFullYear() === date.getFullYear()
  );
};

const isTomorrow = (date) => {
  const today = new Date();
  return (
    today.getMonth() === date.getMonth() &&
    date.getDate() - today.getDate() === 1 &&
    today.getFullYear() === date.getFullYear()
  );
};

const _isCurrentYear = (date) => {
  const today = new Date();
  return today.getFullYear() === date.getFullYear();
};

const isUpcoming = (date) => {
  const today = new Date();
  return (date.getTime() - today.getTime()) / (1000 * 3600 * 24) <= 14;
};

const _getMonthName = (month) => {
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
};

export { dateToString, isToday, isUpcoming };
