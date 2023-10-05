import React from 'react'
import categories from '../../App';
interface Props {

    onSelectCategory: (cateegory: string) => void;



}


const ExpenseFilter = ({ onSelectCategory }: Props) => {
    return (
        <select name="" id="" className="form-select" onChange={(event) => onSelectCategory(event.target.value)}>
            <option value=""> All categories</option>

        </select>
    )
}

export default ExpenseFilter
