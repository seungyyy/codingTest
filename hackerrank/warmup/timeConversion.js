// https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true

function timeConversion(s) {
  const date_array = s.slice(0, s.length - 2).split(':');
  if (s.slice(s.length - 2) === 'PM') {
    date_array[0] !== '12' && (date_array[0] = Number(date_array[0]) + 12);
  } else {
    date_array[0] === '12' && (date_array[0] = '00');
  }
  return date_array.join(':');
}

console.log(timeConversion('07:05:45PM'))
console.log(timeConversion('12:01:00PM'))
console.log(timeConversion('12:01:00AM'))