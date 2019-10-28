
function setup() {
  // set the width & height of the sketch
  createCanvas(800, 260)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('black')

var seasonWidth = map(now.progress.season,0,1,0,width) //shows data range and output range
fill(46,49,146)//indigo blue
rect(0,0,seasonWidth, 43.33) //43.33 is the bar height 

var monthWidth = map(now.progress.year, 0, 1, 0, width) //shows the data for the month
fill(0,174,239)//light blue 
rect(0,43.33,monthWidth, 43.33) 

var dayWidth = map(now.progress.day,0,1,0,width)//shows the data for the day 
fill(96,146,193)// blue gray
rect(0,86.66,dayWidth, 43.33) 

var hourWidth = map (now.progress.hour, 0,1,0,width)//shows the data for the hour
fill(155,125,169)//mauve
rect(0,129.99,hourWidth, 43.33) 

var minuteWidth = map(now.progress.min,0,1,0,width)//shows the data for the minute 
fill(191,104,151)//light pink
rect(0,173.32,minuteWidth, 43.33) 

var secondWidth = map(now.progress.sec, 0, 1, 0, width)//shows the data for the second 
fill(238,42,123)//bright pink 
rect(0,216.65,secondWidth, 43.33) 


}