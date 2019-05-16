import React from 'react'
import {Link} from 'react-router-dom'

class DetailView extends React.Component{
  render(){
    let user=this.props.userList.filter(user=>user.id === parseInt(window.location.hash.split('/')[2]))
    return(
      <div>
        <h2 style={{padding:'20px'}}>{user[0]?user[0].first_name:''}</h2>
        <table style={{marginBottom: "2em"}}>
          <tbody>
            <tr>
              <td>Company</td>
              <td>{user[0]?user[0].company_name:''}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{user[0]?user[0].city:''}</td>
            </tr>
            <tr>
              <td>State</td>
              <td>{user[0]?user[0].state:''}</td>
            </tr>
            <tr>
              <td>ZIP</td>
              <td>{user[0]?user[0].zip:''}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{user[0]?user[0].email:''}</td>
            </tr>
            <tr>
              <td>Web</td>
              <td>{user[0]?user[0].web:''}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{user[0]?user[0].age:''}</td>
            </tr>
          </tbody>
        </table>
        <Link to='/' style={{ marginLeft : "15px", marginTop:"10px", padding: "6px 20px", color: "blue", textDecoration: "none", border: "1px solid rgb(103, 103, 223)", borderRadius:"46%"}}>Back</Link>
      </div>
    )
  }
}

export default DetailView;