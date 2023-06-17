import logo from './logo.svg';
import styles from "./App.css"
import WindowManager from "../src/utils/Windows/WindowManager"
import { useEffect, useState } from 'react';

function App() {

  const [windows, setWindows] = useState([]);

  const WM = new WindowManager();
  WM.storeWindowsStateVar(windows,setWindows);


  function handleBackgroundClick(event) {
    // make sure click is on main-container, not on a child element
    if (event.target.className === "main-container") {
      testNewWindow();
    }
  }


  function testNewWindow() {
    WM.createWindow(
      "Test Title",
      "test content"
    )
  }


  useEffect(() => {
    console.log("Windows have changed");
  }, [windows]);


  return (
    <div className="App">
      <div className='main-container' onClick={handleBackgroundClick}>
     {windows}
      </div>
     
    </div>
  );
}

export default App;
