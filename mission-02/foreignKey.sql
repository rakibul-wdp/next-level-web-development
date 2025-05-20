CREATE TABLE "user"(
  id SERIAL PRIMARY KEY,
  username VARCHAR(25) NOT NULL
)

CREATE TABLE post(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  user_id INTEGER REFERENCES "user"(id)
)

ALTER TABLE post
  ALTER COLUMN user_id SET NOT NULL;

INSERT INTO "user" (username) VALUES
('akash'),
('batash'),
('sagor'),
('nodi');

SELECT * from "user";

INSERT INTO post (title, user_id) VALUES
('Enjoying sunny data with Akash!', 2),
('Batash just shared an amazing recipe!', 1),
('Exploring adventures with Sagor', 4),
('Nodi wisdom always leaves me inspired', 4);

DROP TABLE post;
DROP TABLE "user";

SELECT * from post;

INSERT INTO post (title, user_id) VALUES('test', NULL);

-- Deletion constraint on DELETE user
-- Cascading Deletion -> ON DELETE CASCADE
-- Setting NULL -> ON DELETE SET NULL
-- Restrict DEletion -> ON DELETE RESTRICT / ON DELETE NO ACTION (default)
-- Set Default value -> ON DELETE SET DEFAULT

DELETE FROM "user"
  WHERE id = 4;

SELECT title, username FROM post
  JOIN "user" on post.user_id = "user".id;

SELECT * FROM post
  JOIN "user" on post.user_id = "user".id;

SELECT "user".id FROM post
  JOIN "user" ON post.user_id = "user".id;

SELECT p.id FROM post p
  JOIN "user" ON p.user_id = "user".id;

SELECT * FROM post p
  JOIN "user" u ON p.user_id = u.id;

SELECT * FROM post p
  INNER JOIN "user" u ON p.user_id = u.id;

SELECT * FROM "user"
  JOIN post ON post.user_id = "user".id;

INSERT INTO post (id, title, user_id) VALUES(5, 'this is a test post title', NULL);