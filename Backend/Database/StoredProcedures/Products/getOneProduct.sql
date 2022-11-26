-- usp_GetOneProduct is a procedure definition that gets a single product from the producsTable in our database
-- this procedure selects the product that is referenced by the id provided its not deleted
CREATE OR ALTER PROC usp_GetOneProduct (@id INT)
AS
BEGIN

    SELECT *
    FROM dbo.productsTable
    WHERE
        id = @id AND IsDeleted = 0

END
