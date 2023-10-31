import React, { Fragment ,Component} from 'react'

import { Form, Row, Button, Col, Container, FloatingLabel } from 'react-bootstrap'


export default class Contact extends Component {

  constructor(){
    super();
    this.state={
      firstname:'',
      lastname:'',
      mobile:'',
      email:'',
      agree:false,
      message:''
    }
  }

  handelInputChange=event=>{
  

    const value= event.target.type  ==='checkbox'?event.target.checked:event.target.value;
    const name=event.target.name
    this.setState({
      [name]:value
    })

  }
  handleSubmit=event=>{
    console.log(this.state)
    event.preventDefault()

  }



  render() {
    document.title='Contact Page '
    return (
      <Fragment>
        <Container>
          <h1>Feedback form</h1> 
          <Form onSubmit={this.handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} >
                <Form.Label style={{textAlign:'start'}}>First Name </Form.Label>
                <Form.Control type="text" name='firstname' placeholder='enter first name ' value={this.state.firstname} onChange={this.handelInputChange}/>
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label>Last Name </Form.Label>
                <Form.Control type="text"  name='lastname' placeholder='enter last name ' value={this.state.lastname} onChange={this.handelInputChange}/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} >
                <Form.Label>Mobile No. </Form.Label>
                <Form.Control type="number" name='mobile' placeholder='enter mobile number ' value={this.state.mobile} onChange={this.handelInputChange}/>
              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label> email </Form.Label>
                <Form.Control type="email" name='email' placeholder='enter your email ' value={this.state.email} onChange={this.handelInputChange}/>
              </Form.Group>
            </Row>

            <FloatingLabel controlId="floatingTextarea2" label="leave a message here ">
              <Form.Control
                as="textarea"
                name='message'
                value={this.state.message} onChange={this.handelInputChange}
                placeholder="Leave a comment here"
                style={{ height: '150px', width: '600px' }}
              />
            </FloatingLabel>




            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out"  name='agree' checked={this.state.agree} onChange={this.handelInputChange}/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </Fragment>
    )
  }
}

