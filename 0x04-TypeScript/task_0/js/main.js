// Create two students
const studentOne = {
    firstName: 'Olumide',
    lastName: 'Micheal',
    age: 23,
    location: 'Lagos'
};
const studentTwo = {
    firstName: 'Tolulope',
    lastName: 'Micheal',
    age: 25,
    location: 'Canada'
};
// create an array named studentsList containing the two variables
const studentsList = [studentOne, studentTwo];
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
const table = document.createElement('table');
const tableBody = document.createElement('tbody');
table.style.width = '100%';
table.style.background = '#34ebeb';
studentsList.forEach(function (student) {
    const row = document.createElement('tr');
    const nameCol = document.createElement('td');
    const locationCol = document.createElement('td');
    // Each row should contain the first name of the student and the location
    nameCol.textContent = student.firstName;
    locationCol.textContent = student.location;
    nameCol.style.textAlign = 'center';
    locationCol.style.textAlign = 'center';
    nameCol.style.color = '#000';
    locationCol.style.color = '#000';
    nameCol.style.border = '1px dotted black';
    locationCol.style.border = '1px dotted black';
    nameCol.style.height = '300px';
    locationCol.style.height = '300px';
    row.appendChild(nameCol); // append the cell to the row
    row.appendChild(locationCol); // append the cell to the row
    tableBody.appendChild(row); // append the row to the tbody
});
table.appendChild(tableBody); // append the tbody to the table
document.body.appendChild(table); // append the table to the body
