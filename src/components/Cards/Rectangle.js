import React from "react";
import "./Rectangle.css";
import { Link } from "react-router-dom";
export default class Rectangle extends React.Component {
  render() {
    // console.log("Image: ", this.props.img)
    // console.log("id:",this.props.unique)
    // console.log("object:",this.props.obj)
    const { obj, img } = this.props;
    // console.log("Image: ", obj.img)
    return (
      <div className="box">
        <h3>{obj.Heading}</h3>
        <Link to={{ pathname: "/item", image: { display: img }, object: obj }}>
          <img src={img} alt="imgdescription"></img>
        </Link>
        <p>{obj.description}</p>
      </div>
    );
  }
}
