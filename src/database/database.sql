CREATE DATABASE postgresapi;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  email TEXT
);

INSERT INTO users(name, email) VALUES
  ('anbreaker', 'anbreaker@ibm.com'),
  ('jeje', 'jeje@pt.com'),
  ('magali', 'magali@espt.com');
