"use strict";

const express = require('express'),
  path = require('path'),
  packageJSON = require('./package.json'),
  app = express();


// App Port
app.set('port', (process.env.PORT || 8085));


// HTML Templates with Pug
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'pug');

app.use('/static', express.static(__dirname + '/static'));


// GET '/resume'
app.use('/resume', express.static(__dirname + '/static/pdf/dillon-drenzek-resume-05-2018.pdf'));

// Index page
app.get('/', function (req, res) {
  res.render('pages/landing', {

    githubUrl: 'https://github.com/dillondrenzek/dillon-drenzek-com',
    appVersion: packageJSON['version'],

    socialMedia: {
      'instagram': {
        title: 'Instagram',
        url: 'https://www.instagram.com/dillondrenzek/',
        faIconClasses: 'fab fa-instagram'
      },
      'github': {
        title: 'GitHub',
        url: 'https://github.com/dillondrenzek',
        faIconClasses: 'fab fa-github'
      },
      'linkedin': {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/dillondrenzek/',
        faIconClasses: 'fab fa-linkedin'
      }
    },

    experience: {
      entries: [
        {
          title: 'Front End Web Developer',
          duration: 'Current',
          location: 'Peach - Seattle, WA',
          dates: 'Nov \'17 - Current',
          description: 'I help build the Front End of Peach\'s website and web application using Angular.js',
          skills: ['Angular.js', 'Sass', 'Foundation']
        },
        {
          title: 'Web Application Developer',
          duration: '1 yr 4 mos',
          location: 'Vizualiiz - Seattle, WA',
          dates: 'Feb \'16 - Jun \'17',
          description: 'First experience with Angular 2; helped rebuild company’s flagship asset management application',
          skills: ['Angular', 'RxJS', 'Sass', 'REST']
        },{
          title: 'iOS Developer',
          duration: '1 yr 3 mos',
          location: 'Native - Boulder, CO',
          dates: 'Feb \'14 - May \'15',
          description: 'Helped build a new company with a team of graduating seniors, winning the New Venture Challenge at CU and participating in Techstars-Boulder',
          skills: ['iOS SDK', 'Objective-C', 'Swift', 'REST']
        }
      ]
    },
    education: {
      entries: [
        {
          title: 'Computer Science, B.A.',
          dates: 'May 2015',
          location: 'University of Colorado at Boulder',
          status: 'Graduated',
          description: 'Honors Minor in Technology, Arts & Media (TAM)'
        },
        {
          title: 'Graphic Design Studio',
          dates: 'May - Aug 2015',
          location: 'DIS - Copenhagen, Denmark',
          status: 'Completed',
          description: 'Completed an academic rebranding of Copenhagen’s premiere fashion shop'
        }
      ]
    },



    // Project
    // - title, type, description, url
    // - image { src, alt }
    projects: {
      entries: [

        // vertical panoramas
        // {
        //   title: 'Vertical Panoramas',
        //   type: 'Photography Showcase',
        //   image: {
        //     src: '/static/img/always-wondering.jpg',
        //     alt: 'NEED REPLACEMENT'
        //   },
        //   description: `
        //     A photography project I\'ve been working on for a few years.
        //     Every landmark-ish place I go to, I take a "vertical panorama" that
        //     includes the landmark and my feet standing in front of it
        //     `,
        //   url: null
        // },

        // spotify playlist editor
        // {
        //   title: 'Spotify Timeline',
        //   type: 'Web App',
        //   image: {
        //     src: '/static/img/spotify-placeholder.png',
        //     alt: 'NEED REPLACEMENT'
        //   },
        //   description: 'A web application that utilizes the Spotify API to help users create playlists',
        //   url: null
        // },

        // minesweeper game

        // stocks app
        // {
        //   title: 'Stocks App',
        //   type: 'Web App',
        //   image : {
        //     src: '/static/img/always-wondering.jpg',
        //     alt: 'NEED REPLACEMENT'
        //   },
        //   description: `
        //     A web application that utilizes the Markit free API
        //     for stock quotes and helps the user draw quick conclusions
        //     about their Portfolio
        //   `
        // },

        {
          title: 'Storm Design Art Fashion',
          type: 'Academic Rebranding',
          image : {
            src: '/static/img/storm.jpg',
            alt: 'Storm Design Art Fashion Company Rebranding'
          },
          description: `
            Received praise from store\'s owner,
            local industry professionals about project\'s attention to customer needs
            `,
          url: null
        },
        {
          title: 'Drenzek Does Denmark',
          type: 'Blog',
          image : {
            src: '/static/img/drenzek-does-denmark.png',
            alt: 'Drenzek Does Denmark Logo'
          },
          description: 'A travel blog I built to practice the MEAN stack while abroad in Denmark',
          url: null
        },
        {
          title: 'Capstone Portfolio',
          type: 'Website',
          image : {
            src: '/static/img/capstone-portfolio-1.jpg',
            alt: 'Capstone Portfolio Screenshot 1'
          },
          description: 'Major Project in senior Capstone class at CU; first used Node.js and Neo4j',
          url: null
        },
        {
          title: 'Technology, Arts & Media Portal',
          type: 'Class Portal',
          image : {
            src: '/static/img/tam-portal-1.jpg',
            alt: 'TAM Portal 1'
          },
          description: 'A portal to the work I completed for my Honor\'s Minor in Technology, Arts and Media',
          url: null
        }
      ]
    }
  });
});

app.listen(app.get('port'), function () {
  console.log('App listening on port', app.get('port'));
});
