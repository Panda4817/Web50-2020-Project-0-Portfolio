const header = `<h1>Computer Science Courses</h1>
<p>Read about the courses I have completed</p></div>`

const courses = {
    "courses": [
        {
            "title":"APIs and Microservices",
            "provider":"FreeCodeCamp",
            "lang":"JavaScript",
            "projects":"5 projects on Repl.it",
            "description":"Managing Packages with Npm, Basic NodeJS and ExpressJS, MongoDB and Mongoose",
            "completion":"Completed and Passed"
        },
        {
            "title":"Scientific Computing with Python",
            "provider":"FreeCodeCamp",
            "lang":"Python",
            "projects":"5 projects on Repl.it",
            "description":"Basics of Python, Object-Oriented Programming, Database Design, Web Development",
            "completion":"Completed and Passed"
        },
        {
            "title":"CS50 Introduction to Artificial Intelligence with Python",
            "provider":"Harvard University (through edX)",
            "lang":"Python",
            "projects":"6 quizzes and 12 projects",
            "description":`Graph Search Algorithms, Adversarial Search, Knowledge Representation, Logical Inference, Probability Theory, Bayesian Networks,
            Markov Models, Constraint Satisfaction, Machine Learning, Reinforcement Learning, Neural Networks, Natural Language Processing`,
            "completion":"Completed and Passed"
        },
        {
            "title":"Front End Libraries",
            "provider":"FreeCodeCamp",
            "lang":"JavaScript",
            "projects":"5 projects through CodePen",
            "description":"Bootstrap, jQuery, Sass, React, Redux",
            "completion":"Completed and Passed"
        },
        {
            "title":"JavaScript Algorithms and Data Structures",
            "provider":"FreeCodeCamp",
            "lang":"JavaScript",
            "projects":"5 projects",
            "description":"ES6, Debugging, Regular Expression, Object Oriented Programming, Functional Programming, Data Structures and Algorithm Scripting",
            "completion":"Completed and Passed"
        },
        {
            "title":"CS50 Web Programming with Python and JavaScript",
            "provider":"Harvard University (through edX)",
            "lang":"HTML, CSS, Python, JavaScript",
            "projects":"5 projects including a final project",
            "description":"SQL, Flask, ORMs, APIs, Django, Git, Scalability and Security",
            "completion":"Completed and Passed"
        },
        {
            "title":"Responsive Web Design",
            "provider":"FreeCodeCamp",
            "lang":"CSS and HTML",
            "projects":"5 projects through CodePen",
            "description":"Flexbox, Media Queries, Accessibility",
            "completion":"Completed and Passed"
        },
        {
            "title":"CS50 Introduction to Computer Science",
            "provider":"Harvard University (through edX)",
            "lang":"C, Python, HTML, CSS, JavaScript",
            "projects":"9 psets and a final project",
            "description":"Introduction to Data Structures and Algorithms, Memory,  SQL, Flask",
            "completion":"Completed and Passed"
        }
    ]
}





document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('header').innerHTML = header
    
    let mobile_temp = $('#mobile_temp').html()
    let table_temp = $('#table_temp').html()
    let mobile_output = Mustache.render(mobile_temp, courses)
    let table_output = Mustache.render(table_temp, courses)
    
    $('#mobile').append(mobile_output)
    $('#table_body').append(table_output)
    
    AOS.init();

})