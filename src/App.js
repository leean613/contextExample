import logo from './logo.svg';
import './App.css';
import { useContext, useEffect } from 'react';
import { layoutAction } from './context/actions/layout/layoutAction';
import { GlobalContext } from './context/Provider';


function App() {

  const { layoutState: {
    layout: {
      containerCSS
    } } } = useContext(GlobalContext);
  const { layoutDispatch } = useContext(GlobalContext);

  const writeToGlobal = () => {
    layoutAction.setContainerCSSForLayout("example")(layoutDispatch);
  }

  // useEffect(() => {
  //   layoutAction.setContainerCSSForLayout("css class")(
  //     layoutDispatch
  //   );
  // }, [])

  useEffect(() => {
    console.log('====================================');
    console.log(containerCSS);
    console.log('====================================');
  }, [containerCSS])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={writeToGlobal}></button>
    </div>
  );
}

export default App;
