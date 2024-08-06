import React, {FC} from "react";
import Card from "./card";
type content= {
    Title:string,
    Year:string,
    Type:string,
    Poster:string
}
type Props={
    type:string
    movies:content[]
}
const Category:FC<Props>= (props)=>{
    const {type, movies} = props;
    const row:any[]=[];
    let index:number=0;
    movies.forEach((el)=>{
        row.push(
            <Card Title={el.Title} Year={el.Year} Type={el.Type} Poster={el.Poster} key={index}/>
        )
        index++;
    })
    
    return(
        <div className="Movies">
            <h1 className="headerText">{type}</h1>
            <div className="stuffs">
                {row}
            </div>
        </div>
    )
}
export default Category;