import React, { useState } from 'react';

import {Card, Row, Col, Button} from 'react-bootstrap';

export default function Content(props) {
    let caption1 = 'Auto Increase'
    let caption2 = 'Stop'
    const [flag, setflag] = useState(false)
    const [btnCaption, setbtnCaption] = useState(caption1)
    const [flagDisable, setflagDisable] = useState(false)

    const onBtnClick = () =>{
        props.onBtnClick()
    }
    const onBtnAutoClick = () => {
        //setflagDisable(true)
        if(btnCaption == caption1){
            props.autoIncrease()
        }
        else
            props.killTimer()
        //setflagDisable(false)
        setbtnCaption(caption2)
        setflag(!flag)
        if (flag) {
            setbtnCaption(caption1)
        } else {
            setbtnCaption(caption2)
        }
    }
    return (
        <div>
            <Row>
                <Col md={{ span: 6, offset: 3 }} className='mt-5'>
                    <Card>
                    <Card.Header  as="h5">Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button disabled={flagDisable} variant="primary" onClick={()=>onBtnClick()}>Increase +1</Button>
                        <Button variant="success" className='mr-5' onClick={()=>onBtnAutoClick()}>{btnCaption}</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
