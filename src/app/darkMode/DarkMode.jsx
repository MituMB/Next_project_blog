import React, { useContext } from 'react'
import styles from './DarkMode.module.css'
import {ThemeContext, useThemeContext}  from '../../context/ThemeContext';

const DarkMode = () => {
    // const context = useContext(ThemeContext);
    const { toggle,mode } =  useThemeContext();
    return (
      <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🔆</div>
        <div
          className={styles.ball}
          style={mode === "light" ? { left: "2px" } : { right: "2px" }}
        />
      </div>
    );
}

export default DarkMode