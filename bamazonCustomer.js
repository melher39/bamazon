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

// if the connection is successful, then show the ID, if not an error
connection.connect((err) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayItemsForSale();
    buyItem();
    // end the connection so it won't be running in the background
    // connection.end();
});

// display the items in a table
const displayItemsForSale = () => {

    // select only the columns we want to be displayed from the database table
    connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", (err, res) => {
        // if (err) throw err;

        //   display these results in a table
        console.table(res);

    })
    // buyItem();

};

// function that will prompt the user and find out which item they wish to buy
const buyItem = () => {
    inquirer.prompt([
        {
            name: "item",
            type: "input",
            message: "What is the item_id of the item you would like to purchase?"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many units of this product would you like?"
        }
    ])
    // with the answer, use it to see if the store has enough in stock
    .then( (answer) => {
        // console.log(answer.item + answer.quantity);
        // search the database for the item chosen by the user and its quantity in stock
        let query = "SELECT stock_quantity FROM products WHERE ?";
        connection.query(query, { item_id: answer.item }, (err,res) => {

            // store the key(value) of the selected item's stock_quantity column in this variable
            let stockQuantity = res[0].stock_quantity;

            console.log("this is supposed to work " , stockQuantity);
            console.log("this is something else " , res[0].stock_quantity);
            console.log("let's try something else " , res.stock_quantity);

            // if there is insufficient items in inventory to fulfill the customer's request, then let them know this
            if (parseInt(answer.quantity) > parseInt(stockQuantity) ) {
                console.log("Insufficient quantity! \nPlease choose a lower quantity of this item and try again!");
            }
            else{
                console.log("not working buddy!");
            }
            
        });
        connection.end();

    });
}

