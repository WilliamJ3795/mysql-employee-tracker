USE employeeTracker_db;

INSERT INTO department
(name)

VALUES
('Sales'),
('Engineering'),
('Marketing');

INSERT INTO role 
(title, salary, department_id)

VALUES
('Sales Manager', 60000, 1),
('Sales Associate', 40000, 1),
('Engineering Manager', 75000, 2),
('Engineering Associate', 55000, 2),
('Marketing Manager', 85000, 3),
('Marketing Associate', 650000, 3);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)

VALUES
('Miles', 'Morales', 1, 2),
('Peter', 'Parker', 2, 1),
('Tony', 'Stark', 3, 4),
('James', 'Rhoades', 4, 3),
('Steve', 'Rodgers', 5, 6),
('Bucky', 'Barnes', 6, 5);