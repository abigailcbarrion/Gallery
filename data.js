var filmStrip = [
    {
        "src": "assets/images/fsoppenheimer.jpg",
        "alt": "Image 1"
    },
    {
        "src": "assets/images/fskillbill.jpg",
        "alt": "Image 2"
    },
    {
        "src": "assets/images/fsmoonrise.jpg",
        "alt": "Image 3"
    },
    {
        "src": "assets/images/fsokja.jpg",
        "alt": "Image 4"
    }
];

var directors = [
    {
        "image": "assets/images/greta.jpg",
        "name": "Greta Gerwig",
        "description": "Greta Gerwig has become a real trailblazer for women in the film industry. After a stellar 2023, when her blockbuster, Barbie, painted the world pink, the director's stock has never been higher. She has turned in winner after winner since 2017's Lady Bird. She then followed the successful A24 movie with the acclaimed Little Women and then Barbie, which, at $1.4 billion worldwide, is the 14th highest-grossing movie of all time.",
        "page": "greta.html"
    },
    {
        "image": "assets/images/quentin.jpg",
        "name": "Quentin Tarantino",
        "description": "Quentin Tarantino needs no introduction. The director's cinematic releases have industry-wide events and while he certainly redefined the 1990s with Reservoir Dogs and Pulp Fiction, the large portion of his cinematic outings have been in the 21st century. Kill Bill, Django Unchained, Once Upon a Time in Hollywood, and Inglourious Basterds to name a few.",
        "page": "quentin.html"
    },
    {
        "image": "assets/images/bong.jpg",
        "name": "Bong Joon-Ho",
        "description": "Bong Joon-ho is a South Korean filmmaker who is a defining filmmaker of the 21st century. He is one of the biggest voices in cinema that has reached a global audience. His latest film, Parasite, became a critical favorite and defied all expectations to win Best Foreign Language Film, Best Director, and Best Picture, making it the first time a non-American production won the top prize at the Academy Awards.",
        "page": "bong.html"
    },
    {
        "image": "assets/images/david.jpg",
        "name": "David Fincher",
        "description": "Most people would be afraid to know what's on David Fincher's mind. While some of the director's most famous movies might have come out in the 1990s, like Fight Club and Se7en, the 21st century has featured some of his most acclaimed The Social Network, The Girl with the Dragon Tattoo, Zodiac, Gone Girl, and most recently, The Killer.",
        "page": "david.html"
    },
    {
        "image": "assets/images/christopher.jpg",
        "name": "Christopher Nolan",
        "description": "Christopher Nolan is a name that has refined movies in the 21st century on a level that he is well-known and beloved by critics, film fans, and mainstream movie audiences alike. Nolan is known for his intricate, mind-bending narratives and stunning visuals, achieved mainly with practical effects. His latest film, Oppenheimer, speaks to his power as a filmmaker.",
        "page": "christopher.html"
    }
];

var gretaMovies = [
    {
        "image": "assets/images/posterlittlewomen.jpg",
        "name": "Littlewomen (2019)",
        "writer": "Greta Gerwig, Louisa May Alcott",
        "stars": "Saoirse Ronan, Emma Watson, Florence Pugh",
        "description": "In 19th century Massachusetts, the March sisters--Meg, Jo, Beth, and Amy--on the threshold of womanhood, go through many ups and downs in life and endeavor to make important decisions about their futures."
    },
    {
        "image": "assets/images/barbie.jpg",
        "name": "Barbie (2023)",
        "writer": "Greta Gerwig, Noah Baumbach",
        "stars": "Margot Robbie, Ryan Gosling, Issa Rae",
        "description": "Barbie and Ken are having the time of their lives in the seemingly perfect world of Barbie Land. However, when they get a chance to go to the outside world."
    },
    {
        "image": "assets/images/ladybird.jpg",
        "name": "Lady Bird (2017)",
        "writer": "Greta Gerwig",
        "stars": "Saoirse Ronan, Laurie Metcalf, Tracy Letts",
        "description": "A fiercely independent teenager tries to make her own way in the world while wanting to get out of her hometown of Sacramento, California, and to get away from her complicated mother and recently-unemployed father."
    }
];

