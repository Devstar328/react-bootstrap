import React, { useState } from 'react'
import {Card, Row, Col, Button} from 'react-bootstrap';
import Content from '../components/Content';
import Tip from '../components/Tip';
var x=0
export default function Contents() {
    const [tipval, setTipval] = useState(0)
    var timer
    const onBtnClick = () => {
        x = tipval + 1
        console.log(x)
        setTipval(tipval+1)
    }
    const autoIncrease = () => {
        //console.log('ok')
        var auto = tipval
        timer = setInterval(()=>{
        auto = auto + 1
        setTipval(auto)
        if(auto%10 == 0){
           return clearInterval(timer)
        }
        }, 300)
    }
    const killTimer = () => {
        clearInterval(timer)
    }

    return (
        <div>
            <Content killTimer={killTimer} onBtnClick={onBtnClick} autoIncrease={autoIncrease} />
            <Tip val={tipval} />
        </div>
    )
}