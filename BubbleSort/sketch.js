let values = Array(400)
let i = 0, j = 0

function setup() {
  createCanvas(400, 400);
  stroke("#003617")
  for (let i=0; i<400; i++) {
    let ran = random(0,400)
    values[i] = ran;
    line(i, 400, i, ran)
  }
}

function draw() {
  for (let j=0; j<values.length - i - 1; j++) {
    if (values[j] < values[j+1]) {
      let t = values[j]
      values[j] = values[j+1]
      values[j+1] = t
    }
  }
  background(240)
  show()
  
  if (j==(values.length-i-1)) {
    j = 0;
    i++;
    delay(50)
  }
  if (i==(values.length-1))
    noLoop();
}

function show() {
  for (let x=0; x<400; x++) {
    line(x,400, x, values[x])
  }
}