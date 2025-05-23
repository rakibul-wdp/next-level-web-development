SELECT * FROM employees;

EXPLAIN ANALYSE
SELECT * FROM employees WHERE employee_name = 'Ava Wilson';

EXPLAIN ANALYSE
SELECT * FROM employees WHERE employee_id = 18;

CREATE INDEX idx_employees_name
ON employees (employee_name);

SHOW data_directory;