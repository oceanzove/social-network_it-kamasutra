import React from "react";

import classes from '../styles/profile/Profile.module.css'
const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://i.pinimg.com/736x/f0/39/a3/f039a33eea94d6efb65e42c758c190f6.jpg"/>
            </div>
            <div>
                ava + desc
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
            </div>
            <div className='posts'>
                <div className={classes.item}> post 1</div>
                <div className={classes.item}> post 2</div>
            </div>
        </div>
    )
}

export default Profile