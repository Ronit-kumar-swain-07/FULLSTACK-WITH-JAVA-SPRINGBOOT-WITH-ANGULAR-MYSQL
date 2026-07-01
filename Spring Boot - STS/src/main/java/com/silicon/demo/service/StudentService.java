package com.silicon.demo.service;

import java.util.List;

import com.silicon.demo.model.StudentDetails;

public interface StudentService {

	
	List<StudentDetails> getStudentDetails();
	
	
//	Get a Student Detail by ID
	StudentDetails getStudentByID(int id);
	
	
	StudentDetails saveStudentDetails(StudentDetails student);
	
}