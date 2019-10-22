import React from 'react';
import faker from 'faker';
import './Home.css'
import Rectangle from '../Cards/Rectangle';
import Mobiles from '../../Images/mobile250x250.png';
import shirts from '../../Images/shirts250x250.png';
let cat=[];

let handlecat=()=>{
    for(let i=0;i<5;i++)
        cat.push({Heading:faker.commerce.productName()})
};
handlecat();

const categories=[
    {
        Heading: 'Mobiles',
        img: Mobiles,
        description:'mobiledescription'
    },
    {
        Heading: 'Shirts',
        img:shirts,
        description:'shirtdescription'
    }
]
export default class Home extends React.Component{
    render(){
        return(
            <div className='home'>
                <h2>Home page</h2>
                <div className='container'>
                    {
                        categories.map((category)=>{
                            console.log("Image from home", category.img)
                            let heading =category.Heading;
                            let img=category.img;
                            let description=category.description;
                            return <Rectangle heading={heading} img={img} description={description} />
                        })
                    }
                </div>
                {cat.map((c)=>{console.log(c.Heading)})}

            </div>
        )
    }
}