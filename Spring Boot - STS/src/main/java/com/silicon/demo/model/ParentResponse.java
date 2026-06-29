package com.silicon.demo.model;

public class ParentResponse {

	private SchoolDetails details;
	
	private SectionDetails sectionDetails;
	
	private TransportDetails transportDetails;

	public SchoolDetails getDetails() {
		return details;
	}

	public void setDetails(SchoolDetails details) {
		this.details = details;
	}

	public SectionDetails getSectionDetails() {
		return sectionDetails;
	}

	public void setSectionDetails(SectionDetails sectionDetails) {
		this.sectionDetails = sectionDetails;
	}

	public TransportDetails getTransportDetails() {
		return transportDetails;
	}

	public void setTransportDetails(TransportDetails transportDetails) {
		this.transportDetails = transportDetails;
	}
	
}
