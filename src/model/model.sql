CREATE TABLE category(
    category_id serial PRIMARY KEY,
    category_name text not null
);
INSERT INTO category(category_name)
VALUES ('Milliy taomlar'),('Fastfood');
CREATE TABLE restaurant(
    restaurant_id serial PRIMARY KEY,
    restaurant_name text not null,
    category_id int REFERENCES category(category_id)
);

INSERT INTO restaurant(restaurant_name,category_id) VALUES
('Rayxon',1),
('Beshqazon',1),
('Oq tepa',2);
CREATE TABLE branches(
    branches_id serial PRIMARY KEY,
    branches_name text not null,
    branches_add text not null,
    restaurant_id int REFERENCES restaurant(restaurant_id)
);
INSERT into branches(branches_name,branches_add,restaurant_id) VALUES
('Rayxon Chilonzor','Chilonzor tuman 3-tor ko`cha',1);

CREATE TABLE meals(
    meal_id serial PRIMARY KEY,
    meal_name text not null,    
    price decimal(10,2),
    url text not null,
    branches_id int REFERENCES branches(branches_id)
);
INSERT into meals(meal_name,price,url,branches_id) VALUES
('Osh',30000,'https://cstor.nn2.ru/forum/data/forum/files/2019-02/225830295-nastol.com.ua-55314.jpg',1);

CREATE TABLE orders(
    order_id serial PRIMARY KEY,
    order_product text not null,
    order_p_count int not null,
    client_name text not null,
    client_add text not null,
    client_phone text not null,
    order_time text default current_timestamp
);
INSERT into orders(order_product,order_p_count,client_name,client_add,client_phone) VALUES
('manti',3,'shohruh','xorazm viloyati','943155666');