import './App.css';


const App = () => {
    return <>
            <div>
                first div
                <Header></Header>
            </div>
            <div>
                <Technologies></Technologies>
            </div>
        </>

}

const Header = () => {
    return(
        <div>
            <a href='#s'>Home</a>
            <a href='#s'>News</a>
            <a href='#s'>Messages</a>
        </div>
    )
}

const Technologies = () => {
  return (
      <div>
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
      </div>
  )
}

export default App;
