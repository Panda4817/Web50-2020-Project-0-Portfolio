const header = ` <h1>Hello World!</h1>
<p>Read about my leap into computer science!</p></div>`

const dropdown = `<ul class="text-left flex-column dates-links">
<li class="dropdown text-decoration-none">
  <a class="dropdown-toggle "  role="button" id="dropdownMenuButtonProjects" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Jump to a date
  </a>
  <div class="dropdown-menu blog-dates" aria-labelledby="dropdownMenuButtonDates">
    <a class="dropdown-item" href="#November20" onclick="scrollToTargetAdjusted('November20');">November</a>
    <a class="dropdown-item" href="#October20" onclick="scrollToTargetAdjusted('October20');">October</a>
    <a class="dropdown-item" href="#September20" onclick="scrollToTargetAdjusted('September20');">September</a>
    <a class="dropdown-item" href="#August20" onclick="scrollToTargetAdjusted('August20');">August</a>
    <a class="dropdown-item" href="#July20" onclick="scrollToTargetAdjusted('July20');">July</a>
    <a class="dropdown-item" href="#June20" onclick="scrollToTargetAdjusted('June20');">June</a>
    <a class="dropdown-item" href="#May20" onclick="scrollToTargetAdjusted('May20');">May</a>
    <a class="dropdown-item" href="#April20" onclick="scrollToTargetAdjusted('April20');">April</a>
    <a class="dropdown-item" href="#March20" onclick="scrollToTargetAdjusted('March20');">March 2020</a>
    <a class="dropdown-item" href="#October19" onclick="scrollToTargetAdjusted('October19');">October 2019</a>
  </div>
</li></ul>`

const links = {
    "links": [
        {"href": "https://cs50.harvard.edu/x/2020/" , "text": "CS50 Intro to CS"},
        {"href": "https://www.freecodecamp.org/" , "text": "FreeCodeCamp"},
        {"href": "https://www.w3schools.com/" , "text": "w3schools"},
        {"href": "https://docs.python.org/3/" , "text": "Python documentation"},
        {"href": "https://codepen.io/" , "text": "CodePen"},
        {"href": "https://cs50.harvard.edu/web/2020/" , "text": "CS50 Web"},
        {"href": "https://flask.palletsprojects.com/en/1.1.x/" , "text": "Flask"},
        {"href": "https://www.djangoproject.com/" , "text": "Django"},
        {"href": "https://reactjs.org/" , "text": "React"},
        {"href": "https://cs50.harvard.edu/ai/2020/" , "text": "CS50AI"},
        {"href": "https://docs.mongodb.com/manual/" , "text": "MongoDB"},
        {"href": "https://www.passportjs.org/docs/" , "text": "PassportJS"},
        {"href": "https://socket.io/" , "text": "Socket.IO"},
        {"href": "https://mongoosejs.com/" , "text": "MongooseJS"}
    ]
}

