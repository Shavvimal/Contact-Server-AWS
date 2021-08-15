DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    name varchar(100) NOT NULL,
    email varchar(255) NOT NULL,
    message varchar(10000) NOT NULL
);

