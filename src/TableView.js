import React from 'react'
import {Link} from 'react-router-dom'


class TableView extends React.Component{
    
  constructor(props){
    super(props)
    this.state={
      userList: props.userList,
      filterUserList:props.filteredList,
      sortOrder: "asc", 
      filteredUsersPerPage:props.filteredUsersPerPage,
      currentPage:1
    }
  }

  filterUserList(value){
    let res = this.state.userList.filter(user=>{return user.first_name.toLowerCase().indexOf(value.toLowerCase())!==-1})
    let filteredUsersPerPage=res.filter((user,index)=>index<5)
    this.setState({filteredUsersPerPage : filteredUsersPerPage})
  }

  sortList(key){
      let sortOrder= this.state.sortOrder ==="asc"?"desc":"asc"
      let sortedList=[]
      if(this.state.sortOrder === "desc"){
         sortedList = this.state.filteredUsersPerPage.sort((user1,user2)=>user1[key]<user2[key]?1:-1)
      }else{
         sortedList = this.state.filteredUsersPerPage.sort((user1,user2)=>user1[key]>user2[key]?1:-1)         
      }
      this.setState({filteredUsersPerPage: sortedList, sortOrder: sortOrder})
  }

  filterListBasedOnPageNo(pageNo){
    let otherBtns = document.getElementsByClassName("active");
    if(otherBtns.length>0){
      otherBtns=otherBtns[0]
      otherBtns.className=otherBtns.className.replace("active","");
    }
    if(pageNo <=10){
      document.getElementById(pageNo).className += "active"
    }else{
      document.getElementById("nextPage").className += "active"
    }
    let fromIndex= (pageNo-1)*5
    let toIndex= fromIndex+4
    let filteredList=this.state.userList.filter((data,index)=>(index>=fromIndex && index <=toIndex))
    this.setState({filteredUsersPerPage :filteredList, currentPage:pageNo})
  }

  renderPages(noOfPages){
    let elements=[]
    for(let i=1;i<=noOfPages/10;i++){
      elements.push(<button key={i} id={i} onClick={(e)=>this.filterListBasedOnPageNo(i)}>{i}</button>)
    }
    return elements
  }

  render(){
    let noOfPages=Math.ceil(this.state.userList.length/5)
    return(
      <div>
        <div>
            <div style={{padding: '1em'}}>            
                <input type="text" size="35" className="searchField" placeholder="Search by first name" onChange={(e)=>this.filterUserList(e.target.value)}></input>
            </div>
          <table id="userList">
            <thead>
              <tr>
                <th><button className="columnHeader" onClick={()=>this.sortList('first_name')}>First Name</button></th>
                <th><button className="columnHeader" onClick={()=>this.sortList('last_name')}>Last Name</button></th>
                <th><button className="columnHeader" onClick={()=>this.sortList('company_name')}>Company Name</button></th>
                <th><button className="columnHeader" onClick={()=>this.sortList('city')}>City</button></th>
                <th><button className="columnHeader" onClick={()=>this.sortList('state')}>State</button></th>
                <th><button className="columnHeader" onClick={()=>this.sortList('zip')}>Zip</button></th>
                <th><button className="columnHeader" onClick={()=>this.sortList('email')}>Email</button></th>
                <th><button className="columnHeader" onClick={()=>this.sortList('web')}>Web</button></th>
                <th><button className="columnHeader" onClick={()=>this.sortList('age')}>Age</button></th>
              </tr>
            </thead>
            <tbody>
              {this.state.filteredUsersPerPage.map(user=>
                  <tr key={user.id}>
                      <td><Link to={'/user/'+user.id} style={{textDecoration: 'none'}} key={user.id}>{user.first_name}</Link></td>
                      <td><Link to={'/user/'+user.id} style={{textDecoration: 'none'}} key={user.id}>{user.last_name}</Link></td>
                      <td><Link to={'/user/'+user.id} style={{textDecoration: 'none'}} key={user.id}>{user.company_name}</Link></td>
                      <td><Link to={'/user/'+user.id} style={{textDecoration: 'none'}} key={user.id}>{user.city}</Link></td>
                      <td><Link to={'/user/'+user.id} style={{textDecoration: 'none'}} key={user.id}>{user.state}</Link></td>
                      <td><Link to={'/user/'+user.id} style={{textDecoration: 'none'}} key={user.id}>{user.zip}</Link></td>
                      <td><Link to={'/user/'+user.id} style={{textDecoration: 'none'}} key={user.id}>{user.email}</Link></td>
                      <td><Link to={'/user/'+user.id} style={{textDecoration: 'none'}} key={user.id}>{user.web}</Link></td>
                      <td><Link to={'/user/'+user.id} style={{textDecoration: 'none'}} key={user.id}>{user.age}</Link></td>        
                  </tr>
              )}
            </tbody>
          </table>

          <div className="pagination">
            <button disabled={this.state.currentPage === 1?true:false} onClick={e=>this.filterListBasedOnPageNo(this.state.currentPage-1)}>&lt;&lt;</button>
              {this.renderPages(noOfPages)}
            <button id="nextPage" onClick={e=>this.filterListBasedOnPageNo(this.state.currentPage+1)}>&gt;&gt;</button>
          </div>
        </div>
      </div>
    )
  }
}

export default TableView