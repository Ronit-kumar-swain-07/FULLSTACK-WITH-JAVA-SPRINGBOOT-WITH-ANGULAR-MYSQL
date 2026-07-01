package com.silicon.demo.service;

import com.silicon.demo.model.StudentDetails;
import java.util.List;

public interface StudentService {

	
	List<StudentDetails> getStudentDetails();
	
	
//	Get a Student Detail by ID
	StudentDetails getStudentByID(int id);
	
	
	StudentDetails saveStudentDetails(StudentDetails student);
	
	
	StudentDetails updateStudentDetails(StudentDetails student);


	void deleteStudentDetail(int id);
}