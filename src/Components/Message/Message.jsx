import React from 'react';
import styles from '../../App.module.css';

export const Message = React.memo((props) => {
    const { message, userName } = props;

    return (
        <div className={message.userName !== userName ? styles.message : styles.message_my}>
            <div className={styles.message__body}>{message.text}</div>
            {message.userName !== userName && <div className={styles.message__userName}>{message.userName}</div>}
        </div>
    )
});