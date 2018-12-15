import React, {Component} from 'react'
import { connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Payments from './Payments'

class Header extends Component {

    renderContent = () => {
        switch(this.props.user) {
            case null:
                return ''
            case false:
                return <li><a  href="/auth/google">Login with google</a></li>
            default:
                return [
                    <li key="payments"> <Payments/> </li>,
                    <li key="credits" style={{margin: '0 10px'}}>Credits: {this.props.user.credits}</li>,
                    <li key="logout"> <a href="/api/logout">Logout</a> </li>
            
                ]
        }   
    }

    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                <Link to={this.props.user ? "/surveys" : "/"} className="brand-logo">Emaily</Link>
                <ul id="nav-mobile" className="right">
                    {this.renderContent()}
                </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({user}){
    return { user }
}

export default  connect(mapStateToProps)(Header)