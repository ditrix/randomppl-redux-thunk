import React,{Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import Person from './Person'
import {loadData} from './actions'


class App extends Component {
  
  componentDidMount(){

    // axios('https://api.randomuser.me/?results=10')
    //   .then(response => this.props.setData(response.data.results)) 
    //   .catch(error => console.error(error))
    this.props.loadData()
  }



  render(){
       return (
        <div className="App">
           <h1>randomppl redux-thunk</h1>
           {(this.props.loading)?<span>loading...</span>
             :(this.props.error)?<span>error load data</span>
               :<ul>{this.props.data.map((item,index) => <li key={index}>{Person(item)}</li> )}</ul>
           }

      
        </div>
        )
  }
}

const mapStateToProps = store => {
  return {
    data: store.data
  }
}

const mapDispatchToProps = dispatch => {
  return{
    loadData: () => dispatch(loadData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
