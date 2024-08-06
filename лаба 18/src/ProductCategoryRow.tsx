import React from "react";
function ProductCategoryRow(props: {Category:string}) {
    const {Category} =props;
    return (
        <tr>
            <th colSpan={1}>
                {Category}
            </th>
        </tr>
    
    );
    
}
export default ProductCategoryRow;