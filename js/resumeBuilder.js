
var bio = {
  "name": "Jun Yan",
  "role": "Data Scientist",
  "contacts": {
    "mobile": "650-704-1227",
    "email": "mouseyan@gmail.com",
    "github": "spiningup",
    "twitter": "@JunYan22",
    "location": "Palo Alto, CA"
  },
  "welcomeMessage": "Your vision will become clear only when you look into your heart. Who looks outside, dreams. Who looks inside, awakens. - Carl Jung",
  "skills": ["python", "data analysis", "machine learning", "html/css", "hadoop/pig"],
  "biopic": "images/jun.jpg"
};

var work = {
  "jobs": [
    {
      "employer": "AT&T",
      "title": "Data Scientist",
      "location": "Palo Alto, CA",
      "dates": "2014-now",
      "description": "Understand and utilize big data in AT&T to drive business decisions."
    },
    {
      "employer": "Colorado School of Mines",
      "title": "Research Assistant Professor",
      "location": "Golden, CO",
      "dates": "2014",
      "description": "Research on machine learning methods for thermoelectric material applications."
    },
    {
      "employer": "Stanford University",
      "title": "Research Associate",
      "location": "Stanford, CA",
      "dates": "2011-2014",
      "description": "Develop computational method to increase accuracy for simulating catalytic reaction energies."
    },
    {
      "employer": "Technical University of Denmark",
      "title": "Postdoc",
      "location": "Lyngby, Denmark",
      "dates": "2009-2011",
      "description": "Develop computational method for simulating optical spectra of solids."
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Onion",
      "dates": "2015-2016",
      "description": "Connect people and projects by mining internal organizational data.",
      "images": []
    },
    {
      "title": "Social Graph Analysis",
      "dates": "2015",
      "description": "Detect influencers and communities from customer social graph.",
      "images": [
        "images/graph.jpg"
      ]
    },
    {
      "title": "Newsline",
      "dates": "2014",
      "description": "Provides news with context.",
      "images": [
        "images/newsline.jpg"
      ]
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "Chalmers University of Technology",
      "location": "Gothenburg, Sweden",
      "degree": "Visiting Phd student",
      "major": ["Physics"],
      "dates": "2006-2009",
      "url": "http://www.chalmers.se"
    },
    {
      "name": "Institute of Physics, Chinese Academy of Sciences",
      "location": "Beijing, China",
      "degree": "Phd",
      "major": ["Physics"],
      "dates": "2004-2009",
      "url": "http://www.iphy.ac.cn"
    }
  ],
  "onlineCourses": [
    {
      "title": "Udacity web developer nanodegree",
      "school": "Udacity",
      "dates": "2016",
      "url": "http://www.udacity.com"
    }
  ]
};

bio.display = function() {
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
  $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
  $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
  $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill){
      $("#skills").append(HTMLskills.replace("%data%", skill));
    });
  }
};

work.display = function() {
  if (work.jobs.length > 0) {
    work.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);
      var employertitle = HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title);
      $(".work-entry:last").append(employertitle);
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
    });
  }
};

projects.display = function() {
  if (projects.projects.length > 0) {
    projects.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
      if (project.images.length > 0) {
        project.images.forEach(function(image) {
          $(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
        });
      }
    });
  }
};

education.display = function() {
  if (education.schools.length > 0) {
    education.schools.forEach(function(school) {
      $("#education").append(HTMLschoolStart);
      var namedegree = HTMLschoolName.replace("%data%", school.name).replace("#", school.url) + HTMLschoolDegree.replace("%data%", school.degree);
      $(".education-entry:last").append(namedegree);
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
      if (school.major.length > 0) {
        school.major.forEach(function(major) {
          $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major));
        });
      }
    });
  }

  if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
      $("#education").append(HTMLonlineStart);
      var titleschool = HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school);
      $(".online-entry:last").append(titleschool);
      $(".online-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
      $(".online-entry:last").append(HTMLonlineURL.replace("%data%", course.url).replace("#", course.url));
    });
  }
};

function inName(name) {
  var namelist = name.trim().split(" ");
  var newname = namelist[0][0].toUpperCase() + namelist[0].slice(1).toLowerCase() + " " + namelist[1].toUpperCase();
  return newname;
}

bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

$('a[href="#"]').removeAttr("href").css('color', 'orange');
