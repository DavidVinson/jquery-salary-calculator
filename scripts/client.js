
employees = [];

function onReady() {
    console.log('DOM is ready');
    $('#add-employee-btnID').click(addEmployee);
    
}

function addEmployee(event) {
    let employee = {
        fName: $('#fNameID').val().toLowerCase(),
        lName: $('#lNameID').val().toLowerCase(),
        employeeID: $('#employeeID').val(),
        title: $('#titleID').val(),
        annualSalary: $('#annualSalaryID').val()
    }
    employees.push(employee);
    console.log(employee);
    clearFields();
    return;
} //end addEmployee

function clearFields() {
    //clear the DOM fields
    $('#fNameID').val('');
    $('#lNameID').val('');
    $('#employeeID').val('');
    $('#titleID').val('');
    $('#annualSalaryID').val('');
    return;
  } // end clearFields

// DOM listen function
$(onReady);
