import React from "react";
import { Card } from "react-bootstrap";
import DishComment from "./DishComment";



 const DishDetail=(props)=>{
    console.log('hii i am in dishdetails')
    return (
        <div>
            <Card  style={{ width:'48rem',display:'flex',
        alignItems:'center'}}>
                <Card.Img variant="top" src={props.dish.image} />
                <Card.Body style={{alignItems:'center',justifyContent:'center'}}>
                    <Card.Title> {props.dish.name}</Card.Title>
                    <Card.Text>
                       {props.dish.description}
                    </Card.Text>
                    <p><b>Price: {props.dish.price}</b></p>
                    <p><b>Label: {props.dish.label?props.dish.label:'old'}</b></p>
                    <p><b>Category: {props.dish.category?props.dish.category:'meal'}</b></p>

                </Card.Body>
            </Card>
            <DishComment comments={props.dish.comments}/>
        </div>
    )
}

export default DishDetail

