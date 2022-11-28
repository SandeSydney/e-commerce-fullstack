CREATE TABLE usersTable
(
    id INT IDENTITY,
    email VARCHAR(200) UNIQUE,
    username VARCHAR(200),
    password VARCHAR(200),
    IsEmailed   BIT NOT NULL DEFAULT 0,
    IsDeleted BIT NOT NULL DEFAULT 0
);