var tarantinoMovies = [
    {
        "image": "assets/images/pulp.jpg",
        "name": "Pulp Fiction (1994)",
        "writer": "Quentin Tarantino, Roger Avary",
        "stars": "John Travolta, Uma Thurman, Samuel L. Jackson",
        "description": "The lives of hitmen, a boxer, a gangster's wife, and diner bandits intertwine in four stories of violence and redemption."
    },
    {
        "image": "assets/images/inglourius.jpg",
        "name": "Inglourious Basterds (2009)",
        "writer": "Quentin Tarantino",
        "stars": "Brad Pitt, Diane Kruger, Eli Roth",
        "description": "In Nazi-occupied France, a plot to assassinate Nazi leaders by Jewish U.S. soldiers overlaps with a theatre owner's own revenge plan."
    },
    {
        "image": "assets/images/kill.jpg",
        "name": "Kill Bill: Vol. 1 (2003)",
        "writer": "Quentin Tarantino, Uma Thurman",
        "stars": "Uma Thurman, David Carradine, Daryl Hannah",
        "description": "After waking from a four-year coma, a former assassin seeks vengeance on the team who betrayed her."
    },
    {
        "image": "assets/images/once.jpg",
        "name": "Once Upon a Time… in Hollywood (2019)",
        "writer": "Quentin Tarantino",
        "stars": "Leonardo DiCaprio, Brad Pitt, Margot Robbie",
        "description": "A fading TV actor and his stunt double navigate Hollywood in 1969, encountering both the industry and the Manson-era world around them."
    },
    {
        "image": "assets/images/django.jpg",
        "name": "Django Unchained (2012)",
        "writer": "Quentin Tarantino",
        "stars": "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio",
        "description": "A freed slave teams up with a bounty hunter to rescue his wife from a brutal plantation owner."
    },
    {
        "image": "assets/images/reservoir.jpg",
        "name": "Reservoir Dogs (1992)",
        "writer": "Quentin Tarantino, Roger Avary",
        "stars": "Harvey Keitel, Tim Roth, Michael Madsen",
        "description": "After a jewelry heist goes wrong, the criminals suspect that one of them is an undercover cop."
    }
];

var bongMovies = [
    {
        "image": "assets/images/parasite.jpg",
        "name": "Parasite (2019)",
        "writer": "Bong Joon Ho, Han Jin-won",
        "stars": "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
        "description": "Greed and class discrimination threaten the symbiotic relationship between the wealthy Park family and the destitute Kim clan."
    },
    {
       "image": "assets/images/mickey.jpg",
        "name": "Mickey 17 (2025)",
        "writer": "Bong Joon Ho, Edward Ashton",
        "stars": "Robert Pattinson, Steven Yeun, Michael Monroe",
        "description": "An expendable employee on a colonization mission is repeatedly regenerated and sent on deadly assignments."
    },
    {
        "image": "assets/images/memories.jpg",
        "name": "Memories of Murder (2003)",
        "writer": "Bong Joon Ho, Kwang-rim Kim, Sung-bo Shim",
        "stars": "Song Kang-ho, Kim Sang-kyung, Kim Roe-ha",
        "description": "Two detectives struggle to solve a series of murders in rural Korea in 1986."
    },
    {
        "image": "assets/images/snow.jpg",
        "name": "Snowpiercer (2013)",
        "writer": "Jacques Lob, Benjamin Legrand, Jean-Marc Rochette",
        "stars": "Chris Evans, Jamie Bell, Tilda Swinton",
        "description": "After a climate experiment freezes Earth, the last survivors live on a perpetually moving train where a class system emerges."
    },
    {
        "image": "assets/images/okja.jpg",
        "name": "Okja (2017)",
        "writer": "Bong Joon Ho, Jon Ronson",
        "stars": "Tilda Swinton, Paul Dano, Ahn Seo-hyun",
        "description": "A young girl risks everything to rescue her best friend, a genetically modified super-pig, from a greedy corporation."
    },
    {
        "image": "assets/images/host.jpg",
        "name": "The Host (2006)",
        "writer": "Bong Joon Ho, Won-jun Ha, Chul-hyun Baek",
        "stars": "Song Kang-ho, Byun Hee-Bong, Park Hae-il",
        "description": "A monster emerges from the Han River and abducts a girl, prompting her family to rescue her."
    }
];


var fincherMovies = [
    {
        "image": "assets/images/gonegirl.jpg",
        "name": "Gone Girl (2014)",
        "writer": "Gillian Flynn",
        "stars": "Ben Affleck, Rosamund Pike, Neil Patrick Harris",
        "description": "A media frenzy erupts when a woman disappears and suspicion turns toward her husband."
    },
    {
        "image": "assets/images/fightclub.jpg",
        "name": "Fight Club (1999)",
        "writer": "Chuck Palahniuk, Jim Uhls",
        "stars": "Brad Pitt, Edward Norton, Meat Loaf",
        "description": "An office worker forms an underground fight club with a soap maker, sparking an anarchic movement."
    },
    {
        "image": "assets/images/seven.jpg",
        "name": "Se7en (1995)",
        "writer": "Andrew Kevin Walker",
        "stars": "Morgan Freeman, Brad Pitt, Kevin Spacey",
        "description": "Two detectives hunt a serial killer whose gruesome murders represent the seven deadly sins."
    },
    {
        "image": "assets/images/social.jpg",
        "name": "The Social Network (2010)",
        "writer": "Aaron Sorkin, Ben Mezrich",
        "stars": "Jesse Eisenberg, Andrew Garfield, Justin Timberlake",
        "description": "The founding of Facebook leads to legal battles and the fracturing of friendships."
    },
    {
        "image": "assets/images/zodiac.jpg",
        "name": "Zodiac (2007)",
        "writer": "James Vanderbilt, Robert Graysmith",
        "stars": "Jake Gyllenhaal, Robert Downey Jr., Mark Ruffalo",
        "description": "A cartoonist becomes obsessed with tracking down the Zodiac Killer in San Francisco."
    },
    {
        "image": "assets/images/benjamin.jpg",
        "name": "The Curious Case of Benjamin Button (2008)",
        "writer": "Eric Roth, Robin Swicord, F. Scott Fitzgerald",
        "stars": "Brad Pitt, Cate Blanchett, Tilda Swinton",
        "description": "A man born old ages backward, experiencing love and loss in reverse."
    }
];

