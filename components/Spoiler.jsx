'use client';

import styles from './Spoiler.module.css';
import { useState } from 'react';


const Spoiler = ({ children, buttonLabel = "Voir/Cacher" }) => {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
    return (
      <div>
        <button className={isVisible ? styles.spoilerButtonShown : styles.spoilerButtonHidden} onClick={toggleVisibility}>
          {buttonLabel}
        </button>
        {isVisible && (
          <div className={styles.spoilerContainer}>
            {children}
          </div>
        )}
      </div>
    );
  };
  
  export default Spoiler;
