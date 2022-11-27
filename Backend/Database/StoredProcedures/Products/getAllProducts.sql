-- usp_GetAllProducts is a procedure definition that gets all the products from the producsTable in our database
-- this procedure selects all the products that have the IsDeleted flag set to bit 0, meaning they aren't deleted
CREATE OR ALTER PROC usp_GetAllProducts
AS
BEGIN
    SELECT *
    FROM dbo.productsTable
    WHERE IsDeleted = 0
END
