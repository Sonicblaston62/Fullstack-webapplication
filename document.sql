-- schema.sql
CREATE TABLE IF NOT EXISTS games (
  id SERIAL PRIMARY KEY,
  developer VARCHAR(100),
  publisher VARCHAR(100),
  name VARCHAR(200) NOT NULL,
  cover VARCHAR(200),
  genre VARCHAR(100),
  release_date DATE,
  description TEXT
);
