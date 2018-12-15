import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Landing from './Landing'
const Dashboard = () => <div><h2>Dashboard</h2></div> 
const SurveyNew = () => <div><h2>Survey New</h2></div> 



class App extends Component {
    componentDidMount(){
        // This updates the state of our user
    
        this.props.fetchUser()
    }

    render(){
        return (    
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path="/" exact component={Landing}></Route>
                        <Route path="/surveys" exact component={Dashboard}></Route>
                        <Route path="/surveys/new" component={SurveyNew}></Route>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App)