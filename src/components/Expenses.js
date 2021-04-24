import ExpenseItem from './ExpenseItem'
import './Expenses.css';

function Expenses(props) {
  const { expenses } = props;
  const expenseItems = expenses.map((item) =>
    <ExpenseItem
      title={ item.title }
      amount={ item.amount }
      date={ item.date }
    />
  );
  return (
    <div className='expenses'>
      { expenseItems }
    </div>
  );
}

export default Expenses;
