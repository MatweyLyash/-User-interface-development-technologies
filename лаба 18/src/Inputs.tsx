import React, {ChangeEvent, FC} from "react";
type equipment={
    Category:string,
    ModelName:string,
    Cost:number,
    Availability:boolean
}
interface props{

    availability:boolean
    func:(value:string|boolean)=>void
}
const Inputs:FC<props> = (props)=>{
    
    const { availability, func} = props;
    const handleFilterChange=(event: ChangeEvent<HTMLInputElement>)=>{
        if( event.target.type =='text'){
            func(event.target.value)
        }
        else{
            func(event.target.checked)
        }
        
    }
    return(
        <div className="Inputs">
            
            
            <input
                type="text"
                className="textInput"
                placeholder="Search by model name..."
                onChange={handleFilterChange}
            />
            <div className="wrapCheck">
                <input
                    type="checkbox"
                    checked={availability}
                    onChange={handleFilterChange}
                />
                <p>Show only availability</p>
            </div>
        </div>
    );
    
}
export default Inputs;