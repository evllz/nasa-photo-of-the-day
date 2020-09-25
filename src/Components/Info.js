import React,{useState} from 'react'
import {Card, Collapse, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap'
import './Media.css'

export default function Info(props) {
    console.log(props)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className='media-container'>
            <Card>
                <CardBody>
                <CardTitle>Title: {props.title}</CardTitle>
                <CardSubtitle>Author: {props.copyright ? props.copyright:'Public Domain'}</CardSubtitle>
                <CardSubtitle>Date: {props.date}</CardSubtitle>
                <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>More Info</Button>
                <Collapse isOpen={isOpen}>
                    <CardText>Description:</CardText>
                    <CardText>{props.explanation}</CardText>
                </Collapse>
                </CardBody>
            </Card>
        </div>
    )
}
