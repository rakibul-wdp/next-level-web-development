What is database?

- A database is a structured collection of related data that represent some real world entities and are organized for efficient retried storage, and management.

What is data?

- Data is facts that can be recorded in the form of...

What is information?

- Information is processed and organized data that provides meaningful context, insight, or knowledge.

What is DBMS?

- Database Management System

Storing Data Using File System

- Unstructured data, multiple formate (.txt, mp4, etc)
- Data redundancy
- Data inconsistency
- No concurrency protocol
- Security issue
- Access complication

SQL - Structured Query Language

Types of Database

- Relational - MySQL, PostgreSQL, SQLite, SQL Server
- Document - MongoDB, amazon DynamoDB
- Key value - redis

Table/Relation

- Table name: User
- Column/Attribute
- Constraint/Domain
- Degree (Collection of column)
- Rows/Tuples/Records
- Cardinality

Keys

- key: A key in a relational database is a field or a combination of rields that uniquely identifies a record in a table.
- Super key
- Candidate key
- Alternate key
- Primary key
- Composite key
- Foreign key

Super key

- Attribute or set of attribute by which we can Identify each row uniquely
- Could be a single attribute or a set of attributes
- Could have null values in the set
- It actually a superset
- {u_id}, {u_id, name}, {u_id, email}, {u_id, name, email, gender, age}, {name, email}, {name, gender}

Candidate key

- Super key whose proper subset is not a super key
- Also called Minimal Super key
- Potential Primary Key: From the candidate keys, one is chosen as the primary key. However, all candidate keys are potential choices for the primary key.
- Super key: {u_id}, {u_id, name}, {u_id, email}, {u_id, name, email, gender, age}, {name, email}, {name, gender}
- Candidate Key: {u_id}, {name, gender}

Primary key

- From the candidate keys, one key is chosen as the primary key for the table. The primary key is a specific candidate key that is selected as the main identifier for the records in that table
- Should be unique, not null and stable
- Candidate Key: {u_id}, {name, gender}
- Primary key: {u_id}

Alternate key

- Candidate keys which were not chosen as primary key
- Candidate Key: {u_id}, {name, gender}
- Primary key: {u_id}
- Alternate key: {name, gender}

Composite key

- Candidate keys which were not chosen as primary key
- Candidate Key: {u_id}, {name, gender}
- Primary key: {u_id}
- Alternate key: {name, gender}
- Composite key: {name, gender}
