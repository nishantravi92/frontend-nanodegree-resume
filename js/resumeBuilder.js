/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio =  {
	  "name" : "Nishant Ravichandran",
    "role" : "Software Engineer",
    "contacts": {
    "mobile": "530-746-1414",
    "email"	: "nishantravi92@gmail.com",
    "github": "nishantravi92",
    "location": "United States",
     },
    "welcomeMessage": "Hello there Observer", 
    "skills": ["Java", "C++", "Python", "JS", "Operating Systems", "Computer Networks"],
    "bioPic": "images/fry.jpg", 
     display: function() {
       $("#header").append(HTMLheaderName.replace("%data%", bio.name));
       $("#header").append(HTMLheaderRole.replace("%data%", bio.role));
 		   $("#header").append(HTMLskillsStart);
    	 for(value in bio.skills) {
  		  $("#header").append(HTMLskills.replace("%data%", bio.skills[value]));
  		 };	
 	    }   
};


var job1 = {
  employer: "Accenture",
  title: "Associate Software Engineer",
  location: "India",
  dates :" Sep '14 - Aug' 15",
  description:"SAP APAB Consultant"
};

var job2 = {
  employer: "Synopsys",
  title: "TechnicalIntern",
  location: "United States",
  dates :" Jun '16- Aug'16",
  description:"Scripting And Analysis"
};

var jobs = {
  work : [job1, job2],
  display : function() {

  }
};

 bio.display()
  