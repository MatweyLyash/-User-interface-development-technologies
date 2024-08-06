import React, {FC, ReactNode} from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

type equipment={
    Category:string,
    ModelName:string,
    Cost:number,
    Availability:boolean
}
interface props{
    products:equipment[],
    filterText:string,
    availability:boolean
}
const Stuff:FC<props>=(props)=>{
    const {products, filterText,availability} = props;
    let lastCategory:string|null = null;
    
    const rows: ReactNode[] = [];
    
    products.forEach((product)=>{
        if(product.ModelName.toLowerCase().indexOf(filterText)==-1){
            return;
        }
        if(availability&&!product.Availability){
            return;
        }
        if (product.Category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    Category={product.Category}
                    key={product.Category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                availability={availability}
                key={product.ModelName} />
        );
        lastCategory = product.Category;
    })
    console.log(filterText);
    return(
        <table>
            <thead>
            <tr>
                <th>Category</th>
                <th>Model name</th>
                <th>Cost</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    )
}
export  default Stuff;