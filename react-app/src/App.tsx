import React, { Fragment, useState } from 'react';
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ProductLust from "./components/ProductLust";
import categories from "./expense-tracker/categories"


function App() {


  const [selectedCategory, setselectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
    { id: 2, description: 'bb', amount: 10, category: 'Utilities' },
    { id: 3, description: 'ccc', amount: 10, category: 'Utilities' },
    { id: 4, description: 'ddd', amount: 10, category: 'Utilities' },
    { id: 5, description: 'eee', amount: 10, category: 'Utilities' }


  ]);

  const visiableExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses
  return (





    <div>

      <div>
        <div className="mb-5">
          <ExpenseForm onSubmit={expense => setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])} />
        </div>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={category => setselectedCategory(category)} />
      </div>

      <ExpenseList expenses={visiableExpenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))} />
    </div>


  )

};

export default App
