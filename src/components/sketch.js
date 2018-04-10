const sketch = p => {
  p.setup = () => p.createCanvas(p.windowWidth, p.windowHeight)
  p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight)

  p.draw = () => {
    p.background(255, 255, 255)
  }
}

export default sketch
