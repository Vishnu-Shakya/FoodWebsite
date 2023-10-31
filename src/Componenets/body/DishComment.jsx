import React from 'react'
import {Table} from 'react-bootstrap'
import dateFormat from 'dateformat'



export default function DishComment(props) {
  console.log(props)
  return (
    
      props.comments.map(comment => {
        return <div>
          <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Comment</th>
            <th>Author</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{comment.id}</td>
            <td>{comment.comment}</td>
            <td>{comment.author}</td>
            <td>{dateFormat(new Date(), "dddd, mmmm dS , yyyy, h:MM TT")}</td>
          </tr>
           
        </tbody>
      </Table>
        </div>
      })
  )
}
