import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Salary extends Component{

    render(){

        return(

            <div className="alert alert-primary">
                <p>Salary: ${this.props.salary}</p>
            </div>
        )

    }
}

Salary.propTypes = { 

    salary : PropTypes.string.isRequired
}


export default Salary;