-- PROCEDURE to update data or insert new data based on the parameters supplied. If the record, based on the image_url exists, 
-- then the record updates. If the record isn't present, then the data is added into the table
CREATE OR ALTER PROCEDURE usp_InsertUpdateProduct
    (
    @name VARCHAR(300),
    @description VARCHAR(500),
    @price VARCHAR(10),
    @image_url VARCHAR(250),
    @discount_rate VARCHAR(10),
    @IsDeleted BIT = 0
)
AS
BEGIN
    IF EXISTS(SELECT *
    FROM [productsTable]
    WHERE image_url=@image_url)
        BEGIN
        UPDATE [productsTable] SET
            name = @name,
            description = @description,
            price = @price,
            discount_rate = @discount_rate
            WHERE image_url=@image_url
        PRINT 'Product Details Updated!'
    END
    ELSE
        BEGIN
        INSERT INTO [productsTable]
        VALUES
            (@name, @description, @price, @image_url, @discount_rate, @IsDeleted)
        PRINT 'New Product Details Added!'
    END
END
