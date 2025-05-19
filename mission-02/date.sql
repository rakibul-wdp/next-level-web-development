SHOW TIMEZONE;

SELECT now();

CREATE TABLE timeZ (ts TIMESTAMP without time zone, tsz TIMESTAMP with time zone);

INSERT INTO timeZ VALUES('2024-01-12 10:45:00', '2024-01-12 10:45:00');

SELECT * FROM timez;

SELECT now();
SELECT CURRENT_DATE;

SELECT now()::date;
SELECT now()::time;
SELECT to_char(now(), 'yyyy/mm/dd');
SELECT to_char(now(), 'dd/mm/yyyy');
SELECT to_char(now(), 'Month');
SELECT to_char(now(), 'ddd');
SELECT CURRENT_DATE - INTERVAL '1 year 2 month';
SELECT age(CURRENT_DATE, '1996-07-29');
SELECT *, age(CURRENT_DATE, dob) from student;
SELECT extract(YEAR FROM '2024-01-25'::date);
SELECT extract(DAY FROM '2024-01-25'::date);
SELECT '1'::BOOLEAN;