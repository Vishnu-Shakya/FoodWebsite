// import React from "react";

// import { Card, } from "react-bootstrap";




// const MenuItem = (Props) => {
//     return (
//         <div>
//             <Card style={{ width: '25rem' }}>
//                 <Card.Img variant="top" src={Props.dish.image}/>
//                 <Card.Body>
//                     <Card.Title style={{cursor:'pointer'}} onClick={Props.DishSelect}>{Props.dish.name}</Card.Title>
//                     <Card.Text>
//                     {Props.dish.description}
//                     </Card.Text>
//                     <p><b>Price:{Props.dish.price}</b></p>
//                     <p><b>Label:{Props.dish.label}</b></p>
//                 </Card.Body>
//             </Card>

//         </div>
//     )
// }

// export default MenuItem


import React from 'react'
import {Card } from 'react-bootstrap'

export default function MenuItem(props) {
    // console.log(props.dish)
    return (
        <div>
            <Card style={{ height:'33rem',width: '25rem' ,margin:"10px auto" }}>
                <Card.Img variant="top" src={props.dish.image} /> 
                <Card.Body>
                    <Card.Title style={{cursor:'pointer'} } 
                    onClick={props.DishSelect}>{props.dish.name}</Card.Title>
                    <Card.Text>
                       {props.dish.description}
                    </Card.Text>
                    <p><b>Price: {props.dish.price}</b></p>
                    <p><b>Label: {props.dish.label?props.dish.label:'old'}</b></p>
                </Card.Body>
            </Card>
        </div>

    )
}
