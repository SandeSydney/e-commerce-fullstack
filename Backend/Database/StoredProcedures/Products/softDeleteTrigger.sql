-- This trigger interrupts the normal delete of a product item from the products table. 
-- It grabs the record to be deleted and flips the IsDeleted bit of the record. 
CREATE OR ALTER TRIGGER SoftDelete_Products ON dbo.productsTable
    INSTEAD OF DELETE AS
    BEGIN
    SET NOCOUNT ON;
    UPDATE dbo.productsTable
        SET IsDeleted = 1
        WHERE id IN (SELECT id
    FROM deleted)
END
