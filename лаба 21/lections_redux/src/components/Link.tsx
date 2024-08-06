import React, {FC} from 'react';

export interface LinkProp{
    active?:boolean,
    children?:any,
    onClick?:()=>void
    filter?:any
}

const Link:FC<LinkProp> = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px',
        }}
    >
        {children}
    </button>
);



export default Link;