import React from 'react';



// login, avatar_url , name , location , bio , followers , following
const Followers = props => {

    return(
        <div>
            {props.follower.map(item => (
                <div key={item.id}>
                    <img src={item.avatar_url} />
                    <h2>{item.login}</h2>
                </div>
            ))}
            
        </div>
    )
}

export default Followers;