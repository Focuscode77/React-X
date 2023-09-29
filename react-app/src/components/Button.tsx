import React from 'react';

interface Props {
    color?: 'primary' | 'secondary' | 'danger';
    text: string;
    onClick: () => void;


}





const Button = ({ color, text, onClick }: Props) => {


    return <button className={'btn btn-' + color} onClick={onClick}>
        {text}
    </button>


}

export default Button;