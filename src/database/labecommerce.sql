-- Active: 1687300558717@@127.0.0.1@3306

CREATE TABLE IF NOT EXISTS USERS(
    ID TEXT PRIMARY KEY NOT NULL,
    NAME TEXT NOT NULL,
    EMAIL TEXT UNIQUE NOT NULL,
    PASSWORD TEXT NOT NULL,
    CREATED_AT TEXT NOT NULL
);

INSERT INTO USERS(ID, NAME, EMAIL, PASSWORD, CREATED_AT)
VALUES ('a1', 'Dhouglas', 'dhouglas@example.com', '123456', '31/10/1995'),
       ('a2', 'Jacy', 'jacy@example.com', '654321', '08/10/2000'),
       ('a3', 'Alfredo', 'alfredo@example.com', 'miau', '14/07/2022');

CREATE TABLE IF NOT EXISTS PRODUCTS(
    ID TEXT PRIMARY KEY NOT NULL,
    NAME TEXT NOT NULL,
    PRICE REAL NOT NULL,
    DESCRIPTION TEXT NOT NULL,
    IMAGE_URL TEXT NOT NULL
);

INSERT INTO PRODUCTS (ID, NAME, PRICE, DESCRIPTION, IMAGE_URL)
VALUES ('p1', 'Placa de Pix Acrilico 1 QRCODE', 70, 'Placa de pix em acrílico com 1 Qr Code', 'link da imagem da placa de pix 1 QRCODE'),
       ('p2', 'Placa de Pix Acrilico 2 QRCODE', 120, 'Placa de pix em acrílico com 2 Qr Code', 'link da imagem da placa de pix 2 QRCODE'),
       ('p3', 'Placa de Pix Acrilico 3 QRCODE', 170, 'Placa de pix em acrílico com 3 Qr Code', 'link da imagem da placa de pix 3 QRCODE'),
       ('p4', 'Placa de Pix Acrilico 4 QRCODE', 220, 'Placa de pix em acrílico com 4 Qr Code', 'link da imagem da placa de pix 4 QRCODE'),
       ('p5', 'Placa de Pix MDF 1 QRCODE', 50, 'Placa de pix em MDF com 1 Qr Code', 'link da imagem da placa de pix MDF 1 QRCODE');


-- EXERCÍCIO 1

-- A
SELECT * FROM USERS;

-- B
SELECT * FROM PRODUCTS;

-- C
SELECT * FROM PRODUCTS WHERE NAME LIKE '%ACRILICO%';

-- C - TESTE 2
SELECT * FROM PRODUCTS WHERE NAME LIKE '%MDF%';

-- EXERCÍCIO 2

-- A
INSERT INTO USERS(ID, NAME, EMAIL, PASSWORD, CREATED_AT)
VALUES ('a4', 'Zoe', 'zoe@example.com', 'zoe123', '14/06/2022');

-- B
INSERT INTO PRODUCTS(ID, NAME, PRICE, DESCRIPTION, IMAGE_URL)
VALUES ('p6', 'Placa de Pix MDF 2 QRCODE', 90, 'Placa de pix em MDF com 2 Qr Code', 'link da imagem da placa de pix MDF 2 QRCODE');

-- EXERCÍCIO 3

-- A
DELETE FROM USERS WHERE ID = 'a4';

-- B
DELETE FROM PRODUCTS WHERE ID = 'p6';

-- C

UPDATE PRODUCTS SET NAME = 'teste', PRICE = 150, DESCRIPTION = 'teste', IMAGE_URL = 'teste' WHERE ID = 'p6';

-- EXERCÍCIO 1

-- A

CREATE TABLE IF NOT EXISTS PURCHARSES(
    ID TEXT PRIMARY KEY NOT NULL,
    BUYER TEXT NOT NULL,
    TOTAL_PRICE REAL NOT NULL,
    CREATED_AT TEXT NOT NULL,
    FOREIGN KEY (BUYER) REFERENCES USERS (ID)
);

-- EXERCÍCIO 2

-- A

SELECT * FROM PURCHARSES;

-- B

INSERT INTO PURCHARSES(ID, BUYER, TOTAL_PRICE, CREATED_AT)
VALUES ('pd1', 'a1', 300, '25/06/2023'),
       ('pd2', 'a2', 450, '26/06/2023'),
       ('pd3', 'a3', 100, '27/06/2023');

-- C

UPDATE PURCHARSES SET TOTAL_PRICE = 200 WHERE ID = 'pd3';

-- EXERCÍCIO 3

SELECT PURCHARSES.ID, PURCHARSES.BUYER, USERS.NAME, USERS.EMAIL, PURCHARSES.TOTAL_PRICE, PURCHARSES.CREATED_AT
FROM PURCHARSES
JOIN USERS ON USERS.ID = PURCHARSES.BUYER;