/*

A trigger is a database object in PostgreSQL (and other database management systems) that automatically executes a specified set of actions in response to certain database events or conditions.

*/

-- Table-level Events:
  -- INSERT, UPDATE, DELETE, TRUNCATE
-- Database-level Events
  -- Database Startup, Database Shutdown, Connection start and end etc

-- CREATE TRIGGER trigger_name
-- [BEFORE | AFTER \ INSTEAD OF] [INSERT | UPDATE | DELETE | TRUNCATE]
-- ON table_name
-- [FOR EACH ROW]
-- EXECUTE FUNCTION function_name();

CREATE TABLE my_users
(
  user_name VARCHAR(50),
  email VARCHAR(100)
)

INSERT INTO my_users VALUES('Abul', 'abul@gmail.com'), ('Babul', 'babul@gmail.com');

SELECT * FROM my_users;

CREATE TABLE deleted_users_audit
(
  deleted_user_name VARCHAR(50),
  deletedAT TIMESTAMP
)

SELECT * FROM deleted_users_audit;

CREATE OR REPLACE FUNCTION save_deleted_user()
RETURNS TRIGGER
LANGUAGE plpgsql
AS
$$
  BEGIN
    INSERT INTO deleted_users_audit VALUES(OLD.user_name, now());
    RAISE NOTICE 'Deleted user audit log created';
    RETURN OLD;
  END
$$

CREATE OR REPLACE TRIGGER save_deleted_user_trigger
BEFORE DELETE
ON my_users
FOR EACH ROW
EXECUTE FUNCTION save_deleted_user();

DELETE FROM my_users WHERE user_name = 'Babul';