import React, { FC, useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
    const { label, onClick, disabled } = props;
    return (
        <button onClick={onClick} className="button" disabled={disabled}>
            {label}
        </button>
    );
};

const Counter: FC = () => {
    const inc = "inc";
    const reset = "reset";
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(count + 1);
    const base = () => setCount(0);

    const disabled = 5 === count;
    const unDisabled = 0 === count;

    return (
        <div className="wrapper">
            <h1 className="number" style={{ color: disabled ? "red" : "cyan" }}>{count}</h1>
            <Button label={inc} onClick={increment}  disabled={disabled}/>
            <Button label={reset} onClick={base} disabled={unDisabled} />
        </div>
    );
};
//
const root  = <Counter/>
ReactDOM.render(root,document.getElementById('root') as HTMLElement)













import {FC, useState, useRef} from 'react'
import '../src/style.css'

function generation():number[][]{
    const n=3;
    let numbers: number[][] = [];
    numbers = Array.from({ length: n * n }, (_, i) =>
        Array.from({ length: n * n }, (_, j) =>
            ((i * n + Math.floor(i / n) + j) % (n * n)) + 1
        )
    );
    return numbers;
}
function moding(matrix:number[][]):(number|null)[][]{
    let modingMatrix:(number|null)[][] = [];
   for (let i=0;i<=8;i++){
       modingMatrix[i] = [];
       for(let j = 0; j<=8;j++){
           if(Math.random()>0.3){
               modingMatrix[i][j]=null;
           }
           else {
               modingMatrix[i][j] = matrix[i][j];
           }
       }
   }
    return  modingMatrix;
}

interface cellProps{
    index:number|null
    content:boolean
    matrix:(number|null)[][]
    row:number
    col:number
}
const Grid:FC = ()=> {
    const matrix:number[][] = generation();
    const newMatrix:(number|null)[][] = moding(matrix);
    const [count, setCount] = useState(0);
    const newRender = () => {
        setCount(count + 1);
    };
    const itsAll=()=>{
    
    }
    console.log(newMatrix);
    return(
        <div className="wrapper">
            <table className="Sudoku">
                <tbody>
                {
                    [0,1,2,3,4,5,6,7,8].map((row,indexR)=>{
                        return(
                            <tr key={indexR} className={(indexR+1)%3==0&&(indexR+1!==9)?'b_border':'' }>
                                {
                                    [0,1,2,3,4,5,6,7,8].map((col,indexC)=>{
                                        return(
                                            <td key={indexC+indexR} className={(indexC+1)%3==0&&(indexC+1!==9)?'r_border':'' }>
                                                <Cell index = {newMatrix[row][col]}
                                                      content={newMatrix[row][col]==null?true:false}
                                                      matrix = {matrix}
                                                      row = {row}
                                                      col = {col}
                                                />
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
                </tbody>
    
            </table>
            <button onClick={newRender} className="btn">Новая игра</button>
            <button onClick={itsAll}></button>
        </div>
        
        
    )
}


const Cell:FC<cellProps> = (props)=> {
    const {index,content, matrix, row,col} = props;
    const [isHighlighted, setIsHighlighted] = useState(false);
    const divRef = useRef<HTMLDivElement|null>(null);
    const check = () => {
        if(divRef.current?.innerHTML!=matrix[row][col]){
            setIsHighlighted(true);
        }
        else{
            setIsHighlighted(false);
        }
    };
    
    return (
        <div
            ref={divRef}
            contentEditable={content}
            className={`cell ${isHighlighted ? "highlighted" : ""}`}
            onInput={check}
        >
            {index}
        </div>
    );
}
let h = generation()

console.table(h)



export default Grid

