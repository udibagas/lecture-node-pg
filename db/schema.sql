DROP TABLE IF EXISTS "Orders", "Customers";

CREATE TABLE IF NOT EXISTS "Customers" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS "Orders" (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productName" VARCHAR(50) NOT NULL,
    quantity INTEGER NOT NULL,
    "productPrice" INTEGER NOT NULL,
    "CustomerId" INTEGER NOT NULL REFERENCES "Customers" (id)
);