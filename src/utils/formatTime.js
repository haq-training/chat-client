// noinspection JSCheckFunctionSignatures

import { format, getTime, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------

export function fDate(date) {
  return format(new Date(date), 'dd MMMM yyyy');
}

export function fDateToDay(date) {
  return format(new Date(date), 'dd');
}

export function fDateToYear(date) {
  return format(new Date(date), 'yyyy');
}

export function fDateToMonth(date) {
  return format(new Date(date), 'MM');
}

export function fddMMYYYYWithSlash(date) {
  return format(new Date(date), 'dd/MM/yyyy');
}

export function fYearMonthDay(date) {
  return format(new Date(date), 'yyyy/MM/dd');
}

export function fDateTime(date) {
  return format(new Date(date), 'dd MMM yyyy HH:mm');
}

export function fDateTimeVer2(date) {
  return format(new Date(date), 'dd/MM/yyyy HH:mm');
}

export function fTimestamp(date) {
  return getTime(new Date(date));
}

export function fDateTimeSuffix(date) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}

export function fToNow(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
}

export function getNextNDay(no) {
  const today = new Date();
  const nextDay = new Date(today);
  nextDay.setDate(nextDay.getDate() + no);
  return nextDay;
}

export function getDateNextNMonth(date, no) {
  const nextMonth = new Date(date);
  nextMonth.setMonth(nextMonth.getMonth() + no);
  return nextMonth;
}

export function fMonthYear(date) {
  return format(new Date(date), 'MM/yyyy');
}
