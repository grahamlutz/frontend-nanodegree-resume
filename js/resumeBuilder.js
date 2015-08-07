/*
This is empty on purpose! Your code to build the resume will go here.
 */
 'Use strict';

var bio = {
	'name': 'Graham Lutz',
	'role': 'Full Stack Web Developer',
	'contact': [
	{
		'mobile': '404-723-1577',
		'email': 'graham.lutz@gmail.com',
		'twitter': '',
		'gitHub': 'grahamlutz',
		'blog': '',
		'loc': 'Atlanta, GA',
	}
	],
	'bioPic': 'images/side_me_BandW.jpg',
	'welcome': 'Welcome!',
	'skills': [
				'HTML',
				'CSS',
				'JavaScript',
				'jQuery',
				'Git',
				'GitHub',
				'Grunt',
				'Node.js',
				'OOP'
			],
	'display': function() {
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		for (var con in bio.contact) {
			$('#topContacts').append(
				HTMLmobile.replace('%data%', bio.contact[con].mobile) +
				HTMLemail.replace('%data%', bio.contact[con].email) +
				HTMLgithub.replace('%data%', bio.contact[con].gitHub) +
				HTMLlocation.replace('%data%', bio.contact[con].loc)
			);
			$('#footerContacts').append(
				HTMLmobile.replace('%data%', bio.contact[con].mobile) +
				HTMLemail.replace('%data%', bio.contact[con].email) +
				HTMLgithub.replace('%data%', bio.contact[con].gitHub) +
				HTMLlocation.replace('%data%', bio.contact[con].loc)
			)
		};
		if (bio.skills.length) {
			$('#header').append(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace('%data%', bio.skills[i])
				$('#skills').append(formattedSkill);
			}
		};
		$('#header').prepend(HTMLbioPic.replace('%data%', bio.bioPic));
		$('#header').prepend(formattedRole);
		$('#header').prepend(formattedName);
	}
};

var work = {
	'jobs': [
		{
			'position':'Director of Operations / Self-Employed',
			'employer': 'Atlanta Affiliate League',
			'loc': 'Atlanta, GA',
			'dates': '2013 - Present',
			'desc': 'Designing, organizing, and running fitness competitions for CrossFit affiliates'
		},
		{
			'position':'Owner / Personal Trainer',
			'employer': 'Formula Athletics',
			'loc': 'Norcross, GA',
			'dates': '2010 - 2015',
			'desc': 'Help people lose weight, resolve musculo-skeletal issues, and lift heavy things'
		},
		{
			'position':'Honor Caddie',
			'employer': 'East Lake Golf Club',
			'loc': 'Atlanta, GA',
			'dates': '2005 - Present',
			'desc': 'Provide superior experience to golfers (many C-level executives at Fortune 500 companies) via interpersonal skills, club selection, green reading, and course management.'
		}
	],
	'display': function() {
		for (var job in work.jobs) {
			$('#workExperience').append(
				HTMLworkStart.replace('%data%',
					HTMLworkEmployer.replace('%data%', work.jobs[job].employer) +
					HTMLworkTitle.replace('%data%', work.jobs[job].position) +
					HTMLworkDates.replace('%data%', work.jobs[job].dates) +
					HTMLworkLocation.replace('%data%', work.jobs[job].loc) +
					HTMLworkDescription.replace('%data%', work.jobs[job].desc)
				)
			);
		}
	}
}

var projects = {
	'projects': [
		{
			'titles':'Test Project 1',
			'dates':'2015',
			'descriptions':'This is my test Project',
			'image':'images/image1.jpg'
		},
		{
			'titles':'Test Project 2',
			'dates':'2016 and Beyond!',
			'descriptions': 'This is my second test Project',
			'image': 'images/image2.jpg'
		}
	],
	'display': function(){
		for (var proj in projects.projects){
			$('#projects').append(
				HTMLprojectStart.replace('%data%',
					HTMLprojectTitle.replace('%data%', projects.projects[proj].titles) +
					HTMLprojectDates.replace('%data%', projects.projects[proj].dates) +
					HTMLprojectDescription.replace('%data%', projects.projects[proj].descriptions) +
					HTMLprojectImage.replace('%data%', projects.projects[proj].image)
				)
			); 
		}
	}
}

var education = {
	'schools': [
	{
		'school': 'Georgia State University',
		'dates': '2010 - 2013',
		'loc': 'Atlanta, GA',
		'degree': 'Bachelor\'s of Science',
		'major': 'Biology',
		'minor': 'Chemistry',
		'concentration': 'PreMed/Neuroscience',
		'GPA': 3.85
	}
	],
	'onlineClasses': [
	{
		'titles': 'Front End Web Developer NanoDegree',
		'school': 'Udacity',
		'dates': 'July 2015 - September 2015',
		'URLs': 'http://www.udacity.com'
	},
	{
		'titles': 'CS50',
		'school': 'Harvard',
		'dates': 'July 2015 - September 2015',
		'URLs': 'https://www.edx.org/course/introduction-computer-science-harvardx-cs50x'
	}
	],
	'display': function() {
		for(var school in education.schools) {
			$('#education').append(
				HTMLschoolStart.replace('%data%',
					HTMLschoolName.replace('%data%', education.schools[school].school) +
					HTMLschoolDegree.replace('%data%', education.schools[school].degree) +
					HTMLschoolDates.replace('%data%', education.schools[school].dates) +
					HTMLschoolLocation.replace('%data%', education.schools[school].loc) +
					HTMLschoolMajor.replace('%data%', education.schools[school].major) +
					HTMLschoolMinor.replace('%data%', education.schools[school].minor) +
					HTMLschoolConcentration.replace('%data%', education.schools[school].concentration)
				)
			);
		};
		$('#education').append(HTMLonlineClasses);
		for(var classes in education.onlineClasses) {
			$('#education').append(
				HTMLschoolStart.replace('%data%',
					HTMLonlineTitle.replace('%data%', education.onlineClasses[classes].titles) +
					HTMLonlineSchool.replace('%data%', education.onlineClasses[classes].school) +
					HTMLonlineDates.replace('%data%', education.onlineClasses[classes].dates) +
					HTMLonlineURL.replace('%data%', education.onlineClasses[classes].URLs)
				)
			);
		};
	}
}

education.display();
bio.display();
projects.display();
work.display();
$('#mapDiv').append(googleMap);

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

