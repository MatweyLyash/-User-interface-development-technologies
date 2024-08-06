import React, {FC} from "react";
import Card from "./card";
import {MovieType} from "../api/api";
type content= {
    Title:string,
    Year:string,
    Type:string,
    Poster:string
}
type Props={
    type:string
    movies:MovieType[];
}
const Category:FC<Props>= (props)=>{
    const {type, movies} = props;
    const row:any[]=[];
    let index:number=0;
    let  exist:boolean=true;
    if(typeof movies =="undefined"){
        exist=false;
    }else{exist=true}
    
    if(exist){
        movies.map((el)=>{
            row.push(
                <Card Title={el.Title} Year={el.Year} Type={el.Type} Poster={el.Poster} key={index}/>
            )
            index++;
        })
    }
    
    
    return(
        <div className="Movies">
            <h1 className="headerText">{type}</h1>
            <div className="stuffs" style={exist?{}:{display:"none"}}>
                {row}
            </div>
            <p style={exist?{display:"none"}:{display:"block"}}>Ничего не найдено</p>
        </div>
    )
}
export default Category;