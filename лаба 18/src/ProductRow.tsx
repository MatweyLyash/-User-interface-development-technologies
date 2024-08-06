import React, {FC} from "react";

type equipment={
    Category:string,
    ModelName:string,
    Cost:number,
    Availability:boolean
}
interface rowProps{
    availability: boolean,
    product:equipment
}
const ProductRow:FC<rowProps> = (props)=> {
    const {product, availability} = props;
    const name = product.Availability? product.ModelName:
        <span style={{color:"red", display:availability?"none":"block"}}>
            {product.ModelName}
        </span>
    return(
        <tr>
            <td style={{paddingLeft:"150px", maxWidth:"200px"}} colSpan={2}>{name}</td>
            <td style={{display:availability&&!product.Availability?"none":"block", paddingInline:"10px"}} >{product.Cost}</td>
        </tr>
    )
}
export default ProductRow