import React from "react";
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (<>
            <div>
                <img alt={null} src="https://i.pinimg.com/736x/f0/39/a3/f039a33eea94d6efb65e42c758c190f6.jpg"/>
            </div>
            <div className={styles.descriptionBlock}>
                ava + desc
            </div>
        </>)
}

export default ProfileInfo