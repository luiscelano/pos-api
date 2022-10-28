-- CREATE DATABASE PROYECTO_POS
-- GO

USE PROYECTO_POS
GO

create table customer(
customerId int identity(1,1) not null,
firstName varchar(30),
lastName varchar(30),
createdAt date,
address varchar(50),
nit varchar(50),
CONSTRAINT PK_CUSTOMER PRIMARY KEY(customerId)
)


create table products(
productId int identity(1,1) not null,
title varchar(30), 
createdAt date,
price money,
isVisible int,
imageUrl varchar(100),
stock int,
category varchar(30),
CONSTRAINT PK_PRODUCTS PRIMARY KEY(productId)
)

create table invoice(
invoiceId int identity(1,1) not null,
customerName varchar(50),
address varchar(50),
nit varchar(30),
number varchar(20),
serie varchar(50),
createdAt date,
CONSTRAINT PK_INVOICE PRIMARY KEY(invoiceId)
)


create table orderSummary(
orderSummaryId int identity(1,1) not null,
createdAt date,
total money,
itemTotal money,
fulfillmentTotal money,
discountTotal money,
CONSTRAINT PK_ORDERSUMMARY PRIMARY KEY(orderSummaryId)
)

create table orders(
orderId int identity(1,1) not null,
orderNumber int identity(1, 1),
customerId int,
createdAt date,
displayStatus varchar(50),
orderSummaryId int,
totalItemQuantity int,
invoiceId int,
CONSTRAINT PK_ORDER PRIMARY KEY(orderId),
CONSTRAINT FK_ORDER_CUSTOMER FOREIGN KEY(customerId) REFERENCES customer(customerId),
CONSTRAINT FK_ORDER_SUMMARY FOREIGN KEY(orderSummaryId) REFERENCES orderSummary(orderSummaryId),
CONSTRAINT FK_ORDER_INVOICE FOREIGN KEY(invoiceId) REFERENCES invoice(invoiceId)
)

create table orderItems(
orderItemId int identity(1,1) not null,
orderId int,
productId int,
invoiceId int, 
tittle varchar(50),
createdAt date,
price money,
quantity int,
subtotal money,
CONSTRAINT PK_ORDERITEMS PRIMARY KEY(orderItemId),
CONSTRAINT FK_ORDERITEMS_ORDER FOREIGN KEY(orderId) REFERENCES orders(orderId),
CONSTRAINT FK_ORDERITEMS_PRODUCTS FOREIGN KEY(productId) REFERENCES products(productId),
CONSTRAINT FK_ORDERITEMS_INVOICE FOREIGN KEY(invoiceId) REFERENCES invoice(invoiceId)
)

GO
create trigger incrementOrderNumber
on orders FOR insert
as
update orders set orderNumber = orderId
where orderId = IDENT_CURRENT('order')