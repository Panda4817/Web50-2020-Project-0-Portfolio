const header = `<h1>K Munton</h1>
<p>Graduate Software Engineer</p>`;

const slides = {
	slides: [
		{
			img: "img4",
			main: "A ReactJS, NodeJS and Socket.IO web application to play Pictionary online with friends.",
			sub: "Back end deployed on Heroku and front end deployed on Netlify",
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
			sub: "Deployed using Heroku",
			link: "projects.html#mysouschef",
		},
		{
			img: "img3",
			main: "A ReactJS and NodeJS website to search images.",
			sub: "Deployed using Heroku",
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
			src: "style/img/badges/python.svg",
			alt: "Python 3",
			color: "#3776ab",
		},
		{
			src: "style/img/badges/django.svg",
			alt: "Django",
			color: "#092e20",
		},
		{
			src: "style/img/badges/flask.svg",
			alt: "Flask",
			color: "#000000",
		},
		{
			src: "style/img/badges/gnubash.svg",
			alt: "Bash",
			color: "#4eaa25",
		},
		{
			src: "style/img/badges/javascript.svg",
			alt: "JavaScript",
			color: "#f7df1e",
		},
		{
			src: "style/img/badges/jquery.svg",
			alt: "jQuery",
			color: "#0769ad",
		},
		{
			src: "style/img/badges/node-dot-js.svg",
			alt: "Node.js",
			color: "#339933",
		},
		{
			src: "style/img/badges/typescript.svg",
			alt: "TypeScript",
			color: "#3178C6",
		},
	],
};

const frameworks = {
	badges: [
		{
			src: "style/img/badges/html5.svg",
			alt: "HTML5",
			color: "#e34f26",
		},
		{
			src: "style/img/badges/css3.svg",
			alt: "CSS3",
			color: "#1572b6",
		},
		{
			src: "style/img/badges/sass.svg",
			alt: "Sass",
			color: "#cc6699",
		},
		{
			src: "style/img/badges/bootstrap.svg",
			alt: "Bootstrap",
			color: "#7952b3",
		},
		{
			src: "style/img/badges/react.svg",
			alt: "React",
			color: "#61dafb",
		},
		{
			src: "style/img/badges/expo.svg",
			alt: "Expo",
			color: "#000020",
		},
		{
			src: "style/img/badges/yarn.svg",
			alt: "Yarn",
			color: "#2C8EBB",
		},
		{
			src: "style/img/badges/npm.svg",
			alt: "NPM",
			color: "#CB3837",
		},
		{
			src: "style/img/badges/pug.svg",
			alt: "Pug",
			color: "#A86454",
		},
		{
			src: "style/img/badges/numpy.svg",
			alt: "Numpy",
			color: "#013243",
		},
		{
			src: "style/img/badges/redux.svg",
			alt: "Redux",
			color: "#764ABC",
		},
		{
			src: "style/img/badges/nodemon.svg",
			alt: "Nodemon",
			color: "#76D04B",
		},
		{
			src: "style/img/badges/express.svg",
			alt: "ExpressJS",
			color: "#000000",
		},
	],
};

const tools = {
	badges: [
		{
			src: "style/img/badges/visualstudiocode.svg",
			alt: "VS Code",
			color: "#007acc",
		},
		{
			src: "style/img/badges/git.svg",
			alt: "Git",
			color: "#f05032",
		},
		{
			src: "style/img/badges/travisci.svg",
			alt: "Travis-CI",
			color: "#3eaaaf",
		},
		{
			src: "style/img/badges/heroku.svg",
			alt: "Heroku",
			color: "#430098",
		},
		{
			src: "style/img/badges/pythonanywhere.svg",
			alt: "Python Anywhere",
			color: "#040404",
		},
		{
			src: "style/img/badges/netlify.svg",
			alt: "Netlify",
			color: "#00c7b7",
		},
		{
			src: "style/img/badges/postman.svg",
			alt: "Postman",
			color: "#ff6c37",
		},
		{
			src: "style/img/badges/mocha.svg",
			alt: "Mocha",
			color: "#8D6748",
		},
		{
			src: "style/img/badges/xfce.svg",
			alt: "XFCE",
			color: "#2284F2",
		},
		{
			src: "style/img/badges/linux.svg",
			alt: "Linux",
			color: "#FCC624",
		},
		{
			src: "style/img/badges/jest.svg",
			alt: "Jest",
			color: "#C21325",
		},
	],
};

const databases = {
	badges: [
		{
			src: "style/img/badges/sqlite.svg",
			alt: "SQLite",
			color: "#003b57",
		},
		{
			src: "style/img/badges/postgresql.svg",
			alt: "PostgreSQL",
			color: "#336791",
		},
		{
			src: "style/img/badges/mongodb.svg",
			alt: "MongoDB",
			color: "#47a248",
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