const blogs = {
  "blogs": [
            {
              "month":"November20", 
              "mainHeading":"Multiplayer Online Pictionary App!",
              "subHeading":"Picto, November 2, 2020",
              "img":"img-11",
              "subText":"I have created a multiplayer online Pictionary web app to play with friends during lock down.",
              "mainText":`I have finally finished my online multiplayer Pictionary web app called Picto! 
              It allows users to create rooms and invite friends to join the room and start a game of Pictionary. 
              It uses ReactJS for front end and NodeJS with Express server for back end. The drawings and chat messages are communicated between users via Socket.IO.
              Also this is the first time I have deployed the back end and front end separately - front end on Netlify and back end on Heroku. I cannot wait to try this out with my friends!`
            },
            {
              "month":"October20", 
              "mainHeading":"CS50AI Complete and More Projects on Repl.it!",
              "subHeading":"Repl.it, October 9, 2020",
              "img":"img-10",
              "subText":"I have successfully completed the CS50 Intro to AI course and Scientific Computing with Python course on FreeCodeCamp.",
              "mainText":`I have learnt so many new concepts in the CS50AI course and I have outlined them in more detail in my CS50AI repo on GitHub - 
              <a href="https://github.com/Panda4817/CS50AI" target="_blank" class="blog_link">Click here to see it</a>! Now I am focussing on the FreeCodeCamp courses.
              The Scientific Computing with Python was a refresher course of the basics of Python. I now have a Repl.it account with FreeCodeCamp projects.
              I am also creating a multiplayer online game using NodeJS and React. The new project will include the use of Socket.IO.`
            },
            {
              "month":"September20", 
              "mainHeading":"Snake AI and Sudoku Solver!",
              "subHeading":"CS50AI, September, 2020",
              "img":"img-9",
              "subText":"CS50 Intro to AI with Python inspired me to complete my own AI projects.",
              "mainText":`After lecture 3, learning about backtracking search, I decided to create a command line tool that solves Sudoku puzzles.
              This CLI also measures how long it takes to find the solution, so it was interesting to see if I could get that time has low as possible
              by optimizing the algorithm. Another idea I had was to recreate a classic game that is played by an AI and I decided to choose Snake. 
              This took a few weeks to complete as I went through different algorithms (Q-learning, A* Search) for the AI, before settling on the Hamiltonian cycle.`
            },
            {
              "month":"August20", 
              "mainHeading":"Half way through CS50AI course!",
              "subHeading":"CS50AI, August 28, 2020",
              "img":"img-8",
              "subText":"I started the CS50 Introduction to Artificial Intelligence with Python.",
              "mainText":`The course looked interesting and I wanted to do more Python so I decided to start this course.
              As part of the course I have created a Tic-Tac-Toe game that one can play against an AI and programmed an AI to play the Minesweeper game.
              I am learning a lot of new concepts such as different search algorithms and the minimax algorithm.`
            },
            {
              "month":"July20", 
              "mainHeading":"FreeCodeCamp Front End Libraries completed!",
              "subHeading":"Created my own web application using React, July, 2020",
              "img":"img-7",
              "subText":"I earned the FreeCodeCamp Front End Libraries certificate.",
              "mainText":`The main thing I learned from this course is ReactJS and created several projects using this. 
              Once completed I created my own personal project using ReactJS for front end and NodeJS with Express for back end.
              I have also created a chatbot using React and the code for that can be found on GitHub.`
            },
            {
              "month":"June20", 
              "mainHeading":"CS50 Web completed!",
              "subHeading":"My final project submitted, June 23, 2020",
              "img":"img-6",
              "subText":"I earned the CS50 Web Programming with Python and JavaScript certificate.",
              "mainText":`This course was very interesting as I learnt a new framework in Python called Django and learnt the concepts of CI/CD along with how to write tests. 
              The course taught me how to use various tools such as Git, Travis, Heroku and PostgreSQL. It also covered some important topics such as security and scalability.
            The course consisted of 4 projects and a final project. My portfolio was project 0 and more information about the other projects are on the projects page.
             My final project is a website called MySousChef that lets you create a virtual pantry and store information such as use by dates. The website also lets you search for recipes through Spoonacular API. 
             I deployed it via Heroku. See projects page for more information and a link to it.
             I am now continuing with FreeCodeCamp courses and looking to move into a developer role.`
            },
            {
              "month":"May20", 
              "mainHeading":"CS50 Intro to CS completed!",
              "subHeading":"My final project submitted, May 2, 2020",
              "img":"img-5",
              "subText":"I earned the CS50 Introduction to Computer Science certificate.",
              "mainText":`My final project is a website that lets you track movies, tv shows and books you are watching and reading. I deployed it via PythonAnywhere. See projects page for more information and a link to it.
              I have now started CS50's Web Programming with Python and JavaScript course.`
            },
            {
              "month":"April20", 
              "mainHeading":"FreeCodeCamp",
              "subHeading":"Learning responsive web design, April 10, 2020",
              "img":"img-2",
              "subText":"I earned the responsive web design certificate after completing 300 hours worth of tutorials and projects.",
              "mainText":"The course taught me how to use HTML and CSS in a variety of different ways. This included CSS Flexbox and media queries. By the end of the course I had made 5 unique projects using CodePen."
            },
            {
              "month":"March20", 
              "mainHeading":"Python",
              "subHeading":"Python vs C, March 27, 2020",
              "img":"img-4",
              "subText":"Completed the problem sets in C and now onto Python.",
              "mainText":`Took a little break but I'm back to CS50. 
              All the problem sets to do with C programming language were so interesting and fun! Now I am onto Python. 
              That blur filter in C was time consuming but in Python it was quicker to complete! 
              Found w3schools to be very helpful, along with the Python documentation.`
            },
            {
              "month":"October19", 
              "mainHeading":"CS50",
              "subHeading":"Amazing start to computer science, October 24, 2019",
              "img":"img-3",
              "subText":"I just started and I am loving it!",
              "mainText":"From the first lecture video I was hooked. The professors and tutors running this course explained every concept so clearly. I would recommend this course to anyone who wants to get into computer science and has no prior experience like me."
            }
  ]
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('header').innerHTML = header
    document.getElementById('extra_dropdown').innerHTML = dropdown
    let links_temp_nav = $('#links_temp_nav').html()
    let links_temp_dropdown = $('#links_temp_dropdown').html()
    let blogs_temp = $('#blogs_temp').html()
    let nav_output = Mustache.render(links_temp_nav, links);
    let dropdown_output = Mustache.render(links_temp_dropdown, links);
    let blogs_output = Mustache.render(blogs_temp, blogs)
    $('#links_nav').append(nav_output)
    $('#links_dropdown').append(dropdown_output)
    $('#blogs_content').append(blogs_output)
    AOS.init();

})