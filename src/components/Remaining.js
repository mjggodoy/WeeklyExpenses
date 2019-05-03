import React, {Component} from 'react';
import {revisarPresupuesto} from './../Helper'
import PropTypes from 'prop-types';



class Remaining extends Component{

    render(){

        const salary = this.props.salary;
        const remaining = this.props.remaining;
        let alert = revisarPresupuesto(salary, remaining);

        return(

            <div className={alert}>
                <p>Remaining: ${remaining}</p>
            </div>

        )
    }
}

Remaining.propTypes = { 
    
    salary : PropTypes.string.isRequired,
    remaining : PropTypes.string.isRequired
}

export default Remaining;