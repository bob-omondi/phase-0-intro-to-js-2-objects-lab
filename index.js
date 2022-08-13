employee = ["name", "streetAddress"]
function updateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function updateEmployeeWithKeyAndValue2(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    newEmployee[value];
    delete newEmployee[value];
    return newEmployee;
  }
  function destructivelyDeleteEmployeeByKey(object, key) {
    delete object[key];
    return object;
  }