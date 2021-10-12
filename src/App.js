import React, {useEffect, useReducer} from 'react';
import styles from './App.module.css';
import {JoinBlock} from "./Components/JoinBlock/JoinBlock";
import {socket} from './socket';
import reducer from './reducer/reducer';
import {Chat} from './Components/Chat/Chat'
import axios from 'axios'


function App() {

    const [state, dispatch] = useReducer(reducer, {
        joined: false,
        roomId: null,
        userName: null,
        users: [],
        messages: [],
    });

    const onLogin = async (obj) => {
        dispatch({
            type: 'JOINED',
            payload: obj,
        });
        socket.emit('ROOM:JOIN', obj);
        try {
            const {data} = await axios.get(`/rooms/${obj.roomId}`);
            setUsers(data.users);
        } catch (e) {
            alert('error')
        }
    };


    const setUsers = (users) => {
        dispatch({
            type: 'SET_USERS',
            payload: users,
        });
    };
    const addMessage = (message) => {
        dispatch({
            type: 'NEW_MESSAGE',
            payload: message,
        });
    };

    useEffect(() => {
        // socket.on('ROOM:JOINED', setUsers);
        socket.on('ROOM:SET_USERS', setUsers);
        socket.on('ROOM:NEW_MESSAGE', addMessage)
    }, []);


    window.socket = socket;
    console.log(state);

    return (
        <>
            <>
                <div className={styles.wrapper}>
                    {!state.joined ? <JoinBlock onLogin={onLogin}/>
                        : <Chat
                            {...state}
                            addMessage={addMessage}
                        />}
                </div>
            </>
            <div className={styles.footer}>
                <span>Let's Chat © 2021 Created by Gorky 52</span>
            </div>
        </>
    );
}

export default App;
