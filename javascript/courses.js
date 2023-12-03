const header = `<h1>Courses and Training</h1>
<p>Relevant courses and training in software development</p></div>`;

const courses = {
	courses: [
		{
			title: "Java Programming I & II",
			provider: "University of Helsinki (MOOC.fi)",
			lang: "Java",
			description:
				"Learn the key aspects of the Java programming language",
			link: "https://certificates.mooc.fi/validate/hq4b3bjhqfj",
		},
		{
			title: "React Native - The Practical Guide",
			provider: "Udemy",
			lang: "React Native",
			description:
				"Use React Native and React knowledge to build native iOS and Android Apps - incl. Push Notifications, Hooks, Redux, Firebase",
			link: "https://www.udemy.com/certificate/UC-6b9d9f76-fe7c-4006-834d-17821dcb18ed/",
		},
		{
			title: "Information Security",
			provider: "FreeCodeCamp",
			lang: "JavaScript and Python",
			description:
				"Building a secure web app with HelmetJS. Building a TCP client and an Nmap and port scanner in Python.",
			link: "https://freecodecamp.org/certification/kmunton/information-security-v7",
		},
		{
			title: "Data Visualization",
			provider: "FreeCodeCamp",
			lang: "JavaScript",
			description:
				"Building charts, graphs, and maps to present different types of data with the D3.js library",
			link: "https://freecodecamp.org/certification/kmunton/data-visualization",
		},
		{
			title: "Quality Assurance",
			provider: "FreeCodeCamp",
			lang: "JavaScript",
			description:
				"Writing unit tests and functional tests with Chai and Mocha, using Pug as a template engine, using Passport for authentication and Socket.IO for real-time communication",
			link: "https://www.freecodecamp.org/certification/kmunton/quality-assurance-v7",
		},
		{
			title: "APIs and Microservices",
			provider: "FreeCodeCamp",
			lang: "JavaScript",
			description: "Managing Packages with Npm, Basic NodeJS and ExpressJS, MongoDB and Mongoose",
			link: "https://www.freecodecamp.org/certification/kmunton/apis-and-microservices",
		},
		{
			title: "Scientific Computing with Python",
			provider: "FreeCodeCamp",
			lang: "Python",
			description: "Basics of Python, Object-Oriented Programming, Database Design, Web Development",
			link: "https://www.freecodecamp.org/certification/kmunton/scientific-computing-with-python-v7",
		},
		{
			title: "CS50 Introduction to Artificial Intelligence with Python",
			provider: "Harvard University (through edX)",
			lang: "Python",
			description: `Graph Search Algorithms, Adversarial Search, Knowledge Representation, Logical Inference, Probability Theory, Bayesian Networks,
            Markov Models, Constraint Satisfaction, Machine Learning, Reinforcement Learning, Neural Networks, Natural Language Processing`,
			link: "https://certificates.cs50.io/687557ba-d9d1-48a8-9668-d3d974f22736.png",
		},
		{
			title: "Front End Libraries",
			provider: "FreeCodeCamp",
			lang: "JavaScript",
			description: "Bootstrap, jQuery, Sass, React, Redux",
			link: "https://www.freecodecamp.org/certification/kmunton/front-end-libraries",
		},
		{
			title: "JavaScript Algorithms and Data Structures",
			provider: "FreeCodeCamp",
			lang: "JavaScript",
			description:
				"ES6, Debugging, Regular Expression, Object Oriented Programming, Functional Programming, Data Structures and Algorithm Scripting",
			link:
				"https://www.freecodecamp.org/certification/kmunton/javascript-algorithms-and-data-structures",
		},
		{
			title: "CS50 Web Programming with Python and JavaScript",
			provider: "Harvard University (through edX)",
			lang: "HTML, CSS, Python, JavaScript",
			description: "SQL, Flask, ORMs, APIs, Django, Git, Scalability and Security",
			link: "https://certificates.cs50.io/e303b258-c641-4a19-ada6-d83622bb7d7e.png",
		},
		{
			title: "Responsive Web Design",
			provider: "FreeCodeCamp",
			lang: "CSS and HTML",
			description: "Flexbox, Media Queries, Accessibility",
			link: "https://www.freecodecamp.org/certification/kmunton/responsive-web-design",
		},
		{
			title: "CS50 Introduction to Computer Science",
			provider: "Harvard University (through edX)",
			lang: "C, Python, HTML, CSS, JavaScript",
			description: "Introduction to Data Structures and Algorithms, Memory,  SQL, Flask",
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
