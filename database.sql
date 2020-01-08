DROP DATABASE IF EXISTS boilerplate;
CREATE DATABASE boilerplate;
USE boilerplate;

CREATE TABLE Address (
	id BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	number INT NOT NULL, 
	street VARCHAR(100) NOT NULL,
	neighborhood VARCHAR(100) NOT NULL,
	city VARCHAR(100) NOT NULL, 
	state VARCHAR(100) NOT NULL, # Two characters
	country VARCHAR(100) NOT NULL,
	zipCode VARCHAR(8) NOT NULL # String data, but filled with numbers only
);

CREATE TABLE User (
	cpf CHAR(11) NOT NULL PRIMARY KEY,
	name VARCHAR(200) NOT NULL,
	sex  ENUM('M','F') NOT NULL,
	birth DATE NOT NULL,
	addressId BIGINT NOT NULL,
	FOREIGN KEY (addressId) REFERENCES Address(id)
);