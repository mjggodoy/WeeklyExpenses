import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Form extends Component{

//refs fields of the form

nameExpense = React.createRef();
amountmoney = React.createRef();


createExpenses = (e) =>{

    e.preventDefault();

    const expenses = {

        nameExpense : this.nameExpense.current.value,
        amountmoney : this.amountmoney.current.value
    }


    this.props.addExpenses(expenses);


    // Send thourgh props to app ->
    e.currentTarget.reset();

}

    render(){
        
        return(

            <form onSubmit={this.createExpenses}>
                <h2>Add your expenses here:</h2>
                <div className="campo">
                    <label>Name expense:</label>
                    <input ref={this.nameExpense} className="u-full-width" type="text" placeholder="e.g. Transport" />
                </div>

                <div className="campo">
                    <label>Amount:</label>
                    <input ref={this.amountmoney} className="u-full-width" type="text" placeholder="e.g. $300" />
                </div>
                <input className="button-primary u-full-width" type="submit" value="Add" />
            </form>
   
        )
    }
}

Form.propTypes = {

    addExpenses : PropTypes.func.isRequired


}


export default Form;
