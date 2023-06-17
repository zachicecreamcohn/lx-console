import React from "react";
import { useEffect, useState } from "react";
import Window from "../../components/Window/Window";

class WindowManager {
    static windows = [];
    static initializationCount = 0

    // this will hold the state var in the parent component that will mirror the class's windows var.
    // TODO: see if there's another way to deal with this workaround
    static setWindowsStateVar;
    static windowsStateVar;
     


    constructor(){
        WindowManager.initializationCount++
        console.log(`Initialization count : ${WindowManager.initializationCount}`);
        
    }

    storeWindowsStateVar(stateVar, setter){
        WindowManager.windowsStateVar = stateVar;
        WindowManager.setWindowsStateVar = setter;
    }
  
    
    createWindow(title, content=undefined) {
        const window = <Window title={title+WindowManager.initializationCount}>{content}</Window>;
        WindowManager.windows.push(window);

        if (WindowManager.setWindowsStateVar) {
            WindowManager.setWindowsStateVar((prevState) => [...prevState, window])
        }
    }
    
    removeAllWindows(){
        WindowManager.windows=[];
        if (WindowManager.setWindowsStateVar) {
            WindowManager.setWindowsStateVar([]);
        }

    }
    get windows() {
        return WindowManager.windows;
    }



}


export default WindowManager;
