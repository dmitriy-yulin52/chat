import React, {useState} from 'react'
import styles from "../../App.module.css";
import socket from '../../socket'
import axios from 'axios'

export const JoinBlock = () => {

    const [roomId, setRoomId] = useState('');
    const [userName, setUserName] = useState('');

    const onChangeHandler = (func, value) => {
        func(value);
    };

    const onClickHandler = () => {
        if (!roomId || !userName) {
            alert('пустое значение')
        } else {
            console.log(roomId, userName)
            setRoomId('')
            setUserName('')
        }
        axios.post('/rooms',{
            roomId,
            userName,
        });
    };

    return (
        <>
            <div className={styles.join_Block}>
                <input
                    className={styles.input}
                    type={'text'}
                    placeholder={'Room ID'}
                    value={roomId}
                    onChange={(e) => onChangeHandler(setRoomId, e.currentTarget.value)}
                />
                <input
                    className={styles.input}
                    type={'text'}
                    placeholder={'Ваше имя'}
                    value={userName}
                    onChange={(e) => onChangeHandler(setUserName, e.currentTarget.value)}
                />
                <button
                    className={styles.button}
                    onClick={onClickHandler}
                >Войти
                </button>
            </div>
        </>
    )
}
