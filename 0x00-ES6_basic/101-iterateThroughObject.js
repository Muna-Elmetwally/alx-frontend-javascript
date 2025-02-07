/* eslint-disable import/prefer-default-export */
/* eslint-disable radix */
export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';
  for (const [index, item] of Object.entries(reportWithIterator)) {
    employeeNames += `${item}`;

    if (parseInt(index) !== reportWithIterator.length - 1) {
      employeeNames += ' | ';
    }
  }

  return employeeNames;
}
