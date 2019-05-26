import React from 'react';


const UserInput = (props) =>{
    const style = {
        background: '#eee',
        borderRadius: '6px',
        padding: '6px 12px',
        border: '1px solid #ccc',
        marginBottom: '80px'
    }
    return(
            <input type="text" value={props.name} onChange={props.changed} style={style}/>
    )
}

export default UserInput;