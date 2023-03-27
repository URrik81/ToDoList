import { useState } from "react";
import styles from './FixedText.module.scss';

const FixedText = (props) => {

    const [selectedText, setSelectedText] = useState('');

    return (
            <div className={styles.FixedTextContainer}>
                     <p className={styles.FixedText}>{props.headText}</p>
                     <b className={styles.BoldText}>{props.boldText}</b>
                     <p className={styles.FixedText}>{props.tailText}</p>
            </div>
    );
}

export default FixedText;