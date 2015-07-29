/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Graham Lutz";
var role = "Full Stack Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

var Projects = {
	"testProject1": {
		"Title": "Test Project 1",
		"Dates": "2015",
		"Description": "This is my test Project"
	},
	"testProject2": {
		"Title": "Test Project 2",
		"Dates": "2016 and Beyond!",
		"Description": "This is my second test Project"
	}
};

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

var work = {
	"jobs": [
		{
			"position":"Director of Operations / Self-Employed",
			"employer": "Atlanta Affiliate League",
			"loc": "Atlanta, GA",
			"dates": "2013 - Present",
			"desc": "Designing, organizing, and running fitness competitions for CrossFit affiliates"
		},
		{
			"position":"Owner / Personal Trainer",
			"employer": "Formula Athletics",
			"loc": "Norcross, GA",
			"dates": "2010 - 2015",
			"desc": "Help people lose weight, resolve musculo-skeletal issues, and lift heavy things"
		},
		{
			"position":"Honor Caddie",
			"employer": "East Lake Golf Club",
			"loc": "Atlanta, GA",
			"dates": "2005 - Present",
			"desc": "Provide superior experience to golfers (many C-level executives at Fortune 500 companies) via interpersonal skills, club selection, green reading, and course management."
		}
	]
}
console.log(work.jobs[1].position)

// var work = {};
// 	work.job1 = {};
// 		work.job1.position = "Director of Operations / Self-Employed";
// 		work.job1.employer = "Atlanta Affiliate League";
// 		work.job1.loc = "Atlanta, GA";
// 		work.job1.dates = "2013 - Present";
// 		work.job1.desc = "Designing, organizing, and running fitness competitions for CrossFit affiliates"

// 	work.job2 = {};
// 		work.job2.position = "Owner/Personal Trainer";
// 		work.job2.employer = "Formula Athletics";
// 		work.job2.loc = "Atlanta, GA";
// 		work.job2.dates = "2010 - 2015";
// 		work.job2.desc = "Help people lose weight, resolve musculo-skeletal issues, and lift heavy things"

// 	work.job3 = {};
// 		work.job3.position = "Honor Caddie";
// 		work.job3.employer = "East Lake Golf Club";
// 		work.job3.loc = "Atlanta, GA";
// 		work.job3.dates = "2005 - Present";
// 		work.job3.desc = "Provide superior experience to golfers (many C-level executives at Fortune 500 companies) via interpersonal skills, club selection, green reading, and course management."

// var work = {
// 	"job1": {
// 		"position": "Director of Operations / Self-Employed",
// 		"employer": "Atlanta Affiliate League",
// 		"loc": "Atlanta, GA",
// 		"dates": "2013 - Present",
// 		"desc": "Designing, organizing, and running fitness competitions for CrossFit affiliates"
// 	},
// 	"job2": {
// 		"position": "Owner / Personal Trainer",
// 		"employer": "Formula Athletics",
// 		"loc": "Atlanta, GA",
// 		"dates": "2010 - 2015",
// 		"desc": "Help people lose weight, resolve musculo-skeletal issues, and lift heavy things"
// 	},
// 	"job3": {
// 		"position": "Honor Caddie",
// 		"employer": "East Lake Golf Club",
// 		"loc": "Atlanta, GA",
// 		"dates": "2005 - Present",
// 		"desc": "Provide superior experience to golfers (many C-level executives at Fortune 500 companies) via interpersonal skills, club selection, green reading, and course management."
// 	}

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

// function addWork(workEntry){
// 	$("#workExperience").append(
// 		HTMLworkStart.replace("%data%",
// 			HTMLworkEmployer.replace("%data%", workEntry.employer) +  
// 			HTMLworkTitle.replace("%data%", workEntry.position) +
// 			HTMLworkDates.replace("%data%", workEntry.dates) +
// 			HTMLworkLocation.replace("%data%", workEntry.loc) +
// 			HTMLworkDescription.replace("%data%", workEntry.desc)
// 		)
// 	);
// }

// function addWork(workEntry){
// 	for (var job in work.jobs) {
// 		$("#workExperience").append(
// 			HTMLworkStart.replace("%data%",
// 				HTMLworkEmployer.replace("%data%", work.jobs[job].employer) +  
// 				HTMLworkTitle.replace("%data%", work.jobs[job].position) +
// 				HTMLworkDates.replace("%data%", work.jobs[job].dates) +
// 				HTMLworkLocation.replace("%data%", work.jobs[job].loc) +
// 				HTMLworkDescription.replace("%data%", work.jobs[job].desc)
// 			)
// 		);
// 	}
// }

function addWork(workEntry){
	$("#workExperience").append(
		HTMLworkStart.replace("%data%",
			HTMLworkEmployer.replace("%data%", work.jobs[job].employer) +  
			HTMLworkTitle.replace("%data%", work.jobs[job].position) +
			HTMLworkDates.replace("%data%", work.jobs[job].dates) +
			HTMLworkLocation.replace("%data%", work.jobs[job].loc) +
			HTMLworkDescription.replace("%data%", work.jobs[job].desc)
		)
	);
}

for (var job in work.jobs) {
	addWork(work.jobs);
};

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
// addWork(work.jobs);
$("education").append(education.school);
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i])
		$("#skills").append(formattedSkill);
	}
};

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

