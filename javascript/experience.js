const header = ` <h1>Commercial Experience</h1>
<p>Relevant experience in software development</p></div>`;

const jobs = {
	jobs: [
		{
			name: "BJSS Ltd",
			role: "Software Engineer",
			years:
				"September 2021 - Present",
			company: `BJSS are a leading technology and engineering consultancy for business; 
			providing world-class digital consultancy to a range of clients from a variety of industries.
			The role involves applying knowledge of various programming languages, cloud infrastructure, DB technology, agile methodologies, and more to solve complex problems.`,
			responsibilities: [
				"Monitor and troubleshoot any problems arising in existing services used by millions of people across the country, using Kibana, Grafana and Dynatrace.",
				"Develop features, stories and bug fixes for Java Spring Boot applications and Node.js applications in a microservice architecture.",
				"Write unit and integration tests for all functional changes.",
				"Collaborate with the team to review pull requests and ensure sufficient end-to-end testing is carried out before releases.",
				"Perform production releases using Jenkins.",
				"Stay knowledgeable on the tech stack used in production including: Java 8 to Java 17, Spring Boot, Maven, Node.js, ELK, Kafka, AWS, Docker and Kubernetes.",
				"Adopt the agile workflow when working on JIRA tickets."
			],
			achievements: [
				"Successfully completed BJSS' month long engineering academy and gained a broad understanding of engineering roles.",
				"Developed and performed several crucial production releases that were time sensitive.",
				"Designed and refactored existing applications to update them to Java 17 from Java 8 and to improve maintainability of the code base"
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
					"alt":"Jenkins",
					"src":"jenkins"
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
					"alt":"Kubernetes",
					"src":"kubernetes"
				},
				{
					"alt":"Kafka",
					"src":"apachekafka"
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