var nolanMovies = [
    {
        "image": "assets/images/oppenheimer.jpg",
        "name": "Oppenheimer (2023)",
        "writer": "Christopher Nolan, Kai Bird, Martin Sherwin",
        "stars": "Cillian Murphy, Emily Blunt, Matt Damon",
        "description": "The story of J. Robert Oppenheimer and his role in developing the atomic bomb."
    },
    {
        "image": "assets/images/inter.jpg",
        "name": "Interstellar (2014)",
        "writer": "Jonathan Nolan, Christopher Nolan",
        "stars": "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        "description": "A former pilot joins a mission through a wormhole to find a new home for humanity."
    },
    {
        "image": "assets/images/knight.jpg",
        "name": "The Dark Knight (2008)",
        "writer": "Jonathan Nolan, Christopher Nolan, David S. Goyer",
        "stars": "Christian Bale, Heath Ledger, Aaron Eckhart",
        "description": "Batman faces the Joker, whose chaotic plans push Gotham to its limits."
    },
    {
        "image": "assets/images/inception.jpg",
        "name": "Inception (2010)",
        "writer": "Christopher Nolan",
        "stars": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
        "description": "A thief enters dreams to plant an idea, but his tragic past endangers the mission."
    },
    {
        "image": "assets/images/memento.jpg",
        "name": "Memento (2000)",
        "writer": "Christopher Nolan, Jonathan Nolan",
        "stars": "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano",
        "description": "A man with short-term memory loss uses notes and tattoos to track his wife's killer."
    },
    {
        "image": "assets/images/prestige.jpg",
        "name": "The Prestige (2006)",
        "writer": "Jonathan Nolan, Christopher Nolan, Christopher Priest",
        "stars": "Christian Bale, Hugh Jackman, Scarlett Johansson",
        "description": "Two rival magicians engage in a dangerous competition fueled by obsession and deceit."
    }
];

var specialMentions = [
    {
        "image": "assets/images/whiplash.jpg",
        "name": "Whiplash (2014)",
        "writer": "Damien Chazelle",
        "stars": "Miles Teller, J.K. Simmons, Melissa Benoist",
        "description": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential."
    },
    {
        "image": "assets/images/three.jpg",
        "name": "3 Idiots (2009)",
        "writer": "Rajkumar Hirani",
        "stars": "Aamir Khan, Madhavan, Mona Singh",
        "description": "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them \"idiots\"."
    },
    {
        "image": "assets/images/dead.webp",
        "name": "Dead Poets Society (1989)",
        "writer": "Peter Weir",
        "stars": "Robin Williams, Robert Leonard, Ethan Hawke",
        "description": "Maverick teacher John Keating returns in 1959 to a prestigious boys' boarding school, using poetry to embolden his pupils to new heights of self-expression."
    },
    {
        "image": "assets/images/girl.webp",
        "name": "Girl, Interrupted (1999)",
        "writer": "James Mangold",
        "stars": "Winona Ryder, Angelina Jolie, Clea DuVall",
        "description": "Directionless teenager Susanna is rushed to a mental institution after a supposed suicide attempt, where she befriends a group of troubled women who deeply influence her life."
    },
    {
        "image": "assets/images/eternal.webp",
        "name": "Eternal Sunshine of the Spotless Mind (2004)",
        "writer": "Michel Gondry",
        "stars": "Jim Carrey, Kate Winslet, Tom Wilkinson",
        "description": "When their relationship turns sour, a couple undergoes a medical procedure to erase each other from their memories forever."
    },
    {
        "image": "assets/images/black.webp",
        "name": "Black Swan (2010)",
        "writer": "Darren Aronofsky",
        "stars": "Natalie Portman, Mila Kunis, Vincent Cassel",
        "description": "A talented but unstable ballerina is pushed to the breaking point as she strives for perfection, causing her grip on reality to unravel."
    }
];
