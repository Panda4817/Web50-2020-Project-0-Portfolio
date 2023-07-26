const header = `<h1>Personal Projects</h1>
<p>Some projects I have been working on in my own time</p>
<p>Full list on <a href="https://github.kmunton.dev" target="_blank" style="color: white"><i class="fab fa-github"></i> GitHub</a></p></div>`;

// tags

const tags = {
	tags: [
		"React",
		"JavaScript",
		"Node",
		"Express",
		"SocketIO",
		"Chai",
		"Chai-http",
		"Mocha",
		"Bootstrap-4",
		"Netlify",
		"CSS",
		"HTML",
		"deployed",
		"Travis-CI",
		"Git",
		"VS-Code",
		"Python",
		"Django",
		"PostgreSQL",
		"Database",
		"SQL",
		"JQuery",
		"SCSS",
		"Sass",
		"CS50-Web",
		"Flask",
		"SQLite",
		"PythonAnywhere",
		"CS50x",
		"MongoDB",
		"No-SQL",
		"Pug",
		"Repl",
		"FreeCodeCamp",
		"command-line-tool",
		"Numpy",
		"CS50AI",
		"Pygame",
		"CodePen",
		"live-demo",
		"API",
		"Mustache",
		"Serverless",
		"React-Native",
		"Expo",
		"WSL2",
		"Redux",
		"Geolocation",
		"Firebase",
		"Bootstrap-5",
		"Jest",
		"TypeScript",
	],
};

