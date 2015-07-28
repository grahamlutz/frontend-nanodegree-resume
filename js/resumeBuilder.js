/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Graham Lutz";
var role = "Full Stack Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

var Projects = {};

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
	"skills": [
				"HTML", 
				"CSS",
				"JavaScript", 
				"jQuery", 
				"Git", 
				"GitHub", 
				"Grunt", 
				"Node.js", 
			]
};

var work = {};
	work.position = "Director of Operations / Self-Employed";
	work.employer = "Atlanta Affiliate League";
	work.loc = "Atlanta, GA";
	work.dates = "2013 - Present";
	work.desc = "Designing, organizing, and running fitness competitions for CrossFit affiliates"

var work1 = {};
	work1.position = "Owner/Personal Trainer";
	work1.employer = "Formula Athletics";
	work1.loc = "Atlanta, GA";
	work1.dates = "2010 - 2015";
	work1.desc = "Help people lose weight, resolve musculo-skeletal issues, and lift heavy things"

var work2 = {};
	work2.position = "Honor Caddie";
	work2.employer = "East Lake Golf Club";
	work2.loc = "Atlanta, GA";
	work2.dates = "2005 - Present";
	work2.desc = "Provide superior experience to golfers (many C-level executives at Fortune 500 companies) via interpersonal skills, club selection, green reading, and course management."

var education = {
	"school": "Georgia State University",
	"yearsAttended": "2010 - 2013",
	"city": "Atlanta, GA",
	"degree": "Bachelor's of Science",
	"major": "Biology",
	"minor": "Chemistry",
	"concentration": "PreMed/Neuroscience",
	"GPA": 3.85
}

function addWork(workEntry){
	$("#workExperience").append(
		HTMLworkStart.replace("%data%",
			HTMLworkEmployer.replace("%data%", workEntry.employer) +  
			HTMLworkTitle.replace("%data%", workEntry.position) +
			HTMLworkDates.replace("%data%", workEntry.dates) +
			HTMLworkLocation.replace("%data%", workEntry.loc) +
			HTMLworkDescription.replace("%data%", workEntry.desc)
		)
	);
}

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
addWork(work);
addWork(work1);
addWork(work2);
$("education").append(education.school);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i])
		$("#skills").append(formattedSkill);
	}
};

