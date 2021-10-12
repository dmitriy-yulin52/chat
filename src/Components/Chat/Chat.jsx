import React, {useState} from 'react';
import styles from '../../App.module.css';
import {FormAddMessage} from '../../Components/FormAddMesasge/FormAddMessage'
import logo from '../../img/icons8-people-working-together-50.png'
import {socket} from '../../socket'
import {Message} from "../Message/Message";
import {v1} from "uuid";

export const Chat = (props) => {
    const {users, messages, roomId, userName, addMessage} = props

    const [messageValue, setMessageValue] = useState('')

    const onSendMessage = (message) => {
        socket.emit('ROOM:NEW_MESSAGE', {
            userName,
            roomId,
            text: message,
        });
        addMessage({userName, text: message});
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
                                    <li key={v1()}>{name}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <div className={styles.wrapChatContent}>
                    <div className={styles.messagesList}>
                        {messages.map((message) => {
                            return (
                                <div key={v1()}>
                                    <Message
                                        message={message}
                                        userName={userName}
                                    />
                                    {/*<div className={message.userName !== userName ? styles.message : styles.message_my}>*/}
                                    {/*    <div>{message.text}</div>*/}
                                    {/*    <span className={styles.message__userName}>{message.userName}</span>*/}
                                    {/*</div>*/}
                                </div>
                            )
                        })}

                    </div>

                    <FormAddMessage onSendMessage={onSendMessage}/>
                </div>
            </div>
        </>
    )
};