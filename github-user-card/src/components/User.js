import React from 'react';



// login, avatar_url , name , location , bio , followers , following
const User = props => {

    return(
        <div>
            <img src={props.user.avatar_url} />
            <h2>{props.user.name}</h2>
            <h3>{props.user.location}</h3>
            <p>{props.user.bio}</p>
        </div>
    )
}

export default User;