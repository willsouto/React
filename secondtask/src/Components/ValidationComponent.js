import React, { useState } from 'react';

const ValidationComponent = (props) => {
    
    return(
     <p>{props.inputLenght <= 5 ? "Text too short" : "Text too long"}</p>
    )

}

export default ValidationComponent;
