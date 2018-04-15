const e = []

const colors = [
  'rgba(109,224,242,1)',
  'rgba(69, 194, 100, 1)',
  'rgba(249,168,54,1)',
  'rgba(255,114,196,1)',
  'rgba(139,64,169,1)'
]

const sketch = p => {
  p.getRandomInt = (t, e) => Math.floor(Math.random() * (e - t + 1)) + t

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.stroke(255)
    p.frameRate(30)

    for (let x = 0; x < p.windowWidth; x += 50) {
      for (let y = 0; y < p.windowHeight; y += 50) {
        const a = colors[p.getRandomInt(0, 4)]
        e.push({ x, y, dotColour: a })
        p.beginShape()
        p.ellipse(x, y, 4, 4)
        p.noStroke()
        p.endShape()
      }
    }

    document.addEventListener('mousemove', p.reDraw)
  }

  p.draw = () => {
    let t = 0
    for (let x = 0; x < p.windowWidth; x += 50) {
      for (let y = 0; y < p.windowHeight; y += 50) {
        if (e[t]) {
          p.beginShape()
          p.fill(e[t].dotColour)
          p.noStroke()
          p.ellipse(x, y, 4, 4)
          p.endShape()
          t++
        }
      }
    }
  }

  p.reDraw = t => {
    p.clear()
    p.beginShape()

    const clientX = t.clientX
    const clientY = t.clientY

    const dots = e.filter(
      e =>
        e.x <= clientX + 100 &&
        e.x >= clientX - 100 &&
        (e.y <= clientY + 100 && e.y >= clientY - 100)
    )

    for (let n = 0; n < dots.length; n++) {
      const { x, y, dotColour } = dots[n]
      const distance = Math.sqrt(
        (clientX - x) * (clientX - x) + (clientY - y) * (clientY - y)
      )
      if (distance < 80) p.stroke(dotColour), p.line(x, y, clientX, clientY)
    }

    p.endShape()
  }

  p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight)
}
export default sketch
