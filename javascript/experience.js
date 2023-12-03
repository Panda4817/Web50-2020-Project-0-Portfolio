const header = ` <h1>Commercial Experience</h1>
<p>Relevant experience in software development</p></div>`;

const jobs = {
	jobs: [
		{
			name: "Technology and Engineering Consultancy",
			role: "Software Engineer",
			years:
				"September 2021 - Present",
			company: `Working in a leading technology and engineering consultancy for business; 
			providing world-class digital consultancy to a range of clients from a variety of industries.
			The role involves applying knowledge of various programming languages, cloud infrastructure, DB technology, agile methodologies, and more to solve complex problems.`,
			responsibilities: [
				"Monitor and troubleshoot any problems arising in existing services used by millions of people across the country. Tech: [Datadog, Kibana]",
				"Develop features, stories and bug fixes for Java Spring Boot applications and Node.js applications in a microservice architecture.",
				"Write unit and integration tests for all functional changes.",
				"Collaborate with the team to review pull requests and ensure sufficient end-to-end testing is carried out before releases.",
				"Stay knowledgeable on the tech stack used in production. Tech: [Java, Spring Boot, Maven, Node.js, React, ELK, AWS, SQL, Docker, Kubernetes]",
				"Adopt the agile workflow when working on JIRA tickets."
			],
			achievements: [
				"Successfully completed the month long engineering academy and gained a broad understanding of engineering roles.",
				"Developed and performed several crucial production releases that were time sensitive, in an efficient and quick manner.",
				"Refactored existing applications to update them from Java 8 to Java 17, which improved the maintainability of the code base.",
				"Created a script using Python 3 to help triage production incidents, which reduced incidents being raised in a support channel.",
				"Designed and developed an internal application using React and Redux, which is used across various teams and aids with testing new functionality of production applications."
			],
			skills: [
				{
					"alt":"Java",
					"src":"java"
				},
				{
					"alt":"Spring Boot",
					"src":"spring"
				},
				{
					"alt":"Maven",
					"src":"maven"
				},
				{
					"alt":"Git",
					"src":"git"
				},
				{
					"alt":"JavaScript",
					"src":"javascript"
				},
				{
					"alt":"React",
					"src":"react"
				},
				{
					"alt":"Node.js",
					"src":"node-dot-js"
				},
				{
					"alt":"NPM",
					"src":"npm"
				},
				{
					"alt":"HTML",
					"src":"html5"
				},
				{
					"alt":"CSS",
					"src":"css3"
				},
				{
					"alt":"Docker",
					"src":"docker"
				},
				{
					"alt":"Kibana",
					"src":"kibana"
				},
				{
					"alt":"JIRA",
					"src":"jira"
				},
				{
					"alt":"AWS",
					"src":"amazonaws"
				},
				{
					"alt":"SQL",
					"src":"postgresql"
				},
				{
					"alt":"Kubernetes",
					"src":"kubernetes"
				},
				{
					src: "intellijidea",
					alt: "Intellij",
				},
				{
					src: "postman",
					alt: "Postman",
				},
			]

		},
	],
};

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("header").innerHTML = header;
	let jobs_temp = $("#jobs_temp").html();
	let jobs_output = Mustache.render(jobs_temp, jobs);
	$("#jobs_content").append(jobs_output);
	AOS.init();
});
