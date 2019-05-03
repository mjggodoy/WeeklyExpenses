import React, {Component} from 'react';
import Salary from './Salary';
import Remaining from './Remaining'
import PropTypes from 'prop-types';


class SalaryControl extends Component{

    render(){

        return(
            <div>
                <Salary
                    salary = {this.props.salary}
                />  
                <Remaining
                    remaining = {this.props.remaining}
                    salary = {this.props.salary}
                />  
            </div>
        )

    }
}

SalaryControl.propTypes = { 
    
    salary : PropTypes.string.isRequired,
    remaining : PropTypes.string.isRequired

}

export default SalaryControl;