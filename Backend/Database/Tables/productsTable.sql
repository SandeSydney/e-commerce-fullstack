CREATE TABLE productsTable
(
    id VARCHAR(100) NOT NULL,
    name VARCHAR(300),
    description VARCHAR(500),
    price VARCHAR(10),
    image_url VARCHAR(250),
    discount_rate VARCHAR(10),
    IsDeleted BIT NOT NULL DEFAULT 0
)