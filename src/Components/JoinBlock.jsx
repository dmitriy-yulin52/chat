import React from 'react'
import styles from "../App.module.css";
import socket from '../socket'

export const JoinBlock = ()=> {
    return(
        <>
            <div className={styles.join_Block}>
                <input
                    className={styles.input}
                    type={'text'}
                    placeholder={'Room ID'}
                />
                <input
                    className={styles.input}
                    type={'text'}
                    placeholder={'Ваше имя'}
                />
                <button
                    className={styles.button}
                >Войти
                </button>
            </div>
        </>
    )
}
