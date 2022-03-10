const header = `<h1>Courses and Training</h1>
<p>The courses I have completed and training I have received</p></div>`;

const courses = {
	courses: [
		{
			title: "AWS Cloud Practitioner Exam Prep",
			provider: "O'Reilly",
			lang: "AWS",
			projects: "",
			description:
				"Gain practical knowledge about AWS Cloud through hands-on video sessions and practice demos",
			completion: "On-going",
			link: "",
		},
		{
			title: "Java Programming I & II",
			provider: "University of Helsinki (MOOC.fi)",
			lang: "Java",
			projects: "Various problems to solve",
			description:
				"Learn the key aspects of the Java programming language",
			completion: "Completed",
			link: "https://certificates.mooc.fi/validate/hq4b3bjhqfj",
		},
		{
			title: "BJSS Engineering Academy",
			provider: "BJSS Ltd",
			lang: "Various topics",
			projects: "Group tasks every week",
			description:
				"BJSS Engineering Academy provides on the job training to prepare for delivering advanced technology and consulting solutions to clients throughout the UK.",
			completion: "Completed",
			link: "",
		},
		{
			title: "React Native - The Practical Guide",
			provider: "Udemy",
			lang: "React Native",
			projects: "4 projects on GitHub",
			description:
				"Use React Native and React knowledge to build native iOS and Android Apps - incl. Push Notifications, Hooks, Redux, Firebase",
			completion: "Completed",
			link: "https://www.udemy.com/certificate/UC-6b9d9f76-fe7c-4006-834d-17821dcb18ed/",
		},
		{
			title: "Information Security",
			provider: "FreeCodeCamp",
			lang: "JavaScript and Python",
			projects: "5 projects on Repl.it and GitHub",
			description:
				"Building a secure web app with HelmetJS. Building a TCP client and an Nmap and port scanner in Python.",
			completion: "Completed",
			link: "https://freecodecamp.org/certification/kmunton/information-security-v7",
		},
		{
			title: "Data Visualization",
			provider: "FreeCodeCamp",
			lang: "JavaScript",
			projects: "5 projects through CodePen",
			description:
				"Building charts, graphs, and maps to present different types of data with the D3.js library",
			completion: "Completed",
			link: "https://freecodecamp.org/certification/kmunton/data-visualization",
		},
		{
			title: "Quality Assurance",
			provider: "FreeCodeCamp",
			lang: "JavaScript",
			projects: "5 projects on Repl.it and GitHub",
			description:
				"Writing unit tests and functional tests with Chai and Mocha, using Pug as a template engine, using Passport for authentication and Socket.IO for real-time communication",
			completion: "Completed",
			link: "https://www.freecodecamp.org/certification/kmunton/quality-assurance-v7",
		},
		{
			title: "APIs and Microservices",
			provider: "FreeCodeCamp",
			lang: "JavaScript",
			projects: "5 projects on Repl.it and GitHub",
			description: "Managing Packages with Npm, Basic NodeJS and ExpressJS, MongoDB and Mongoose",
			completion: "Completed",
			link: "https://www.freecodecamp.org/certification/kmunton/apis-and-microservices",
		},
		{
			title: "Scientific Computing with Python",
			provider: "FreeCodeCamp",
			lang: "Python",
			projects: "5 projects on Repl.it",
			description: "Basics of Python, Object-Oriented Programming, Database Design, Web Development",
			completion: "Completed",
			link: "https://www.freecodecamp.org/certification/kmunton/scientific-computing-with-python-v7",
		},
		{
			title: "CS50 Introduction to Artificial Intelligence with Python",
			provider: "Harvard University (through edX)",
			lang: "Python",
			projects: "12 projects on GitHub",
			description: `Graph Search Algorithms, Adversarial Search, Knowledge Representation, Logical Inference, Probability Theory, Bayesian Networks,
            Markov Models, Constraint Satisfaction, Machine Learning, Reinforcement Learning, Neural Networks, Natural Language Processing`,
			completion: "Completed",
			link: "https://certificates.cs50.io/687557ba-d9d1-48a8-9668-d3d974f22736.png",
		},
		{
			title: "Front End Libraries",
			provider: "FreeCodeCamp",
			lang: "JavaScript",
			projects: "5 projects through CodePen",
			description: "Bootstrap, jQuery, Sass, React, Redux",
			completion: "Completed",
			link: "https://www.freecodecamp.org/certification/kmunton/front-end-libraries",
		},
		{
			title: "JavaScript Algorithms and Data Structures",
			provider: "FreeCodeCamp",
			lang: "JavaScript",
			projects: "5 projects through FreeCodeCamp",
			description:
				"ES6, Debugging, Regular Expression, Object Oriented Programming, Functional Programming, Data Structures and Algorithm Scripting",
			completion: "Completed",
			link:
				"https://www.freecodecamp.org/certification/kmunton/javascript-algorithms-and-data-structures",
		},
		{
			title: "CS50 Web Programming with Python and JavaScript",
			provider: "Harvard University (through edX)",
			lang: "HTML, CSS, Python, JavaScript",
			projects: "5 projects on GitHub",
			description: "SQL, Flask, ORMs, APIs, Django, Git, Scalability and Security",
			completion: "Completed",
			link: "https://certificates.cs50.io/e303b258-c641-4a19-ada6-d83622bb7d7e.png",
		},
		{
			title: "Responsive Web Design",
			provider: "FreeCodeCamp",
			lang: "CSS and HTML",
			projects: "5 projects through CodePen",
			description: "Flexbox, Media Queries, Accessibility",
			completion: "Completed",
			link: "https://www.freecodecamp.org/certification/kmunton/responsive-web-design",
		},
		{
			title: "CS50 Introduction to Computer Science",
			provider: "Harvard University (through edX)",
			lang: "C, Python, HTML, CSS, JavaScript",
			projects: "A final project on GitHub",
			description: "Introduction to Data Structures and Algorithms, Memory,  SQL, Flask",
			completion: "Completed",
			link: "https://certificates.cs50.io/39daab4f-1949-4fa1-ac3e-897f785f03ca.png",
		},
	],
};

const learning_portals = {
	badges: [
		{
			src: "freecodecamp",
			alt: "FreeCodeCamp",
		},
		{
			src: "edx",
			alt: "edX",
		},
		{
			src: "geeksforgeeks",
			alt: "Geeks For Geeks",
		},
		{
			src: "leetcode",
			alt: "LeetCode",
		},
		{
			src: "hackerrank",
			alt: "HackerRank",
		},
		{
			src: "stackoverflow",
			alt: "Stack Overflow",
		},
		{
			src: "udemy",
			alt: "Udemy",
		},
		{
			src: "oreilly",
			alt: "O'Reilly",
		},
	],
};

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("header").innerHTML = header;

	let mobile_temp = $("#mobile_temp").html();
	let table_temp = $("#table_temp").html();
	let badges_temp = $("#badges_temp").html();
	let badges_output = Mustache.render(badges_temp, learning_portals);
	let mobile_output = Mustache.render(mobile_temp, courses);
	let table_output = Mustache.render(table_temp, courses);

	$("#mobile").append(mobile_output);
	$("#table_body").append(table_output);
	$("#learning").append(badges_output);

	AOS.init();
});
