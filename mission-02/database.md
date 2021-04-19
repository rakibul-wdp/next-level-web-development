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

Foreign key

- if another table's primary key will sit in another table for reference, than it's call foreign key.

Database Design

- SDLC
  - Planing
  - Analysis
  - System Design
  - Building
  - Testing
  - Deployment

Purpose of Database design:

- Structured organization for efficient data management and retrieval

Techniques to design Database

- Top-down
- Hybrid Approaches
- Bottom-up

Client come with his idea!

- EduHub is a website that offers many different educational courses to people all round the world. It provides a variety of technology courses in different subjects, allowing students to enroll and learn

As a next level developer

- Students Enrolling in Courses:
  - Students can enroll in one or multiple courses offered on the platform.
  - Each enrollment represents a student's participation in a specific course.
- Courses Available for Enrollment:
  - Courses are available for students to enroll in.
  - Each course can have multiple students enrolled.
- Instructors taking courses
  - Instructors could take one or more course.

Entity-Relationship (ER) diagram

- An Entity-Relationship (ER) diagram is a visual representation used in database design to illustrate the relationships between entities. It shows how different entities in a database relate to each other through various types of relationships like one-to-one, one-to-many or many-to-many.

Top-down steps:

- Step 1: Determining Entities
- Step 2: Determining Attributes For Each Entities
- Step 3: Relationships Among Entities

Step-1: Determining Entities

- Place, Person, or Thing
- Properties or Attributes
- Unique Identity
- Singular Name
- Should contain more than one instance of data

- **Student**s Enrolling in Courses:
  - Students can enroll in one or multiple courses offered on the platform.
  - Each enrollment represents a student's participation in a specific course.
- **Course**s Available for Enrollment:
  - Courses are available for students to enroll in.
  - Each course can have multiple students enrolled.
- **Instructor**s taking courses
  - Instructors could take one or more course.

Step-2: Determining Attributes

- Should be related to file entity
- Should be atomic
- Should have keys

example

- student_id, name, email, age
- course_id, course_name, instructor_id, duration
- instructor_id, instructor_name, gender, level

Step 3: Relationships Among Entities or Relationship Cardinality

Relationships: Connection between entity or tables
Ex: Instructor Teaches(relationships) Student

Instructor (Entity)

- <u>id</u>
- name
- gender

Teaches (Relationship)

Student (Entity)

- <u>id</u>
- name
- dob

Cardinality
Relationship cardinality in databases specifies how many instances of one entity are associated with hoy many instances of another entity.

- One-to-One (1:1):
  Example: A person has one passport, and a passport belongs to only one person

- One-to-Many (1:N):
  Example: A university department has multiple students, but each student belong to only one department.

- Many-to-One (N:1):
  Example: Many employees work for one company, but each employee works for only one company.

- Many-to-Many (N:N):
  Example: Students enroll in multiple courses, and each course has multiple enrolled students.

- Optional One-to-One (0..1:0..1):
  Example: A person may or may not have a driver's license, and a driver's license may or may not be associated with a person

- Optional One-to-Many (0..1:N):
  Example: A department may or may not have employees, but an employee must belong to a department.
