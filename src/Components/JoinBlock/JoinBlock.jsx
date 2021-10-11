import React, {useState} from 'react'
import styles from "../../App.module.css";
import socket from '../../socket'
import axios from 'axios'

export const JoinBlock = ({onLogin}) => {

    const [roomId, setRoomId] = useState('');
    const [userName, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onChangeHandler = (func, value) => {
        func(value);
    };

    const onClickHandler = async () => {
        if (!roomId || !userName) {
            alert('пустое значение')
        } else {
            setRoomId('')
            setUserName('')
        }
        setIsLoading(true)
        const obj = {
            roomId,
            userName,
        }
        await axios.post('/rooms', obj);
        onLogin(obj)

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
                    disabled={isLoading}
                    className={styles.button}
                    onClick={onClickHandler}
                >
                    {isLoading ? 'Вход...' : 'Войти'}
                </button>
            </div>
        </>
    )
}
