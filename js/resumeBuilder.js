/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Graham Lutz";
var role = "Full Stack Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var skills = ["HTML", "CSS", "JavaScript", "jQuery", "Git", "GitHub", "Grunt", "Node.js", ]
var bio = {
	"name": "Graham Lutz",
	"role": "Full Stack Web Developer",
	"contact": {
		"phone": "404-723-1577",
		"email": "graham.lutz@gmail.com",
		"GitHub": "grahamlutz",
		"location": "Atlanta",
	 },
	"bioPic": "image/side_me_BandW.jpg",
	"welcome": "Welcome!",
	"skills": skills
};

var work = {};
	work.position = "Director of Operations";
	work.employer = "Atlanta Affiliate League / Self-Employed";
	work.city = "Atlanta";
	work.yearsWorked = 3;

var education = {
	"school": "Georgia State University",
	"yearsAttended": "2010 - 2013",
	"city": "Atlanta, GA",
	"degree": "Bachelor's of Science",
	"major": "Biology",
	"minor": "Chemistry",
	"concentration": "PreMed/Neuroscience",
	"GPA": 3.85
};

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#workExperience").append(work.position);
$("education").append(education.school);