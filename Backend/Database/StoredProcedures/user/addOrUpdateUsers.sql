CREATE OR ALTER PROCEDURE usp_InsertUpdateUser
    (
    @email VARCHAR(200),
    @username VARCHAR(200),
    @password VARCHAR(200),
    @IsEmailed BIT = 0,
    @IsDeleted BIT = 0
)
AS
BEGIN
    IF EXISTS (SELECT *
    FROM [dbo].[usersTable]
    WHERE email = @email)
        BEGIN
        UPDATE dbo.usersTable SET 
                username = @username,
                password = @password
                WHERE email = @email
        PRINT 'User Updated Successfully!'
    END
    ELSE
        BEGIN
        INSERT INTO dbo.usersTable
        VALUES
            (@email, @username, @password, @IsEmailed, @IsDeleted)
        PRINT 'User Added Successfully!'
    END
END