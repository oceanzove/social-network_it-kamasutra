import React from "react";
import './App.css';


const App = () => {
    return <div className='app-wrapper'>
        <header className='header'>
            <img src='https://i.pinimg.com/564x/d1/3a/84/d13a842016c5e6d0a147ec341a4afaec.jpg'/>
        </header>
        <nav className='nav'>
            <div>
                <a> Profile</a>
            </div>
            <div>
                <a> Messages</a>
            </div>
            <div>
                <a> News</a>
            </div>
            <div>
                <a> Music </a>
            </div>
            <div>
                <a> Settings</a>
            </div>

        </nav>
        <div className='content'>
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
            <div>
                <div> post 1</div>
                <div> post 2</div>
            </div>
        </div>
    </div>

}

export default App;
