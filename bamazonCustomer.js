// import mysql node package
const mysql = require("mysql");

// import inquirer node package
const inquirer = require("inquirer");

// import console.table package for easy formatting
const cTable = require('console.table');

// create connection to the mysql database "bamazon"
const connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "Melvin Hernandez",
  
    // Your password
    password: "m39641542",
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
  });