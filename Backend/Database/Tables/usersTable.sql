CREATE TABLE usersTable
(
    id INT IDENTITY,
    email VARCHAR(200) UNIQUE,
    username VARCHAR(200),
    password VARCHAR(200),
    IsDeleted BIT NOT NULL DEFAULT 0
);