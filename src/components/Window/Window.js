import React from "react";
import WindowManager from "../../utils/Windows/WindowManager";
import styles from "./Window.module.css";

function Window(props) {

    const WM = new WindowManager;

    
    const windowID = props.windowID;
   

    let windowStylesFromProps = {
    }

    if (props.width) {
        windowStylesFromProps.width = props.width;
    }

    if (props.height) {
        windowStylesFromProps.height = props.height;
    }


    const title = props.title;

    function close() {
        WM.removeWindowById(windowID);

    }

    
    return (
        <div className={styles.container} style={windowStylesFromProps}>
            <div className={styles.top}>
                <span className={styles.borderHorizontal +  " " + styles.top}></span>
                
            </div>
            <div className={styles.bodyContainer}>
                <span className={styles.borderVertical + " " + styles.left}></span>
                <div className={styles.body}>
                <div className={styles.titleBar}>
                <div className={styles.title}>{title}</div>
                <div className={styles.buttons}>
                    <button className={styles.closeBtn} onClick={close}></button>
                </div>
                
            </div>
            <div className={styles.content}>{props.children}</div>

                </div>
                <span className={styles.borderVertical + " " + styles.right}></span>


            </div>
            <span className={styles.borderHorizontal + " " + styles.bottom}></span>

            
        </div>


    );
}

export default Window;
