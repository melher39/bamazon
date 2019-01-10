// import mysql node package
const mysql = require("mysql");

// import inquirer node package
const inquirer = require("inquirer");

// import console.table package for nicer output/formatting
const cTable = require('console.table');

// create connection to the mysql database "bamazon"
const connection = mysql.createConnection({
    host: "localhost",

    // connection port
    port: 3306,

    // my username
    user: "Melvin Hernandez",

    // my password
    password: "m39641542",
    database: "bamazon"
});

// if the connection is successful, then show the ID, if not an error
connection.connect((err) => {
    if (err) throw err;

    // display the connection ID, will comment out once this assignment is finished
    console.log("connected as id " + connection.threadId);

    // display the items for sale at the very start of the program
    displayItemsForSale();
});

// display the items in a table
const displayItemsForSale = () => {

    // select only the columns we want to be displayed from the database table
    connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", (err, res) => {
        if (err) throw err;

        //   display these results in a table
        console.table(res);

        // once the results have been displayed, run the inquirer prompts
        buyItem();

    })

};

// function that will prompt the user and find out which item they wish to buy
const buyItem = () => {

    // these answers will be stored and accessed later
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
    // with these answers, use them to see if the store has enough in stock
    .then( (answer) => {

        // search the database for the item chosen by the user and its quantity in stock
        let query = "SELECT stock_quantity, price FROM products WHERE ?";
        connection.query(query, { item_id: answer.item }, (err,res) => {

            // store the key(value) of the selected item's stock_quantity column in this variable
            let stockQuantity = res[0].stock_quantity;

            let itemPrice = res[0].price;

            // testing for my own understanding of what we were accessing...
            // console.log("this is supposed to work " , stockQuantity);
            // console.log("this is something else " , res[0]);

            // if there is insufficient items in inventory to fulfill the customer's request, then let them know this
            if (parseInt(answer.quantity) > parseInt(stockQuantity) ) {
                console.log("Insufficient quantity! \nPlease choose a lower quantity of this item and try again!");
            }
            else{

                connection.query("UPDATE products SET ? WHERE ? ",
                [
                    {
                        stock_quantity: stockQuantity - answer.quantity
                    },
                    {
                        item_id: answer.item
                    }
                ],
                (err) => {
                    if (err) throw err;

                    let totalPrice = itemPrice * answer.quantity;

                    console.log("The total amount due is: $" + totalPrice + "\nThanks for shopping with us!");
                }
                );

                
            }

            // end the connection so it won't be running in the background
            connection.end();
            
        });
        

    });
}

const successfulPurchase = () => {

}

