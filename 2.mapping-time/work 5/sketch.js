
function setup() {
  // set the width & height of the sketch
  createCanvas(800, 430)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  //background (231,222,654)
    noStroke()
    fill(0) 

    var now = clock()
    var pct = now.progress.day
    ellipse(400,215, width*pct, height)

    var seasonWidth = map(now.progress.season,0,1,0,width) 
    fill (33,24,233)
    ellipse (400,215,seasonWidth,10)//dark blkue
   
    var moonWidth = map(now.progress.moon,0,1,0,width)
    fill (122,65,244)
    ellipse (400,215,moonWidth,300)//purple 

    var weekdayWidth = map(now.progress.moon,0,1,0,width)
    fill (213,299,123)
    ellipse(400,215,weekdayWidth,40) // yellow green 

    var pct = now.progress.day
    fill(233,412,222)
    ellipse(400,215, width*pct, 32)//light green white
    
  


}