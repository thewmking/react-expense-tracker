import Card from './Card';
import ExpenseItem from './ExpenseItem'
import './Expenses.css';

function Expenses(props) {
  const { expenses } = props;
  const expenseItems = expenses.map((item) =>
    <ExpenseItem
      title={ item.title }
      amount={ item.amount }
      date={ item.date }
      key={ item.id }
    />
  );
  return (
    <Card className='expenses'>
      { expenseItems }
    </Card>
  );
}

export default Expenses;
