# Starter Kit  
A starter kit I built while following Andrew Farmer's [Build Your Own Starter Kit](http://andrewhfarmer.com/build-your-own-starter).  

## Setup 
Can by installed by running;
`npm install`

## Usage  
Start the development server with the command 
```
npm start
```

## Additions 

It now includes Gulp, which at the moment is set up to compile SCSS _(yes I use SCSS instead of SASS)_ into compressed CSS with a dash of autoprefixer thrown into the mix. 

It's pretty janky how it works now, and may only work on Mac / Unix, cause I'm trying to run Gulp via the `npm start` command. 

### Upcoming Features  
I plan to add live reload to the mix, and may even mix it up and get rid of babel and everything, and use only Gulp, because I only see myself using the server and the SCSS stuff anyway. We'll see. 