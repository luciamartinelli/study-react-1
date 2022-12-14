import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const[enteredTitle, setEnteredTitle]=useState('');
    const[enteredAmount, setEnteredAmount]=useState('');
    const[enteredDate, setEnteredDate]=useState('');

    /*const [userInput,setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate:''
    });*/

    
    
  const titleChangeHandler = (event) => {
    setUserInput((prevState)=>{
        return {...prevState,enteredTitle: event.target.value}

    };

    

  
  //setUserInput({
   //...userInput;
   //enteredTitle: event.target.value});
 

  const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)

    //setUserInput({
     //...userInput;
     //enteredAmount: event.target.value});
   };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)


    //setUserInput({
     //...userInput;
     //enteredDate: event.target.value});
   };

   const SubmitHandler = (event) => {
    event.preventDefault();

        const expenseData={
            title: enterdeTitle,
            amount: enteredAmount,
            date: new Date (enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
   };


  return (
    <form on Submit={SubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'/>
        <label>Title</label>
        <input 
        type='text' 
        value={enteredTItle} 
        OnChange={titleChangeHandler} />
         </div>
         <div className='new-expense__control'>
        <label>Amount</label>
        <input 
        type='number'
        value={enteredAmount} 
         min="0.01" 
         step="0.01" 
         onChange={amountChangeHandler}/> 
        </div>
        <div className='new-expense__control'>
        <label>Date</label>
        <input 
        type='date' 
        value={enteredDate} 
        min="2019-01-01" 
        max="2022-12-31" 
        onChange={dateChangeHandler}/>
      </div>
      <div className='new-expense__actions'></div>
      <button type='submit'>Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
