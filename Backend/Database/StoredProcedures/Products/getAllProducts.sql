/* * This is an sql script to create or modify a Precedure that is used to select every product from the productsTable in the database
*/

CREATE OR ALTER PROC getAllProducts
AS
BEGIN

SELECT * FROM dbo.productsTable

END