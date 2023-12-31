import React from 'react'
import { useState } from 'react';

interface Props {
    children: string;
    maxChars?: number;


}



const Expandable = ({ children, maxChars = 10 }: Props) => {
    const [isExpanded, setExpand] = useState(false);


    if (children.length <= maxChars) return <p>{children}</p>

    const text = isExpanded ? children : children.substring(0, maxChars);

    return <p>  {text}...  <button onClick={() => setExpand(!isExpanded)}>{isExpanded ? 'Less' : 'More'}</button> </p>

}

export default Expandable
