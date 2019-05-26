import React from 'react';


const UserOutput = (props) =>{
    const style = {
        borderTop: '1px solid #000',
        backgroundImage: 'linear-gradient(#efefef, #fff)'
    }
    return(
        <div style={style}>
            <p>Profile</p>
            <p>Username: {props.name}</p> 
        </div>
    )
}

export default UserOutput;
