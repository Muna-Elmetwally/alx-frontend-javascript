export default function createReportObject(employeesList) {
  const employeesObj = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      const listLength = Object.keys(employeesList).length;
      return listLength;
    },
  };
  return employeesObj;
}
