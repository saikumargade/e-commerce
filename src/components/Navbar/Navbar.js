import React from 'react';
import './Navbar.css'
import Button from '@material-ui/core/Button'
export default class Navbar extends React.Component{
    render(){
        return(
            <header className='navbar'>
                <Button exact path='./' variant='contained' color='primary'>Home</Button>
                <input placeholder='Search'></input>
                <Button variant='outlined'>Sign In</Button>
                <Button path='./cart' variant='contained' color='primary'>Cart</Button>
            </header>
            
        )
    }
}