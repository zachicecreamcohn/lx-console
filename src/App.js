import logo from './logo.svg';
import styles from "./App.css"
import WindowManager from "../src/utils/Windows/WindowManager"
import { useEffect, useState } from 'react';

function App() {

  const [windows, setWindows] = useState([]);

  const WM = new WindowManager();
  WM.storeWindowsStateVar(windows,setWindows);
  function testNewWindow(event) {
    // use cursor position as x/y
    const cursorX = event.clientX;
    const cursorY = event.clientY;
    WM.createWindow(
      "Test Title",
      cursorX,
      cursorY,
      100,
      200,
      "test content"
    )
  }

  function logWindows() {
    console.log(WM.windows);
  }

  useEffect(() => {
    console.log("Windows have changed");
  }, [windows]);


  return (
    <div className="App">
      <div className='main-container'>

      <div className='test-floating-menu'>
      <button onClick={testNewWindow}>Test</button>
      <button onClick={logWindows}>Log Windows</button>
      <button onClick={WM.removeAllWindows}>Clear</button>
      </div>


     {windows}
      </div>
     
    </div>
  );
}

export default App;
