
let employees = [];

function onReady() {
    console.log('DOM is ready');
    $('#add-employee-btnID').click(validateEmployeeInfo);

    //below function removes div the button is contained in when clicked
    $('#delete-employee-btnID').click(function(event) {
        $('.content-del').remove();
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

function displayEmployee(event) {
    console.log('in display table area')
    $('employee-display').empty();
    for (let i=0; i < employees.length; i++) {
        console.log(`${employees[i].fName}`)
        $('.employee-display').append(`
            <li>
                <table>
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Employee ID</td>
                            <td>Title</td>
                            <td>Salary</td>
                         </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${employees[i].fName}</td>
                            <td>${employees[i].lName}</td>

                        </tr>
                    </tbody>
                </table>
            </li>
            `);
    }
    
} // end displayEmployee

// DOM listen function
$(onReady);

