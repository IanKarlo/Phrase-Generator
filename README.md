# Phrase Generator
## Simple website to get random phrases from "O pensador".

### About
> The idea of this application is just get randomly a phrase of a random author (that is previous listed in a list of authors) and show this phrase in a pre-defined canvas. For it we used P5js library for the canvas manipulation and axios for http requests. The backend of this application is available at https://minhastack.herokuapp.com/pensador?term=<author-name>&max=<phrases-quantity>.
The application had 1 HTML file and 2 JS files. The pensador-api.js file contains an class that represents the coneection with the backend. The sketch.js file is the file used to manipulate canvas by P5js, on it you can call the function setup to define the start values of canvas.