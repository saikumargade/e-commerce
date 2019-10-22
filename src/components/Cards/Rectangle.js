import React from 'react'
import './Rectangle.css'
import mobile from '../../Images/mobile250x250.png'
export default class Rectangle extends React.Component{
    render(){
        return(
            <div className='box'>
                <h3>Heading</h3>
                <img src={mobile}></img>
                <h5>description</h5>
            </div>
        )
    }
}