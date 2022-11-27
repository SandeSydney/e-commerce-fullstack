CREATE OR ALTER PROCEDURE usp_GetUser(@email VARCHAR(200))
AS
BEGIN
    SELECT * FROM dbo.usersTable WHERE email = @email AND IsDeleted = 0
END