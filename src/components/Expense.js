import React, {Component} from 'react'
import PropTypes from 'prop-types';


class Expense extends Component{

    render(){

        const {amountmoney, nameExpense} = this.props.expense; 

        return(

            <li className= "Gastos">
                <p>{nameExpense}
                    <span className="gasto">${amountmoney}</span>
                </p>
            </li>

        )
    }
}

Expense.propTypes = { 

    expense : PropTypes.object.isRequired

}

export default Expense;