const projects = {
	projects: [
		{
			title: "Picto",
			img: "project-img-18",
			tags: [
				"React",
				"JavaScript",
				"Node",
				"Express",
				"SocketIO",
				"Chai",
				"Chai-http",
				"Mocha",
				"Bootstrap-4",
				"Netlify",
				"CSS",
				"HTML",
				"deployed",
				"Travis-CI",
				"Git",
				"VS-Code",
				"WSL2",
				"Jest",
			],
			text: `An online multiplayer Pictionary app with ReactJS front end and NodeJS back end with Express server. 
            The website lets you create a room or join an existing room. Once the game has started, it uses Socket.IO to communicate drawing data and chat messages between users. 
            The website is mobile responsive and uses Bootstrap 4 for styling. The back end is deployed on Google Cloud and the front end is deployed on Netlify.`,
			link: "https://picto.kmunton.dev/",
			short: "picto",
		},
		{
			title: "Chrome Extension",
			img: "project-img-21",
			tags: [
				"JavaScript",
				"Node",
				"Express",
				"CSS",
				"HTML",
				"Git",
				"VS-Code",
				"Serverless",
				"API",
				"Netlify",
				"WSL2",
			],
			text: `A chrome extension that replaces the new tab with an xkcd themed one. It will show you the latest comic and a random comic. 
            It can also show you news headlines from your country, the latest Google doodle, your most visited sites and bookmarks. 
            To get around CORs while accessing the xkcd API, I created my own serverless API functions hosted on Netlify, which fetch the latest news headlines, comics and Google doodle. 
            My the serverless API repo is on GitHub.`,
			link: "https://github.com/Panda4817/xkcd-new-tab",
			short: "chrome-xkcd",
		},
		{
			title: "CuteSee",
			img: "project-img-15",
			tags: [
				"React",
				"JavaScript",
				"Node",
				"Express",
				"Bootstrap-4",
				"CSS",
				"HTML",
				"deployed",
				"Git",
				"VS-Code",
				"API",
				"WSL2",
			],
			text: `This is a personal project using ReactJS front end and NodeJS with Express for back end. 
            The website also utilises a third-party API Pixabay for the images. 
            The website lets you search for images by typing the search query in the search bar.
            However it is a little different from normal image search engines because it adds the word ‘cute’ onto the beginning of the search query. 
            The website is mobile responsive and uses Bootstrap 4 for styling. This website is deployed on Glitch.`,
			link: "https://cutesee.glitch.me/",
			short: "cutesee",
		},
		{
			title: "Remindsy Mobile App",
			img: "project-img-33",
			tags: [
				"TypeScript",
				"VS-Code",
				"WSL2",
				"React-Native",
				"Expo",
				"Redux",
				"SQLite",
				"Git",
				"deployed",
				"Jest",
			],
			text: `The app lets you set reminders, called a "Remindsy", 
			which notifies the user to buy cards and presents for friends and family a week or 2 weeks in advance of the birthday and/or anniversary date. 
			This is my first TypeScript project. 
			The project also has extensive tests via Jest for all features of the app. 
			The app is published on Expo and can be installed onto an Android device via Expo Go app. 
			The link to the Expo app page can be found via the GitHub repository.`,
			link: "https://github.com/Panda4817/remindsy",
			short: "remindsy",
		},
		{
			title: "COVID Wars",
			img: "project-img-32",
			tags: [
				"JavaScript",
				"Node",
				"Express",
				"Chai",
				"Chai-http",
				"Mocha",
				"Bootstrap-5",
				"CSS",
				"HTML",
				"deployed",
				"Repl",
				"Git",
				"FreeCodeCamp",
				"API",
				"SocketIO",
			],
			text: `A FreeCodeCamp project for the information security certificate. 
			A secure real time multiplayer arcade-style game using NodeJS, ExpressJS serveR and Socket.IO. 
			The frontend makes use of HTML5 Canvas API. Chai and Mocha was used for functional tests. 
			I have added security features using Helmet.`,
			link: "https://replit.com/@Panda4817/covid-wars",
			short: "covid-wars",
		},
		{
			title: "Anonymous Message Board",
			img: "project-img-30",
			tags: [
				"JavaScript",
				"Node",
				"Express",
				"Chai",
				"Chai-http",
				"Mocha",
				"Bootstrap-5",
				"MongoDB",
				"Pug",
				"CSS",
				"HTML",
				"deployed",
				"Repl",
				"Git",
				"FreeCodeCamp",
				"API",
			],
			text: `A FreeCodeCamp project for the information security certificate. 
			An anonymous message board implementation using NodeJS, ExpressJS server, MongoDB database and Pug template engine for the frontend. 
			I have written all 10 functional tests using Chai and Mocha. 
			I have added security features using Helmet and password hashing using BCrypt.`,
			link: "https://replit.com/@Panda4817/anonymous-message-board",
			short: "message-board",
		},
		{
			title: "E-commerce App",
			img: "project-img-26",
			tags: ["JavaScript", "VS-Code", "WSL2", "React-Native", "Expo", "Redux", "Firebase", "Git"],
			text: `The app lets an user create an account, verifies their email, login to their account, place products in a cart, order products, view orders made, add own products to sell, edit account details and logout.`,
			link: "https://github.com/Panda4817/react-native-shop-app",
		},
		{
			title: "Muddy Boots App",
			img: "project-img-25",
			tags: [
				"JavaScript",
				"VS-Code",
				"WSL2",
				"React-Native",
				"Expo",
				"Redux",
				"SQLite",
				"Geolocation",
				"Git",
			],
			text: `The app lets you save your favourite places to start walks from. This project focussed on learning to use mobile native features such as camera, geolocation, file system and SQLite database.`,
			link: "https://github.com/Panda4817/muddy-boots-app",
		},
		{
			title: "MySousChef Web Application",
			img: "project-img-10",
			tags: [
				"Python",
				"Django",
				"PostgreSQL",
				"Database",
				"SQL",
				"JavaScript",
				"JQuery",
				"Bootstrap-4",
				"SCSS",
				"Sass",
				"CSS",
				"HTML",
				"deployed",
				"Travis-CI",
				"Git",
				"VS-Code",
				"CS50-Web",
				"API",
				"WSL2",
				"PythonAnywhere",
			],
			text: `For my CS50 web programming final project I created a website called MySousChef that lets you search for recipes, add your own recipes, add items to a virtual pantry and keep track of use by dates, best before dates, when an item was opened or frozen and use within information. 
            The website also lets you search for recipes by filtering for ingredients only in your virtual pantry. You can also create a virtual shopping list.
            This project uses the Django Python framework with a PostgreSQL database. This website utilises the Spoonacular API and a Colorlib template. The website is deployed using PythonAnywhere.`,
			link: "https://mysouschef.eu.pythonanywhere.com",
			short: "mysouschef",
		},
		{
			title: "Watch Read Repeat Web Application",
			img: "project-img-5",
			tags: [
				"Python",
				"Flask",
				"SQLite",
				"Database",
				"SQL",
				"JavaScript",
				"JQuery",
				"Bootstrap-4",
				"CSS",
				"HTML",
				"deployed",
				"PythonAnywhere",
				"Git",
				"CS50x",
				"API",
			],
			text: `Python and Flask based website that lets you keep lists of what you have watched, watching or want to watch and same with books. Back-end completed using Python and Flask with a SQLite database.
            Front-end uses JavaScript, HTML and CSS with Bootstrap 4. Also some jQuery and AJAX.
            The dashboard provides data about your lists such as top 5 rated books, movies and TV shows and stacked bar charts using Chart.js.
            To start saving books, TV shows and movies, an account needs to be created with the site and then login using username and password. The website lets you update account details through the accounts page.
            I have also used Bootstrap styled DataTables for the lists and other styling features such as modals.
            This is the first website I have deployed and it is hosted from PythonAnywhere.`,
			link: "https://watchreadrepeat.eu.pythonanywhere.com/",
			short: "watchreadrepeat",
		},
		{
			title: "Issue Tracker",
			img: "project-img-20",
			tags: [
				"JavaScript",
				"Node",
				"Express",
				"MongoDB",
				"Database",
				"No-SQL",
				"Pug",
				"Chai",
				"Chai-http",
				"Mocha",
				"Bootstrap-4",
				"CSS",
				"HTML",
				"deployed",
				"Repl",
				"Git",
				"FreeCodeCamp",
				"API",
			],
			text: `This project was part of FreeCodeCamp Quality Assurance projects. The project uses a MongoDB database to get, post, put and delete issues. 
            The project didn't require it but I used a Pug template engine to render the front end. The index page has a simple dashboard showing the number of projects and number of issues per project. 
            When the project page is loaded, it displays all projects both open and closed but you may filter the issues by adding queries to the url.
            I used Bootstrap 4 for styling and mobile responsiveness. The project is running on Repl.`,
			link: "https://repl.it/@Panda4817/issue-tracker",
			short: "issue-tracker",
		},
		{
			title: "Social Panda Web Application",
			img: "project-img-19",
			tags: [
				"JavaScript",
				"Node",
				"Express",
				"SocketIO",
				"MongoDB",
				"Database",
				"No-SQL",
				"Pug",
				"Chai",
				"Chai-http",
				"Mocha",
				"Bootstrap-4",
				"CSS",
				"HTML",
				"deployed",
				"Repl",
				"Git",
				"FreeCodeCamp",
			],
			text: `This project was started to complete the advanced NodeJS challenges on FreeCodeCamp but I decided to extend it with more features.
            I used PassportJS to give users various ways to login to the app. I used a MongoDB database to store user and posts information. 
            I used a Pug template engine to render the front end. The app allows users to make posts, with hashtags and emoji. Users can like and unlike posts. Users can filter posts by trending hashtags. 
            The app includes a global chat room, which uses Socket.IO. I used Bootstrap 4 for styling and mobile responsiveness. The project is running on Repl.`,
			link: "https://repl.it/@Panda4817/social-panda",
			short: "social-panda",
		},

		{
			title: "Sudoku Solver",
			img: "project-img-17",
			tags: ["Python", "command-line-tool", "Numpy", "Travis-CI", "Git", "VS-Code", "CS50AI", "WSL2"],
			text: `A project inspired by CS50 AI course. A command line tool that uses a backtracking search algorithm with some optimization heuristics to solve any valid sudoku boards. 
            The board is loaded from a csv file. It will print out the board as it is being solved and afterwards print out the number of seconds it took to solve it.`,
			link: "https://github.com/Panda4817/sudoku-solver",
		},
		{
			title: "Snake AI",
			img: "project-img-16",
			tags: ["Python", "Pygame", "Numpy", "Git", "VS-Code", "CS50AI", "WSL2"],
			text: `A project inspired by CS50 AI course. A pygame program that allows users to play the classic game of Snake as normal, watch an AI play Snake and play Snake against the AI. 
            Before settling on the Hamiltonian Cycle for the AI snake, I tried Q-learning and A* search algorithms. `,
			link: "https://github.com/Panda4817/Snake-AI",
		},
		{
			title: "React Calculator",
			img: "project-img-14",
			tags: [
				"JavaScript",
				"React",
				"Bootstrap-4",
				"SCSS",
				"Sass",
				"HTML",
				"CSS",
				"CodePen",
				"live-demo",
				"FreeCodeCamp",
			],
			text: `This project uses JavaScript with React, Bootstrap 4 and Sass.
            The calculator lets you choose between formula logic or immediate execution logic using a custom toggle switch.
            The calculator also works with keyboard keys being pressed along with mouse clicks.
            Click on the image to see the project on CodePen.`,
			link: "https://codepen.io/k_munton/pen/ExPogzZ",
		},
		{
			title: "React Markdown Previewer",
			img: "project-img-12",
			tags: [
				"JavaScript",
				"React",
				"Bootstrap-4",
				"SCSS",
				"Sass",
				"HTML",
				"CSS",
				"CodePen",
				"live-demo",
				"FreeCodeCamp",
			],
			text: `This project uses JavaScript with React, Bootstrap 4, Sass, Marked.js and HTML-React-Parser package. 
            When the user types anything in the textarea, that input is controlled using React components. 
            The input value is then parsed to HTML by Marked.js and then parsed again by HTML-React-Parser.
            Click on the image to see the project on CodePen.`,
			link: "https://codepen.io/k_munton/pen/QWyOGzv",
		},
		{
			title: "React Random Quote Generator",
			img: "project-img-11",
			tags: [
				"JavaScript",
				"React",
				"Bootstrap-4",
				"SCSS",
				"Sass",
				"HTML",
				"CSS",
				"CodePen",
				"live-demo",
				"FreeCodeCamp",
			],
			text: `This project uses JavaScript with React, Bootstrap 4, Animate.css and Sass. 
            When 'Generate Random Quote' is clicked a random number is generated, which is used as the array index for the quote and another number is generated for the array index for the body background colour.
            Click on the image to see the project on CodePen.`,
			link: "https://codepen.io/k_munton/pen/MWKEdNG",
		},
		{
			title: "CS50 Web - Pizza",
			img: "project-img-9",
			tags: [
				"Python",
				"Django",
				"SQLite",
				"Database",
				"SQL",
				"JavaScript",
				"JQuery",
				"Bootstrap-4",
				"SCSS",
				"Sass",
				"CSS",
				"HTML",
				"Git",
				"VS-Code",
				"CS50-Web",
				"API",
			],
			text: `In this project, I built a web application for handling a pizza restaurant’s online orders. Users are able to browse the restaurant’s menu, add items to their cart, and submit their orders. 
            Meanwhile, the restaurant owners are able to add and update menu items, and view orders that have been placed.
            Customers can also choose to pay by card through the implementation of Stripe API and restaurant owners can mark orders complete. This project uses the Python Django framework with a SQLite database.`,
			link: "https://github.com/Panda4817/Web50-2020-Project-3-Pizza",
		},
		{
			title: "CS50 Web - Flack",
			img: "project-img-8",
			tags: [
				"Python",
				"Flask",
				"SocketIO",
				"JavaScript",
				"JQuery",
				"Bootstrap-4",
				"SCSS",
				"Sass",
				"CSS",
				"HTML",
				"Git",
				"VS-Code",
				"CS50-Web",
			],
			text: `In this project, I built an online messaging service using Flask, similar in spirit to Slack. 
            Users are able to sign into the site with a display name, create channels (i.e. chat rooms) to communicate in, as well as see and join existing channels. 
            Once a channel is selected, users are able to send and receive messages with one another in real time. You can also send GIFs and images and see who else is in the channel.
            This project uses Socket.IO to communicate between clients and servers.`,
			link: "https://github.com/Panda4817/Web50-2020-Project-2-Flack",
		}
	
	]
};

