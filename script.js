const employees = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" }
];

// Function to filter employees by profession
function filterEmployees(profession) {
  return employees.filter((employee) => employee.profession === profession);
}

// Function to display employees in table
function displayEmployees(employeeList) {
  const tableBody = document.getElementById("employee-table-body");
  tableBody.innerHTML = "";

  employeeList.forEach((employee) => {
    const row = tableBody.insertRow(-1);
    row.innerHTML = `<td>${employee.id}</td><td>${employee.name}</td><td>${employee.age}</td><td>${employee.profession}</td>`;
  });
}

// Function to add new employee to list and display in table
function addEmployee() {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const professionInput = document.getElementById("profession");
  const addMessage = document.getElementById("add-message");

  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
  const profession = professionInput.value.trim();

  // Check if any fields are empty
  if (!name || !age || !profession) {
    addMessage.textContent = "Please fill in all fields";
    return;
  }

  const id = employees.length + 1;
  const newEmployee = { id, name, age, profession };
  employees.push(newEmployee);

  addMessage.textContent = `Employee ${name} added`;

  // Clear input fields
  nameInput.value = "";
  ageInput.value = "";
  professionInput.value = "";

  // Display updated employee list
  displayEmployees(employees);
}

// Event listener for filter button
document.getElementById("filter-btn").addEventListener("click", function () {
  const profession = document.getElementById("profession").value;
  const filteredEmployees = filterEmployees(profession);
  displayEmployees(filteredEmployees);
});

// Event listener for add button
document.getElementById("add-btn").addEventListener("click", function () {
  addEmployee();
  displayEmployees(employees);
});

// Initial display of employees
displayEmployees(employees);
