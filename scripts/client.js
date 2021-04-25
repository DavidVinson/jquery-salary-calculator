
let employees = [];

function onReady() {
    console.log('DOM is ready');
    $('#add-employee-btnID').click(validateEmployeeInfo);

    $('.row-data').click('#delete-employee-btnID', function(event) {
        console.log('button active!');
        $(event.target).closest('tr').remove();
    });

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
        // $('.container-form input').css('border', '2px red solid');
        // $('#add-employee-btnID').css({'background-color': 'red', 'color': 'white'});

        clearFields();
    }

    else {
        employeeID = Number(employeeID);
        annualSalary = Number(annualSalary);

        addEmployee(fName, lName, employeeID, title, annualSalary);
    }

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
    employees.push(employee);
    console.log(employees);

    //clear input fields
    clearFields();

    //display employees in table
    displayEmployee();

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
        <td>${employees[i].annualSalary}</td>
        <td>
        <button class="btn delete blk-border" id="delete-employee-btnID">Delete</button>
        </td></tr>`);
    }
        
} // end displayEmployee

// DOM listen function
$(onReady);

