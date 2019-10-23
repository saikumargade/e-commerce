import React from 'react';
import './Item.css'
export default class Item extends React.Component{
    render(){

        return(
            <div className='item'>
                <img src={this.props.location.image.display}></img>

            </div>
        )
    }
}