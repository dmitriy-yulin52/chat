import React, {useEffect, useReducer} from 'react';
import styles from './App.module.css';
import {JoinBlock} from "./Components/JoinBlock/JoinBlock";
import socket from './socket';
import reducer from './reducer/reducer';
import {Chat} from './Components/Chat/Chat'


function App() {

    const [state, dispatch] = useReducer(reducer, {
        joined: false,
        roomId: null,
        userName: null,
        users: [],
        messages: [],
    });

    const onLogin = (obj) => {
        dispatch({
            type: 'JOINED',
            payload: obj,
        });
        socket.emit('ROOM:JOIN', obj);
    };

    useEffect(()=>{
        socket.on('ROOM:JOINED', (users)=> {
            console.log('new users',users);
        });
    },[]);



    window.socket = socket;
    console.log(state);

    return (
        <>
            <>
                <div className={styles.wrapper}>
                    {!state.joined ? <JoinBlock onLogin={onLogin}/>
                        : <Chat

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
