# BAMAZON

Welcome to my online store, **Bamazon!**

The purpose of this app is for you to be able to purchase an item of your choice from my online store. You can purchase as much quantity as you'd like, as long as it's in stock.

*This is a CLI app. You will also need to have access to a mysql database with the table "products". Demo data for this table can be found in the `seeds-bamazon.sql` file*

Before you begin, make sure you install the proper packages (these can be found via npm):
* mysql 
* inquirer
* console.table

## Rundown

* In order to start the app, begin by typing **`node bamazonCustomer`** in your terminal.
    * You will then be presented with the table containing the items for sale. Each item has a unique ID, product name, its price (in dollars) and the available quantity.

* In the same instance, you will be prompted to choose an item for purchase based on its ID. *You must enter a number (1-10).*

* After you have chosen an item, you will then be asked the quantity (in units) you would like to purchase. *You must enter a number.*
    * If the amount you requested is not availble in the inventory, the transaction will be denied and you will have to start over by selecting an item.
    * If the amount you requested is available for purchase, you will be asked for the total amount due and thanked for being a customer!

* **BOOM!**

If you were to run the app again, you would notice that the previously purchased item's stock_quantity has now decreased by the amount that was purchased. The same is true if you were to check the table in the mysql database.

Follow this link to see a video demo of this program fully working: https://drive.google.com/file/d/1gdRBXtHh6Q9gHKawSMV72sr2KDTP_cpv/view?usp=sharing

Make sure to watch the video in 1080p HD quality so you can clearly see the text on the screen.

Thanks for your time! Hope you enjoyed this project.
