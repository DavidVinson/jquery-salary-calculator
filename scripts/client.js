
let employees = [];
let totalSalary = 0;


function validateEmployeeInfo(event) {
    let fName = $('#fNameID').val().toLowerCase();
    let lName = $('#lNameID').val().toLowerCase();
    let employeeID = $('#employeeID').val();
    let title = $('#titleID').val();
    let annualSalary = $('#annualSalaryID').val();

    //check for missing info
    if (!fName || !lName || !employeeID || !title || !annualSalary) {
        console.log('need more info');
        // $('.container-form input').css('border', '2px red solid');
        // $('#add-employee-btnID').css({'background-color': 'red', 'color': 'white'});

        clearFields();
    }

    //set these two to numbers
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
    //build employee as an object literal
    const employee = {
        fName,
        lName,
        employeeID,
        title,
        annualSalary
    }

    //add new employee object to empoloyees array
    employees.push(employee);
    console.log(employees);

    //increment totalSalary by employee annualSalary
    totalSalary += employee.annualSalary;

    //clear input fields
    clearFields();

    //display employees in table when added
    displayEmployee();

    //do the salary calculations
    salaryHandler();

    return;

} //end addEmployee


function displayEmployee() {
    // displays employee info on the DOM
    // console.log('in display table area')
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
        <button class="btn delete blk-border" id="delete-employee-btnID-${employees[i].employeeID}">Delete</button>
        </td></tr>`);

        // console.log(`'<button class="btn delete blk-border" id="delete-employee-btnID-${employees[i].employeeID}">Delete</button>'`)
    }
} // end displayEmployee


function salaryHandler() {
    // console.log('in calc salary');
    if (!totalSalary) {
        return;
    }
    
    let monthly = (totalSalary / 12).toFixed(2);
    $('#total').empty();
    // console.log(totalSalary);
    $('#total').text(`${monthly}`);

    if (totalSalary > 20000) {
        $('.currency').addClass("red");
    }

    return;

} // end salaryHandler


function removeEmployee(buttonID) {
    //used buttionID to get index of employee in array and remove that index

    // console.log('in remove function');
    // console.log(buttonID);
    // console.log(buttonID.target); //gives me the button id that trigged the event
    // console.log(typeof(buttonID.target)); //gives me an object to work with
    // console.log(buttonID.target.id);
    let rmIndex = buttonID.target.id;
    let match = rmIndex.match(/(\d+)/);
    // console.log(`EmployeeID: ${match[0]}`);
    let mIndex = parseInt(match[0]);
    // console.log(typeof(mIndex));
    // console.log(mIndex);
    let setDeletions = [];
    for (let i=0; i < employees.length; i++) {
        if (mIndex === employees[i].employeeID) {
            console.log(`Removed employeeID: ${match[0]}`);
            employees.splice(i, 1);
        }

    } return;
} // end removeEmployee


function onReady() {
    console.log('DOM is ready');
    $('#add-employee-btnID').click(validateEmployeeInfo);

    $('.row-data').click('#delete-employee-btnID', function(event) {
        console.log('button active!');
        $(event.target).closest('tr').remove(); //removes row from DOM
        // TODO: rm from employee array and decrement salary
        removeEmployee(event);
    });

    console.log(employees);

} //end onReady


// DOM listen function
$(onReady);

