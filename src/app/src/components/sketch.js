let distance = 30
let colorLib = [
  '#ccafd9',
  '#ffc2e4',
  '#FCD8AC',
  '#C0F1F9',
  '#BDE6C7',
  '#CCAFD9'
]
const setbg = p => {
  p.background(255, 255, 255)
  //p.style("z-index", "-1")
  //count total point
  //p.windowWidth  p.windowHeight
  let maxX = Math.floor(p.windowWidth / 30)
  let maxY = Math.floor(p.windowHeight / 30)

  p.noStroke()
  let c = '#ccafd9'
  for (let i = 0; i < maxX; i++) {
    for (let j = 0; j < maxY; j++) {
      c = p.color(colorLib[Math.floor(Math.random() * 5)])
      p.fill(c) // Use color variable 'c' as fill color
      p.ellipse(i * distance, j * distance, 3)
    }
  }
}

const sketch = p => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    setbg(p)
  }
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
    setbg(p)
  }
  p.draw = () => {}
}

export default sketch
