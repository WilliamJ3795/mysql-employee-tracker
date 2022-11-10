DROP DATABASE IF EXISTS employeeTracker_DB;
CREATE DATABASE employeeTracker_DB;

USE employeeTracker_DB;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id),
    PRIMARY KEY (id)
);
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  --  to hold reference to role employee has --
  role_id INT NOT NULL,
  FOREIGN KEY (role_id) REFERENCES role(id),
  -- to hold reference to another employee --
  manager_id INT NOT NULL, 
   -- alt FOREIGN KEY (role_id) REFERENCES role(id) -- 
  FOREIGN KEY (manager_id) REFERENCES role(id),
  PRIMARY KEY (id)


);