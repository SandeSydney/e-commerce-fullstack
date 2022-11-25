/** The sql query below is intended to create a table called productsTable and provide all the column properties
*/

CREATE TABLE productsTable(
    id INT IDENTITY,
    name VARCHAR(300),
    description VARCHAR(500),
    price VARCHAR(10),
    image_url VARCHAR(250),
    discount_rate VARCHAR(10)
)