const checkedTags = [];
function filterProjects(checkbox, target_class) {
	let projects = $(".card");
	for (let i = 0; i < projects.length; i++) {
		projects[i].style.display = "none";
	}
	let index = checkedTags.findIndex((t) => t == target_class);
	if (checkbox.checked) {
		if (index < 0) {
			checkedTags.push(target_class);
			document.getElementById("id_i_" + target_class).style.display = "inline-block";
			document.getElementById("id_x_" + target_class).style.display = "none";
			document.getElementById("label_" + target_class).classList.replace("tags-muted", "tags");
		}
	} else {
		if (index > -1) {
			checkedTags.splice(index, 1);
			document.getElementById("id_i_" + target_class).style.display = "none";
			document.getElementById("id_x_" + target_class).style.display = "inline-block";
			document.getElementById("label_" + target_class).classList.replace("tags", "tags-muted");
			$('[data-value="' + target_class + '"').remove();
		}
	}
	console.log(checkedTags);
	let classString = checkedTags.length > 1 ? checkedTags.join(", .") : checkedTags[0];
	let targets = $("." + classString);
	let projectsShown = false;
	for (let i = 0; i < targets.length; i++) {
		targets[i].style.display = "inline-block";
		projectsShown = true;
	}
	if (projectsShown == false) {
		for (let i = 0; i < projects.length; i++) {
			projects[i].style.display = "inline-block";
		}
	}
}

