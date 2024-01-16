import React from 'react';
import styles from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendElement = props.friends.map(
        friend => <Friend src={friend.ico} alt={friend.name} />
    );

    return (
        <div className={styles.friends}>
            {friendElement}
        </div>
    );
};

export default Friends
