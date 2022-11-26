-- Create a procedure to do the normal deletes. The item being deleted will by default be sent to the virtual 'delete' table
-- from calling this action, the SoftDelete_Products Trigger will be called and the IsDeleted bit flipped
CREATE OR ALTER PROCEDURE usp_DeleteProduct(@id INT)
AS
BEGIN
    DELETE FROM dbo.productsTable
    WHERE id = @id
    PRINT 'Product Data Deleted Successfully'
END
