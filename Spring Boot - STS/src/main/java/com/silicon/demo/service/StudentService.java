package com.silicon.demo.service;

import com.silicon.demo.model.StudentDetails;
import java.util.List;

public interface StudentService {

	
	List<StudentDetails> getStudentDetails();
	
	StudentDetails getStudentByID(int id);
	
	
}