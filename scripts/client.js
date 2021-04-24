
let employees = [];

function onReady() {
    console.log('DOM is ready');
    $('#add-employee-btnID').click(validateEmployeeInfo);

    // $('#add-employee-btnID').click(addEmployee);
    
} //end onReady

function validateEmployeeInfo(event) {
    let fName = $('#fNameID').val().toLowerCase();
    let lName = $('#lNameID').val().toLowerCase();
    let employeeID = $('#employeeID').val();
    let title = $('#titleID').val();
    let annualSalary = $('#annualSalaryID').val();

    if (!fName || !lName || !employeeID || !title || !annualSalary) {
        console.log('need more info');
        $('.container-form input').css('border', '2px red solid');
        $('#add-employee-btnID').css({'background-color': 'red', 'color': 'white'});

        clearFields();
    }
    else {
        $('#add-employee-btnID').css('-webkit-appearance', 'button');
        addEmployee(fName, lName, employeeID, title, annualSalary);
        $('.container-form input').css();

    }

    clearFields();
    return;

}

function clearFields() {
    //clear the DOM fields
    $('#fNameID').val('');
    $('#lNameID').val('');
    $('#employeeID').val('');
    $('#titleID').val('');
    $('#annualSalaryID').val('');
    return;
  } // end clearFields

function addEmployee(fName, lName, employeeID, title, annualSalary) {
    const employee = {
        fName,
        lName,
        employeeID,
        title,
        annualSalary
    }
    employees.push(employee);
    console.log(`Employee Name: ${employee.fName}`);
    clearFields();
    return;
} //end addEmployee

// DOM listen function
$(onReady);
