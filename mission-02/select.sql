CREATE TABLE student (
  student_id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  age INT,
  grade CHAR(2),
  course VARCHAR(50),
  email VARCHAR(100),
  dob DATE,
  blood_group VARCHAR(5),
  country VARCHAR(50)
)

INSERT INTO student (first_name, last_name, age, grade, course, email, dob, blood_group, country)
VALUES
    ('John', 'Doe', 20, 'A', 'Math', 'john.doe@example.com', '2004-01-15', 'O+', 'USA'),
    ('Jane', 'Smith', 21, 'B', 'History', 'jane.smith@example.com', '2003-05-20', 'A-', 'Canada'),
    ('Alice', 'Johnson', 19, 'A', 'Physics', 'alice.johnson@example.com', '2002-11-08', 'B+', 'UK'),
    ('Bob', 'Williams', 22, 'C', 'Chemistry', 'bob.williams@example.com', '2001-07-03', 'AB-', 'Australia'),
    ('Charlie', 'Brown', 20, 'B', 'English', NULL, '2004-03-30', 'A+', 'New Zealand'),
    ('Emman', 'Jones', 23, 'B', 'Biology', 'emma.jones@example.com', '2000-09-12', 'A-', 'USA'),
    ('Michael', 'Johnson', 22, 'C', 'Physics', 'michael.johnson@example.com', '2002-04-05', 'O-', 'Canada'),
    ('Olivia', 'Davis', 21, 'A', 'Math', 'olivia.davis@example.com', '2003-12-18', 'B-', 'UK'),
    ('William', 'Taylor', 20, 'B', 'Chemistry', NULL, '2004-08-30', 'A+', 'Australia'),
    ('Sophia', 'Brown', 24, 'A', 'English', 'sophia.brown@example.com', '1999-06-25', 'AB+', 'New Zealand'),
    ('Liam', 'Miller', 19, 'C', 'History', 'liam.miller@example.com', '2002-02-10', 'A-', 'USA'),
    ('Ava', 'Anderson', 22, 'B', 'Biology', 'ava.anderson@example.com', '2000-11-15', 'B+', 'Canada'),
    ('Noah', 'Martinez', 21, 'A', 'Physics', NULL, '2001-04-28', 'O+', 'UK'),
    ('Isabella', 'Clark', 20, 'C', 'Chemistry', 'isabella.clark@example.com', '2003-10-03', 'A-', 'Australia'),
    ('Ethan', 'Garcia', 23, 'B', 'Math', 'ethan.garcia@example.com', '2000-07-22', 'B-', 'New Zealand'),
    ('Sophie', 'Moore', 22, 'A', 'English', 'sophie.moore@example.com', '2002-12-05', 'A+', 'USA'),
    ('Mia', 'Hernandez', 20, 'C', 'History', 'mia.hernandez@example.com', '2004-05-18', 'AB-', 'Canada'),
    ('James', 'Young', 21, 'B', 'Biology', 'james.young@example.com', '2003-02-08', 'O-', 'UK'),
    ('Emma', 'Gonzalez', 24, 'A', 'Physics', NULL, '1999-09-30', 'B+', 'Australia'),
    ('Miam', 'Wright', 19, 'C', 'Math', 'liam.wright@example.com', '2002-06-14', 'A+', 'New Zealand');

SELECT FROM student;

SELECT * FROM student;

SELECT email, age, blood_group FROM student;

SELECT email as "Student Email", age FROM student;

SELECT * FROM student ORDER BY first_name ASC;
SELECT * FROM student ORDER BY first_name DESC;
SELECT * FROM student ORDER BY age DESC;
SELECT * FROM student ORDER BY dob DESC;

SELECT country from student;
SELECT country from student ORDER BY country ASC;
SELECT DISTINCT country FROM student;

SELECT DISTINCT blood_group FROM student;

SELECT * FROM student
  WHERE country = 'USA';

SELECT * FROM student
  WHERE grade = 'A' AND course = 'Physics';

SELECT * FROM student
  WHERE blood_group = 'A+';

SELECT * FROM student
  WHERE country = 'USA' OR country = 'Australia';

SELECT * FROM student
  WHERE (country = 'USA' OR country = 'Australia') AND age = 20;

SELECT * FROM student
  WHERE age <> 20;

SELECT UPPER(first_name) as first_name_in_upper_case from student;

SELECT concat(first_name, ' ', last_name) FROM student;

SELECT length(first_name) FROM student;

SELECT avg(age) from student;

SELECT max(age) FROM student;

SELECT sum(age) FROM student;

SELECT count(*) FROM student;

SELECT max(length(first_name)) FROM student;

SELECT * from student
  WHERE NOT country = 'USA';

SELECT NULL = NULL;

SELECT * FROM student
  WHERE email IS NOT NULL;

SELECT COALESCE(email, 'hello') FROM student;

SELECT COALESCE(email, 'not provided') as "Email", blood_group, first_name FROM student;

SELECT * FROM student
  WHERE country = 'USA' OR country = 'Canada' OR country = 'UK';

SELECT * FROM student
  WHERE country IN('USA', 'UK', 'Canada');
SELECT * FROM student
  WHERE country NOT IN('USA', 'UK', 'Canada');

SELECT * FROM student
  WHERE age BETWEEN 20 AND 22;

SELECT * FROM student
  WHERE dob BETWEEN '2000-01-01' AND '2001-12-25' ORDER BY dob;

SELECT * FROM student
  WHERE first_name LIKE '%am';

SELECT * FROM student
  WHERE first_name LIKE 'A%';

SELECT * FROM student
  WHERE first_name LIKE '__a%';

SELECT * FROM student
  WHERE first_name LIKE '___a';

SELECT * FROM student
  WHERE first_name ILIKE 'a%';

SELECT * FROM student LIMIT 5;

SELECT * FROM student
  WHERE country IN('USA', 'UK', 'Canada') LIMIT 3;

SELECT * FROM student LIMIT 5 OFFSET 5;

SELECT * FROM student LIMIT 5 OFFSET 5 * 0;
SELECT * FROM student LIMIT 5 OFFSET 5 * 1;
SELECT * FROM student LIMIT 5 OFFSET 5 * 2;

DELETE FROM student WHERE country = 'USA';
SELECT * FROM student;

DELETE FROM student
  WHERE grade = 'B';

DELETE FROM student
  WHERE grade = 'B' AND country = 'USA';