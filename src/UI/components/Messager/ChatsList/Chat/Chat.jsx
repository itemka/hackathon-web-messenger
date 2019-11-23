import React from 'react';
import css from './Chat.module.css'

export class Chat extends React.Component {
    
    render() {
        console.log(this.props.chat)
        let {id,interlocutor,lastMessage}= this.props.chat
        return (
            <div className={css.wraperChat} key={id} >
                <div className={css.Chat}>
                    <div className={css.PhotoUser}>
                        <img src={'http://s1.iconbird.com/ico/2013/12/505/w450h4001385925286User.png'} alt='Name' />
                    </div>

                    <div className={css.LocuterNameData}>
                        <div className={css.MessageDate}>
                            <div className={css.UserName}>{interlocutor.name}</div>
                            <div>{interlocutor.visitDate}</div>
                        </div>
                        <div className={css.LastMessage}>
                            <div className={css.Message}>{lastMessage}</div>
                            <div className ={css.NumberMessage}>2</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Chat
