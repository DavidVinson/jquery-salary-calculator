
let employees = [];
let totalSalary = 0;


function validateEmployeeInfo(event) {
    let fName = $('#fNameID').val().toLowerCase();
    let lName = $('#lNameID').val().toLowerCase();
    let employeeID = $('#employeeID').val();
    let title = $('#titleID').val();
    let annualSalary = $('#annualSalaryID').val();

    if (!fName || !lName || !employeeID || !title || !annualSalary) {
        console.log('need more info');
        // $('.container-form input').css('border', '2px red solid');
        // $('#add-employee-btnID').css({'background-color': 'red', 'color': 'white'});

        clearFields();
    }

    employeeID = Number(employeeID);
    annualSalary = Number(annualSalary);

    //add employees to global employees array
    addEmployee(fName, lName, employeeID, title, annualSalary);

    //clear fields to ready for next entry
    clearFields();

    return;

} // end validateEmployeeInfo


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

    //add new employee object to empoloyees array
    employees.push(employee);
    // console.log(employees);

    //increment totalSalary by employee['annualSalary']
    totalSalary += employee.annualSalary;

    //clear input fields
    clearFields();

    //display employees in table when added
    displayEmployee();

    salaryHandler();

    return;

} //end addEmployee


function displayEmployee() {
    console.log('in display table area')
    $('.row-data').empty();
    let row = $('.row-data');
    for (let i=0; i < employees.length; i++) {
        row.append(`
        <tr>
        <td>${employees[i].fName}</td>
        <td>${employees[i].lName}</td>
        <td>${employees[i].employeeID}</td>
        <td>${employees[i].title}</td>
        <td>$${employees[i].annualSalary}</td>
        <td>
        <button class="btn delete blk-border" id="delete-employee-btnID">Delete</button>
        </td></tr>`);
    }
        
} // end displayEmployee


function salaryHandler() {
    // console.log('in calc salary');
    $('#total').empty();
    console.log(totalSalary);
    $('#total').text(`${totalSalary}`);

}


function onReady() {
    console.log('DOM is ready');
    $('#add-employee-btnID').click(validateEmployeeInfo);

    $('.row-data').click('#delete-employee-btnID', function(event) {
        console.log('button active!');
        $(event.target).closest('tr').remove(); //review this concept!!
    });

} //end onReady


// DOM listen function
$(onReady);