function changeCheckbox(id, target_class) {
	let checkbox = document.getElementById(id);
	if (checkbox.checked) {
		checkbox.checked = false;
	} else {
		checkbox.checked = true;
	}
	filterProjects(checkbox, target_class);
}

function getTokens() {
	console.log("function getTokens");
	let string = $("#tokenfield-tokenfield").val();
	let tokens = [];
	if (string) {
		tokens = string.split(" ");
	}
	console.log(tokens);
	$("#tokenfield-tokenfield").val("");
	tokens.map((token) => {
		let index = tags["tags"].findIndex((t) => t.toLowerCase().trim() == token.toLowerCase().trim());
		let valid = index > -1 ? true : false;
		if (valid) {
			$("#tokenfield").tokenfield("createToken", tags["tags"][index]);
		}

		return;
	});
}

function addToken(target_class) {
	let checkbox = document.getElementById("id_" + target_class);
	if (checkbox.checked) {
		checkbox.checked = false;
		filterProjects(checkbox, target_class);
	} else {
		$("#tokenfield").tokenfield("createToken", target_class);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("header").innerHTML = header;

	let projects_temp = $("#projects_temp").html();
	let tags_temp = $("#tags_temp").html();

	let projects_output = Mustache.render(projects_temp, projects);
	let tags_output = Mustache.render(tags_temp, tags);

	$("#project_content").append(projects_output);
	$("#taglist").append(tags_output);

	$("#tokenfield")
		.on("tokenfield:createtoken", function (event) {
			var existingTokens = $(this).tokenfield("getTokens");
			$.each(existingTokens, function (index, token) {
				if (token.value.toLowerCase().trim() === event.attrs.value.toLowerCase().trim())
					event.preventDefault();
				$("#tokenfield-tokenfield").val("");
			});
		})

		.on("tokenfield:createdtoken", function (e) {
			let val = e.attrs.value;
			let index = tags["tags"].findIndex((t) => t.toLowerCase().trim() == val.toLowerCase().trim());
			var valid = index > -1 ? true : false;
			if (!valid) {
				$(e.relatedTarget).remove();
			} else {
				changeCheckbox("id_" + tags["tags"][index], tags["tags"][index]);
			}
		})

		.on("tokenfield:removedtoken", function (e) {
			let val = e.attrs.value;
			let index = tags["tags"].findIndex((t) => t.toLowerCase().trim() == val.toLowerCase().trim());
			var valid = index > -1 ? true : false;
			if (valid) {
				changeCheckbox("id_" + tags["tags"][index], tags["tags"][index]);
			}
		})

		.tokenfield({
			autocomplete: {
				source: tags["tags"],
				delay: 100,
			},
			showAutocompleteOnFocus: true,
		});
	AOS.init();
});
