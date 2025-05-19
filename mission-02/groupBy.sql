SELECT * FROM student;

SELECT country FROM student
  GROUP BY country;
SELECT country, count(*), avg(age) FROM student
  GROUP BY country
    HAVING avg(age) > 20.69;

-- Count Student Born in Each Year
SELECT extract(year from dob) as birth_year, count(*)
  FROM student
    GROUP BY birth_year;