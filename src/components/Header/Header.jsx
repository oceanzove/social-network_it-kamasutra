import React from "react"

import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.ico}
                 src='https://i.pinimg.com/564x/37/d2/6f/37d26fb05f6129d673e2c3e9706611c6.jpg'
                 alt=""
            />
        </header>
    )
}

export default Header