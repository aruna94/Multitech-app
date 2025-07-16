-- Create a new SQL Server login
CREATE LOGIN myuser WITH PASSWORD = 'MyStrongP@ssw0rd';

-- Grant access to a specific database
USE manytech;
CREATE USER myuser FOR LOGIN myuser;

-- Optional: Give the user read/write access
EXEC sp_addrolemember 'db_datareader', 'myuser';
EXEC sp_addrolemember 'db_datawriter', 'myuser';

