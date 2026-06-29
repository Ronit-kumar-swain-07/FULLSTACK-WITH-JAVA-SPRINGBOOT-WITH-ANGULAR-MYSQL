package com.silicon.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.silicon.demo.model.Amount;
import com.silicon.demo.service.Bank;


@RestController
@RequestMapping("/icici")
public class IciciBankController {
	
	@Autowired
	Bank bank;
	
	@GetMapping("/welcome")
	public String welcome() {
		System.out.println("Welcome Called.");
		return "Welcome to Icici Bank.";
	}

	@PostMapping("/deposit")
	public String deposit(@RequestBody Amount amount) {
		
		Bank.depositAmount(amount.getAmount());
	
		return "Deposited Successfully.";
	}
}