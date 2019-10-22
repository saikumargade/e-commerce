import React from 'react';
import './Home.css'
import Rectangle from '../Cards/Rectangle'
export default class Home extends React.Component{
    render(){
        return(
            <div className='home'>
                <h2>Home page</h2>
                <div className='container'>
                    <Rectangle />
                    <Rectangle />
                    <Rectangle />
                    <Rectangle />
                    <Rectangle />
                    <Rectangle />
                </div>

            </div>
        )
    }
}