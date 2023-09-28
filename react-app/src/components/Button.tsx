import React from 'react';

interface Props {

    text: string;


}

const Button = ({ text }: Props) => {


    return <div className='btn btn-success'>
        {text}
    </div>


}

export default Button;