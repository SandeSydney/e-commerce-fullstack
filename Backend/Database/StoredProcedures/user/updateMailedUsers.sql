CREATE OR ALTER PROCEDURE usp_UpdateMailedUsers(@id INT)
AS
BEGIN
    UPDATE dbo.usersTable SET IsDeleted = 1 WHERE id= @id
END