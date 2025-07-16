CREATE DATABASE manytech;
USE manytech;
CREATE TABLE machine1 (
    id INT PRIMARY KEY IDENTITY(1,1),
    machine_name VARCHAR(100),
    temperature DECIMAL(5,2),
    status VARCHAR(20),
    last_updated DATETIME DEFAULT GETDATE()
);

CREATE TABLE machine2 (
    id INT PRIMARY KEY IDENTITY(1,1),
    machine_name VARCHAR(100),
    temperature DECIMAL(5,2),
    status VARCHAR(20),
    last_updated DATETIME DEFAULT GETDATE()
);

-- Add more tables like machine3, machine4 as needed...
USE manytech;
GO

-- Insert into machine1
INSERT INTO machine1 (machine_name, temperature, status)
VALUES 
('Lathe Machine A', 67.5, 'active'),
('Lathe Machine B', 72.3, 'inactive'),
('Lathe Machine C', 69.8, 'maintenance');

-- Insert into machine2
INSERT INTO machine2 (machine_name, temperature, status)
VALUES 
('Drill Machine A', 60.1, 'active'),
('Drill Machine B', 64.5, 'active'),
('Drill Machine C', 71.2, 'inactive');


select * from machine1;*/


SELECT TABLE_SCHEMA, TABLE_NAME
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_TYPE = 'BASE TABLE';

SELECT COLUMN_NAME, DATA_TYPE, CHARACTER_MAXIMUM_LENGTH
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = 'machine1';

SELECT *
FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
WHERE TABLE_NAME = 'machine1';

SELECT
    kc.table_name,
    kc.column_name,
    tc.constraint_type
FROM 
    INFORMATION_SCHEMA.KEY_COLUMN_USAGE kc
JOIN 
    INFORMATION_SCHEMA.TABLE_CONSTRAINTS tc
ON 
    kc.constraint_name = tc.constraint_name
WHERE 
    tc.constraint_type = 'PRIMARY KEY';
