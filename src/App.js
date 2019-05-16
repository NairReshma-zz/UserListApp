import React from 'react';
import './App.css';
import TableView from './TableView'
import {Route} from 'react-router-dom'
import DetailView from './DetailView'
import Loader from './Loader'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      userList:[],
      filterUserList:[],
      filteredUsersPerPage:[]
    }
  }
  componentWillMount(){
    fetch('https://demo9197058.mockable.io/users').then(results=>{
      return results.json()
    }).then(data=>{
      this.setState({userList: data, filterUserList: data, filteredUsersPerPage:data.filter((user,index)=>index<5)})
    })
  }
  render(){
    return (
      <div className="App">
        {this.state.userList.length > 0 
          ? 
          <div>
            <Route exact path='/' render={()=><TableView userList={this.state.userList} filteredUsersPerPage={this.state.filteredUsersPerPage}/>}/>
            <Route path='/user/:id' render={()=>(<DetailView userList={this.state.userList}/>)}/>
          </div>
          :<Loader/>
        }
      </div>
    )
  }
}

export default App;
