import React, {ChangeEvent, FC, ReactNode, useState} from 'react';
import products from "./products";

import Stuff from "./Stuff";
import Inputs from "./Inputs";

function Search() {
    const [text, setText] = useState("")
    const [availability, setAvailability] = useState(false)
    const handleValue = (value: string | boolean) => {
        if (typeof value === 'string') {
            setText(value.toLowerCase());
        } else {
            
            setAvailability(value);
        }
        
    };
  return (
      <div className="Search">
          <Inputs
              availability={availability}
              func={handleValue}
          />
          <Stuff
              products = {products}
              filterText={text}
              availability={availability}
            
          />
      </div>
  );
}
export default Search;
