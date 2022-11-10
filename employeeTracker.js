// connect to db to perform queiries
const mysql = require('mysql2');
// interact with user in the command line
const inquirer = require('inquirer');
// dotenv for environmental variables
require('dotenv').config();
// print MySQL rows to the console.
require('console.table');