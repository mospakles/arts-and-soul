import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Imageslider.css'

const Imageslider = () => {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/736x/90/f0/3a/90f03a520cfea8dfcf69780279c2f1e7--neon-wallpaper-d-background.jpg" width="400px" height="700px" alt="First slide"
        />

        <Carousel.Caption>
          <h1>Welcome to Arts and Soul</h1>
          <h2>Every picture here is life <br />
              That has been created in <span>PIXELS</span></h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://newevolutiondesigns.com/images/freebies/3d-wallpaper-2.jpg" width="400px" height="700px"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h1>Welcome to Arts and Soul</h1>
          <h2>Every picture here is life <br />
              That has been created in <span>PIXELS</span></h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.pixelstalk.net/wp-content/uploads/2015/01/full-hd-3d-wallpaper-widescreen-hd-1920x1200.jpg" width="400px" height="700px"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h1 justify >Welcome to Arts and Soul</h1>
          <h2>Every picture here is life <br />
              That has been created in <span>PIXELS</span></h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Imageslider