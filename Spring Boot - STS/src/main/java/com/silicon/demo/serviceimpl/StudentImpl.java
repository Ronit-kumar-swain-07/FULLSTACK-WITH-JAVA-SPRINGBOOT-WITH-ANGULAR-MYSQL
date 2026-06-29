package com.silicon.demo.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.silicon.demo.model.StudentDetails;
import com.silicon.demo.repo.StudentRepository;
import com.silicon.demo.service.StudentService;

@Service
public class StudentImpl implements StudentService{

	StudentRepository studentRepository;
	
	@Override
	public List<StudentDetails> getStudentDetails() {
		List<StudentDetails> listofsStudentDetails = studentRepository.findAll();
		return listofsStudentDetails;
	}

	@Override
	public StudentDetails getStudentByID(int id) {
		
		Optional<StudentDetails> studentDetails =  studentRepository.findById(id);
		
		if(studentDetails.isPresent()) {
			return studentDetails.get();
		}
		
		return null;
	}
	
	
	
	
	
	
}
