// connect to db to perform queiries
const mysql = require('mysql2');
// interact with user in the command line
const inquirer = require('inquirer');
// dotenv for environmental variables
require('dotenv').config();
// print MySQL rows to the console.
require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employeeTracker_db'
});
const printMenuPrompts = () => {
    inquirer
        .prompt({
            name: 'choices',
            type: 'list',
            message: 'PLEASE SELECT A MENU OPTION...',
            choices: [
                'View All Employees',
                'View All Roles',
                'View All Departments',
                'View Employees By Manager',
                'Update Employee Role',
                'Add New Employee',
                'Add New Role',
                'Add New Department',
                // chalk.red('Update Employee Managers'),
                // chalk.red('Delete Employee'),
                // chalk.red('Delete Role'),
                // chalk.red('Delete Department'),
                'Exit Menu',
            ],



        })
        .then((answers) => {
            const { choices } = answers;

            if (choices === 'View All Employees') {
                viewAllEmployees();
            }
            if (choices === 'View All Roles') {
                viewAllRoles();
            }
            if (choices === 'View All Departments') {
                viewAllDepartments();
            }
            if (choices === 'View Employees By Manager') {
                viewEmployeesByManager();
            }
            if (choices === 'Update Employee Role') {
                updateEmployeeRole();
            }

            if (choices === 'Add New Employee') {
                addNewEmployee();
            }
            if (choices === 'Add New Role') {
                addNewRole();
            }
            if (choices === 'Add New Department') {
                addNewDepartment();
            }
            if (choices === 'Update Employee Managers') {
                updateEmployeeManagers();
            }
            if (choices === 'Delete Employee') {
                deleteEmployee();
            }
            if (choices === 'Delete Role') {
                deleteRole();
            }
            if (choices === 'Delete Department') {
                deleteDepartment();
            }
            if (choices === 'Exit Menu') {
                console.log('Logged out! Type npm start or node server.js to login')
                connection.end();
            }

        });

};

//SQL SELECT * FROM statements for choices
const viewAllEmployees = () => {
    const query = 'SELECT * FROM employee';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
    })
    printMenuPrompts();
}

const viewAllRoles = () => {
    const query = 'SELECT * FROM role';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
    })
    printMenuPrompts();
}



connection.connect((err) => {
    if (err) throw err;


    printMenuPrompts();

});
