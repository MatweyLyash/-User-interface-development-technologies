import React, {ChangeEvent, FC, useState} from "react";
interface InputsProps  {
    searchMovies : (_title:string, _type:string)=>Promise<void>,
    type:string,
}


const Inputs:FC<InputsProps>=(props)=>{
    const {searchMovies = Function.prototype, type}=props;
    const [search,setSearch] = useState('');

    const handleKey = (event:any)=>{
        if(event.key==='Enter'){
            searchMovies(search,type);
            
        }
    }
    return(
            <div className="input-field">
                <input
                    placeholder='search'
                    type="search"
                    className="validate"
                    value ={search}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button
                    className="btn search-btn"
                    onClick={()=>{searchMovies(search, type)}}
                >
                    Search
                </button>
               
            </div>
    )
}
export default Inputs;