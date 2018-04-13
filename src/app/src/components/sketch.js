var e = [],
  n = [
    'rgba(109,224,242,1)',
    'rgba(69, 194, 100, 1)',
    'rgba(249,168,54,1)',
    'rgba(255,114,196,1)',
    'rgba(139,64,169,1)'
  ]
var y = 100

const sketch = p => {
  p.getRandomInt = (t, e) => {
    return Math.floor(Math.random() * (e - t + 1)) + t
  }
  p.setup = () => {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight)
    p.stroke(255) // Set line drawing color to white
    p.frameRate(30)
    p.noLoop()
    for (var t = 0; t < p.windowWidth; t += 50) {
      for (var i = 0; i < p.windowHeight; i += 50) {
        var a = n[p.getRandomInt(0, 4)]
        e.push({ x: t, y: i, dotColour: a })
        p.beginShape()
        p.ellipse(t, i, 4, 4)
        p.noStroke()
        p.endShape()
      }
    }
    document.addEventListener('mousemove', p.reDraw)
  }
  p.draw = () => {
    for (var t = 0, n = 0; n < p.windowWidth; n += 50) {
      for (var i = 0; i < p.windowHeight; i += 50) {
        if (e[t]) {
          p.beginShape()
          p.fill(e[t].dotColour)
          p.noStroke()
          p.ellipse(n, i, 4, 4)
          p.endShape()
          t++
        }
      }
    }
  }
  p.reDraw = t => {
    p.clear()
    //console.log(t.clientY)
    //console.log(e)
    p.beginShape()
    let result = 0
    for (var n = 0; n < e.length; n++) {
      result = Math.sqrt(
        (t.clientX - e[n].x) * (t.clientX - e[n].x) +
          (t.clientY - e[n].y) * (t.clientY - e[n].y)
      )
      if (result < 80) {
        // console.log('result')
        // console.log(result)
        p.stroke(e[n].dotColour)
        p.line(e[n].x, e[n].y, t.clientX, t.clientY)
        p.endShape()
      }
    }
    p.draw()
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }
}
export default sketch
