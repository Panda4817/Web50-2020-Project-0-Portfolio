const header = `<h1>K Munton</h1>
<p class="lead">Self-taught Full-stack Software Engineer</p>`;

const slides = {
	slides: [
		{
			img: "img4",
			main: "A ReactJS, NodeJS and Socket.IO web application to play Pictionary online with friends.",
			sub: "Frontend deployed on Netlify and backend has been deployed on Heroku, AWS and Google Cloud",
			link: "projects.html#picto",
		},
		{
			img: "img9",
			main:
				"A React Native, Expo and TypeScript reminders mobile application with notifications and navigation.",
			sub: "Published on Expo",
			link: "projects.html#remindsy",
		},
		{
			img: "img10",
			main: "A Chrome extension that replaces the new tab with a xkcd themed one.",
			sub: "Uploaded to Chrome Web Store and serverless API functions deployed on Netlify",
			link: "projects.html#chrome-xkcd",
		},
		{
			img: "img2",
			main:
				"A Python and Django website to search and save recipes, add own recipes, keep a virtual pantry and create shopping lists.",
			sub: "Deployed using PythonAnywhere",
			link: "projects.html#mysouschef",
		},
		{
			img: "img3",
			main: "A ReactJS and NodeJS website to search images.",
			sub: "Running on Glitch",
			link: "projects.html#cutesee",
		},
		{
			img: "img1",
			main: "A Python and Flask website to keep track of movies, TV shows and books watched and read.",
			sub: "Deployed using PythonAnywhere",
			link: "projects.html#watchreadrepeat",
		},
		{
			img: "img5",
			main: "A NodeJS and Pug social media web application to create posts and chat.",
			sub: "Running on Repl",
			link: "projects.html#social-panda",
		},
		{
			img: "img6",
			main:
				"A NodeJS and Pug issue tracker web application to GET, POST, PUT and DELETE issues using MongoDB.",
			sub: "Running on Repl",
			link: "projects.html#issue-tracker",
		},
		{
			img: "img7",
			main:
				"A NodeJS and Pug anonymous message board web application using MongoDB, HelmetJS and password hashing using BCrypt.",
			sub: "Running on Repl",
			link: "projects.html#message-board",
		},
		{
			img: "img8",
			main: "A NodeJS real-time multiplayer arcade-style game with HelmetJS security features.",
			sub: "Running on Repl",
			link: "projects.html#covid-wars",
		},
	],
};

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
			src: "spring",
			alt: "Spring Boot",
		},
		{
			src: "node-dot-js",
			alt: "Node.js",
		},
	],
};

const frameworks = {
	badges: [
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
			src: "django",
			alt: "Django",
		},
		{
			src: "flask",
			alt: "Flask",
		},
		{
			src: "sass",
			alt: "Sass",
		},
		{
			src: "bootstrap",
			alt: "Bootstrap",
		},
		{
			src: "jquery",
			alt: "jQuery",
		},
		{
			src: "pug",
			alt: "Pug & Mustache template engine",
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
			src: "docker",
			alt: "Docker",
		},
		{
			src: "yarn",
			alt: "Yarn",
		},
		{
			src: "npm",
			alt: "NPM",
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
			src: "expo",
			alt: "Expo",
		},
		{
			src: "mocha",
			alt: "Mocha",
		},
		{
			src: "jest",
			alt: "Jest",
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
		},
		{
			src: "travisci",
			alt: "Travis-CI",
		},
		{
			src: "heroku",
			alt: "Heroku",
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

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("header").innerHTML = header;
	let slides_temp = $("#slides_temp").html();
	let badges_temp = $("#badges_temp").html();
	let output = Mustache.render(slides_temp, slides);
	let lang_out = Mustache.render(badges_temp, lang);
	let frameworks_out = Mustache.render(badges_temp, frameworks);
	let tools_out = Mustache.render(badges_temp, tools);
	let database_out = Mustache.render(badges_temp, databases);
	$("#slides").append(output);
	$("#lang").append(lang_out);
	$("#frameworks").append(frameworks_out);
	$("#tools").append(tools_out);
	$("#database").append(database_out);

	if ($(".owl-carousel")) {
		var welcomeSlide = $(".hero-slides");
		function removeAnimation() {
			var slideLayer = $("[data-animation]");
			slideLayer.each(function () {
				var anim_name = $(this).data("animation");
				$(this)
					.removeClass("animate__" + anim_name)
					.css("opacity", "0");
			});
		}

		function addAnimation() {
			$(".owl-carousel").trigger("stop.owl.autoplay");
			$(".owl-carousel").trigger("play.owl.autoplay");
			var slideLayer = welcomeSlide.find(".owl-item.active").find("[data-animation]");
			slideLayer.each(function () {
				var anim_name = $(this).data("animation");
				$(this)
					.addClass("animate__" + anim_name)
					.css("opacity", "1");
			});
		}

		welcomeSlide.owlCarousel({
			items: 1,
			margin: 0,
			loop: true,
			nav: false,
			dots: false,
			autoplay: true,
			autoplayTimeout: 8000,
			smartSpeed: 750,
			onTranslate: removeAnimation,
			onTranslated: addAnimation,
			onDrag: removeAnimation,
			onDragged: addAnimation,
		});

		$("[data-delay]").each(function () {
			var anim_del = $(this).data("delay");
			$(this).addClass("animate__delay-" + anim_del);
		});
	}
	AOS.init();
});
