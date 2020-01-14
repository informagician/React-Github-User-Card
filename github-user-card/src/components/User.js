import React from 'react';



// login, avatar_url , name , location , bio , followers , following
const User = props => {

    return(
        <div className="user">
            <img src={props.user.avatar_url} alt={props.user.login} />
            <div className="user-info">
                <h3>{props.user.name}</h3>
                <h4>{props.user.location}</h4>
                <p>{props.user.bio}</p>
            </div>
        </div>
    )
}

export default User;