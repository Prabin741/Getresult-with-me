CREATE DATABASE student_results;

USE student_results;

CREATE TABLE results (
  id INT AUTO_INCREMENT PRIMARY KEY,
  symbol_no VARCHAR(20),
  semester VARCHAR(10),
  subject VARCHAR(50),
  grade VARCHAR(5),
  gpa FLOAT
);

INSERT INTO results (symbol_no, semester, subject, grade, gpa) VALUES
('12345', '1st', 'Math', 'A', 3.8),
('12345', '1st', 'Science', 'B+', 3.2),
('12345', '2nd', 'English', 'A-', 3.6);
