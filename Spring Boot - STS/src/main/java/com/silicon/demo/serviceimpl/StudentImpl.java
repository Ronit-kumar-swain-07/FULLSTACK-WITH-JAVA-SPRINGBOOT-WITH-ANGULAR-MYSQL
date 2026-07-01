package com.silicon.demo.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.silicon.demo.model.StudentDetails;
import com.silicon.demo.repo.StudentRepository;
import com.silicon.demo.service.StudentService;

@Service
public class StudentImpl implements StudentService {

    private final StudentRepository studentRepository;

    public StudentImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public List<StudentDetails> getStudentDetails() {
        return studentRepository.findAll();
    }

    @Override
    public StudentDetails getStudentByID(int id) {

        Optional<StudentDetails> studentDetails = studentRepository.findById(id);

        return studentDetails.orElse(null);
    }

    
	
	@Override
	public StudentDetails saveStudentDetails(StudentDetails student) {
		
		
		return studentRepository.save(student);
	}
}