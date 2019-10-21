import React from 'react';
import './Home.css'
import Square from '../Cards/Square'
export default class Home extends React.Component{
    render(){
        return(
            <div className='home'>
                <h2>Home page</h2>
                <div className='container'>
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                </div>

            </div>
        )
    }
}