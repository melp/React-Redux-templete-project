
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UserView extends Component {

	 render() {

     	return(
            <div>
                In User View!!!
            </div>
     	);

     }

}


const mapStateToProps = state => ({
    User: state.User
});

/*
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(indexActions, dispatch)
});
*/

export default connect(mapStateToProps)(UserView);