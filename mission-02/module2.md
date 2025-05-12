### Anomalies

Anomalies in databases refer to inconsistencies or unexpected issues that can occur during data manipulation or retrieval

- There are three main types of anomalies:
  - Update anomalies
  - Delete Anomalies
  - Insert Anomalies

### Normalization

Separate data by table or entities and reference by primary key

- Functional Dependency
- Normal Forms

#### Functional Dependency

Functional dependency in simple terms means that the value of one attribute (or set of attributes) uniquely determines the value of another attribute(s) in a database table.

x -> y (x = determinant, y = dependant)
t1.x = t2.x
then, t1.y = t2.y

#### Normal Forms

A series of guidelines that help to ensure that the design of a database is efficient, organized, and free from data anomalies.

- 0NF
- 1NF
- 2NF
- 3NF

##### 1NF

- Rules
  - Atomic Values
  - Unique Column Names
  - Positional dependency of data
  - Column should contain data that are
  - of the same type
  - Determine Primary key

##### 2NF

- Rules:
  - Must be in 1NF
  - Must not contain any non-prime/non-key attribute that is functionally dependent on a proper subset of any candidate key of the relation.

##### 3NF

- Rules:
  - Must be in 2NF
  - Must not contain transitive dependency

x -> y & y -> z => x -> z
