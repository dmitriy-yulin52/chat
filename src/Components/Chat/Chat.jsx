import React, {useState} from 'react';
import styles from '../../App.module.css';
import {FormAddMessage} from '../../Components/FormAddMesasge/FormAddMessage'
import logo from '../../img/icons8-people-working-together-50.png'
import {socket}from '../../socket'
import {Message} from "../Message/Message";

export const Chat = (props) => {
    const {users, messages, roomId, userName, addMessage} = props

    const [messageValue, setMessageValue] = useState('')

    const onSendMessage = () => {
        socket.emit('ROOM:NEW_MESSAGE', {
            userName,
            roomId,
            text: messageValue,
        });
        addMessage({userName, text: messageValue});
        setMessageValue('');
    };

    return (<>
            <div className={styles.header}><img src={logo} alt={'logo'}/></div>
            <div className={styles.wrapChat}>

                <div className={styles.userList}>
                    <div className={styles.userList__title}>
                        <span>Room:{roomId} </span>
                        <span>Online:{users.length}</span>
                    </div>
                    <div>
                        <ul className={styles.userList__body}>
                            {users.map((name) => {
                                return (
                                    <li key={name + roomId}>{name}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <div className={styles.wrapChatContent}>
                    <div className={styles.messagesList}>
                        <div className={styles.message}>
                            {messages.map((message) => {
                                return (
                                    <div key={message.userName + roomId}>
                                        <div>{message.text}</div>
                                        <span>name</span>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                        <form>
                            <input
                                value={messageValue}
                                onChange={(e) => setMessageValue(e.currentTarget.value)}
                            />
                            <button onClick={onSendMessage} type={'button'}>click</button>
                        </form>
                        {/*<FormAddMessage onSendMessage={onSendMessage}/>*/}
                </div>
            </div>
        </>
    )
};