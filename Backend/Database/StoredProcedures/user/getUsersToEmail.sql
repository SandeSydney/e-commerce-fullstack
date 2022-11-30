CREATE OR ALTER PROCEDURE usp_GetUsersToEmail
AS 
BEGIN
    SELECT * FROM dbo.usersTable WHERE IsEmailed = 0 AND IsDeleted = 0
END