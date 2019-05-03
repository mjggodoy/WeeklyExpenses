import React, {Component} from 'react';
import Expense from './Expense';
import PropTypes from 'prop-types';

class List extends Component{

    render(){

        return(

            <div className= "gastos-realizados">
                <h2>List</h2>
                {Object.keys(this.props.expenses).map((key,value) => (

                    <Expense
                        key = {key}
                        value = {value}
                        expense = {this.props.expenses[key]}
                    />

                ))}                           
            </div>
        )

    }

}

List.propTypes = { 

    expense: PropTypes.object


}

export default List;