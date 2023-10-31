
// import React, { Component } from "react";
// import DISHES  from "../../data/dishes.js";
// import MenuItem from "./MenuItem.jsx";
// import DishDetail from "./DishDetail.jsx";


// export class Menu extends Component {

//     state={
//         dishes:DISHES,
//         selectedDish:null
//     }

//     onDishSelect=(dish)=>{
//         console.log(dish)
//         this.setState({selectedDish:dish})

//     }
//     render(){
//         const menu = this.state.dishes.map(item=>{
//             return (
//                 <MenuItem dish={item} 
//                 DishSelect={()=>this.onDishSelect(item)}/>
//             )
//         })

//         let dishDetail=null
//         if(this.DishDetail!=null){
//             dishDetail=<DishDetail dish={this.state.selectedDish}/>

//         }

//         return (
//             <div className="container">
//                 <div className="row">
//                     <div className="col-6">{menu}</div>
//                     <div className="col-6">
//                         <dishDetail/>
//                     </div>

//                 </div>

//             </div>
//         )
//     }
// }

import React, { Component, Fragment } from 'react'
import DISHES from '../../data/dishes.js'
import MenuItem from './MenuItem.jsx'
import DishDetail from './DishDetail.jsx'
import { Container, Row, Modal, Button } from 'react-bootstrap'
import { useState } from 'react'

export class Menu extends Component {

    state = {
        dishes: DISHES,
        selectedDish: null,
        show: false

    }

    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });

    onDishSelect = (dish) => {

        this.setState({ selectedDish: dish, show: !this.state.show })
        // console.log(this.state.selectedDish)
    }




    render() {
        document.title='Menu '

        const menu = this.state.dishes.map(item => {
            return (
                <MenuItem dish={item} key={item.id}
                    DishSelect={() => this.onDishSelect(item)} />
            )
        })

        let DishDetails = null

        if (this.state.selectedDish != null) {
            DishDetails = <DishDetail dish={this.state.selectedDish} />

        }


        return (

            <Fragment>
                <Container fluid={true} style={{ padding: 'auto', justifyContent: 'center' }}>
                    <Row lg={2} md={2} xl={3} xs={6} sm={6}>
                        {menu}
                    </Row>
                    <Row>
                        {DishDetail}
                    </Row>
                    <Modal  size='lg' show={this.state.show} onHide={this.handleClose}>

                        <Modal.Body>{DishDetails}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>


                </Container>
            </Fragment>






        )
    }
}

export default Menu 