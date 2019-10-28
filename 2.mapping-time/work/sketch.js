
function setup() {
  // set the width & height of the sketch
  createCanvas(400, 130)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
 
  if(now.am){
    background('white')
  }else{
    background('pink')
  }
  var barwidth = map(now.sec,0,59,0,width)
  var barheight = map(now.min,0,59,0,height)
  var barcolor= map(now.hour,1,12,0,255)
  fill(barcolor)
  rect(0,0,barwidth,barheight)

  


} 