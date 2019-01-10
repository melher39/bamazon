CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  department_name varchar(50) NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple 85W MagSafe 2 Power Adapter", "Electronics", 79.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kenmore Mini Fridge", "Home Appliances", 199.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Q-SEE 16 Channel Security Camera System - POE", "Electronics", 899.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Acer 27 Monitor", "Electronics", 129.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ice Mountain Water - 24 Pack", "Grocery", 5.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Comfortable Lawn Chair", "Home Goods", 9.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung Wireless Charger", "Electronics", 59.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Advanced Therapy Lip Balm", "Health & Beauty", 1.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike Sandal", "Clothing", 19.99, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HDMI Cable - 3 FT", "Electronics", 5.99, 40);
