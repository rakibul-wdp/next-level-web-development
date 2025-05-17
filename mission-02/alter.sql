SELECT * from person;
ALTER TABLE person
  ADD COLUMN email VARCHAR(25) DEFAULT 'default@gmail.com' NOT NULL;

ALTER TABLE person
  DROP COLUMN email;

ALTER TABLE person
  RENAME COLUMN age to user_age;

ALTER TABLE person
  ALTER COLUMN user_name TYPE VARCHAR(50);

ALTER TABLE person
  ALTER COLUMN user_age SET NOT NULL;

ALTER TABLE person
  ALTER COLUMN user_age DROP NOT NULL;

ALTER TABLE person
  ADD CONSTRAINT unique_person_user_age UNIQUE(user_age);

ALTER TABLE person
  DROP CONSTRAINT unique_person_user_age;

TRUNCATE TABLE person;

DROP TABLE person;

INSERT INTO person VALUES(11, 'test2', 45, 'test@gmail.com');