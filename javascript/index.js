const header = `<h1>K Munton</h1>
<p class="lead">Full-stack Software Engineer</p>`;

const lang = {
	badges: [
		{
			src: "java",
			alt: "Java",
		},
		{
			src: "python",
			alt: "Python 3",
		},
		{
			src: "javascript",
			alt: "JavaScript",
		},
		{
			src: "typescript",
			alt: "TypeScript",
		},
		{
			src: "html5",
			alt: "HTML5",

		},
		{
			src: "css3",
			alt: "CSS3",
		},
		{
			src: "gnubash",
			alt: "Bash",
		},
		{
			src: "postgresql",
			alt: "SQL"
		}
	],
};

const frameworks = {
	badges: [
		{
			src: "spring",
			alt: "Spring Boot",
		},
		{
			src: "node-dot-js",
			alt: "Node.js",
		},
		{
			src: "maven",
			alt: "Maven",
		},
		{
			src: "react",
			alt: "React",
		},
		{
			src: "redux",
			alt: "Redux",
		},
		{
			src: "bootstrap",
			alt: "Bootstrap",
		},
		{
			src: "npm",
			alt: "NPM",
		},
		{
			src: "jest",
			alt: "Jest",
		}
	],
};

const tools = {
	badges: [
		{
			src: "intellijidea",
			alt: "Intellij",
		},
		{
			src: "visualstudiocode",
			alt: "VS Code",
		},
		{
			src: "git",
			alt: "Git",
		},
		{
			src: "postman",
			alt: "Postman",
		},
		{
			src: "kibana",
			alt: "Kibana",
		},
		{
			src: "datadog",
			alt: "Datadog",
		},
		{
			src: "docker",
			alt: "Docker",
		},
		{
			src: "linux",
			alt: "Linux environment",
		},
		{
			src: "jira",
			alt: "JIRA",
		},
		{
			src: "travisci",
			alt: "Travis-CI",
		},
		{
			src: "netlify",
			alt: "Netlify",
		},
		{
			src: "amazonaws",
			alt: "AWS",
		},
	],
};

const databases = {
	badges: [
		{
			src: "postgresql",
			alt: "PostgreSQL",
		},
		{
			src: "mongodb",
			alt: "MongoDB",
		}
	],
};

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("header").innerHTML = header;
	let badges_temp = $("#badges_temp").html();
	let lang_out = Mustache.render(badges_temp, lang);
	let frameworks_out = Mustache.render(badges_temp, frameworks);
	let tools_out = Mustache.render(badges_temp, tools);
	let database_out = Mustache.render(badges_temp, databases);
	$("#lang").append(lang_out);
	$("#frameworks").append(frameworks_out);
	$("#tools").append(tools_out);
	$("#database").append(database_out);
	AOS.init();
});
