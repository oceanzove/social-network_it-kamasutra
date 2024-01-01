import './App.css';


const App = () => {
    return (<div className="App">
            <ul>
                <li>
                    <p>HTML</p>
                    <input type={"checkbox"}/>
                </li>
                <li>
                    <p>CSS</p>
                    <input type={"checkbox"}/>
                </li>
                <li>
                    <p>JS</p>
                    <input type={"checkbox"}/>
                </li>
                <li>
                    <p>React</p>
                    <input type={"checkbox"}/>
                </li>
            </ul>
        </div>);
}

export default App;
