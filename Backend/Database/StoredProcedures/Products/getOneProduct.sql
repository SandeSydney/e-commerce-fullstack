/** This sql script creates or modifies a procedure that targets to return only a single item from the database. The item fetched will be that which has the same id as the passed parameter.
*/

CREATE OR ALTER PROC getOneProduct (@id INT)
AS
BEGIN

    SELECT *
    FROM dbo.productsTable
    WHERE
        id = @id

END