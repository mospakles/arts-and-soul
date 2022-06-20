import React from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup'

const Artists = () => {
  return (
    <div>
        <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Nature Artists</div>
          Cras justo odio
          <br/>
          Uche Powers
        </div>
        <Badge bg="primary" pill>
          14
          <br/>
          <br/>
          16
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">NFT Artists</div>
          Cras justo odio
          <br/> 
          Uche Philz
        </div>
        <Badge bg="primary" pill>
          14
          <br/>
          <br/>
          10
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Artists that snaps with Infinix</div>
          Cras justo odio
          <br/>
          Uche Ogbonna
        </div>
        <Badge bg="primary" pill>
          14
          <br/>
          <br/>
          99
        </Badge>
      </ListGroup.Item>
    </ListGroup>
    </div>
  )
}

export default Artists