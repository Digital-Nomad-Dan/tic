import React from 'react'

const Square = ({value}) => {


function handleClick() {
   // setValue('y')
}

    return (
        <button 
        className="square"
        onClick={handleClick}
        >
            
            
            {value}
        </button>
      );
    }



export default Square;