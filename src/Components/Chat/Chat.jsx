import React from 'react';
import styles from '../../App.module.css';
import {FormAddMessage} from '../../Components/FormAddMesasge/FormAddMessage'
import logo from '../../img/icons8-people-working-together-50.png'

export const Chat = (props) => {
    const {users, messages, roomId} = props

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
                                    <li key={name}>{name}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <div className={styles.wrapChatContent}>
                    <div className={styles.messagesList}>
                        {messages.map((message) => {
                            return (
                                <>
                                    <div>{message.text}</div>
                                    <span>{message.userName}</span>
                                </>
                            )
                        })}
                    </div>

                    <div>
                        <FormAddMessage/>
                    </div>
                </div>
            </div>
        </>
    )
};