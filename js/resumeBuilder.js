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
       $("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
       $("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
       $("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));
       $("#header").append(HTMLlocation.replace("%data%", bio.contacts.location));
       $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
       $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
 		   $("#header").append(HTMLskillsStart);
    	 for(value in bio.skills) {
  		  $("#header").append(HTMLskills.replace("%data%", bio.skills[value]));
  		 };	
 	    }   
};


var work = {
  jobs : [ 
    {
    employer: "Synopsys",
    title: "Technical Intern",
    location: "United States",
    dates :" Jun '16- Aug'16",
    description:"Scripting. Wrote scripts for monitoring health of Active Directory. Wrote scripts for detection of potential malware on domain workstations"
    },
    {
    employer: "Accenture",
    title: "Associate Software Engineer",
    location: "India",
    dates :" Sep '14 - Aug' 15",
    description:"SAP APAB Consultant.Worked on writing application program according to client requirements. Also involved in technical documentation"
    } 
  ],
  display : function() {
    for(job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer); 
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title); 
      var var1 = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(var1);
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    };
  }
};

var projects = {
  projects: [
    {
      title:"Thread Scheduler",
      dates: "Sep '15 - Oct '15",
      description: "A scheduler to scheduler processes, based on the free BSD scheduler",
      images: ["images/Image1.jpg"]
    } , 
    {
      title:"Task Manager",
      dates: "Dec '15 - Jan '16",
      description: "A simple task manager to manage your tasks",
      images: ["images/Image2.jpg"]
    }
  ],
  display: function() {
    for(project in projects.projects) {
      $("#projects").append(HTMLprojectStart);
       $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
       $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
       $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
       $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images));

    };
  }
};

var education = {
  schools: [
     {
       name: "University of Buffalo",
       location: "Buffalo, USA",
       degree: "Masters in Science",
       majors: ["Computer Science"],
       dates: "Aug '15 - Dec '16",
       url: "www.buffalo.edu"
     },
     {
       name: "College of Engineering Pune",
       location: "Pune, India",
       degree: "Bachelors in Technology",
       majors: ["Electrical Engineering"],
       dates: "Aug '10 - May '15",
       url: "www.coep.org.in"
     }
   ],
   onlineCourses: [
    {
    title: "Android development",
    school: "University of Maryland",
    dates: "Dec '15 - Jan '16",
    url: "www.coursera.org"
    },
    {
    title: "JavaScript development",
    school: "NA",
    dates: "Jun '16 - Jun '16",
    url: "www.udacity.com"
    }
   ],
   display :function() {
    for(school in education.schools) {
       $("#education").append(HTMLschoolStart);
       $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name));
       $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
       $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
       $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
       $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]));
    };
     $("#education").append(HTMLonlineClasses);
     for(course in education.onlineCourses) {
       $("#education").append(HTMLschoolStart);
       $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title));
       $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school));
       $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates));
       $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[course].url));
     };
   }
};

 bio.display();
 work.display();
 projects.display();
 education.display();
 $("#mapDiv").append(googleMap);

  