/*eslint-env browser*/
// Employee Class: Represents a Employee
class Employee {
  constructor(fullname, title, extension) {
    this.fullname = fullname;
    this.title = title;
    this.extension = extension;
  }
}

// UI Class: Handle User Interface Tasks
class UI {
  static displayEmployees() {
//current list
      var employeeList = [
          {
            fullname : "Sally Smith",
            title : "QA",
            extension : 1111
        }, {
            fullname : "Mark Martin",
            title : "VP Sales",
            extension : 1122
        }, {
            fullname : "Bob Johnson",
            title : "Marketing",
            extension : 1133
        }, {
            fullname : "John Smith",
            title : "IT Help Desk",
            extension : 1144
        }, {
            fullname : "Mary Kay",
            title : "R&D",
            extension : 1123
        }
      ];
      var employees = employeeList;
 
    employees.forEach((employee) => UI.addEmployeeToList(employee));
  }

  static addEmployeeToList(employee) {
    var list = document.querySelector('#employee-list');

    var row = document.createElement('tr');

    row.innerHTML = `
      <td>${employee.fullname}</td>
      <td>${employee.title}</td>
      <td>${employee.extension}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">DELETE</a></td>
    `;

    list.appendChild(row);
  }

  static deleteEmployee(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }
// ADD Alert box on top
  static showAlert(message, className) {
    var div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    var container = document.querySelector('.container');
    var form = document.querySelector('#employee-form');
    container.insertBefore(div, form);

    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  static clearFields() {
    document.querySelector('#fullname').value = '';
    document.querySelector('#title').value = '';
    document.querySelector('#extension').value = '';
  }
}

// LocalStorage
class Store {
  static getEmployees() {
    var employees;
    if(localStorage.getItem('employees') === null) {
      employees = [];
    } else {
      employees = JSON.parse(localStorage.getItem('employees'));
    }

    return employees;
  }

  static addEmployee(employee) {
    var employees = Store.getEmployees();
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
  }

  static removeEmployee(extension) {
    var employees = Store.getEmployees();

    employees.forEach((employee, index) => {
      if(employee.extension === extension) {
        employees.splice(index, 1);
      }
    });

    localStorage.setItem('employees', JSON.stringify(employees));
  }
}

// Event: Display Employees
document.addEventListener('DOMContentLoaded', UI.displayEmployees);

// Event: Add a Employee
document.querySelector('#employee-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  var fullname = document.querySelector('#fullname').value;
  var title = document.querySelector('#title').value;
  var extension = document.querySelector('#extension').value;

  // Validate
  if(fullname === '' || title === '' || extension === '') {
    UI.showAlert('All fields are required. Please fill in all fields.', 'danger');
  } else {

    var employee = new Employee(fullname, title, extension);

    // Add Employee to UI
    UI.addEmployeeToList(employee);

    // Add employee to store
    Store.addEmployee(employee);

    // Show success message
    UI.showAlert('Employee Added', 'success');

    // Clear fields
    UI.clearFields();
  }
});

// Event: Remove Employee
document.querySelector('#employee-list').addEventListener('click', (e) => {
  // Remove employee from UI
  UI.deleteEmployee(e.target);

  // Remove employee from store
  Store.removeEmployee(e.target.parentElement.previousElementSibling.textContent);

  // Show success message
  UI.showAlert('Employee Removed', 'success');
});