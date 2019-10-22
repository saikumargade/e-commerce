import React from 'react'
import './Rectangle.css'
export default class Rectangle extends React.Component{
    render(){
        console.log("Image: ", this.props.img)
        return(
            <div className='box'>
                <h3>{this.props.heading}</h3>
                <img src={this.props.img}></img>
                <h5>{this.props.description}</h5>
            </div>
        )
    }
}