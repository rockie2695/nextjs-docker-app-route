CREATE DATABASE IF NOT EXISTS `test-database`;

USE `test-database`;

CREATE TABLE IF NOT EXISTS `test-table` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    quantity INT NOT NULL
);

INSERT INTO
    `test-table` (name, quantity)
VALUES
    ('Apple', 10),
    ('Banana', 20),
    ('Cherry', 30);