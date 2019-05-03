import React, {Component} from 'react';
import './../css/App.css';
import Header from './Header'
import Form from './Form'
import List from './List'
import {validarPresupuesto} from './../Helper';
import SalaryControl from './SalaryControl'

class App extends Component{

  state = {

    expenses: {},
    salary : '',
    remaining: ''
  }

  componentDidMount(){

    this.getSalary();

  }


  getSalary = () => {

    let salary = prompt('How much money do you want to spend?');
    let result = validarPresupuesto(salary);

    if(result){
      
      console.log('Salary is ok');

    }else{
      
      this.getSalary();
    }

    salary = String(salary);
    result = String(result);

    this.setState({

      salary: result,
      remaining: result

    })
    

  }

  addExpenses = expense => {

    const expenses = {...this.state.expenses};
    expenses[`expense.${Date.now()}`]  = expense;

    console.log(expense.amountmoney);
    this.calculateSalary(expense.amountmoney)

    this.setState({

        expenses : expenses
    })
  }

  calculateSalary = amount =>{

    let amountNumber = Number(amount);
    let remaining = this.state.remaining;
    remaining = remaining - amountNumber;
    remaining = String(remaining);

    this.setState({

      remaining : remaining
  })
    
  }

  
  render(){

    return (

      <div className="App container">
        <Header
          title = "Weekly Expenses"
        />
        <div className="contenido-principal contenido">
          <div className='row'>
            <div className='one-half column'>
            
            <Form
              addExpenses = {this.addExpenses}

            />
            </div>
            <div className='one-half column'>
            
              <List
                expenses = {this.state.expenses}
              />
              <SalaryControl
                salary = {this.state.salary}
                remaining = {this.state.remaining}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
