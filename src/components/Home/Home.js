import React from 'react';
import faker from 'faker';
import './Home.css'
import Rectangle from '../Cards/Rectangle';
import Wide from '../Cards/WideRect';
import Mobiles from '../../Images/mobile250x250.png';
import shirts from '../../Images/shirts250x250.png';
let cat=[];

let handlecat=()=>{
    for(let i=0;i<8;i++)
        cat.push({Heading:faker.commerce.productName(),id:i,img:faker.image.fashion(250,250,true),description:faker.lorem.sentence()})
};
handlecat();

// const categories=[
//     {
//         Heading: 'Mobiles',
//         img: Mobiles,
//         description:'mobiledescription'
//     },
//     {
//         Heading: 'Shirts',
//         img:shirts,
//         description:'shirtdescription'
//     }
// ]
export default class Home extends React.Component{
    componentDidMount(){
        this.setState({cat})
    }
    render(){
        return(
            <div className='home'>
                <h2>Home page</h2>
                <div className='container'>
                    {!(this.state) ? console.log('no state') : console.log('state has been set')}
                    {
                        (this.state)?
                        (this.state.cat.map((c,i)=>{
                            return <Rectangle key={c.Heading} obj={c} img={i%2===0?Mobiles:shirts} />
                        })):(console.log('cat array is empty before calling componentDidMount'))
                        
                    }
                </div>
                <Wide />                
            </div>
        )
    }
}