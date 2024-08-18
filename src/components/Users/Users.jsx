import React from "react";
import styles from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {id: 0, followed: true, ico: 'https://i.pinimg.com/736x/79/9a/f8/799af8f3e8a9743b563d39b2bc8d40c7.jpg', fullName: 'zove', status: 'glow up', location: {city: 'Kurgan', country: 'Russia'}},
            {id: 1, followed: true, ico: "https://i.pinimg.com/564x/59/78/51/597851f6d8f77eec967b9e940d61355c.jpg", fullName: 'Hamster778', status: 'Ho ho, i`m playing word of tanks', location: {city: 'Novosibirsk', country: 'Russia'}},
            {id: 2, followed: true, ico: "https://i.pinimg.com/564x/05/3e/46/053e46fc877d81873c1351650100b3f0.jpg", fullName: 'PrincessDao', status: 'Yeah, i`m killjoy', location: {city: 'Novosibirsk', country: 'Russia'}},
            {id: 3, followed: true, ico: "https://i.pinimg.com/564x/97/a1/6f/97a16f4977904694f6ea5e4c9be271da.jpg", fullName: 'Dew', status: 'goodly', location: {city: 'Novosibirsk', country: 'Russia'}},
            {id: 4, followed: true, ico: "https://i.pinimg.com/564x/a5/b3/a4/a5b3a4517120532da4057942a56bf6c2.jpg", fullName: 'Death', status: 'work to fabric', location: {city: 'Novosibirsk', country: 'Russia'}},
            {id: 5, followed: false, ico: "https://i.pinimg.com/564x/8c/00/eb/8c00eb3d3d28e048df2ec7fb4f2cedcb.jpg", fullName: 'Pyro', status: 'strawberry on ship', location: {city: 'Saint-Petersburg', country: 'Russia'}},
            {id: 6, followed: true, ico: "https://i.pinimg.com/736x/2a/b2/98/2ab298634bdfc5b3ab941f63e947d800.jpg", fullName: 'Sergey', status: 'i`m sergey, it all', location: {city: 'Kurgan', country: 'Russia'}},
        ])
    }
    return <div>
        {
            props.users.map(user => {
                return (
                    <div key={user.id}>
                        <span>
                            <div>
                               <img src={user.ico} className={styles.userPhoto}/>
                            </div>
                            <div>
                                { user.followed
                                    ? <button onClick={props.unfollow.bind(this, user.id)}> Unfollow</button>
                                    : <button onClick={props.follow.bind(this, user.id)}> Follow </button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.fullName}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            })
        }
    </div>

}

export default Users;