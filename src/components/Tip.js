import React from 'react';
import {useState, useEffect} from 'react';
import {Button, Col, Row} from 'react-bootstrap';


export default function Tip(props) {
    
    return (
        <div>
            <Row>
                <Col md={{ span: 6, offset: 3 }} className='mt-3'>
                    <Button>tipval: {props.val}</Button>            
                </Col>
            </Row>
        </div>
    )
}
