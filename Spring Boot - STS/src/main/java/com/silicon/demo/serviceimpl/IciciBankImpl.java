package com.silicon.demo.serviceimpl;

import org.springframework.stereotype.Service;

import com.silicon.demo.service.Bank;

@Service
public class IciciBankImpl implements Bank{

//	@Override
	public String depositAmount(int amount) {
		return "Amount Added Successfully in ICICI Bank"+amount;
	}
	
	@Override
	public void save() {
		//add the save logic    
	}
}
