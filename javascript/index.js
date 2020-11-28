const header = `<h1>K Munton</h1>
<p>I am an aspiring full-stack developer</p>`

const slides = {
    "slides": [
        {"img": "img1", 
        "main": "A Python and Flask website to keep track of movies, TV shows and books watched and read.",
        "sub": "Deployed using PythonAnywhere"
        },
        {"img": "img2", 
        "main": "A Python and Django website to search and save recipes, add own recipes, keep a virtual pantry and create shopping lists.",
        "sub": "Deployed using Heroku"
        },
        {"img": "img3",
        "main": "A ReactJS and NodeJS website to search images.",
        "sub": "Deployed using Heroku"
        },
        {"img": "img4", 
        "main": "A ReactJS, NodeJS and Socket.IO web application to play Pictionary online with friends.",
        "sub": "Back end deployed on Heroku and front end deployed on Netlify"
        },
        {"img": "img5", 
        "main": "A NodeJS and Pug social media web application to create posts and chat.",
        "sub": "Running on Repl"
        },
        {"img": "img6", 
        "main": "A NodeJS and Pug issue tracker web application to GET, POST, PUT and DELETE issues using MongoDB.",
        "sub": "Running on Repl"
        }
    ]
}

const lang = {
    "badges": [
        {"src": "https://www.python.org/static/community_logos/python-logo-master-v3-TM.png",
        "alt": "Python"
        },
        {"src": "https://www.djangoproject.com/m/img/logos/django-logo-negative.png",
        "alt": "Django"
        },
        {"src":"https://miro.medium.com/max/438/1*0G5zu7CnXdMT9pGbYUTQLQ.png",
        "alt": "Flask"
        },
        {"src": "https://bashlogo.com/img/logo/jpg/full_colored_dark.jpg",
        "alt": "Bash"
        },
        {"src": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        "alt": "JavaScript"
        },
        {"src": "https://brand.jquery.org/resources/jquery-mark-dark.gif",
        "alt": "jQuery"
        },
        {"src": "https://miro.medium.com/max/5120/1*mp91A9RzagntGGjBnwu4Yw.png",
        "alt": "nodejs"
        }
    ]
}

const frameworks = {
    "badges": [
        {"src": "data:image/png;base64,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",
        "alt": "HTML"
        },
        {"src": "https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg",
        "alt": "CSS"
        },
        {"src":"https://cdn-media-1.freecodecamp.org/images/1*HFYKWq92BcXJIdata7d-JQ.png",
        "alt": "Sass"
        },
        {"src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
        "alt": "Bootstrap"
        },
        {"src": "data:image/png;base64,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",
        "alt": "React"
        }
    ]
}

const tools = {
    "badges": [
        {"src": "https://blog.markallenwebdeveloper.co.uk/wp-content/uploads/2019/02/vscodelogo-1200x630.png",
        "alt": "VS Code"
        },
        {"src": "https://cdn-media-1.freecodecamp.org/images/VQhi-KgyeBh6jegrDc2zaLOGxsBWq0Bw5dNq",
        "alt": "Git"
        },
        {"src":"https://res.cloudinary.com/practicaldev/image/fetch/s--3AQP9yR9--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/z1cd1n2e6g2i6492lkhh.jpg",
        "alt":"Travis-CI"
        },
        {"src": "https://www.fullstackpython.com/img/logos/heroku.png",
        "alt": "Heroku"
        },
        {"src": "https://media-exp1.licdn.com/dms/image/C561BAQHDnw3jPc3HsA/company-background_10000/0?e=2159024400&v=beta&t=IJCscDvNE4olZ9mZ1wr5G9SmiIMWm02kuZi25oCH8to",
        "alt": "Python Anywhere"
        },
        {"src": "https://cdn.sanity.io/images/ti7si9cx/production/656e951d31f3dc0f061a57466d01def70a81a6af-1500x1000.gif?w=1382",
        "alt": "Netlify"
        }
    ]
}

const databases = {
    "badges": [
        {"src": "https://seekvectorlogo.com/wp-content/uploads/2019/07/sqlite-vector-logo.png",
    "alt": "SQLite"},
    {"src": "https://zdnet1.cbsistatic.com/hub/i/r/2018/04/19/092cbf81-acac-4f3a-91a1-5a26abc1721f/resize/1200x900/f787ce3046e48c6c1f7c2b22b4c89eee/postgresql-logo.png",
"alt": "PostgreSQL"},
{"src": "https://findlogovector.com/wp-content/uploads/2018/11/mongodb-logo-vector.png",
"alt": "MongoDB"}
    ]
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('header').innerHTML = header
    let slides_temp = $('#slides_temp').html()
    let badges_temp = $('#badges_temp').html()
    let output = Mustache.render(slides_temp, slides);
    let lang_out = Mustache.render(badges_temp, lang);
    let frameworks_out = Mustache.render(badges_temp, frameworks);
    let tools_out = Mustache.render(badges_temp, tools);
    let database_out = Mustache.render(badges_temp, databases);
    $('#slides').append(output);
    $('#lang').append(lang_out);
    $('#frameworks').append(frameworks_out);
    $('#tools').append(tools_out);
    $('#database').append(database_out);
    
    if ($('.owl-carousel') ){
        var welcomeSlide = $('.hero-slides');
    
        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 8000,
            smartSpeed: 1000
        });
    
        welcomeSlide.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animate__' + anim_name).css('opacity', '0');
            });
        });
    
        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animate__' + anim_name).css('opacity', '1');
            });
        });
    
        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).addClass('animate__delay-'+anim_del);
        });
    }
    AOS.init();
    

})

