CREATE TABLE "user"(
  id SERIAL PRIMARY KEY,
  username VARCHAR(25) NOT NULL
)

CREATE TABLE post(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  user_id INTEGER REFERENCES "user"(id)
)

INSERT INTO "user" (username) VALUES
('akash'),
('batash'),
('sagor'),
('nodi');

INSERT INTO post (title, user_id) VALUES
('Enjoying sunny data with Akash!', 2),
('Batash just shared an amazing recipe!', 1),
('Exploring adventures with Sagor', 4),
('Nodi wisdom always leaves me inspired', 4);

DROP TABLE post;
DROP TABLE "user";

SELECT * FROM "user";
SELECT * FROM post;

SELECT title, username FROM post
  JOIN "user" on post.user_id = "user".id;

SELECT * FROM post
  JOIN "user" on post.user_id = "user".id;

SELECT "user".id FROM post
  JOIN "user" on post.user_id = "user".id;

SELECT * FROM post as p
  JOIN "user" as u on p.user_id = u.id;

SELECT * FROM "user"
  JOIN post on post.user_id = "user".id;

INSERT INTO post (id, title, user_id) VALUES
(5, 'Enjoying sunny data with Akash!', NULL);

SELECT * FROM post as p
  LEFT JOIN "user" u on p.user_id = u.id;
SELECT * FROM post as p
  LEFT OUTER JOIN "user" u on p.user_id = u.id;

SELECT * FROM post as p
  RIGHT JOIN "user" u on p.user_id = u.id;

SELECT * FROM post as p
  FULL JOIN "user" u on p.user_id = u.id;