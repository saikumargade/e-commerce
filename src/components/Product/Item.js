import React from 'react';
import './Item.css';
import Button from '@material-ui/core/Button';
export default class Item extends React.Component{
    static getDerivedStateFromProps(props,state){
        if(props.location.image||!sessionStorage.getItem('img'))
        sessionStorage.setItem('img',props.location.image.display);
    }
    handleAddToCart=()=>{
            let item=sessionStorage.getItem('img');
            this.toStore={id:1,toshow:item}
            localStorage.setItem('cartitem',this.toStore);
            console.log(this.toStore);
            (this.toStore.id)++;
    }
    render(){
        return(
            <div className='item'>
                <img src={(!(sessionStorage.getItem('img')))?this.props.location.image.display:sessionStorage.getItem('img')}></img>
                <Button variant='contained' color='primary' onClick={this.handleAddToCart}>Add to Cart</Button>
                <p>product description</p>
            </div>
        )
    }
}