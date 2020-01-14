import React from 'react';



// login, avatar_url , name , location , bio , followers , following
const Followers = props => {

    return(
        <div>
            {props.follower.map(item => (
                <div key={item.id} className="user">
                    <img src={item.avatar_url} alt={item.login} className="followers"/>
                    <h3>{item.login}</h3>
                </div>
            ))}
            
        </div>
    )
}

export default Followers;