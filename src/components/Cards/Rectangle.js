import React from 'react'
import './Rectangle.css'
import {Link} from 'react-router-dom';
export default class Rectangle extends React.Component{
    render(){
        // console.log("Image: ", this.props.img)
        console.log("id:",this.props.unique)
        return(
            <div className='box'>
                <h3>{this.props.heading}</h3>
                <Link to={{pathname:'/item',image:{display:this.props.img}}}><img src={this.props.img} alt='imgdescription'></img></Link>
                <p>{this.props.description}</p>
            </div>
        )
    }
}