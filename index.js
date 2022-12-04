// Write your solution in this file!
var employee = {} ;
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    for (const key in employee) {
        delete employee[key];
      }

      employee.name = 'Sam';
   let newEmployee = {...employee};
   delete newEmployee.name;
   return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(){
    for (const key in employee) {
        delete employee[key];
      }

      employee.name = 'Sam';
      delete employee.name
      return employee
}
console.log(destructivelyDeleteFromEmployeeByKey());