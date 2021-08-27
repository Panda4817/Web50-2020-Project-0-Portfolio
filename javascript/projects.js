const header = `<h1>Projects</h1>
<p>Take a look at what I have been working on</p></div>`;

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
		"Heroku",
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
		"Passport",
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
		"Helmet",
		"BCrypt",
		"TypeScript",
	],
};

const projects = {
	projects: [
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
				"HelmetJS",
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
			title: "Stock Price Checker API",
			img: "project-img-31",
			tags: [
				"JavaScript",
				"Node",
				"Express",
				"Chai",
				"Chai-http",
				"Mocha",
				"Bootstrap-5",
				"MongoDB",
				"Helmet",
				"CSS",
				"HTML",
				"deployed",
				"Repl",
				"Git",
				"FreeCodeCamp",
				"API",
			],
			text: `A FreeCodeCamp project for the information security certificate. 
			A stock checker API implementation using NodeJS, ExpressJS server and MongoDB database for checking ip address against stock symbols. 
			I have also added a frontend to test out API responses and wrote all 5 functional tests using Chai and Mocha. 
			I have set the content security policies to only allow loading of scripts and CSS from my server and trusted servers using Helmet.`,
			link: "https://replit.com/@Panda4817/stock-checker-API",
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
				"Helmet",
				"BCrypt",
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
			title: "American-British Translator",
			img: "project-img-29",
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
			],
			text: `A FreeCodeCamp project for the quality assurance certificate. A full stack JavaScript app that translates sentences written in American English to British English and vice versa. 
			I wrote all the logic for the translator and I wrote all unit tests and functional tests in Chai and Mocha. 
            The project is running on Repl.`,
			link: "https://repl.it/@Panda4817/American-to-British-translator",
		},
		{
			title: "Sudoku Solver JS",
			img: "project-img-28",
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
			],
			text: `A FreeCodeCamp project for the quality assurance certificate. A full stack JavaScript app that solves any 9x9 sudoku puzzles with a frontend using Bootstrap 5 styling. All unit tests and functional tests written in Chai and Mocha.  
            The project is running on Repl.`,
			link: "https://repl.it/@Panda4817/sudoku-solver-js",
		},
		{
			title: "Library API",
			img: "project-img-27",
			tags: [
				"JavaScript",
				"Node",
				"Express",
				"MongoDB",
				"Database",
				"No-SQL",
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
			text: `A FreeCodeCamp project for the quality assurance certificate. A library API implementation using NodeJS, ExpressJS server and MongoDB database for storage of books. It follows CRUD principles. You can add books, update them with new comments, delete a book and delete all books. I have also added a frontend to test out API responses and wrote all 10 functional tests using Chai and Mocha. 
            I used Bootstrap 4 for styling and mobile responsiveness. The project is running on Repl.`,
			link: "https://repl.it/@Panda4817/personal-library",
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
			title: "Penny Jar App",
			img: "project-img-24",
			tags: ["JavaScript", "VS-Code", "WSL2", "React-Native", "Expo", "Redux", "Git"],
			text: `The app lets you keep a virtual "swear jar", which uses AsyncStorage to store the number of pennies in your jar and a list of reasons for adding the penny.`,
			link: "https://github.com/Panda4817/penny-jar-app",
		},
		{
			title: "To-do App with Pomodoro Timer",
			img: "project-img-23",
			tags: ["JavaScript", "VS-Code", "WSL2", "React-Native", "Expo", "Git"],
			text: `The app has a timer and list keeping feature. The idea is to create the tasks and start the timer. The timer cycles between 25 minutes productive time and 5 minutes break time.`,
			link: "https://github.com/Panda4817/pomodoro-timer-app",
		},
		{
			title: "Number Guessing App",
			img: "project-img-22",
			tags: ["JavaScript", "VS-Code", "WSL2", "React-Native", "Expo", "Git"],
			text: `Pick a number and the computer guesses. Human gives hints by pressing higher or lower. See how many guesses required by the computer.`,
			link: "https://github.com/Panda4817/guess-number-app",
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
				"Heroku",
				"Travis-CI",
				"Git",
				"VS-Code",
				"WSL2",
				"Jest",
			],
			text: `An online multiplayer Pictionary app with ReactJS front end and NodeJS back end with Express server. 
            The website lets you create a room or join an existing room. Once the game has started, it uses Socket.IO to communicate drawing data and chat messages between users. 
            The website is mobile responsive and uses Bootstrap 4 for styling. The back end is deployed on Heroku and the front end is deployed on Netlify.`,
			link: "https://picto.netlify.app/",
			short: "picto",
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
				"Heroku",
				"Git",
				"VS-Code",
				"API",
				"WSL2",
			],
			text: `This is a personal project using ReactJS front end and NodeJS with Express for back end. 
            The website also utilises a third-party API Pixabay for the images. 
            The website lets you search for images by typing the search query in the search bar.
            However it is a little different from normal image search engines because it adds the word ‘cute’ onto the beginning of the search query. 
            The website is mobile responsive and uses Bootstrap 4 for styling. This website is deployed on Heroku.`,
			link: "https://cutesee.herokuapp.com/",
			short: "cutesee",
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
				"Heroku",
				"Travis-CI",
				"Git",
				"VS-Code",
				"CS50-Web",
				"API",
				"WSL2",
			],
			text: `For my CS50 web programming final project I created a website called MySousChef that lets you search for recipes, add your own recipes, add items to a virtual pantry and keep track of use by dates, best before dates, when an item was opened or frozen and use within information. 
            The website also lets you search for recipes by filtering for ingredients only in your virtual pantry. You can also create a virtual shopping list.
            This project uses the Django Python framework with a PostgreSQL database. This website utilises the Spoonacular API and a Colorlib template. The website is deployed using Heroku.`,
			link: "https://mysouschef.herokuapp.com/",
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
				"Passport",
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
			title: "React Animal Drum Machine",
			img: "project-img-13",
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
            When a user clicks on the drums or presses the keys associated with each drum an animal sound plays, along with a specific text and image being shown for that sound.
            I programmed an easter egg into the app. When the user clicks on the image, it opens a Bootstrap modal with a video that starts playing immediately.
            Click on the image to see the project on CodePen.`,
			link: "https://codepen.io/k_munton/pen/XWXzPJW",
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
			title: "Project 3 - Pizza",
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
			title: "Project 2 - Flack",
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
		},
		{
			title: "Project 1 - Books",
			img: "project-img-7",
			tags: [
				"Python",
				"Flask",
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
				"API",
				"Git",
				"VS-Code",
				"CS50-Web",
			],
			text: `This project was Python Flask based with a PostgreSQL database. 
            In this project I built a book review website. 
            Users are able to register for an account and then log in using their username and password. 
            Once they log in, they will be able to search for books, leave reviews for individual books, and see the reviews made by other people. 
            I also use the a third party API by Goodreads, another book review website, to pull in ratings from a broader audience. 
            Finally, users are able to query for book details and book reviews programmatically via the website’s API.`,
			link: "https://github.com/Panda4817/Web50-2020-Project-1",
		},
		{
			title: "Project 0 - Homepage",
			img: "project-img-6",
			tags: [
				"HTML",
				"SCSS",
				"CSS",
				"Sass",
				"Git",
				"VS-Code",
				"CS50-Web",
				"Mustache",
				"JavaScript",
				"Bootstrap-4",
				"JQuery",
			],
			text:
				"For this project I had to create a static website with the focus on SCSS and HTML. I created my portfolio website. To keep the focus on front end I used the Mustache template engine to render HTML on each page.",
			link: "https://github.com/Panda4817/portfolio",
		},

		{
			title: "Survey Form Page",
			img: "project-img-4",
			tags: ["HTML", "CSS", "CodePen", "live-demo", "FreeCodeCamp"],
			text:
				"I have created a survey form with different types of inputs. These include text input for name, email input, dropdown with option tags, radio and checkbox input types and textarea input for comments. I have also included a button with submit type at the end.",
			link: "https://codepen.io/k_munton/full/oNjvJJO",
		},
		{
			title: "Python Technical Documentation Page",
			img: "project-img-3",
			tags: ["HTML", "CSS", "CodePen", "live-demo", "FreeCodeCamp"],
			text:
				"I have created a Python technical documentation page that has a fixed nav element on the left hand side of the screen. I have also used the code tag to present Python code on the page.",
			link: "https://codepen.io/k_munton/full/JjYoPKx/",
		},
		{
			title: "Company Product Landing Page",
			img: "project-img-2",
			tags: ["HTML", "CSS", "CodePen", "live-demo", "FreeCodeCamp"],
			text:
				"I have created a company landing page with a contact form, navigation bar that responsively changes to a dropdown and uses CSS Flexbox. My page also uses media queries to respond to different viewport widths.",
			link: "https://codepen.io/k_munton/full/bGVGrjE",
		},
		{
			title: "Ada Lovelace Tribute Page",
			img: "project-img-1",
			tags: ["HTML", "CSS", "CodePen", "live-demo", "FreeCodeCamp"],
			text:
				"I have built a tribute page with different elements. I made sure the image elements responsively resizes, relative to the width of its parent element, without exceeding its original size.",
			link: "https://codepen.io/k_munton/full/VwvZEJp",
		},
	],
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
