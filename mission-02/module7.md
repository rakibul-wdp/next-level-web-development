### SQL

Structured Query Language

- Declarative

#### SQL Commands

- DDL
  - CREATE
  - DROP
  - ALTER
  - TRUNCATE
- DML
  - INSERT
  - UPDATE
  - DELETE
- DCL
  - GRANT
  - REVOKE
- TCL
  - COMMIT
  - ROLLBACK
  - SAVEPOINT
- DQL
  - SELECT

#### Data Types

- id (SERIAL)
- employee_id (INTEGER)
- name (VARCHAR(50))
- dob (DATE)
- is_active (BOOLEAN)
- salary (NUMERIC(10, 2))

- Boolean
  - true
  - false
  - null
- Numbers
- Binary
- Date/Time
- Json
- Character
- UUID
- Array
- XML
- Integers
  - INT:
    - Range: -2,147,483,648 to 2,147,483,647
    - Storage: 4 bytes
    - The INT data type is commonly used for integer values within the standard range.
  - BIGINT:
    - Range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
    - Storage: 8 bytes
    - BIGINT provides a larger range than INT and is suitable for storing very large integer values.
  - SMALLINT:
    - Range: -32,768 to 32,767
    - Storage: 2 bytes
    - SMALLINT is suitable for storing small integer values within a more limited range.
  - FLOAT4 (Single Precision):
    - Storage: 4 bytes
    - 6 digit precision
  - FLOAT8 (Double Precision):
    - 15 digit precision
    - Storage: 8 bytes
  - NUMERIC (precision, scale):
    - Range: Unlimited precision
    - Storage: Variable (depends on the input precision and scale)
    - ex: NUMERIC (4, 3)
  - Serial:
    - Range: Like integers
    - Auto-incrementing integer

#### Column Constraint

- NOT NULL
- UNIQUE
- PRIMARY KEY
- Foreign Key
- DEFAULT
- CHECKd

#### Insert

- Single-Row Insert:
- Multi_Row Insert:
