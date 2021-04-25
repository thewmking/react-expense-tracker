import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const titleClickHandler = () => {
    setTitle('Updated!');
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{ title }</h2>
        <div className='expense-item__price'>
          ${ props.amount }
        </div>
      </div>
      <button onClick={ titleClickHandler } type='button'>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
