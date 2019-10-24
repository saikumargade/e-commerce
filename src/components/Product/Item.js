import React from 'react';
import './Item.css'
export default class Item extends React.Component{
    componentWillMount(){
        if(!sessionStorage.getItem('img'))
        sessionStorage.setItem('img',this.props.location.image.display);
    }
    render(){
        return(
            <div className='item'>
                <img src={(!(sessionStorage.getItem('img')))?this.props.location.image.display:sessionStorage.getItem('img')}></img>
            </div>
        )
    }
}