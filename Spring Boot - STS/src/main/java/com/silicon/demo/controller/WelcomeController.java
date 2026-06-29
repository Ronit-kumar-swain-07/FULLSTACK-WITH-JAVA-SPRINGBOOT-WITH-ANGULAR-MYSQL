package com.silicon.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.silicon.demo.model.Address;
import com.silicon.demo.model.Course;
import com.silicon.demo.model.ParentResponse;
import com.silicon.demo.model.SchoolDetails;
import com.silicon.demo.model.SectionDetails;
import com.silicon.demo.model.StudentDetails;
import com.silicon.demo.model.TransportDetails;
import com.silicon.demo.service.StudentService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/home")
public class WelcomeController {
//	Methods

	
	@Autowired
	StudentService studentService;
	
	
	@GetMapping("/welcome")
	public String welcome() {
		System.out.println("Welcome Called");
		return "Welcome Everyone, Hello World.";
	}

	@GetMapping("/courses/{id}")
	public List<Course> getCourses(@PathVariable int id) {
		List<Course> c = new ArrayList<>();

		List<Course> returnCourses = new ArrayList<>();

		Course c1 = new Course();
		c1.setCourseId(200);
		c1.setCourseName("Math");

		Course c2 = new Course();
		c2.setCourseId(500);
		c2.setCourseName("Science");

		c.add(c1);
		c.add(c2);

		for (Course course : c) {
			if (course.getCourseId() == id) {
				returnCourses.add(course);
			}
		}

		return returnCourses;
	}

	@PostMapping("/save")
	public String save(@RequestBody Address add) {

		String name = add.getName();
		String address = add.getAddress();

		System.out.println("Name: " + name);
		System.out.println("Address: " + address);

		return "Address Saved Successfully." + name + " : " + address;
	}

	@GetMapping("/getAllSchoolData")
	@Operation(summary = "Get School info ", description = "This API throw school info")
	
	public ParentResponse getAllSchoolData() 
	{

	ParentResponse parent = new ParentResponse();

	//details of school object need to create and set
	SchoolDetails schoolDetails = new SchoolDetails();

	schoolDetails.setSchoolld(101);
	schoolDetails.setSchoolName("Silicon Public School");
	schoolDetails.setPrincipalName("Rajesh Kumar");
	schoolDetails.setEmail("info@siliconschool.com");
	schoolDetails.setTotalStudents(1200);
	schoolDetails.setTotalTeachers(60);
	schoolDetails.setBoardType("CBSE");
	

	//details of section object need to create and set
	SectionDetails sectionDetails = new SectionDetails();
	sectionDetails.setRegnNum(33334);
	sectionDetails.setStudentName("Raj Kishore");
	
	
	//details of transport object need to create and set
	TransportDetails transportDetails = new TransportDetails();
	transportDetails.setDriverName("Kabir");
	transportDetails.setVehicleNumber("MH04GH5988");
	
	
	//set the three object into parent object

	parent.setDetails(schoolDetails);
	parent.setSectionDetails(sectionDetails);
	parent.setTransportDetails(transportDetails);
	
	
	
	return parent;
	
	
	}
	
	
	@Operation(summary = "Get all Student Details", description = "This API throws All the Student Details.")
	@GetMapping("/getAllStudent")
	public List<StudentDetails> getAllStudentDetails() {
		
		List<StudentDetails> listofStudentDetails = studentService.getStudentDetails();
		
		return listofStudentDetails;
	}
	
	
	@GetMapping("/getStudentByID/{id}")
	public StudentDetails getStudentsByID(@PathVariable int id) {
		
		StudentDetails studentDetails =  studentService.getStudentByID(id);
		
		return studentDetails;
	}
	
	
}
