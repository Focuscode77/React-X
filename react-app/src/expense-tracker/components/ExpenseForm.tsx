import React from 'react'
import categories from '../../App';
const ExpenseForm = () => {
    return (
        <form>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input id="description" className="form-control"></input>
            </div>
            <div className="mb-3"><label htmlFor="amount" className="form-label">Amount</label>
                <input id="amount" type="number" className="form-control" />
            </div>
            <div className="mb-3"><label htmlFor="category" className="form-label">Category</label>
                <select name="" id="category" className="form-select">
                    <option value=""></option>

                </select>
            </div>
            <button className="btn btn-primary"></button>
        </form>
    )
}

export default ExpenseForm
