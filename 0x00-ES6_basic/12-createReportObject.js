/* eslint-disable import/prefer-default-export */
export function createEmployeesObject(departmentName, employees) {
  const obj = {
    [departmentName]: employees,
  };
  return obj;
}
