
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import indexActions from '../../actions/indexActions';
import App from '../../App'
import {Link, IndexLink} from 'react-router';

import DatePicker from "react-bootstrap-date-picker";

class IndexList extends Component {
	/*
	constructor(props) { 
        super(props);
    } 
*/

	clickMe(){
		console.log("2222222");
		this.props.actions.clickMe();
	}

     render() {

     	return(
            <div>
                <App name="melp"/>
         		<div className="my"> 
                xxxxxxxxx
                <div style={{width:200}}>
                <DatePicker />
                </div>
                <select>
                    <option>222222</option>
                </select>
         			 <span>{this.props.Main.showText} {this.props.Main.count}</span>
         			<br/>
         			<span></span>
         		</div> 
                <div onClick={this.clickMe.bind(this)}>click me</div>
                 <Link to="/user" activeClassName="on">
                    Link to 
                 </Link>
            </div>
     	);

     }

}


const mapStateToProps = state => ({
    Main: state.Main,
    User: state.User
});


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(indexActions, dispatch)
});


export default connect(mapStateToProps,mapDispatchToProps)(IndexList);